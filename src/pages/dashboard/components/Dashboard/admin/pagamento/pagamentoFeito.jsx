/* eslint-disable no-self-compare */
import React, { useState, useEffect } from "react"
import MaterialTable from 'material-table'
import axios from "axios"
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";

export default function PagamentoNaoFeito() {

    const navigate = useNavigate()

    const [data, setData] = useState([]);
    const [dataListaItemBilhete, setDataListaItemBilhete] = useState([]);
    const [dataListarTodasComprasPagas, setDataListarTodasComprasPagas] = useState([]);
    const [dataListarTodosBilhetes, setDataListarTodosBilhetes] = useState([]);
    const [dataListarTodosEventos, setDataListarTodosEventos] = useState([])
    const [dataLIstaOrganizadores, setDataListaOrganizadores] = useState([])




    const size = 28
    let valorApagar = 0


    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('http://localhost:3456/admin/pagamentoEventoFeito');
            const newData = response.data;
            setData(newData);

            const responseListaOrganizadores = await axios.get('http://localhost:3456/admin/usuarios/organizador');
            const newDataListaOrganizadores = responseListaOrganizadores.data;
            setDataListaOrganizadores(newDataListaOrganizadores);

            const responseListaItemBilhete = await axios.get('http://localhost:3456/admin/itemBilhete');
            const newDataListaItemBilhete = responseListaItemBilhete.data;
            setDataListaItemBilhete(newDataListaItemBilhete);

            const responseListarTodasComprasPagas = await axios.get('http://localhost:3456/admin/listarTodasCompras');
            const newDataListarTodasComprasPagas = responseListarTodasComprasPagas.data;
            setDataListarTodasComprasPagas(newDataListarTodasComprasPagas);

            const responseListarTodosBilhetes = await axios.get('http://localhost:3456/admin/listarTodosBilhetes');
            const newDataListarTodosBilhetes = responseListarTodosBilhetes.data;
            setDataListarTodosBilhetes(newDataListarTodosBilhetes);

            const responseListarTodosEventos = await axios.get('http://localhost:3456/admin/listarTodosEventos');
            const newDataListarTodosEventos = responseListarTodosEventos.data;
            setDataListarTodosEventos(newDataListarTodosEventos);




        }
        fetchData();
    }, []);

    console.log("Compras pagas", dataListarTodasComprasPagas)
    console.log("Item bilhete", dataListaItemBilhete)



    const CellStyle = { fontSize: "12px", width: "600px" }
    const CellRender = { fontSize: "16px" }

    const columns = [
        { title: "Nome", field: "nome", cellStyle: CellStyle, render: (rowData) => <div style={{ width: "90px", padding: "0", fontSize: CellRender.fontSize }}>{rowData.nome}</div> },
        {
            title: "Data de termino", field: "dataTermino", cellStyle: CellStyle, render: (rowData) => <div style={{ width: "90px", padding: "0", fontSize: CellRender.fontSize }}>{
                format(new Date(rowData.dataTermino), "dd-MM-yyyy")
            }</div>
        },

        {
            title: "Total", field: "total", cellStyle: CellStyle, render: (rowData) => <div style={{ width: "70px", padding: "0", fontSize: CellRender.fontSize }}>{
                dataListarTodosBilhetes.map(itemBilhetes => {
                    if (rowData.estado === "FINALIZADO" && rowData.id === itemBilhetes.eventoId) {
                        const receberTotal = []
                   
                        return dataListaItemBilhete.map(itemItemBilhete => {
                            if (itemItemBilhete.bilheteId === itemBilhetes.id && rowData.id === itemBilhetes.eventoId) {

                                return dataListarTodasComprasPagas.map(itemComprasPaga => {

                                    if (itemComprasPaga.id === itemItemBilhete.compraId && itemComprasPaga.pagamento === true) {

                                        receberTotal.push(itemComprasPaga.total)
                                        const total = receberTotal.reduce((total, quantidade) => {
                                            return total + quantidade
                                        })

                                        console.log(total)

                                        valorApagar = total


                                    }

                                })
                            }
                        })
                    }
                })

            }
                <div>{valorApagar} kz</div>
            </div>
        },


        {
            title: "IBAN", field: "iban", cellStyle: CellStyle, render: (rowData) => <div style={{ width: "250px", padding: "0", fontSize: CellRender.fontSize }}>{
                dataLIstaOrganizadores.map(item => {
                    if (item.id === rowData.utilizadorId) {
                        return item.iban
                    }
                })
            }</div>
        },

    ]

    return (
        <>

            <div className="tabela mt-3 mb-3">
                <MaterialTable

                    actions={
                        [


                            {
                                icon: () => {
                                    return <Check
                                        size={size}
                                    ></Check>
                                },
                                tooltip: "Pagamento realizado com sucesso",
                                onClick: (e, data) => {


                                    // axios.put(`http://localhost:3456/admin/eventoPago/${data.id}`
                                    // ).then(sucesso => {
                                    //     navigate("/reservaOnline/dashboard/admin/evento/pagamento/feito")
                                    // }).catch(error => {
                                    //     console.log(error)
                                    // })



                                }

                            },


                        ]
                    }




                    localization={{
                        header: {
                            actions: "Pagamento",

                        },
                        body: {
                            emptyDataSourceMessage: "Não há registros a serem exibidos.",
                            addTooltip: "Adicionar",
                            editTooltip: "Editar",
                            editRow: {
                                cancelTooltip: "Cancelar",
                                saveTooltip: "Confirmar",
                                deleteText: "Tem certeza de excluir esta linha?"
                            }
                        },
                        pagination: {
                            labelRowsSelect: "Linhas",
                            nextTooltip: "Próxima página",
                            previousTooltip: "Página anteriror",
                        },
                        toolbar: {
                            searchTooltip: "Pesquisar",
                            exportTitle: "Exportar tabela",

                        }
                    }}
                    title={"Não feito"}
                    columns={columns}
                    data={data}
                    options={{
                        pageSize: 5,
                        pageSizeOptions: [4, 15, 25, 50],
                        paginationType: "stepped",
                        exportButton: true,
                        exportAllData: true,
                        exportFileName: "Lista teste",
                        addRowPosition: "first",
                        actionsColumnIndex: -1,
                        selection: false,
                        rowStyle: (data, index) => index % 2 === 0 ? { background: "#f5f5f5" } : null,
                        headerStyle: {
                            background: "rgb(32, 201, 151)",
                            color: "#fff", fontSize: "14px",
                        }

                    }
                    }
                />

            </div>



        </>
    )

}






















