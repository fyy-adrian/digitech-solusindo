import { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  Input,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Spinner,
} from "@material-tailwind/react";
import { CKEditor } from "ckeditor4-react";
import axios from "axios";

function InputForm({
  title,
  label,
  handleFileChange,
  previewImage,
  fileName,
  value,
  handleChange,
  handleEditorChange,
}) {
  return (
    <>
      {label === "gambar" || label === "image" ? (
        <div className="flex flex-col gap-2 mx-1">
          <label className="text-sm font-bold text-gray-500 tracking-wide">
            Tambah gambar {title}
          </label>
          <div className="flex items-center justify-center w-full">
            <label
              className={`cursor-pointer flex flex-col rounded-lg border-2 w-full h-60 ${
                previewImage ? "border-gray-800" : "px-5 py-6 border-gray-400"
              } group text-center border-gray-400`}
            >
              <div className="h-full w-full text-center flex flex-col justify-center items-center object-cover object-center overflow-hidden">
                {previewImage ? (
                  <img
                    src={previewImage}
                    alt="Preview"
                    className="h-full w-full object-cover object-center rounded-md"
                  />
                ) : (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-10 h-10 text-blue-400 group-hover:text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    <p className="pointer-none text-gray-500">
                      <span className="text-sm">Seret dan taruh</span> gambar
                      disini
                      <br /> atau{" "}
                      <span className="text-blue-600 hover:underline">
                        pilih gambar
                      </span>{" "}
                      dari komputermu
                    </p>
                  </>
                )}
              </div>
              <input
                type="file"
                className="hidden"
                name="image"
                onChange={handleFileChange}
              />
            </label>
          </div>
        </div>
      ) : label === "description" || label === "deskripsi" ? (
        <>
          <label className="text-sm font-bold text-gray-500 tracking-wide -mb-2 capitalize">
            {label} {title}
          </label>
          <CKEditor initData={value} onChange={handleEditorChange} />
        </>
      ) : label === "id" ? null : (
        <>
          <label className="text-sm font-bold text-gray-500 tracking-wide -mb-2 capitalize">
            {label} {title}
          </label>
          <input
            className="bg-transparent appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-400"
            type="text"
            placeholder={label}
            value={value}
            onChange={handleChange}
          />
        </>
      )}
    </>
  );
}

export default function Modal({
  header,
  open,
  handleOpen,
  title,
  data,
  color,
  editData,
  isEdit,
  id,
}) {
  const [previewImage, setPreviewImage] = useState(null);
  const [inputValues, setInputValues] = useState({});
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (editData) {
      setInputValues(editData);
      if (editData.image) {
        setPreviewImage(editData.image);
      }
    }
  }, [editData]);

  const handleFileChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
        setFile(file);
        setInputValues((prevValues) => ({
          ...prevValues,
          [e.target.name]: file.name, // Update inputValues with file name
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (label) => (e) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [label]: e.target.value,
    }));
  };

  const handleEditorChange = (event) => {
    const data = event.editor.getData();
    setInputValues((prevValues) => ({
      ...prevValues,
      description: data,
    }));
  };

  const resetInputs = () => {
    setPreviewImage(null);
    setInputValues({});
  };

  const handleClose = () => {
    handleOpen();
    setTimeout(() => {
      resetInputs();
    }, 1000)
  };

  const nonImageInputs = data.filter(
    (item) =>
      item !== "gambar" &&
      item !== "image" &&
      item !== "description" &&
      item !== "deskripsi"
  );
  const imageInputs = data.filter(
    (item) => item === "gambar" || item === "image"
  );
  const descriptionInputs = data.filter(
    (item) => item === "description" || item === "deskripsi"
  );

  const dialogSize = descriptionInputs.length > 0 ? "xl" : "sm";

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    // Create form data
    const formData = new FormData();
    Object.keys(inputValues).forEach((key) => {
      formData.append(key, inputValues[key]);
    });
    if (file) {
      formData.append("image", file);
    }

    try {
      const url = isEdit
        ? `http://localhost:8000/api/hero/update/${id}`
        : "http://localhost:8000/api/hero/create";
      const method = isEdit ? "put" : "post";
      const response = await axios({
        method,
        url,
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });
      console.log(response.data);
      handleClose();
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <Dialog
      size={dialogSize}
      open={open}
      handler={handleClose}
      className={`dialog max-h-[95vh] overflow-y-scroll`}
    >
      <DialogHeader>{header}</DialogHeader>
      <DialogBody>
        <form
          onSubmit={handleSubmit}
          method="post"
          encType="multipart/form-data"
          className={`flex justify-between items-start gap-3`}
        >
          <div className="flex flex-col gap-3 w-full">
            {nonImageInputs.map((item, index) => (
              <InputForm
                key={index}
                label={item}
                title={title}
                value={inputValues[item] || ""}
                handleChange={handleChange(item)}
              />
            ))}

            <div className="block md:hidden">
              {descriptionInputs.length > 0 && (
                <div className="flex flex-col gap-3">
                  {descriptionInputs.map((item, index) => (
                    <InputForm
                      key={`description-${index}`}
                      label={item}
                      title={title}
                      value={inputValues.description || ""}
                      handleEditorChange={handleEditorChange}
                    />
                  ))}
                </div>
              )}
            </div>
            {imageInputs.map((item, index) => (
              <InputForm
                key={`gambar-${index}`}
                label={item}
                title={title}
                handleFileChange={handleFileChange}
                previewImage={previewImage}
              />
            ))}
          </div>

          {descriptionInputs.length > 0 && (
            <div className="flex-col gap-3 hidden md:flex">
              {descriptionInputs.map((item, index) => (
                <InputForm
                  key={`description-${index}`}
                  label={item}
                  title={title}
                  value={inputValues.description || ""}
                  handleEditorChange={handleEditorChange}
                />
              ))}
            </div>
          )}
        </form>
      </DialogBody>
      <DialogFooter className={`gap-3`}>
        <Button variant="text" color="red" onClick={handleClose} className="mr-1">
          <span>Batal</span>
        </Button>
        <Button variant="gradient" color={color} onClick={handleSubmit}>
          {loading ? (
            <Spinner className="h-4 w-4 text-white" />
          ) : (
            <span>Simpan</span>
          )}
        </Button>
      </DialogFooter>
    </Dialog>
  );
}
