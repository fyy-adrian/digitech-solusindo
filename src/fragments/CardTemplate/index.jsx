import { Fade } from "react-awesome-reveal";
import { LuArrowDown } from "react-icons/lu";

export default function CardTemplate({ children, id }) {
    return (
        <div className="w-full flex flex-wrap gap-x-8 gap-y-12 justify-center md:justify-between lg:px-9">
            <Fade direction="up">
                {children}
            </Fade>
            <div className="flex justify-center items-center w-full">
                <button className="border border-md border-[#366353] py-2 px-5 rounded-full cursor-pointer active:scale-90 ease-in-out duration-200">show more</button>
            </div>
        </div>
    );
}