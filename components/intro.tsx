import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Background from "./text_column";
import TextColumn from "./text_column";


const Intro = () => {
    return (
        <section className="lg:py-4 pb-4 lg:mx-48 md:mx-24 mx-12 text-white">
            <section className="flex flex-wrap lg:gap-44 md:gap-44 gap-8">
                <TextColumn 
                    title="Background"
                    body={`
                        I am Arlen Molina, a 21-year-old software developer from Texas with a strong passion for understanding how things work. 
                        Having immigrated to the United States at a young age, I quickly became fascinated with computers and honed my skills in 
                        both hardware and software. When I was 14, my interest in programming was sparked and my dad gifted me a Java book, 
                        leading me to dive into coding and spend countless hours over the past 7 years working on personal projects to improve 
                        my skills. As I near the end of my college education, I have become deeply dedicated to my craft and specialize 
                        in web and app development. With experience working with various front-end and back-end APIs, I am able to 
                        efficiently research and solve problems independently. In fact, I often joke that I spend more time 
                        googling solutions than actually writing code.
                    `}
                />
                <TextColumn 
                    title="Web Development and Freelancing"
                    body={`
                        My initial interest in programming was centered around game development, where I gained a solid understanding 
                        of programming concepts. However, as I discovered the complexity and diverse skillset required for game development, 
                        I redirected my focus towards web development. With prior knowledge of HTML, CSS, and JavaScript, 
                        I delved into learning React, as it was the most popular framework at the time. While I am well-versed in 
                        various technical frameworks and APIs, my primary focus is on creating visually appealing websites that 
                        deliver results. In the past year, I have placed a greater emphasis on design and search engine optimization 
                        (SEO) to ensure that my clients' websites not only look great but also drive traffic and generate leads. 
                        I understand that trust is a crucial component of any business relationship, and I take pride in my 
                        commitment to delivering projects that exceed my clients' expectations. My promise to you is that I 
                        will not rest until you are completely satisfied with the final product.
                    `}
                />
                <TextColumn 
                    title="Other Skills"
                    body={`
                        Throughout my programming journey, I have acquired a diverse set of skills in addition to web development. 
                        My background in game development includes expertise in Java, C#, and C++. I also delved into creating 
                        game engines, using GLFW, OpenGL, and GLSL to program shaders, which is a passion of mine. I am familiar with 
                        Python and Go, which I learned in order to create a program that would process a list of stock symbols, perform 
                        calculations, and display the results in an Excel sheet. Initially, I used Python, but found that the framework 
                        I was using was not accurate and prone to breaking. I then discovered a more suitable framework for Go, which I 
                        had not previously used, and rewrote the program in Go, learning the language as I went along. I found it to be 
                        a great language for clean and organized code. I also have experience in creating shaders in Blender and Godot Engine.
                    `}
                />
            </section>
            <p className="text-base py-8">
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
}; export default Intro