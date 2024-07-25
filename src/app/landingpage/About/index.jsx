import Section from "@/fragments/Section"
import Title from "@/fragments/Title"
import { Fade } from "react-awesome-reveal";
import Button from "../../../fragments/Button";

export default function About(){
    return(
        <>
          <Section id="about">
              <Title
                  title="lorem ipsum dolor sit amet" desc="lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod"
              />
              <Fade direction="up">
                <div className="flex flex-wrap gap-x-16 gap-y-12 text-center justify-center md:justify-between items-center md:px-11 lg:px-0">
                  <div className="flex items-center justify-center">
                    <img
                      src="/img/clients/airbnb.png"
                      className="block object-contain h-12 md:h-14 lg:h-14"
                    ></img>
                  </div>
                  <div className="flex items-center justify-center">
                    <img
                      src="/img/clients/github.png"
                      className="block object-contain h-16 md:h-[4.5rem] lg:h-[4.5rem] opacity-20"
                    ></img>
                  </div>
                  <div className="flex items-center justify-center">
                    <img
                      src="/img/clients/spotify.png"
                      className="block object-contain h-12 md:h-14 lg:h-14"
                    ></img>
                  </div>
                  <div className="flex items-center justify-center">
                    <img
                      src="/img/clients/husky.png"
                      className="block object-contain h-12 md:h-14 lg:h-14"
                    ></img>
                  </div>
                </div>
              </Fade>
          </Section>
          <section className="px-7 md:px-14 lg:px-36 xl:px-44 bg flex bg-[#e7fade] flex-col justify-between lg:flex-row lg:gap-24 xl:gap-36 lg:items-center py-12 items-center">
            <div className="flex flex-col gap-14 md:gap-20 lg:gap-36 justify-center items-center overflow-hidden">
              <div className="gap-14 lg:gap-4 flex flex-col text-center lg:text-start">
                <div className="flex flex-col gap-4">
                  <Fade direction="down">            
                      <h1 className="text-3xl font-extrabold text-slate-800 capitalize md:text-5xl">
                        Crafting Digital Brilliance Explore Our Methodology
                      </h1>
                  </Fade>
                  <Fade direction="left">
                    <p className="text-slate-800 font-light capitalize text-xs md:text-xl lg:text-sm mx-5 md:mx-24 lg:mx-0 lg:mr-36">
                      lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt
                    </p>
                  </Fade>
                </div>
                <div className="flex justify-center items-center lg:hidden">
                  <iframe className="aspect-square" height="250" width="300" src="https://www.youtube.com/embed/uWQ_8CtvzoY" frameBorder="0" allowFullScreen></iframe>
                </div>
                <div className="capitalize flex-col gap-4 flex lg:flex-row lg:mt-14">
                  <Fade direction="up">
                    <div>
                      <Button 
                        withSame={true}>
                          contact us
                      </Button>
                    </div>
                  </Fade>
                </div>
              </div>
            </div>

            <Fade direction="right">
              <div className="items-center lg:block hidden jusitfy-center">
                <iframe className="aspect-square" height="320" width="370" src="https://www.youtube.com/embed/uWQ_8CtvzoY" frameBorder="0" allowFullScreen></iframe>
              </div>
            </Fade>
          </section>
        </>
    )
}