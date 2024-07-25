"use client";

import Link from "next/link";
import { 
  MdDashboard, 
  MdArrowCircleRight 
} from "react-icons/md";
import { 
  BsHouseDoor, 
  BsPeople, 
  BsGear, 
  BsTags, 
  BsImage, 
  BsChatDots, 
  BsHouseDoorFill, 
  BsPeopleFill, 
  BsGearFill, 
  BsTagsFill, 
  BsImageFill, 
  BsChatDotsFill 
} from "react-icons/bs";

import { Button } from "@material-tailwind/react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import NavDashboard from "@/components/NavDashboard";

const navItems = [
  { title: "home", icon: BsHouseDoor, iconActive: BsHouseDoorFill, href: "/dashboard" },
  { title: "partnership", icon: BsPeople, iconActive: BsPeopleFill, href: "/dashboard/partnership" },
  { title: "service", icon: BsGear, iconActive: BsGearFill, href: "/dashboard/service" },
  { title: "pricing", icon: BsTags, iconActive: BsTagsFill, href: "/dashboard/pricing" },
  { title: "portofolio", icon: BsImage, iconActive: BsImageFill, href: "/dashboard/portofolio" },
  { title: "pesan", icon: BsChatDots, iconActive: BsChatDotsFill, href: "/dashboard/message" },
];

export default function Sidebar({ sidebarOpen, toggleSidebar }) {
  const [delayedOpen, setDelayedOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (sidebarOpen) {
      const timer = setTimeout(() => {
        setDelayedOpen(true);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setDelayedOpen(false);
    }
  }, [sidebarOpen]);

  return (
    <>
      <div className="max-w-full">
        <NavDashboard sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

        <aside
          className={`fixed top-0 h-screen w-[16rem] z-50 bg-white shadow-md -mx-1 lg:-mx-0 lg:shadow transition-all transform ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full lg:w-[5.5rem]"
          } lg:translate-x-0 lg:flex flex-col px-6 py-7 lg:py-7 lg:px-4 z-[999]`}
        >
          <button
            onClick={toggleSidebar}
            className="absolute -right-[12px] top-8 z-[999999999999999999999999999999999999999] hidden lg:block"
          >
            <MdArrowCircleRight
              className={`text-2xl text-[#3ccaf9] ${
                sidebarOpen ? "rotate-180" : "rotate-[360deg]"
              } transition-all duration-100`}
            />
          </button>
          <div
            className={`flex flex-row ${
              sidebarOpen ? "justify-start" : "justify-start"
            } items-center px-3 py-2 lg:py-0`}
          >
            <div className={`hidden lg:flex gap-2 items-center cursor-default`}>
              <img
                src="/favicon/dts.png?v=1"
                alt="DigiTech Logo"
                className="w-8"
              />
              <h1
                className={`uppercase text-2xl text-primary ${
                  delayedOpen ? "block" : "hidden"
                }`}
              >
                digitech
              </h1>
            </div>
            <div className="flex gap-2 items-center lg:hidden font-bold text-gray-600 text-xl uppercase">
              <MdDashboard className="text-2xl" />
              <h1 className="">Dashboard</h1>
            </div>
          </div>
          <Menu title="pages menu" sidebarOpen={sidebarOpen}>
            {navItems.map((item, index) => (
              <List
                sidebarOpen={sidebarOpen}
                delayedOpen={delayedOpen}
                toggleSidebar={toggleSidebar}
                key={index}
                icon={item.icon}
                iconActive={item.iconActive}
                text={item.title}
                href={item.href}
                pathname={pathname}
              />
            ))}
          </Menu>
        </aside>
        <div
          className={`fixed inset-0 bg-black opacity-50 z-40 transition-opacity ${
            sidebarOpen ? "block" : "hidden"
          } lg:hidden`}
          onClick={toggleSidebar}
        ></div>
      </div>
    </>
  );
}

function List({
  icon: Icon,
  iconActive: IconActive,
  text,
  href = "#",
  pathname,
  toggleSidebar,
  sidebarOpen,
  delayedOpen,
}) {
  const isActive = pathname === href;
  return (
    <Link
      className="w-full"
      href={href}
      onClick={
        pathname !== href ? (sidebarOpen ? toggleSidebar : null) : undefined
      }
    >
      <Button
      className={`max-h-10 font-medium text-gray-500 px-3 lg:px-4 py-2 rounded-md ease-in duration-150 flex flex-row items-center gap-2 line-clamp-1 capitalize w-full shadow-none hover:shadow-none ${
        sidebarOpen ? "justify-start" : "justify-start"
      } ${
        isActive
          ? "text-white bg-gradient-to-r from-[#10edea] to-[#3ccaf9] "
          : "text-gray-500 bg-transparent hover:text-gray-600 hover:bg-gray-100 active: ease-in duration-200"
      }`}>
        <Icon className={`text-2xl ${isActive ? "hidden" : "block"}`} />
        <IconActive className={`text-2xl ${isActive ? "block" : "hidden"}`} />
        <span
          className={`text-base ${
            delayedOpen ? "block" : "hidden"
          } transition-all duration-200`}
        >
          {text}
        </span>
      </Button>
    </Link>
  );
}

function Menu({ title, children, sidebarOpen, className }) {
  return (
    <div className={`flex flex-col ${className} justify-center py-7`}>
      <ul className="flex flex-col gap-3">{children}</ul>
    </div>
  );
}
