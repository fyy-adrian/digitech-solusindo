export default function Button({
    bgColor="bg-[#B9F2A1]",
    hoverBgColor="hover:bg-[#a3e887]",
    borderColor="border-[#B9F2A1]",
    hoverBorderColor="hover:border-[#a3e887]",
    textColor="text-slate-800",
    hoverTextColor="hover:text-slate-800",
    children,
  }) {
  
    return (
      <button className={`btn ${bgColor} px-10 py-2 lg:px-5 rounded-md ${borderColor} ${hoverBgColor} ${hoverTextColor} ${hoverBorderColor} border-[2.2px] ${textColor} capitalize md:px-14 min-w-44 md:min-w-64 lg:min-w-2`}>
        {children}
      </button>
    );
  }