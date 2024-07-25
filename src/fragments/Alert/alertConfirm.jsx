import Swal from "sweetalert2";

export default function alertConfirm(confirm, afterConfirm, onTarget, asyncOperation) {
  Swal.fire({
    title: confirm,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Iya!",
    cancelButtonText: "Batal!",
    preConfirm: () => {
      // Disable confirm button and show loading
      Swal.showLoading();
      return asyncOperation();
    },
    allowOutsideClick: () => !Swal.isLoading()
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Berhasil!",
        text: afterConfirm,
        icon: "success"
      });
      if (onTarget) {
        onTarget();
      }
    }
  });
}
