import React, { useMemo } from "react"
import { useTable, useSortBy, useGlobalFilter } from "react-table"
import MOCK_DATA from "./components/MOCK_DATA.json"
import { COLUMNS, GROUPED_COLUMNS } from "./components/Coluna"
import "./Tabela.css"
import GlobalFilter from "./components/GlobalFilter"

export default function GlobalFilterTable() {

    const columns = useMemo(() => {
        return COLUMNS
    }, [])

    const data = useMemo(() => {
        return MOCK_DATA
    }, [])

    const {
        getTableBodyProps,
        getTableProps,
        footerGroups,
        headerGroups,
        rows,
        prepareRow,
        state,
        setGlobalFilter
    } = useTable({
        columns,
        data
    }, useGlobalFilter, useSortBy,)

    const { globalFilter } = state

    return (
        <>
            <GlobalFilter
                filter={globalFilter}
                setFilter={setGlobalFilter}
            />
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
                        rows.map(row => {
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
                <tfoot>
                    {
                        footerGroups.map(footerGroups => (
                            <tr {...footerGroups.getFooterGroupProps()}>
                                {footerGroups.headers.map(column => (<td {...column.getFooterProps}>
                                    {column.render("Footer")}
                                </td>))}
                            </tr>
                        ))
                    }
                </tfoot>
            </table>

        </>
    )

}