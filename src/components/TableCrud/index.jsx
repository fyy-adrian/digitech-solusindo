"use client";

import { useState } from "react";
import { Tooltip, Button } from "@material-tailwind/react";
import { MdAdd } from "react-icons/md";
import Modal from "@/components/ModalForm";

export default function Table({ title, columns, children, active = false }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modalTitle, setModalTitle] = useState("judul modal");
  const [modalColor, setModalColor] = useState("");
  const [checkboxChecked, setCheckboxChecked] = useState(false);

  const handleOpenModal = (title, color) => {
    setModalTitle(title);
    setModalColor(color);
    setOpen((cur) => !cur);
  };

  return (
    <>
      <Modal
        handleOpen={() => handleOpenModal(modalTitle, modalColor)}
        data={columns}
        header={modalTitle}
        color={modalColor}
        title={title}
        open={open}
      />
      <div className="flex flex-row justify-between items-center text-pretty md:text-xl uppercase">
        <h1 className="font-medium">list {title}</h1>

        <Tooltip
          className="bg-light-blue-500"
          content="tambah data"
          placement="left"
        >
          <Button
            onClick={() => handleOpenModal("tambah data", "blue")}
            className={`px-3 py-2 lg:px-4 lg:py-3 bg-light-blue-500 active:scale-90 text-xl lg:text-2xl`}
            disabled={loading}
          >
            <MdAdd className="text-white" />
          </Button>
        </Tooltip>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead className="capitalize">
            <tr>
              {columns.map((column, index) => (
                <th key={index}>{column}</th>
              ))}
              {active ? (
                <th>
                  <span>aktif</span>
                </th>
              ) : null}
              <th>aksi</th>
            </tr>
          </thead>
          <tbody>
            {children}
          </tbody>
        </table>
      </div>
    </>
  );
}
