import Image from "next/image";

type HeroProps = {
    isWide: boolean,
    innerWidth: number,
}

const Hero = ({isWide, innerWidth}: HeroProps) => {
    console.log(innerWidth / 2)

    if (isWide)
        return (
            <section className="-mt-8" style={{"height": `${innerWidth / 3 - 3}` + "px"}}>
                <Image
                    className="shadow-inner"
                    src="/ben.jpg" 
                    alt="Cant load image!"
                    width={1920} 
                    height={1080}
                    style={{
                        "clipPath": "inset(50% 0px 0px)",
                        "transform": "translate(0px, -50%)",
                    }}
                />
            </section>
        )
    else return (
        <section className="-mt-8">
            <Image
                className="shadow-inner"
                src="/ben.jpg" 
                alt="Cant load image!"
                width={1920} 
                height={1080}
            />
        </section>
    )
}; export default Hero