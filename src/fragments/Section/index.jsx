export default function Section({children, bgColor = "bg-white", id=""}){
    return(
        <section id={id} className={`overflow-hidden px-8 md:px-24 lg:px-36 xl:px-44 py-12 md:py-14 flex flex-col justify-between lg:gap-14 ${bgColor}`}>
            {children}
        </section>
    )
}