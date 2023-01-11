import Link from "next/link";

const Announcement = () => {
    return (
        <section className="backdrop-blur-lg text-lg font-bold py-2 border-b-2 border-blue-400 sticky top-0 z-50">
            <section className="lg:mx-48 md:mx-24 mx-12 text-green-400 text-2xl">
                {"Check out my latest project "}
                <Link href="https://better-self.vercel.app" className="hover:underline animate-pulse">
                    {"Self++"}
                </Link>
                {"!"}
            </section>
        </section>
    )
}; export default Announcement