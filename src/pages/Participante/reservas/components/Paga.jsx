/* eslint-disable no-lone-blocks */
/* eslint-disable no-self-compare */
import React, { useState, useEffect } from "react"
import MaterialTable from 'material-table'
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import { format } from "date-fns";
import { MoreHorizontal, Check } from "lucide-react";
import Swal from 'sweetalert2'
import InatividadePagina from "../../../../middlewares/TerminarSessao";

export default function Paga() {




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
            const response = await axios.get(`http://localhost:3456/participante/meusEventos/historicoPago/${idUtilizador}`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("@Auth:token")}`
                    }
                }
            );
            const newData = response.data;
            setData(newData);

            const responseListaEvento = await axios.get(`http://localhost:3456/participante/meusEventos/historico/bilhete/${idUtilizador}`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("@Auth:token")}`
                    }
                }
            );
            const newDataListaEvento = responseListaEvento.data;
            setDataListaEvento(newDataListaEvento);


            const responseListaItemBilhete = await axios.get(`http://localhost:3456/admin/itemBilhete`);
            const newDataListaItemBilhete = responseListaItemBilhete.data;
            setDataListaItemBilhete(newDataListaItemBilhete);

            const responseUtilizador = await axios.get('http://localhost:3456/admin/listarTodosUsuarios');
            const newDataUtlizador = responseUtilizador.data;
            setUtilizador(newDataUtlizador);


            if (localStorage.getItem("@Auth:email") !== null) {
                setNomeUtilizador(localStorage.getItem("@Auth:email"))
            }
        }

        fetchData();
    }, []);


    console.log("Item bilhetes", dataListaItemBilhete)

    const CellStyle = { fontSize: "12px", width: "200px" }
    const CellRender = { fontSize: "16px" }

    const columns = [
        { title: "Quantidade", field: "quantidade", cellStyle: CellStyle, render: (rowData) => <div style={{ width: "10px", padding: "0", fontSize: CellRender.fontSize }}>{rowData.quantidade}</div> },

        {
            title: "Total", field: "total", cellStyle: CellStyle, render: (rowData) => <div style={{ width: "70px", padding: "0", fontSize: CellRender.fontSize }}>{
                rowData.total
                // format(new Date(rowData.dataInicio), 'dd/MM/yyyy')
            }kz</div>
        },

        {
            title: "Data da compra", field: "pagamento", cellStyle: CellStyle, render: (rowData) => <div style={{ width: "200px", padding: "0", fontSize: CellRender.fontSize }}>{
                format(new Date(rowData.at_create), "dd-MM-yyyy")
                // format(new Date(rowData.dataTermino), 'dd/MM/yyyy')
            }</div>
        },

        {
            title: "Comprovativo", field: "comprovativo", cellStyle: CellStyle, render: (rowData) => <div style={{ width: "100px", padding: "0", fontSize: CellRender.fontSize }}>{
                rowData.foto === null ? "Não enviado" : "Enviado"
                // format(new Date(rowData.dataTermino), 'dd/MM/yyyy')
            }</div>
        },

        // { title: "Banido", field: "banido", cellStyle: CellStyle, render: (rowData) => <div style={{ width: "120px", padding: "0", fontSize: CellRender.fontSize }}>{rowData.banido}</div> },



    ]


    console.log("Evento ==>", dataListaEvento)


    InatividadePagina()

    return (
        <>

            <div className="tabela mt-4 mb-2 pb-2 container">
                <MaterialTable
                    actions={
                        [

                            {
                                icon: () => {
                                    return <Check></Check>
                                },
                                tooltip: "Bilhete pago",
                                onClick: (e, data) => {

                                    //   console.log(data, e.target.value)
                                    console.log("Valores do data", data)

                                    {
                                        utilizador.map(item => {
                                            if (item.email === nomeUtilizador) {

                                                return navigate(`/reservaOnline/participante/reservas/informacaoEvento/${item.id}/${data.item_Bilhte[0].bilhete.id}`)



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
                            actions: "Pago"
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
                    title={"Pagas"}
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
                            background: "#20c997",
                            color: "#fff", fontSize: "14px",
                        }

                    }
                    }
                />

            </div >


        </>
    )

}



