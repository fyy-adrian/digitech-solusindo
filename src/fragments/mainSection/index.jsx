"use client"
import Image from "next/image";
import Button from "../../fragments/ButtonWidthSame";

export default function Main({
    title, 
    home = false,
    desc,
    visual,
    button,
    otherButton,
    textPrimary = "text-white"
}){
    return(
        <section id="home" className={`px-7 md:px-14 lg:px-36 xl:px-44 ${home ? 'bg-shape-green-md lg:bg-shape-green bg-cover bg-bottom min-h-[55rem] md:min-h-[67rem] lg:min-h-[95vh]' : 'bg-[#E7FADE] py-8'} flex flex-col justify-between lg:flex-row lg:gap-24 xl:gap-36 lg:items-center`}>
            <div className={`flex flex-col gap-14 ${home ? 'mt-28 lg:mt-56' : ''} md:gap-20 lg:gap-36 justify-center items-center overflow-hidden`}>
                <div className="gap-14 lg:gap-4 flex flex-col text-center lg:text-start">
                <div className="flex flex-col gap-4">
                <h1 className={`text-3xl font-extrabold ${textPrimary} capitalize md:text-5xl ${home ? '' : 'mr-0 lg:mr-20'}`}>
                    {home ? (
                        <span>
                            {title} <span className='text-[#B9F2A1]'>agency</span> partner
                        </span>
                    ) : (
                        <span>
                            {title}
                        </span>
                    )}
                </h1>
                <p className={`${textPrimary} font-light capitalize text-xs md:text-xl lg:text-sm mx-5 md:mx-24 lg:mx-0 lg:mr-36`}>
                    {desc}
                </p>
                </div>
                <div className="flex justify-center items-center lg:hidden"
                    dangerouslySetInnerHTML={{__html: visual}}
                />
                <div className="capitalize flex-col gap-4 flex lg:flex-row lg:mt-14">
                    <div>
                    <Button 
                        bgColor="bg-[#B9F2A1]"
                        hoverBgColor="hover:bg-[#B9F2A1]" 
                        borderColor="border-[#B9F2A1]"
                        hoverBorderColor="hover:border-[#B9F2A1]" 
                        textColor="text-slate-800"
                        withSame={true}
                        hoverTextColor="hover:text-slate-800">
                        {button}
                    </Button>
                    </div>
                    <div>
                        {otherButton ? (
                            <Button 
                                bgColor="bg-transparent"
                                hoverBgColor="hover:bg-transparent" 
                                borderColor="border-[#B9F2A1]"
                                hoverBorderColor="hover:border-[#B9F2A1]" 
                                textColor="text-white" 
                                withSame="true"
                                hoverTextColor="hover:text-white">
                                explore more
                            </Button>
                        ) : (
                            null
                        )}
                    </div>
                </div>
                </div>
                <div className="items-center hidden lg:block">
                <img className="w-80 md:w-96 lg:w-[40rem]" src="img/amico.png" alt="" />
                </div>
            </div>

            <div className="items-center lg:block hidden jusitfy-center" dangerouslySetInnerHTML={{__html: visual}}
                />
        </section>
    )
}