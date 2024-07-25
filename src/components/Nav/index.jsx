import React from "react";
import { useState, useEffect } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { FiPhoneCall, FiAlignLeft, FiX } from "react-icons/fi";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

export default function StickyNavbar() {
  const [openNav, setOpenNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navItems = [
    { text: "Home", link: "home" },
    { text: "About us", link: "about" },
    { text: "Services", link: "services" },
    { text: "Pricing", link: "pricing" },
    { text: "Portofolio", link: "portofolio" },
    { text: "contact us", link: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      let currentSection = "";

      navItems.forEach((item) => {
        const section = document.getElementById(item.link);
        if (section) {
          const sectionTop = section.offsetTop; // Offset for navbar height
          const sectionHeight = section.offsetHeight;
          if (
            currentScrollY >= sectionTop &&
            currentScrollY < sectionTop + sectionHeight
          ) {
            currentSection = item.link;
          }
        }
      });

      setActiveSection(currentSection);

      if (currentScrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navItems]);

  useEffect(() => {
    const handleResize = () => window.innerWidth >= 960 && setOpenNav(false);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navList = (
    <ul className="mt-5 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {navItems.map((item, index) => (
        <Typography
          key={index}
          as="li"
          variant="small"
          color="white"
          onClick={() => setOpenNav(false)}
          className={`p-1 font- font-[600] text-white capitalize ${
            item.text === "contact us" ? "hidden lg:block" : "border-b-2 border-transparent"
          } ${
            activeSection === item.link && item.text != "contact us"
              ? "text-[#5eead4] border-[#5eead4]"
              : ""
          } 
          transition-all ease-in duration-200`}
        >
          <Link
            href={`/#${item.link}`}
            className={`flex items-center text-base font-poppins ${
              item.text === "contact us"
                ? "bg-[#B9F2A1] px-3 py-2 rounded-md font-bold ml-8 xl:ml-14 text-black hover:bg-[#a3e887] active:scale-95 ease-in-out duration-150"
                : ""
            }`}
          >
            {item.text}
          </Link>
        </Typography>
      ))}
    </ul>
  );

  return (
    <nav className={`fixed w-full overflow-hidden top-0 z-[999999] h-max rounded-none border-0 px-8 md:px-24 lg:px-36 xl:px-44 py-5 ${
      isScrolled
        ? "bg-[#366353] bg-opacity-90 shadow-lg transition-all duration-500 backdrop-opacity-20"
        : "bg-opacity-0 backdrop-opacity-0 shadow-none"
    }`}>
      <Navbar className="bg-opacity-0 backdrop-opacity-0 shadow-none p-0 border-none">
        <Fade direction="down">
          <div className="flex items-center justify-between text-white flex-row-reverse lg:flex-row flex-wrap">
            <a className="flex lg:hidden cursor-pointer">
              <FiPhoneCall className="text-2xl hover:scale-125 transition-all ease-in-out duration-200" />
            </a>
            <Typography
              as="a"
              href="#"
              className="text-3xl cursor-default font-extrabold uppercase font-poppins"
            >
              <span>dts</span>
            </Typography>

            <div className="flex items-center ">
              <div className="hidden lg:block">{navList}</div>
              <IconButton
                variant="text"
                className="text-2xl -ml-3 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden hover:scale-125 transition-all ease-in-out duration-200"
                ripple={false}
                onClick={() => {
                  setIsScrolled(true);
                  setOpenNav(!openNav);
                }}
              >
                {openNav ? <FiX /> : <FiAlignLeft />}
              </IconButton>
            </div>
          </div>
        </Fade>
        <Collapse open={openNav}>{navList}</Collapse>
      </Navbar>
    </nav>
  );
}
