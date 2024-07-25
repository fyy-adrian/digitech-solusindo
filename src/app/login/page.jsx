"use client";

import Admin from "@/layouts/Admin";
import TableCrud from "@/components/TableCrud";
import TableRow from "@/components/TableCrud/TableRow";
import { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  const [rows, setRows] = useState([]);
  const columns = ["gambar"];

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/hero');
        setRows(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
      }
    })();
  }, []);

  return (
    <Admin>
      <TableCrud title="hero" columns={columns} active={true}>
        {rows.map((row, index) => (
          <TableRow key={index} row={row} />
        ))}
      </TableCrud>
    </Admin>
  );
}
