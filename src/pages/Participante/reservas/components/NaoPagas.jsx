/* eslint-disable no-lone-blocks */
/* eslint-disable no-self-compare */
import React, { useState, useEffect } from "react"
import MaterialTable from 'material-table'
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import { format } from "date-fns";
import { MoreHorizontal } from "lucide-react";
import Swal from 'sweetalert2'

export default function NaoPagas() {

    const { idUtilizador } = useParams()
    const navigate = useNavigate()

    const [data, setData] = useState([])
    const [dataListaEvento, setDataListaEvento] = useState([])
    const [dataListaItemBilhete, setDataListaItemBilhete] = useState([])
    const [utilizador, setUtilizador] = useState([]);
    const [nomeUtilizador, setNomeUtilizador] = useState(() => {
        return ""
    })

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(`http://localhost:3456/participante/meusEventos/historico/${idUtilizador}`);
            const newData = response.data;
            setData(newData);

            const responseListaEvento = await axios.get(`http://localhost:3456/participante/meusEventos/historico/bilhete/${idUtilizador}`);
            const newDataListaEvento = responseListaEvento.data;
            setDataListaEvento(newDataListaEvento);


            const responseListaItemBilhete = await axios.get(`http://localhost:3456/admin/itemBilhete`);
            const newDataListaItemBilhete = responseListaItemBilhete.data;
            setDataListaItemBilhete(newDataListaItemBilhete);

            const responseUtilizador = await axios.get('http://localhost:3456/participante/listarParticipante');
            const newDataUtlizador = responseUtilizador.data;
            setUtilizador(newDataUtlizador);


            if (localStorage.getItem("@Auth:email") !== null) {
                setNomeUtilizador(localStorage.getItem("@Auth:email"))
            }
        }
        fetchData();
    }, []);


    console.log("Item bilhetes", dataListaItemBilhete)

    const CellStyle = { fontSize: "12px", width: "500px" }
    const CellRender = { fontSize: "16px" }

    const columns = [
        { title: "Quantidade", field: "quantidade", cellStyle: CellStyle, render: (rowData) => <div style={{ width: "20px", padding: "0", fontSize: CellRender.fontSize }}>{rowData.quantidade}</div> },

        {
            title: "Total", field: "total", cellStyle: CellStyle, render: (rowData) => <div style={{ width: "200px", padding: "0", fontSize: CellRender.fontSize }}>{
                rowData.total
                // format(new Date(rowData.dataInicio), 'dd/MM/yyyy')
            }kz</div>
        },

        {
            title: "Pagamento", field: "pagamento", cellStyle: CellStyle, render: (rowData) => <div style={{ width: "200px", padding: "0", fontSize: CellRender.fontSize }}>{
                rowData.pagamento === false ? "Não pago" : "Pago"
                // format(new Date(rowData.dataTermino), 'dd/MM/yyyy')
            }</div>
        },

        {
            title: "Comprovativo", field: "comprovativo", cellStyle: CellStyle, render: (rowData) => <div style={{ width: "200px", padding: "0", fontSize: CellRender.fontSize }}>{
                rowData.foto === null ? "Não enviado" : "Comprovativo enviado"
                // format(new Date(rowData.dataTermino), 'dd/MM/yyyy')
            }</div>
        },

        // { title: "Banido", field: "banido", cellStyle: CellStyle, render: (rowData) => <div style={{ width: "120px", padding: "0", fontSize: CellRender.fontSize }}>{rowData.banido}</div> },



    ]


    console.log("Evento ==>", dataListaEvento)




    return (
        <>

            <div className="tabela mt-3 mb-5 pb-4 container">
                <MaterialTable
                    actions={
                        [

                            {
                                icon: () => {
                                    return <MoreHorizontal></MoreHorizontal>
                                },
                                tooltip: "Informações do evento",
                                onClick: (e, data) => {

                                    //   console.log(data, e.target.value)
                                    console.log(data)

                                    {
                                        dataListaItemBilhete.map(item => {
                                            if (item.reservaId === data.id) {

                                                return Swal.fire({
                                                    icon: 'success',
                                                    title: 'Bilhete selecionado',
                                                    showConfirmButton: false,
                                                    timer: 1500
                                                }).then(() => {
                                                    setTimeout(() => {

                                                        navigate(`/reservaOnline/participante/reservas/informacaoEvento/${idUtilizador}/${item.bilheteId}`)


                                                    }, 100)
                                                })



                                            }
                                        })
                                    }



                                    // return swal("Evento selecionado", `Agora poderás ver as informações do evento ${data.nome}`, "success").then(() => {
                                    //     setTimeout(() => {

                                    //         navigate(`/reservaOnline/participante/reservas/informacaoEvento/${item.id}/${data.id}`)


                                    //     }, 100)
                                    // })




                                }

                            },



                        ]
                    }


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
                    title={"Reservas não pagas"}
                    columns={columns}
                    data={dataListaEvento}
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
                            background: "#e51b15",
                            color: "#fff", fontSize: "14px",
                        }

                    }
                    }
                />

            </div >


        </>
    )

}



