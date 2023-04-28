/* eslint-disable no-self-compare */
import React, { useState, useEffect } from "react"
import MaterialTable from 'material-table'
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import { format } from "date-fns";
import { ImagePlus } from "lucide-react";
import swal from 'sweetalert';


export default function TabelaPalestrante() {
    const navigate = useNavigate()
    const { idEvento, idUtilizador } = useParams()


    const [dataEvento, setDataEvento] = useState([]);
    const [nomeUtilizador, setNomeUtilizador] = useState(() => {
        return ""
    })

    console.log("Id do utilizador", idEvento)


    useEffect(() => {

        async function fetchData() {



            const responseUtilizador = await axios.get(`http://localhost:3456/organizador/evento/detalhe/editar/${idEvento}/palestrante`);
            const newDataUtilizador = responseUtilizador.data;
            setDataEvento(newDataUtilizador);


            if (localStorage.getItem("@Auth:email") !== null) {
                setNomeUtilizador(localStorage.getItem("@Auth:email"))

            }


        }
        fetchData();

    }, []);

    console.log("Lista de palestrante de um evento", dataEvento)




    const CellStyle = { fontSize: "12px", width: "200px" }
    const CellRender = { fontSize: "16px" }

    const columns = [
        { title: "Nome", field: "nome", cellStyle: CellStyle, render: (rowData) => <div style={{ width: "250px", padding: "0", fontSize: CellRender.fontSize }}>{rowData.nome}</div> },

        {
            title: "Blog", field: "blog", cellStyle: CellStyle, render: (rowData) => <div style={{ width: "200px", padding: "0", fontSize: CellRender.fontSize }}>{
                rowData.blog
            }</div>
        },
        {
            title: "Imagem", field: "blog", cellStyle: CellStyle, render: (rowData) => <div style={{
                width: "100px",
                padding: "0",
                fontSize: CellRender.fontSize,
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                overflow: "hidden",
            }}>{
                    rowData.foto
                }</div>
        }






    ]




    return (
        <>

            <div className="tabela mt-3 mb-3 container">
                <MaterialTable
                    editable={{

                        onRowUpdate: (selectedRow) => new Promise((resolve, reject) => {

                            axios.put(`http://localhost:3456/organizador/evento/detalhe/editar/${idEvento}/palestrante/${selectedRow.id}`, {
                                nome: selectedRow.nome,
                                blog: selectedRow.blog
                            }
                            ).then(sucesso => {
                                console.log(sucesso)

                                swal("Palestrante editado", `O palestrante ${selectedRow.nome} foi editado com sucesso.`, "success");
                                // navigate("/reservaOnline/dashboard/admin/categoria/listar")
                                // console.log(`Evento apagado com sucesso. Id: ${selectedRow.id}`)
                            }).catch(error => {
                                console.log(error)
                            })

                            setTimeout(() => { resolve() }, 1500)

                        }),

                        onRowDelete: (selectedRow) => new Promise((resolve, reject) => {

                            axios.delete(`http://localhost:3456/organizador/evento/detalhe/editar/${idEvento}/palestrante/${selectedRow.id}`
                            ).then(sucesso => {
                                console.log(sucesso)


                                swal("Palestrante excluido", `O palestrante ${selectedRow.nome} foi excluido.`, "info");
                                // navigate("/reservaOnline/dashboard/admin/categoria/listar")
                                // console.log(`Evento apagado com sucesso. Id: ${selectedRow.id}`)
                            }).catch(error => {
                                console.log(error)
                            })

                            setTimeout(() => { resolve() }, 1500)

                        })



                    }}

                    actions={
                        [
                            {
                                icon: () => {
                                    return <ImagePlus></ImagePlus>
                                },
                                tooltip: "Adicionar foto",
                                onClick: (e, data) => {

                                    //   console.log(data, e.target.value)
                                    // console.log(data)



                                        // swal("Palestrante selecionado", `Adicione foto ao palestrante ${data.nome}`, "success");

                                        navigate(`/reservaOnline/dashboard/organizador/evento/listar/${idUtilizador}/editar/${idEvento}/palestrante/foto/${data.id}`)

                                        // console.log(`/reservaOnline/dashboard/organizador/evento/listar/${idUtilizador}/editar/${idEvento}/palestrante/foto/${data.id}`)

                                        // /evento/listar/${idUtilizador}/editar/${idEvento}/bilhete/editar/invalido


                                }

                            },

                            // {
                            //     icon: () => {
                            //         return <></>
                            //     },
                            //     tooltip: "Editar",
                            //     onClick: (e, data) => {

                            //         //   console.log(data, e.target.value)
                            //         console.log(data)


                            //         setTimeout(() => {


                            //             axios.put(`http://localhost:3456/admin/eventos/banido/${data.id}`
                            //             ).then(sucesso => {
                            //                 navigate("/reservaOnline/dashboard/admin/evento/banidos")
                            //                 console.log(`Evento banido com sucesso. Id: ${data.id}`)
                            //                 console.log(sucesso)
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
                            editTooltip: "Editar informações",
                            deleteTooltip: "Excluir palestrante",
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
                    title={"Palestrantes"}
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
                            background: "#0DCAF0",
                            color: "#fff", fontSize: "14px",
                        }

                    }
                    }
                />

            </div>



        </>
    )

}

