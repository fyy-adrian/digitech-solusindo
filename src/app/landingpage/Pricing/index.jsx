import Section from "@/fragments/Section"
import Title from "@/fragments/Title"
import Button from "@/fragments/Button";
import CardTemplate from "@/fragments/CardTemplate";
import { FaCheck } from "react-icons/fa";

export default function Pricing({prices}) {
    const cards = [
        {
            title: "Premium",
            price: "$55",
            priceDesc: "/mo",
            features: [
                "10 user request",
                "10 GB storage",
                "24/7 support",
                "Unlimited users",
                "Premium support"
            ],
            special: false
        },
        {
            title: "Premium",
            price: "$55",
            priceDesc: "/mo",
            features: [
                "10 user request",
                "10 GB storage",
                "24/7 support",
                "Unlimited users",
                "Premium support"
            ],
            special: true
        },
        {
            title: "Premium",
            price: "$55",
            priceDesc: "/mo",
            features: [
                "10 user request",
                "10 GB storage",
                "24/7 support",
                "Unlimited users",
                "Premium support"
            ],
            special: false
        },
    ];

    return (
        <Section id="pricing" bgColor="bg-[#e7fade]">
            {console.log(prices)}
            <Title title="our services" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod lectus eget mauris faucibus lacinia" />
            <CardTemplate>
                {cards.map((card, index) => (
                    <div key={index} className={`w-[17rem] h-[32rem] overflow-hidden flex flex-col justify-center items-center border-[3px] rounded-xl hover:shadow-2xl hover:scale-105 ease-in-out duration-200 border-[#366353] ${card.special ? "bg-gradient-card bg-cover bg-bottom text-white" : "text-slate-800"}`}>
                        <div className="text-center flex flex-col gap-3 my-8">
                            <h1 className="text-3xl font-semibold">{card.title}</h1>
                            <h3 className="text-2xl">{card.price}<span className="text-lg">{card.priceDesc}</span></h3>
                        </div>
                        <ul className="px-6 py-4 text-center flex flex-col justify-start items-start gap-2">
                            {card.features.map((feature, index) => (
                                <li key={index} className="flex flex-row items-center gap-3">
                                    <p><FaCheck /></p>
                                    <p>{feature}</p>
                                </li>
                            ))}
                        </ul>
                        <div className="px-6 pb-2 flex flex-row items-center justify-center gap-1 mt-7 lg:mt-12">
                            <Button shadow="shadow-md">
                                choose plan
                            </Button>
                        </div>
                    </div>
                ))}
            </CardTemplate>
        </Section>
    )
}