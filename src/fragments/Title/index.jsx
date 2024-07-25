import { Fade } from "react-awesome-reveal";

export default function Title({title, desc, id}) {
  return (
    <Fade direction="down">
      <div className="flex flex-col gap-2 md:gap-4 text-center overflow-hidden">
        <h1 className="text-3xl font-extrabold text-slate-800 capitalize md:text-4xl">
          {title}
        </h1>
        <p id={id} className="text-slate-800 font-light capitalize text-xs mx-5 md:text-sm lg:text-sm mb-12 lg:mb-4">
          {desc}
        </p>
      </div>
    </Fade>
  );
}
