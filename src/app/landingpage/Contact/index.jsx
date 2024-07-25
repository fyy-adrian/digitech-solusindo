import Section from "@/fragments/Section";
import Title from "@/fragments/Title";
import Button from "@/fragments/Button";
import { Fade } from "react-awesome-reveal";

function Input({children, type="text"}){
    return(
        <input
            className="appearance-none block w-full text-slate-800 placeholder:text-slate-500 rounded-full py-3 px-4 mb-3 leading-tight focus:outline-none bg-transparent border-2 border-[#366353]"
            type={type}
            placeholder={children}
        />
    )
}


export default function Contact(){
    return(
        <Section bgColor="bg-[#e7fade]" id="contact">
            <Title
                title="lorem ipsum dolor sit amet" desc=""
            />
            <div className="flex flex-col-reverse gap-10 lg:gap-20 lg:flex-row justify-between items-center lg:px-5">
                <Fade direction="left">
                <form className="w-full max-w-sm"  id="contact">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <Input>
                                First name
                            </Input>
                            {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <Input>
                                Last name
                            </Input>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <Input type="email">
                                Email
                            </Input>
                        </div>
                    </div>
                    <div className="flex justify-items-center items-center mb-6 border-2 p-[.1px] rounded-xl border-[#366353]">
                        <textarea id="comment" rows="4" className="w-full p-3 rounded-xl border-[#366353] text-sm bg-transparent focus:ring-0 text-slate-800 placeholder:text-slate-500 outline-none" placeholder="Write a comment..." required ></textarea>
                    </div>
                    <Button>
                        Contact us
                    </Button>
                </form>
                </Fade>
                <Fade direction="right">
                <div className="py-14 px-6 bg-gradient-card bg-cover bg-left-bottom rounded-md text-white max-w-sm">
                    <ul className="flex flex-col gap-12 flex-wrap max-w-96">
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit</li>
                        <li>Lorem ipsum dolor sit amet@gmail.com</li>
                        <li>08123456789</li>
                        <li>08123456789</li>    
                    </ul>
                </div>
                </Fade>
            </div>
        </Section>
    )
}