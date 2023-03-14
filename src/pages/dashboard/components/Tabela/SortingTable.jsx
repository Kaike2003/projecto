import React, { useMemo } from "react"
import { useTable, useSortBy } from "react-table"
import MOCK_DATA from "./components/MOCK_DATA.json"
import { COLUMNS, GROUPED_COLUMNS } from "./components/Coluna"
import "./Tabela.css"

export default function SortingTable() {

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
        prepareRow
    } = useTable({
        columns,
        data
    }, useSortBy)

    return (
        <>

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