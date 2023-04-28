/* eslint-disable no-self-compare */
import React, { useState, useEffect } from "react"
import MaterialTable from 'material-table'
import { Edit } from "lucide-react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

export default function TabelaTipoBilhete() {

    const navigate = useNavigate()


    const [data, setData] = useState([]);




    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('http://localhost:3456/admin/tipoBilhete/todosTipobilhete');
            const newData = response.data;
            setData(newData);
        }
        fetchData();
    }, []);



    const CellStyle = { fontSize: "12px", width: "800px" }
    const CellRender = { fontSize: "16px" }

    const columns = [
        { title: "Nome", field: "nomeTipoBilhete", cellStyle: CellStyle, render: (rowData) => <div style={{ width: "400px", padding: "0", fontSize: CellRender.fontSize }}>{rowData.nome}</div> },

    ]




    return (
        <>

            <div className="tabela mt-4 mb-4">
                <MaterialTable
                    editable={{
                    
                        onRowUpdate: (newRow, oldRow) => new Promise((resolve, reject) => {

                            console.log(newRow.nomeCategoria)

                            axios.put(`http://localhost:3456/admin/tipoBilhete/atualizarTipobilhete/${newRow.id}`,{
                                nome: newRow.nomeTipoBilhete
                            }
                            ).then(sucesso => {
                                navigate("/reservaOnline/dashboard/admin/bilhete/listar")
                                console.log(`Evento apagado com sucesso. Id: ${newRow.id}`)
                                console.log(sucesso)
                            }).catch(error => {
                                console.log(error)
                            })

                            setTimeout(() => { resolve() }, 1500)

                        }),
                        onRowDelete: (selectedRow) => new Promise((resolve, reject) => {

                            axios.delete(`http://localhost:3456/admin/tipoBilhete/apagarTipoBilhete/${selectedRow.id}`
                            ).then(sucess => {
                                navigate("/reservaOnline/dashboard/admin/bilhete/listar")
                                console.log(`Evento apagado com sucesso. Id: ${selectedRow.id}`)
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
                    title={"Categorias"}
                    columns={columns}
                    data={data}
                    options={{
                        pageSize: 4,
                        pageSizeOptions: [15, 25, 50],
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

