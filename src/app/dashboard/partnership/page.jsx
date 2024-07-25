"use client"

import Admin from "@/layouts/Admin";
import TableCrud from "@/components/TableCrud"
import TableRow from "@/components/TableCrud/TableRow"

export default function App() {

  const columns = ["gambar", "judul"];
  const rows = ["gambar", "digitech ori"]

  return (
    <Admin>
      <TableCrud title="partnership" columns={columns} active={true}>
        {rows.map((row, index) => (
          <TableRow key={index} row={row} />
        ))}
      </TableCrud>
    </Admin>
  );
}
