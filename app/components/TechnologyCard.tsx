import Image from "next/image";

interface TechnologyCardProps {
    heading: string;
    content: Array<iconCardProps>;
}
interface iconCardProps {
    text: string;
    icon: string;
}

function IconCard ({text, icon}: iconCardProps) {
    return (
        <div className="icon-card flex flex-col gap-2 items-center justify-center w-24 h-24 grow">
            <Image src={icon} alt={text} width={50} height={50} className=" object-contain invert" />
            <h5 className="text-center text-zinc-800 dark:text-zinc-200">{text}</h5>
        </div>
    )
}

export default function CategoryCard({heading, content}: TechnologyCardProps) { 
return(
    <div className="icon-card flex flex-col gap-2 items-center justify-center py-4 w-full rounded bg-zinc-100/70 dark:bg-zinc-800/80" >
        <h1 className="text-xl font-bold text-zinc-800 dark:text-zinc-200 border-b">{heading}</h1>
        <div className="flex gap-4 flex-wrap after:content-[''] after:grow-[999]">
            {content.map((card, index) => (
                <IconCard key={index} text={card.text} icon={card.icon} />
            ))}
        </div>
    </div>
)
}

