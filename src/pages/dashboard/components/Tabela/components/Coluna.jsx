export const COLUMNS = [
    {
        Header: "Id",
        Footer: "Id",
        accessor: "id"
    },
    {
        Header: "evento",
        Footer: "First_Name",
        accessor: "first_name"
    },
    {
        Header: "Last_Name",
        Footer: "Last_Name",
        accessor: "last_name"
    },
    {
        Header: "Email",
        Footer: "Email",
        accessor: "email"
    },
    {
        Header: "Age",
        Footer: "Age",
        accessor: "age"
    },
    {
        Header: "Phone",
        Footer: "Phone",
        accessor: "phone"
    }
]

export const EventoColuna = [
    {
        Header: "Id",
        accessor: "id"
    },
    {
        Header: "evento",
        accessor: "first_name"
    },
    {
        Header: "Last_Name",
        accessor: "last_name"
    },
    {
        Header: "Email",
        accessor: "email"
    },
    {
        Header: "Age",
        accessor: "age"
    },
    {
        Header: "Phone",
        accessor: "phone"
    }
]

export const GROUPED_COLUMNS = [

    {
        Header: "Id",
        Footer: "Id",
        accessor: "id"
    },
    {
        Header: "Name",
        Footer: "Name",
        columns: [
            {
                Header: "First_Name",
                Footer: "First_Name",
                accessor: "first_name"
            },
            {
                Header: "Last_Name",
                Footer: "Last_Name",
                accessor: "last_name"
            },
        ]

    },
    {
        Header: "Info",
        Footer: "Info",
        columns: [
            {
                Header: "Email",
                Footer: "Email",
                accessor: "email"
            },
            {
                Header: "Age",
                Footer: "Age",
                accessor: "age"
            },
            {
                Header: "Phone",
                Footer: "Phone",
                accessor: "phone"
            }
        ]


    }

]