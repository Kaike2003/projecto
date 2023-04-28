/* eslint-disable no-self-compare */
import React, { useState, useEffect } from "react"
import MaterialTable from 'material-table'
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { Check, Slash, MoreHorizontal } from "lucide-react"
import { format } from "date-fns";
import Swal from 'sweetalert2'


export default function TabelaEventoAespera() {

    const navigate = useNavigate()


    const [data, setData] = useState([]);



    useEffect(() => {



        async function fetchData() {
            const response = await axios.get('http://localhost:3456/admin/eventos/eventosEspera', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("@Auth:token")}`
                }
            });
            const newData = response.data;
            setData(newData);

        }


        fetchData();
    }, []);

    console.log("Lista de de eventos a espera", data)




    const CellStyle = { fontSize: "12px", width: "280px" }
    const CellRender = { fontSize: "16px" }

    const columns = [

        { title: "Nome", field: "nomeEventoPublicado", cellStyle: CellStyle, render: (rowData) => <div style={{ width: "140px", padding: "0", fontSize: CellRender.fontSize }}>{rowData.nome}</div> },

        {
            title: "Data de inicio", field: "dataInicio", cellStyle: CellStyle, render: (rowData) => <div style={{ width: "100px", padding: "0", fontSize: CellRender.fontSize }}>{
                format(new Date(rowData.dataInicio), "dd-MM-yyyy")
            }</div>
        },

        {
            title: "Data de termino", field: "dataTermino", cellStyle: CellStyle, render: (rowData) => <div style={{ width: "120px", padding: "0", fontSize: CellRender.fontSize }}>{
                format(new Date(rowData.dataTermino), "dd-MM-yyyy")
            }</div>
        },

        // { title: "Banido", field: "banido", cellStyle: CellStyle, render: (rowData) => <div style={{ width: "120px", padding: "0", fontSize: CellRender.fontSize }}>{rowData.banido}</div> },



    ]




    return (
        <>

            <div className="tabela mt-3 mb-3">
                <MaterialTable
                    editable={{
                    }}


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
                                    console.log("Id do utilizador", data.utilizadorId)



                                    // Swal.fire({
                                    //     icon: 'success',
                                    //     title: 'Evento selecionado',
                                    //     html: `Agora poderás ver as informações do evento ${data.nome} `,
                                    //     showConfirmButton: false,
                                    //     timer: 2000
                                    // }).then(() => {
                                    //     setTimeout(() => {

                                    navigate(`/reservaOnline/dashboard/admin/evento/informacoes/${data.utilizadorId}/${data.id}`)


                                    //     }, 400)
                                    // }).catch((error) => {
                                    //     Swal.fire({
                                    //         icon: 'warning',
                                    //         title: 'Erro',
                                    //         html: `Agora poderás ver as informações do evento ${data.nome} `,
                                    //         showConfirmButton: false,
                                    //         timer: 2000
                                    //     })
                                    // })


                                }

                            },

                            // {
                            //     icon: () => {
                            //         return <Check></Check>
                            //     },
                            //     tooltip: "Aprovar evento",
                            //     onClick: (e, data) => {

                            //         //   console.log(data, e.target.value)
                            //         console.log(data)


                            //         setTimeout(() => {


                            //             axios.put(`http://localhost:3456/admin/eventos/aprovarEventos/${data.id}`
                            //             ).then(sucesso => {
                            //                 navigate("/reservaOnline/dashboard/admin/evento/publicado")
                            //                 // console.log(`Evento apagado com sucesso. Id: ${data.id}`)
                            //                 // console.log(sucesso)
                            //             }).catch(error => {
                            //                 console.log(error)
                            //             })

                            //         }, 1540)



                            //     }

                            // },

                            // {
                            //     icon: () => {
                            //         return <Slash></Slash>
                            //     },
                            //     tooltip: "Banir evento",
                            //     onClick: (e, data) => {

                            //         //   console.log(data, e.target.value)
                            //         console.log(data)


                            //         setTimeout(() => {


                            //             axios.put(`http://localhost:3456/admin/eventos/banido/${data.id}`
                            //             ).then(sucesso => {
                            //                 navigate("/reservaOnline/dashboard/admin/evento/banidos")
                            //                 // console.log(`Evento banido com sucesso. Id: ${data.id}`)
                            //                 // console.log(sucesso)
                            //             }).catch(error => {
                            //                 console.log(error)
                            //             })

                            //         }, 1540)



                            //     }

                            // }



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
                    title={"Eventos a espera de serem aprovados"}
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

