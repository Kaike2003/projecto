/* eslint-disable no-self-compare */
import React, { useState, useEffect } from "react"
import MaterialTable from 'material-table'
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import { format } from "date-fns";
import { Edit } from "lucide-react";
import Swal from 'sweetalert2';


export default function TabelaOrador() {
    const navigate = useNavigate()
    const { idEvento, idUtilizador } = useParams()


    const [dataEvento, setDataEvento] = useState([]);
    const [emailUtilizador, setEmailUtilizador] = useState(() => {
        return ""
    })

    // console.log("Id do utilizador", idEvento)


    useEffect(() => {

        async function fetchData() {



            const response = await axios.get(`http://localhost:3456/organizador/evento/detalhe/editar/${idEvento}/orador`);
            const newData = response.data;
            setDataEvento(newData);

            if (localStorage.getItem("@Auth:email") !== null) {
                setEmailUtilizador(localStorage.getItem("@Auth:email"))

            }


        }
        fetchData();

    }, []);


    const CellStyle = { fontSize: "12px", width: "800px" }
    const CellRender = { fontSize: "16px" }

    const columns = [
        { title: "Nome", field: "nome", cellStyle: CellStyle, render: (rowData) => <div style={{ width: "450px", padding: "0", fontSize: CellRender.fontSize }}>{rowData.nome}</div> }
    ]




    return (
        <>

            <div className="tabela mt-2 container">
                <MaterialTable
                    editable={{


                        onRowUpdate: (newRow, oldRow) => new Promise((resolve, reject) => {

                            // console.log(newRow.nome)
                            // console.log(newRow)
                            // console.log()


                            if (!newRow.nome) {

                                Swal.fire(
                                    {
                                        icon: "info",
                                        title: "Nome do orador é obrigátorio",
                                        showConfirmButton: false,
                                        timer: 4500
                                    })

                                setTimeout(() => { resolve() }, 1500)



                            } else {

                                axios.put(`http://localhost:3456/organizador/evento/detalhe/editar/${idEvento}/orador/${newRow.id}`, {
                                    nome: newRow.nome
                                }
                                ).then(sucesso => {

                                    Swal.fire({
                                        icon: "success",
                                        title: "Orador editado"
                                    })

                                    setTimeout(() => { resolve() }, 1500)

                                    // console.log(`Evento apagado com sucesso. Id: ${newRow.id}`)
                                    // console.log(sucesso)
                                }).catch(error => {
                                    console.log(error)
                                })


                            }




                        }),


                        onRowDelete: (selectedRow) => new Promise((resolve, reject) => {



                            axios.delete(`http://localhost:3456/organizador/evento/detalhe/editar/${idEvento}/orador/${selectedRow.id}`
                            ).then(sucesso => {

                                Swal.fire(
                                    {
                                        icon: "info",
                                        title: "Orador excluido",
                                        showConfirmButton: false,
                                        timer: 4500
                                    })

                            }).catch(error => {
                                console.log(error)
                            })

                            setTimeout(() => { resolve() }, 1500)

                        })





                    }}




                    localization={{
                        header: {
                            actions: "Ações"
                        },
                        body: {
                            emptyDataSourceMessage: "Não há registros a serem exibidos.",
                            addTooltip: "Adicionar",
                            editTooltip: "Editar",
                            deleteTooltip: "Excluir",
                            editRow: {
                                cancelTooltip: "Cancelar",
                                saveTooltip: "Confirmar",
                                deleteText: "Tem certeza de excluir esta linha?",

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
                    title={"Oradores"}
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

