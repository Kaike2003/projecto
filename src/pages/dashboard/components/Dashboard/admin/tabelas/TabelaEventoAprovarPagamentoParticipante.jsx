/* eslint-disable no-self-compare */
import React, { useState, useEffect } from "react"
import MaterialTable from 'material-table'
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import Swal from 'sweetalert2'
import { MoreHorizontal, Check, Slash } from "lucide-react"
import { format } from "date-fns"

export default function TabelaEventoAprovarPagamentoParticipante() {

    const navigate = useNavigate()

    const [data, setData] = useState([]);
    const [dataListaParticipante, setDataListaParticipante] = useState([]);

    const size = 22

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('http://localhost:3456/admin/listarPagamentos');
            const newData = response.data;
            setData(newData);

            const responseListaParticipante = await axios.get('http://localhost:3456/admin/usuarios/participante');
            const newDataListaParticpante = responseListaParticipante.data;
            setDataListaParticipante(newDataListaParticpante);


        }
        fetchData();
    }, []);

    console.log("Lista de de eventos a que foram banidos", data)
    console.log("Lista de participante", dataListaParticipante)




    const CellStyle = { fontSize: "12px", width: "2px" }
    const CellRender = { fontSize: "16px" }

    const columns = [

        {
            title: "Nome", field: "nome", cellStyle: CellStyle, render: (rowData) => <div style={{ width: "190px", padding: "0", fontSize: CellRender.fontSize }}>{
                // rowData.utilizadorId

                dataListaParticipante.map(item => {
                    if (item.id === rowData.utilizadorId) {
                        return <span>{item.nome}</span>
                    } else {
                        // return <span
                        //     style={{
                        //         color: "red"
                        //     }}
                        // >Erro utilizador</span>
                    }
                })


            }</div>
        },


        {
            title: "Quantidade e Total ", field: "quantidade", cellStyle: CellStyle, render: (rowData) => <div
                style={{
                    width: "150px", padding: "0", fontSize: CellRender.fontSize
                }}>

                <span>{rowData.quantidade}</span>
                <span style={{
                    width: "4px",
                    visibility: "hidden"
                }}>---</span>
                <span ></span>
                <span style={{
                    width: "4px",
                    visibility: "hidden"
                }}>---</span>
                <span>{rowData.total} kz</span>

            </div>
        },



        {
            title: "Comprovativo", field: "foto", cellStyle: CellStyle, render: (rowData) => <div style={{ width: "90px", padding: "0", fontSize: CellRender.fontSize }}>{
                rowData.foto === null ? "Não enviado" : "Enviado"}</div>
        },



        {
            title: "Data", field: "data", cellStyle: CellStyle, render: (rowData) => <div style={{ width: "90px", padding: "0", fontSize: CellRender.fontSize }}>{

                format(new Date(rowData.at_create), "dd-MM-yyyy")

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
                                    return <MoreHorizontal
                                        size={size}
                                    ></MoreHorizontal>
                                },
                                tooltip: "Informações da compra",
                                onClick: (e, data) => {

                                    //   console.log(data, e.target.value)
                                    console.log(data)
                                    console.log("Id do utilizador", data.utilizadorId)


                                    // Swal.fire({
                                    //     icon: 'success',
                                    //     title: 'Evento selecionado',
                                    //     html: `Agora poderás ver as informações do evento ${data.nome} `,
                                    //     showConfirmButton: false,
                                    //     timer: 2000
                                    // }).then(() => {
                                    //     setTimeout(() => {

                                    navigate(`/reservaOnline/dashboard/admin/evento/informacaoCompra/${data.id}`)


                                    //     }, 400)
                                    // }).catch((error) => {
                                    //     Swal.fire({
                                    //         icon: 'warning',
                                    //         title: 'Erro',
                                    //         html: `${error}`,
                                    //         showConfirmButton: false,
                                    //         timer: 2000
                                    //     })
                                    // })



                                }

                            },

                            {
                                icon: () => {
                                    return <Slash
                                        size={size}
                                    ></Slash>

                                },
                                tooltip: "Cancelar compra",
                                onClick: (e, data) => {

                                    //   console.log(data, e.target.value)
                                    console.log(data)
                                    console.log("Id do utilizador", data.utilizadorId)


                                    axios.delete(`http://localhost:3456/admin/cancelarPagamento/${data.id}/${data.utilizadorId}`)
                                        .then((sucesso) => {
                                            // console.log(sucesso.data)

                                            navigate("/reservaOnline/dashboard/admin/evento/aprovarPagamento")

                                        }).catch((error) => {
                                            console.log(error)


                                        })


                                }

                            },


                        ]
                    }




                    editable={{
                    }}



                    localization={{
                        header: {
                            actions: "Ações"
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
                    title={"Aprovar compras"}
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
                            background: "#ffc107",
                            color: "#fff", fontSize: "14px",
                        }

                    }
                    }
                />

            </div>



        </>
    )

}

