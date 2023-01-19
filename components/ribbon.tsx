import Image from "next/image";
import Links from "./links";

const Ribbon = () => {
    return (
        <section className="backdrop-blur-lg text-lg font-bold py-2 border-b-2 border-blue-400 sticky top-0 z-50">
            <section className="lg:mx-48 md:mx-24 mx-12 flex text-white">
                <Image
                    className="rounded-full max-h-12"
                    src="https://pbs.twimg.com/profile_images/1608051445844041735/AjCod35h_400x400.jpg"
                    alt="Profile Pic!"
                    width={40}
                    height={40}
                />
                <section className="">
                    <p className="px-4 text-base">Arlen Molina</p>
                    <p className="px-4 text-xs">Web Developer</p>
                </section>
            </section>
            <section className="lg:mx-48 md:mx-24 mx-12">
                <Links />
            </section>
        </section>
    )
}; export default Ribbon