import React from 'react'
import DataTable from 'react-data-table-component'

const columns = [
  {
    name: 'Transaction ID',
    selector: (row) => row.id,
  },
  {
    name: 'Source',
    selector: (row) => row.source,
  },
  {
    name: 'Customer name',
    selector: (row) => row.name,
  },
  {
    name: 'Customer email',
    selector: (row) => row.email,
  },
  {
    name: 'Amount',
    selector: (row) => row.amount,
  },
  {
    name: 'Request date',
    selector: (row) => row.date,
  },
  {
    name: 'Status',
    selector: (row) => row.status,
  },
]

const data = [
  {
    id: 'GB124QWERTY12346',
    source: 'GTB',
    name: 'Mike Owen',
    email: '0223337281',
    amount: '$230.00',
    date: '24.08.2021',
    status: 'Pending',
  },
  {
    id: 'CB328ABCEDF23416',
    source: 'UBA',
    name: 'Steve OShassy',
    email: '0982764829',
    amount: '$480.00',
    date: '0982764829',
    status: 'Successful',
  },
  {
    id: 'GB124QWERTY12346',
    source: 'GTB',
    name: 'Mike Owen',
    email: '0223337281',
    amount: '$230.00',
    date: '24.08.2021',
    status: 'Pending',
  },
  {
    id: 'GB124QWERTY12346',
    source: 'GTB',
    name: 'Mike Owen',
    email: '0223337281',
    amount: '$230.00',
    date: '24.08.2021',
    status: 'Pending',
  },
]

const Table = () => {
  return <DataTable columns={columns} data={data} pagination />
}

export default Table
