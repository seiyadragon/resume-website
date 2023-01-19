import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";


const Pitch = () => {
    return (
        <section className="text-white lg:px-48 md:px-24 px-12">
            <p className="text-xl py-10">
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
        </section>
    )
}; export default Pitch;