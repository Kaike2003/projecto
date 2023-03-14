import React, { useMemo } from "react"
import { useTable, usePagination, useSortBy, useGlobalFilter } from "react-table"
import MOCK_DATA from "./components/MOCK_DATA.json"
import { COLUMNS, GROUPED_COLUMNS } from "./components/Coluna"
import "./Tabela.css"
import GlobalFilter from "./components/GlobalFilter"

export default function GlobalFilterTable({ nome, coluna }) {

    const columns = useMemo(() => {
        return COLUMNS
    }, [])

    const data = useMemo(() => {
        return MOCK_DATA
    }, [])

    const {
        getTableBodyProps,
        getTableProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        gotoPage,
        pageCount,
        pageSize,
        setPageSize,
        rows,
        prepareRow,
        state,
        setGlobalFilter
    } = useTable({
        columns: coluna,
        data,
    }, useGlobalFilter, useSortBy, usePagination)

    const firstPageRows = rows.slice(0, 10)

    const { pageIndex } = state

    const { globalFilter } = state

    return (
        <>
            <h2 className="primeiroHeader">{nome}</h2>
            <GlobalFilter
                filter={globalFilter}
                setFilter={setGlobalFilter}
            />

            <select
            className="select_tabela"
            name="" id="" value={pageSize}
                onChange={e => setPageSize(Number(e.target.value))}
            >

                {
                    [10, 25, 50].map(pageSize => (
                        <option key={pageSize} value={pageSize}>
                            Mostrar {pageSize}
                        </option>
                    ))
                }

            </select>

            <table {...getTableProps}>

                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map((column) => (
                                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                        {column.render("Header")}
                                        <span>
                                            {column.isSorted ? (column.isSortedDesc ? "🔽" : "🔼") : ""}
                                        </span>
                                    </th>

                                ))
                            }
                        </tr>
                    ))}
                </thead>


                <tbody {...getTableBodyProps}>
                    {
                        page.map(row => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {
                                        row.cells.map((cell) => {
                                            return <td {...cell.getCellProps()}>
                                                {cell.render("Cell")}
                                            </td>
                                        })
                                    }
                                </tr>
                            )
                        })
                    }
                </tbody>

            </table>

            <div className="pagination">
                <span>
                    Página {" "}
                    <strong>
                        {pageIndex + 1} de {pageOptions.length}
                    </strong>
                </span>
                <span>
                    | Ir para página: {" "}
                    <input type="number" name="" id=""
                    placeholder="Nº da página"
                        defaultValue={pageIndex + 1}
                        onChange={e => {
                            const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                            gotoPage(pageNumber)
                        }}
                        style={{ width: "140px", paddingLeft: "5px" }}
                    />
                </span>

                <button
                    onClick={() => gotoPage(0)}
                    disabled={!canPreviousPage}
                >{"<<"}</button>
                <button
                    onClick={() => previousPage()}
                    disabled={!canPreviousPage}
                >Anterior</button>
                <button
                    onClick={() => nextPage()}
                    disabled={!canNextPage}
                >Próxima</button>
                <button
                    onClick={() => gotoPage(pageCount - 1)}
                    disabled={!canNextPage}
                >{">>"}</button>
            </div>
        </>
    )

}