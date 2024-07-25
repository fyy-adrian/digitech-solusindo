"use client"
import Image from "next/image";
import Button from "../../../fragments/ButtonWidthSame";
import { Fade } from "react-awesome-reveal";


export default function Home({hero}) {

  return (
    <section id="home" className="min-h-[55rem] md:min-h-[67rem] lg:min-h-[95vh] px-7 md:px-14 lg:px-36 xl:px-44 bg-shape-green-md lg:bg-shape-green bg-cover bg-bottom flex flex-col justify-between lg:flex-row lg:gap-24 xl:gap-36 lg:items-center">
      <div className="flex flex-col gap-14 mt-28 lg:mt-56 md:gap-20 lg:gap-36 justify-center items-center overflow-hidden">
        <div className="gap-14 lg:gap-4 flex flex-col text-center lg:text-start">
          <div className="flex flex-col gap-4">
            <Fade direction="down">            
                <h1 className="text-3xl font-extrabold text-white capitalize md:text-5xl">
                  Solusi Terbaik Untuk <span className="text-[#B9F2A1]">Mengelola Bisnis Anda</span>
                </h1>
            </Fade>
            <Fade direction="left">
              <p className="text-white font-light capitalize text-xs md:text-xl lg:text-sm mx-5 md:mx-24 lg:mx-0 lg:mr-36">
                Bersama Kami, Tangani bisnis dan kelola keuangan anda dengan mudah, aman, dan efisien.
              </p>
            </Fade>
          </div>
          <div className="flex justify-center items-center lg:hidden">
            <img className="w-80 md:w-96 lg:hidden" src="images/amico.png" alt="" />
          </div>
          <div className="capitalize flex-col gap-4 flex lg:flex-row lg:mt-14">
            <Fade direction="up">
              <div>
                <Button   
                  withSame={true}>
                    get started
                </Button>
              </div>
              <div>
                <Button 
                  bgColor="bg-transparent"
                  hoverBgColor="hover:bg-transparent" 
                  borderColor="border-[#B9F2A1]"
                  hoverBorderColor="hover:border-[#a3e887]" 
                  textColor="text-white" 
                  withSame="true"
                  hoverTextColor="hover:text-white">
                    explore more
                </Button>
              </div>
            </Fade>
          </div>
        </div>
        <div className="items-center hidden lg:block">
        </div>
      </div>

      <Fade direction="right">
        <div className="items-center lg:block hidden jusitfy-center">
          <img className="w-80 md:w-96 lg:w-[40rem]" src={`${hero.image}`} alt="" />
        </div>
      </Fade>
    </section>
  );
}

