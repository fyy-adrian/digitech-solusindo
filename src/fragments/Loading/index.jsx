import ClipLoader from "react-spinners/ClipLoader";

export default function Loading() {
  return (
    <div class="absolute inset-0 flex items-center justify-center bg-white opacity-50">
      <ClipLoader />
    </div>
  );
}
