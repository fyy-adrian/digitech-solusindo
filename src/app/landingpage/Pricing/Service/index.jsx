import Section from "@/fragments/Section"
import Title from "@/fragments/Title"
import CardTemplate from "@/fragments/CardTemplate";
import { FaArrowRight } from "react-icons/fa";

export default function Service(){
    const servicesData = [
        {
          id: 1,
          title: "Service 1",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque."
        },
        {
          id: 2,
          title: "Service 2",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque."
        },
        {
          id: 3,
          title: "Service 3",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque."
        }
      ];

    return(
        <Section id="services">
            <Title
                title="lorem ipsum dolor sit amet" desc="lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod"
            />
            <CardTemplate>
                {servicesData.map((service) => (
                <div key={service.id} className="max-w-[16rem] overflow-hidden flex flex-col justify-center items-center border-[3px] rounded-xl hover:border-[#366353] hover:shadow-2xl ease-in-out hover:scale-105 duration-200">
                    <img className="" src={`/img/services/seo/rafiki.png`} alt="Service Image" />
                    <div className="px-6 py-4 text-center">
                    <div className="font-bold text-xl mb-2">{service.title}</div>
                    <p className="text-gray-700 text-base line-clamp-3">
                        {service.description}
                    </p>
                    </div>
                    <div className="px-6 pt-4 mb-8 flex flex-row items-center justify-center gap-1 cursor-pointer active:scale-95 ease-in-out duration-200">
                        <span className="text-sm font-semibold text-gray-700 hover:text-gray-900 ease-in-out duration-200">Explore</span>
                        <FaArrowRight />
                    </div>
                </div>
                ))}
            </CardTemplate>
        </Section>
    )
}