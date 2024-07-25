"use client";

import { BsPencilSquare, BsTrash } from "react-icons/bs";
import { Tooltip, Button } from "@material-tailwind/react";
import { useState } from "react";
import alertConfirm from "@/fragments/Alert/alertConfirm";
import Modal from "@/components/ModalForm";
import axios from "axios";

export default function TableRow({ children, active = false, columns, title = "modal", id }) {
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modalTitle, setModalTitle] = useState("judul modal");
  const [modalColor, setModalColor] = useState("");
  const [open, setOpen] = useState(false);
  const [editData, setEditData] = useState(null);

  const handleOpenModal = async (title, color, isEdit = false) => {
    setModalTitle(title);
    setModalColor(color);
    setLoading(true);
    setOpen((cur) => !cur);
    setLoading(false);

    if (isEdit) {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:8000/api/hero/update/${id}`);
        setEditData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleAlert = (confirm, afterConfirm, onTarget, asyncOperation) => {
    alertConfirm(confirm, afterConfirm, onTarget, asyncOperation);
  };

  const handleDelete = async (id) => {
    try {
      setLoading(true);
      const response = await axios.delete(`http://localhost:8000/api/hero/delete/${id}`);
      console.log(response.data);
    } catch (error) {
      console.error("There was an error deleting the data:", error);
    } finally {
      setLoading(false);
    }
  };

  const toggleCheckbox = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate async operation, replace with actual API call
    setCheckboxChecked((prev) => !prev);
  };

  return (
    <tr>
      <Modal
        handleOpen={() => handleOpenModal(modalTitle, modalColor)}
        data={columns}
        header={modalTitle}
        color={modalColor}
        title={title}
        open={open}
        editData={editData}
        isEdit={editData !== null}
        id={id}
      />
      {children}
      {active ? (
        <td>
          <label>
            <input
              type="checkbox"
              className="checkbox"
              checked={checkboxChecked}
              onChange={() =>
                handleAlert("Yakin ingin mengubah status aktif?", "Status aktif berhasil diganti!", toggleCheckbox, toggleCheckbox)
              }
            />
          </label>
        </td>
      ) : null}
      <td>
        <div className="flex flex-row gap-2 items-center">
          <Tooltip className="bg-[#facc15]" content="edit data" placement="bottom">
            <Button
              onClick={() => handleOpenModal("edit data", "orange", true)}
              className={`px-3 py-2 bg-[#facc15] active:scale-90 ${loading ? " cursor-wait" : ''}`}
            >
              <BsPencilSquare className="text-lg" />
            </Button>
          </Tooltip>
          <Tooltip className="bg-[#ef4444]" content="hapus data" placement="bottom">
            <Button
              onClick={() => handleAlert("Yakin ingin menghapus data ini?", "Data berhasil dihapus!", () => handleDelete(id), () => handleDelete(id))}
              className="px-3 py-2 bg-[#ef4444] active:scale-90"
            >
              <BsTrash className="text-base font-bold" />
            </Button>
          </Tooltip>
        </div>
      </td>
    </tr>
  );
}
