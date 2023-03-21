import React, { useState } from "react"
import MaterialTable from 'material-table'
// import GetAppIcon from '@material-ui/icons/GetApp';
// import AddIcon from '@material-ui/icons/Add';

export default function Tabela() {

  const [tableData, setTableData] = useState(() => {
    return [
      { nome: "Eugenie", apelido: "Pinks", email: "epinks0@pen.io", "age": "193-226-9349", telefone: "0573-0133", genero: "F", preco: "23424353" },
      { nome: "Lynn", apelido: "Matyushonok", email: "lmatyushonok1@artisteer.com", "age": "511-763-4062", telefone: "65162-045", genero: "M", preco: "23424353" },
      { nome: "Jennee", apelido: "Allender", email: "jallender2@lulu.com", "age": "911-621-7563", telefone: "67046-014", genero: "F", preco: "53424353" },
      { nome: "Delmor", apelido: "Broszkiewicz", email: "dbroszkiewicz3@histats.com", "age": "666-874-8830", telefone: "65162-511", genero: "M", preco: "13424353" },
      { nome: "Bernardina", apelido: "Lomansey", email: "blomansey4@ucoz.com", "age": "365-850-9653", telefone: null, genero: "F", preco: "23424353" },
      { nome: "Inglebert", apelido: "Saldler", email: "isaldler5@va.gov", "age": "551-759-0045", telefone: "37808-289", genero: "M", preco: "234353" },
    ]
  })

  const columns = [
    { title: "Nome", field: "nome" },
    { title: "Apelido", field: "apelido" },
    { title: "Genero", field: "genero", lookup: { M: "Masculino", F: "Femenino" } },
    { title: "Telefone", field: "telefone", emptyValue: () => <em>null</em> },
    {
      title: "Preço", field: "preco",
      type: "currency", currencySetting: { currencyCode: "INR", minimumFractionDigits: 0 }
    }
  ]



  return (
    <>

      <div>
        <MaterialTable
          editable={{
            onRowAdd: (newRow) => new Promise((resolve, reject) => {
              setTableData((old) => {
                return old = [...tableData, newRow]
              })
              setTimeout(() => { resolve() }, 1100)
            }),
            onRowUpdate: (newRow, oldRow) => new Promise((resolve, reject) => {

              try {
                const updateTableData = [...tableData]
                updateTableData[oldRow.tableData.id] = newRow
                setTableData((old) => {
                  return old = updateTableData
                })
                setTimeout(() => { resolve() }, 1200)
              } catch (error) {
                alert(error)
              }

            }),
            onRowDelete: (selectedRow) => new Promise((resolve, reject) => {
              try {
                const updateData = [...tableData]
                updateData.splice(selectedRow.tableData.id, 1)
                setTableData((old) => {
                  return old = updateData
                })
                console.log(selectedRow)
                setTimeout(() => { resolve() }, 1500)
              } catch (error) {
                alert(error)
              }
            })
          }}
          actions={
            [{
              icon: () => {
                return ""
              },
              tooltip: "Cliar em mim",
              onClick: (e, data) => console.log(data, e.target.value)
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
              previousTooltip: "Página anteriror"
            },
            toolbar: {
              searchTooltip: "Pesquisar",
              exportTitle: "Exportar tabela",

            }
          }}
          title={"Lista de testes"}
          columns={columns}
          data={tableData}
          options={{
            pageSizeOptions: [15, 25, 50],
            paginationType: "stepped",
            exportButton: true,
            exportAllData: true,
            exportFileName: "Lista teste",
            addRowPosition: "first",
            actionsColumnIndex: -1,
            selection: false,
            rowStyle: { background: "#f8f7fa" },
          }
          }

        />
      </div>



    </>
  )

}