/* eslint-disable no-self-compare */
import React, { useState, useEffect } from "react"
import MaterialTable from 'material-table'
import { useNavigate } from "react-router-dom"
import axios from "axios"
import InatividadePagina from "../../../../../../middlewares/TerminarSessao"

export default function TabelaOrganizador() {

    const navigate = useNavigate()


    const [data, setData] = useState([]);




    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('http://localhost:3456/admin/usuarios/organizador');
            const newData = response.data;
            setData(newData);
        }
        fetchData();
    }, []);

    console.log("Lista de organizadores", data)



    const CellStyle = { fontSize: "12px", width: "300px" }
    const CellRender = { fontSize: "16px" }

    const columns = [
        { title: "Nome", field: "nomeCategoria", cellStyle: CellStyle, render: (rowData) => <div style={{ width: "240px", padding: "0", fontSize: CellRender.fontSize }}>{rowData.nome}</div> },

        { title: "Email", field: "email", cellStyle: CellStyle, render: (rowData) => <div style={{ width: "120px", padding: "0", fontSize: CellRender.fontSize }}>{rowData.email}</div> },

        { title: "Telefone", field: "telefone", cellStyle: CellStyle, render: (rowData) => <div style={{ width: "120px", padding: "0", fontSize: CellRender.fontSize }}>{rowData.telefone}</div> },

        // { title: "Banido", field: "banido", cellStyle: CellStyle, render: (rowData) => <div style={{ width: "120px", padding: "0", fontSize: CellRender.fontSize }}>{rowData.banido}</div> },



    ]


    InatividadePagina()

    return (
        <>

            <div className="tabela mt-3 mb-3">
                <MaterialTable
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
                    title={"Organizadores"}
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

