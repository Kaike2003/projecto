/* eslint-disable no-lone-blocks */
/* eslint-disable no-self-compare */
import React, { useState, useEffect } from "react"
import MaterialTable from 'material-table'
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import { format } from "date-fns";
import { Edit, MoreHorizontal } from "lucide-react";
import swal from 'sweetalert';
import InatividadePagina from "../../../../middlewares/TerminarSessao";

export default function MeusBilhetes() {



    const { idUtilizador } = useParams()
    const navigate = useNavigate()

    const [data, setData] = useState([])
    const [dataListaEvento, setDataListaEvento] = useState([])
    const [dataListaBilhete, setDataListaBilhete] = useState([])

    const [utilizador, setUtilizador] = useState([]);
    const [nomeUtilizador, setNomeUtilizador] = useState(() => {
        return ""
    })

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(`http://localhost:3456/participante/meusEventos/historico/bilhete/${idUtilizador}`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("@Auth:token")}`
                    }
                }
            );
            const newData = response.data;
            setData(newData);

            const responseListaEvento = await axios.get(`http://localhost:3456/admin/listarTodosEventos`);
            const newDataListaEvento = responseListaEvento.data;
            setDataListaEvento(newDataListaEvento);


            const responseListaBilhete = await axios.get(`http://localhost:3456/admin/listarTodosBilhetes`);
            const newDataListaBilhete = responseListaBilhete.data;
            setDataListaBilhete(newDataListaBilhete);

            const responseUtilizador = await axios.get('http://localhost:3456/admin/listarTodosUsuarios');
            const newDataUtlizador = responseUtilizador.data;
            setUtilizador(newDataUtlizador);


            if (localStorage.getItem("@Auth:email") !== null) {
                setNomeUtilizador(localStorage.getItem("@Auth:email"))
            }
        }
        fetchData();
    }, []);


    console.log("Data lista bilhete", dataListaBilhete)

    const CellStyle = { fontSize: "12px", width: "300px" }
    const CellRender = { fontSize: "16px" }

    const columns = [

        {
            title: "Nome do  evento", field: "nomeEvento", cellStyle: CellStyle, render: (rowData) => <div style={{ width: "150px", padding: "0", fontSize: CellRender.fontSize }}>{
                dataListaEvento.map(item => {
                    if (item.id === rowData.item_Bilhte[0].bilhete.eventoId) {
                        return item.nome
                    }
                })
            }
            </div>
        },
        {
            title: "Nome bilhete", field: "quantidade", cellStyle: CellStyle, render: (rowData) => <div style={{ width: "120px", padding: "0", fontSize: CellRender.fontSize }}>{

                dataListaBilhete.map(item => {
                    if (item.id === rowData.item_Bilhte[0].bilheteId) {
                        return item.nome
                    }
                })

            }</div>
        },

        {
            title: "Quantidade", field: "dataInicio", cellStyle: CellStyle, render: (rowData) => <div style={{ width: "20px", padding: "0", fontSize: CellRender.fontSize }}>{
                rowData.quantidade
            }</div>
        },

        {
            title: "Total", field: "dataTermino", cellStyle: CellStyle, render: (rowData) => <div style={{ width: "10px", padding: "0", fontSize: CellRender.fontSize }}>{

                `${rowData.total}kz`

            }
            </div>
        },



        // { title: "Banido", field: "banido", cellStyle: CellStyle, render: (rowData) => <div style={{ width: "120px", padding: "0", fontSize: CellRender.fontSize }}>{rowData.banido}</div> },



    ]


    console.log("Lista de eventos ==>", dataListaEvento)
    console.log("Bilhete =>", data)



    InatividadePagina()

    return (
        <>

            <div className="tabela mt-4 mb-2 pb-2 container">
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
                                    console.log("Valores do data", data)




                                    {
                                        utilizador.map((item => {
                                            if (item.email === nomeUtilizador) {


                                                // return swal("Evento selecionado", `Agora poderás ver as informações do evento ${data.nome}`, "success").then(() => {
                                                //     setTimeout(() => {

                                                navigate(`/reservaOnline/participante/reservas/informacaoEvento/${item.id}/${data.item_Bilhte[0].bilhete.id}`)




                                                //     }, 100)
                                                // })




                                            }
                                        }))
                                    }

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
                    title={"Meus eventos"}
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
