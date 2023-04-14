/* eslint-disable no-self-compare */
import React, { useState, useEffect } from "react"
import MaterialTable from 'material-table'
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import { format } from "date-fns";
import { Edit } from "lucide-react";
import swal from 'sweetalert';


export default function TabelaOrador() {
    const navigate = useNavigate()
    const { idEvento, idUtilizador } = useParams()


    const [dataEvento, setDataEvento] = useState([]);
    const [nomeUtilizador, setNomeUtilizador] = useState(() => {
        return ""
    })

    console.log("Id do utilizador", idEvento)


    useEffect(() => {

        async function fetchData() {



            const responseUtilizador = await axios.get(`http://localhost:3456/organizador/evento/detalhe/editar/${idEvento}/orador`);
            const newDataUtilizador = responseUtilizador.data;
            setDataEvento(newDataUtilizador);

            if (localStorage.getItem("@Auth:email") !== null) {
                setNomeUtilizador(localStorage.getItem("@Auth:email"))

            }


        }
        fetchData();

    }, []);

    console.log("Lista de bilhetes de um evento", dataEvento)




    const CellStyle = { fontSize: "12px", width: "800px" }
    const CellRender = { fontSize: "16px" }

    const columns = [
        { title: "Nome", field: "nome", cellStyle: CellStyle, render: (rowData) => <div style={{ width: "450px", padding: "0", fontSize: CellRender.fontSize }}>{rowData.nome}</div> }
    ]




    return (
        <>

            <div className="tabela mt-3 mb-3 container">
                <MaterialTable
                    editable={{


                        onRowUpdate: (newRow, oldRow) => new Promise((resolve, reject) => {

                            console.log(newRow.nome)
                            console.log(newRow)

                            // console.log(oldRow)

                            axios.put(`http://localhost:3456/organizador/evento/detalhe/editar/${idEvento}/orador/${newRow.id}`, {
                                nome: newRow.nome
                            }
                            ).then(sucesso => {

                                swal("Orador editado", `O orador ${newRow.nome} foi editado com sucesso.`, "success");
                                // navigate("/reservaOnline/dashboard/admin/categoria/listar")

                                console.log(`Evento apagado com sucesso. Id: ${newRow.id}`)
                                console.log(sucesso)
                            }).catch(error => {
                                console.log(error)
                            })

                            setTimeout(() => { resolve() }, 1500)

                        }),


                        onRowDelete: (selectedRow) => new Promise((resolve, reject) => {

                            axios.delete(`http://localhost:3456/organizador/evento/detalhe/editar/${idEvento}/orador/${selectedRow.id}`
                            ).then(sucesso => {

                                swal("Orador excluido", `O orador ${selectedRow.nome} foi excluido com sucesso.`, "info");

                                console.log(sucesso)
                                // navigate("/reservaOnline/dashboard/admin/categoria/listar")
                                // console.log(`Evento apagado com sucesso. Id: ${selectedRow.id}`)
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
                    title={"Oradores"}
                    columns={columns}
                    data={dataEvento}
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
                            background: "sandybrown",
                            color: "#fff", fontSize: "14px",
                        }

                    }
                    }
                />

            </div>



        </>
    )

}

