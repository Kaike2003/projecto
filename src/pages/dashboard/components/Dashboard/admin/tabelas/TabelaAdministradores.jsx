/* eslint-disable no-self-compare */
import React, { useState, useEffect } from "react"
import MaterialTable from 'material-table'
import { useNavigate } from "react-router-dom"
import axios from "axios"
import InatividadePagina from "../../../../../../middlewares/TerminarSessao"

export default function TabelaAdministradores() {

    const navigate = useNavigate()


    const [data, setData] = useState([]);




    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('http://localhost:3456/admin/administradores/listaAdministradores');
            const newData = response.data;
            setData(newData);
            console.log(response.data)
        }
        fetchData();
    }, []);



    const CellStyle = { fontSize: "12px", width: "600px" }
    const CellRender = { fontSize: "16px" }

    const columns = [
        { title: "Email", field: "nomeCategoria", cellStyle: CellStyle, render: (rowData) => <div style={{ width: "500px", padding: "0", fontSize: CellRender.fontSize }}>{rowData.email}</div> },
    ]


    InatividadePagina()

    return (
        <>

            <div className="tabela mt-3 mb-3">
                <MaterialTable
                    editable={{

                        // onRowUpdate: (newRow, oldRow) => new Promise((resolve, reject) => {

                        //     console.log(newRow.nomeCategoria)
                        //     // console.log(oldRow)

                        //     axios.put(`http://localhost:3456/admin/categoria/atualizarCategoria/${newRow.id}`,{
                        //         nome: newRow.nomeCategoria
                        //     }
                        //     ).then(sucesso => {
                        //         navigate("/reservaOnline/dashboard/admin/categoria/listar")
                        //         console.log(`Evento apagado com sucesso. Id: ${newRow.id}`)
                        //         console.log(sucesso)
                        //     }).catch(error => {
                        //         console.log(error)
                        //     })

                        //     setTimeout(() => { resolve() }, 1500)

                        // }),
                        // onRowDelete: (selectedRow) => new Promise((resolve, reject) => {

                        //     axios.delete(`http://localhost:3456/admin/categoria/apagarCategoria/${selectedRow.id}`
                        //     ).then(sucess => {
                        //         navigate("/reservaOnline/dashboard/admin/categoria/listar")
                        //         console.log(`Evento apagado com sucesso. Id: ${selectedRow.id}`)
                        //     }).catch(error => {
                        //         console.log(error)
                        //     })

                        //     setTimeout(() => { resolve() }, 1500)

                        // })
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
                    title={"Administradores"}
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
                            background: "#7b7c7c",
                            color: "#fff", fontSize: "14px",
                        }

                    }
                    }
                />

            </div>



        </>
    )

}

