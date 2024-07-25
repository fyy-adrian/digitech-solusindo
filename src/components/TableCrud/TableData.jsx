"use client";

export default function TableData({ image = false, row }) {
  return (
    
    <td>
      {image ? (
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle border h-12 w-12">
              <img src={row} alt="gambar" />
            </div>
          </div>
        </div>
      ) : (
        row
      )}
    </td>
  );
}
