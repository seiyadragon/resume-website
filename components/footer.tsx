import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";


const Footer = () => {
    return (
        <section className="text-white lg:px-48 md:px-24 px-12">
            <p className="text-base py-10">
                {
                    `
                        If you're in need of a dedicated and skilled web developer, look no further. 
                        With my extensive background in programming, including game development and proficiency in various 
                        languages such as Java, C#, C++, Python, Go, and React, I am well-equipped to handle any web 
                        development project. I have a keen eye for design and a strong understanding of SEO, ensuring 
                        that your website not only looks great but also drives traffic and generates leads. My commitment 
                        to delivering projects that exceed expectations, coupled with my ability to efficiently research and 
                        solve problems, makes me a valuable asset to any team. Contact me today to see how I can help bring your 
                        web development project to the next level.
                    `
                }
            </p>
            <section className="flex justify-center">
                <section className="flex gap-8 py-4">
                    <p className="text-blue-600 md:text-6xl text-4xl relative md:-top-5 -top-3">{'<'}</p>
                    <Link
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=arlenmolina101@gmail.com"
                        className="text-blue-400 md:text-4xl text-2xl transition hover:scale-150"
                    >
                        <FaEnvelope />
                    </Link>
                    <Link 
                        href="https://www.linkedin.com/in/arlen-molina-423159183"
                        className="text-blue-400 md:text-4xl text-2xl transition hover:scale-150"
                    >
                        <FaLinkedin />
                    </Link>
                    <Link
                        href="https://github.com/seiyadragon"
                        className="text-blue-400 md:text-4xl text-2xl transition hover:scale-150"
                    >
                        <FaGithub />
                    </Link>
                    <Link
                        href="https://twitter.com/arlenmolina101"
                        className="text-blue-400 md:text-4xl text-2xl transition hover:scale-150"
                    >
                        <FaTwitter />
                    </Link>
                    <p className="text-blue-600 md:text-6xl text-4xl relative md:-top-5 -top-3">{'/>'}</p>
                </section>
            </section>
        </section>
    )
}; export default Footer;