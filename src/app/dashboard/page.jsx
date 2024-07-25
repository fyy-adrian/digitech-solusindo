"use client";

import Admin from "@/layouts/Admin";
import TableCrud from "@/components/TableCrud";
import TableRow from "@/components/TableCrud/TableRow";
import TableData from "@/components/TableCrud/TableData";
import { useState, useEffect } from "react";
import axios from "axios";
import { Spinner } from "@material-tailwind/react";

export default function App() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true); // Track loading state
  const columns = ["image"];

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/hero');
        setRows(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false); 
      }
    })();
  }, []);

  return (
    <Admin>
      <TableCrud title="hero" columns={columns} active={true}>
        {loading ? (
          // Display spinner when loading
          <tr>
            <th colSpan={4}>
              <div class="animate-pulse">
                <div class="h-4 bg-gray-300 mt-3 mb-6 rounded"></div>
                <div class="h-4 bg-gray-200 mb-6 rounded"></div>
                <div class="h-4 bg-gray-300 mb-6 rounded"></div>
                <div class="h-4 bg-gray-200 mb-6 rounded"></div>
                <div class="h-4 bg-gray-300 mb-6 rounded"></div>
              </div>
            </th>
          </tr>
        ) : (
          // Display table rows when data is loaded
          rows.map((row, index) => (
            <TableRow key={index} active={true} columns={columns} title="hero" id={row.id}>
              <TableData row={row.id} columns={columns} title="hero" />
              <TableData image={true} row={row.image} columns={columns} title="hero" />
            </TableRow>
          ))
        )}
      </TableCrud>
    </Admin>
  );
}
