"use client"

import Sidebar from "@/components/Sidebar"
import { useState } from "react"

export default function App({children, loading=false}){
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return(
    <div className={`bg-gray-50 h-screen overflow-y-scroll text-gray-600 border ${loading ? 'cursor-wait' : ''}`}>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <div className={`mt-[6.5rem] lg:mt-0 py-8 lg:py-7 px-7 md:px-20 lg:px-12 flex flex-col gap-5 transition-all duration-300 ${sidebarOpen ? 'lg:ml-[16rem]' : 'lg:ml-[5.5rem]'}`}>
        {children}
      </div>
    </div>
  )
}
