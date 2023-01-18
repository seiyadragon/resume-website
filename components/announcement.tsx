import Link from "next/link";

const Announcement = () => {
    return (
        <section className="backdrop-blur-lg text-lg font-bold py-2 border-b-2 border-blue-400">
            <section className="lg:mx-48 md:mx-24 mx-12 text-green-400 text-2xl">
                {"Check out my latest project "}
                <Link href="https://better-self.vercel.app" className="animate-pulse group transition-all duration-300 ease-in-out">
                    <span className='bg-left-bottom bg-gradient-to-r from-green-400 to-green-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
                        {"Self++"}
                    </span>
                </Link>
                {"!"}
            </section>
        </section>
    )
}; export default Announcement