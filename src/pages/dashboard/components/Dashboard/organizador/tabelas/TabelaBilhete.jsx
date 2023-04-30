/* eslint-disable no-self-compare */
import React, { useState, useEffect } from "react"
import MaterialTable from 'material-table'
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import { format } from "date-fns";
import { Edit, Trash } from "lucide-react";
import Swal from "sweetalert2";


export default function TabelaBilhete() {
    const navigate = useNavigate()
    const { idEvento, idUtilizador } = useParams()


    const [dataEvento, setDataEvento] = useState([]);
    const [nomeUtilizador, setNomeUtilizador] = useState(() => {
        return ""
    })

    console.log("Id do evento", idEvento)


    useEffect(() => {

        async function fetchData() {



            const responseUtilizador = await axios.get(`http://localhost:3456/organizador/evento/detalhe/editar/${idEvento}/bilhete`);
            const newDataUtilizador = responseUtilizador.data;
            setDataEvento(newDataUtilizador);


            if (localStorage.getItem("@Auth:email") !== null) {
                setNomeUtilizador(localStorage.getItem("@Auth:email"))

            }


        }
        fetchData();

    }, []);

    console.log("Lista de bilhetes de um evento", dataEvento)




    const CellStyle = { fontSize: "12px", width: "500px" }
    const CellRender = { fontSize: "16px" }

    const columns = [
        { title: "Nome", field: "nome", cellStyle: CellStyle, render: (rowData) => <div style={{ width: "250px", padding: "0", fontSize: CellRender.fontSize }}>{rowData.nome}</div> },

        {
            title: "Data inicio", field: "dataInicio", cellStyle: CellStyle, render: (rowData) => <div style={{ width: "200px", padding: "0", fontSize: CellRender.fontSize }}>{
                format(new Date(rowData.dataInicio), 'dd/MM/yyyy')
            }</div>
        },

        {
            title: "Data termino", field: "dataTermino", cellStyle: CellStyle, render: (rowData) => <div style={{ width: "200px", padding: "0", fontSize: CellRender.fontSize }}>{
                format(new Date(rowData.dataTermino), 'dd/MM/yyyy')}</div>
        },

        // { title: "Banido", field: "banido", cellStyle: CellStyle, render: (rowData) => <div style={{ width: "120px", padding: "0", fontSize: CellRender.fontSize }}>{rowData.banido}</div> },



    ]




    return (
        <>

            <div className="tabela mt-3 mb-3 container">
                <MaterialTable


                    // editable={{


                    //     onRowDelete: (selectedRow) => new Promise((resolve, reject) => {

                    //         axios.delete(`http://localhost:3456/organizador/evento/detalhe/editar/${idEvento}/bilhete/${selectedRow.id}`
                    //         ).then(sucesso => {
                    //             console.log(sucesso)
                    //             // navigate("/reservaOnline/dashboard/admin/categoria/listar")
                    //             // console.log(`Evento apagado com sucesso. Id: ${selectedRow.id}`)
                    //         }).catch(error => {
                    //             console.log(error)
                    //         })

                    //         setTimeout(() => { resolve() }, 1500)

                    //     })



                    // }}

                    actions={
                        [
                            {
                                icon: () => {
                                    return <Edit></Edit>
                                },
                                tooltip: "Editar",
                                onClick: (e, data) => {

                                    //   console.log(data, e.target.value)
                                    // console.log(data)


                                    navigate(`/reservaOnline/dashboard/organizador/evento/listar/${idUtilizador}/editar/${idEvento}/bilhete/editar/${data.id}`)


                                }

                            },

                            {
                                icon: () => {
                                    return <Trash></Trash>
                                },
                                tooltip: "Excluir",
                                onClick: (e, data) => {

                                    //   console.log(data, e.target.value)
                                    console.log(data)




                                    axios.delete(`http://localhost:3456/organizador/evento/detalhe/editar/${idEvento}/bilhete/${data.id}`
                                    ).then(sucesso => {
                                        
                                        Swal.fire({
                                            icon: "success",
                                            html: "Bilhete excluido",
                                            timer: 2500
                                        })

                                    }).catch(error => {
                                        console.log(error)
                                    })




                                }

                            }



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
                    title={"Bilhetes"}
                    columns={columns}
                    data={dataEvento}
                    options={{
                        pageSize: 4,
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

