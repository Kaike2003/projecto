/* eslint-disable no-self-compare */
import React, { useState, useEffect } from "react"
import MaterialTable from 'material-table'
import { Edit } from "lucide-react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

export default function TabelaBilhete() {

  const navigate = useNavigate()

  const [tableData, setTableData] = useState(() => {
    return []
  })



  const url = "http://localhost:3001/"

  async function CarregarDados() {
    await axios.get(url + "bilhete").then(response =>
      setTableData(response.data)
    )
  }

  useEffect(() => {
    CarregarDados()
  }, [])


  const CellStyle = { fontSize: "12px", width: "100px" }
  const CellRender = { fontSize: "16px" }

  const columns = [
    { title: "Nome", field: "nomeBilhete", cellStyle: CellStyle, render: (rowData) => <div style={{ width: "120px", padding: "0", fontSize: CellRender.fontSize }}>{rowData.nomeBilhete}</div> },

    { title: "Tipo", field: "tipoBilhete", cellStyle: CellStyle, render: (rowData) => <div style={{ width: "10px", padding: "0", fontSize: CellRender.fontSize }}>{rowData.tipoBilhete}</div> },
    { title: "Quantidade", field: "quantidadeBilhete", cellStyle: CellStyle, render: (rowData) => <div style={{ width: "10px", padding: "0", fontSize: CellRender.fontSize }}>{rowData.quantidadeBilhete}</div> },
    { title: "DInicio", field: "dataInicioBilhete", cellStyle: CellStyle, render: (rowData) => <div style={{ width: "120px", padding: "0", fontSize: CellRender.fontSize }}>{rowData.dataInicioBilhete}</div> },
    { title: "DTermino", field: "dataTerminoBilhete", cellStyle: CellStyle, render: (rowData) => <div style={{ width: "120px", padding: "0", fontSize: CellRender.fontSize }}>{rowData.dataTerminoBilhete}</div> }

  ]




  return (
    <>

      <div className="tabela">
        <MaterialTable
          editable={{
            // onRowAdd: (newRow) => new Promise((resolve, reject) => {

            //   // axios.post(url + "eventos", {
            //   //   // id: values.id,
            //   //   // nomeEvento: values.nomeEvento,
            //   //   // nomeCategoria: values.nomeCategoria,
            //   //   // nomeTextearea: values.nomeTextearea,
            //   //   // dataInicio: values.dataInicio,
            //   //   // dataTermino: values.dataTermino,
            //   //   // horaInicio: values.horaInicio,
            //   //   // horaTermino: values.horaTermino,
            //   //   // nomeBairro: values.nomeBairro,
            //   //   // nomeLocal: values.nomeBairro,
            //   //   // nomeMunicipio: values.nomeMunicipio
            //   // }).then((response) => {
            //   //   setTimeout(() => {
            //   //     console.log(response)
            //   //     navigate('/organizador/evento/listar')

            //   //   }, 1200)
            //   // }).catch((error) => {
            //   //   console.log(error)
            //   // })



            //   // setTableData((old) => {
            //   //   return old = [...tableData, newRow]
            //   // })
            //   setTimeout(() => { resolve() }, 1100)
            // }),
            // onRowUpdate: (newRow, oldRow) => new Promise((resolve, reject) => {

            //   try {
            //     const updateTableData = [...tableData]
            //     updateTableData[oldRow.tableData.id] = newRow
            //     setTableData((old) => {
            //       return old = updateTableData
            //     })
            //     setTimeout(() => { resolve() }, 1200)
            //   } catch (error) {
            //     alert(error)
            //   }

            // }),
            onRowDelete: (selectedRow) => new Promise((resolve, reject) => {

              // console.log(selectedRow.id)

              // const eliminar = tableData.filter(ct => ct.id !== selectedRow.id)
              // console.log("Item ilimnado: ", eliminar)
              // const updateData = [...eliminar]
              // updateData.splice(selectedRow.tableData.id, 1)
              // setTableData((old) => {
              //   return old = updateData
              // })
              // console.log(selectedRow)

              axios.delete(url + "orador/" + selectedRow.id,
              ).then(sucess => {
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
                  return <Edit></Edit>
                },
                tooltip: "Editar",
                onClick: (e, data) => {
                  // console.log(data, e.target.value)

                  let valor
                  const id = tableData.find((value) => {
                    if (value.id === data.id) {
                      valor = value.id
                      // console.log(typeof (value.id))
                    }
                  })

                  navigate(`/organizador/detalhe/editar/${valor}`)





                }

              }]
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
          data={tableData}
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
              background: "#e51b15",
              color: "#fff", fontSize: "14px",
            }

          }
          }
        />

      </div>



    </>
  )

}

