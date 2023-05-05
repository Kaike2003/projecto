/* eslint-disable no-self-compare */
import React, { useState, useEffect } from "react"
import MaterialTable from 'material-table'
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import { format } from "date-fns";
import { ImagePlus, Trash } from "lucide-react";
import Swal from 'sweetalert2';


export default function TabelaPalestrante() {
    const navigate = useNavigate()
    const { idEvento, idUtilizador } = useParams()


    const [dataEvento, setDataEvento] = useState([]);
    const [dataListaOrganizador, setDataListaOrganizador] = useState([]);

    const [emailUtilizador, setEmailUtilizador] = useState(() => {
        return ""
    })



    useEffect(() => {

        async function fetchData() {



            const response = await axios.get(`http://localhost:3456/organizador/evento/detalhe/editar/${idEvento}/palestrante`);
            const newData = response.data;
            setDataEvento(newData);

            const responseListaOrganizador = await axios.get(`http://localhost:3456/admin/usuarios/organizador`)
            const newDataListaOrganizador = responseListaOrganizador.data
            setDataListaOrganizador(newDataListaOrganizador)



            if (localStorage.getItem("@Auth:email") !== null) {
                setEmailUtilizador(localStorage.getItem("@Auth:email"))

            }


        }
        fetchData();

    }, []);





    const CellStyle = { fontSize: "14px", width: "200px" }
    const CellRender = { fontSize: "16px" }

    const columns = [
        { title: "Nome", field: "nome", cellStyle: CellStyle, render: (rowData) => <div style={{ width: "250px", padding: "0", fontSize: CellRender.fontSize }}>{rowData.nome}</div> },

        {
            title: "Blog", field: "blog", cellStyle: CellStyle, render: (rowData) => <div style={{ width: "200px", padding: "0", fontSize: CellRender.fontSize }}>{
                rowData.blog
            }</div>
        },
        {
            title: "Imagem", field: "", cellStyle: CellStyle, render: (rowData) => <div style={{
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

            <div className="tabela mt-2  container">
                <MaterialTable
                    editable={{



                        onRowUpdate: (selectedRow) => new Promise((resolve, reject) => {

                            if (!selectedRow.nome) {
                                Swal.fire(
                                    {
                                        icon: "info",
                                        title: "Nome do palestrante é obrigátorio",
                                        showConfirmButton: false,
                                        timer: 4500
                                    })

                                setTimeout(() => { resolve() }, 1500)
                            } else {

                                axios.put(`http://localhost:3456/organizador/evento/detalhe/editar/${idEvento}/palestrante/${selectedRow.id}`, {
                                    nome: selectedRow.nome,
                                    blog: selectedRow.blog
                                }
                                ).then(sucesso => {
                                    // console.log(sucesso)

                                    Swal.fire({
                                        icon: "success",
                                        title: "Palestrante editado",
                                        timer: 2500
                                    })

                                }).catch(error => {
                                    console.log(error)
                                })

                                setTimeout(() => { resolve() }, 1500)

                            }



                        }),


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


                                    navigate(`/reservaOnline/dashboard/organizador/evento/listar/${idUtilizador}/editar/${idEvento}/palestrante/foto/${data.id}`)



                                }

                            },

                            {
                                icon: () => {
                                    return <Trash></Trash>
                                },
                                tooltip: "Excluir",
                                onClick: (e, data) => {

                                    //   console.log(data, e.target.value)
                                    // console.log(data)



                                    Swal.fire({
                                        icon: "warning",
                                        title: 'Deseja excluir esse palestrante ?',
                                        showCancelButton: true,
                                        confirmButtonText: 'Sim',
                                        cancelButtonText: 'Não',
                                        cancelButtonColor: "red",
                                        confirmButtonColor: "rgb(32, 201, 151)"
                                    }).then((result) => {
                                        if (result.isConfirmed) {


                                            axios.delete(`http://localhost:3456/organizador/evento/detalhe/editar/${idEvento}/palestrante/${data.id}`
                                            ).then(sucesso => {


                                                Swal.fire({
                                                    icon: "info",
                                                    title: "Palestrante excluido",
                                                    showConfirmButton: false,
                                                    timer: 2500

                                                }).then(() => {
                                                    return dataListaOrganizador.map(item => {

                                                        if (item.email === emailUtilizador) {
                                                            return navigate(`/reservaOnline/dashboard/organizador/evento/listar/${item.id}/editar/${idEvento}/palestrante/listar`)
                                                        }

                                                    })
                                                })







                                            }).catch(error => {
                                                console.error(error.response.data);
                                                console.error(error.response.status);
                                                console.error(error.response.headers);

                                                Swal.fire({
                                                    icon: "info",
                                                    title: error.response.data,

                                                })

                                            })


                                        }
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

