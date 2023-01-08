import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";


const Intro = () => {
    return (
        <section className="lg:py-4 pb-4 lg:mx-48 md:mx-24 mx-12 text-white">
            <section className="flex flex-wrap lg:gap-44 md:gap-44 gap-8">
                <section className="lg:w-1/4 md:w-1/4 w-full">
                    <p className="text-lg underline py-4">Background</p>
                    <p className="text-base">
                        {
                            `
                                My name is Arlen Molina, I'm 21 years old, and live in Texas.
                                I'm originally from Cuba but move to The United States when I was around 10.
                                I've always loved to figure out how things worked, and since I can remember I've
                                known how to use computers as well as take them apart and put them back together.
                                When I was around 14, I started getting interested in programming and what it entailed.
                                I told my dad about it, and for my birthday he bought me a Java book, which I started to read
                                and very quickly got to work on projects. I fell in love with programming, and that's the reason
                                I have spent many hours over the past 7 years working on my own projects, slowly getting better at it.
                                Now that I'm nearly at the end of my college years, I've become very dedicated to my craft, I specialize
                                in web and app development. I've worked with several front end and back end apis, but most importantly,
                                I know how to do research and solve problems on my own, I joke that I spend more time googling stuff than
                                actually writing code.
                            `
                        }
                    </p>
                </section>
                <section className="lg:w-1/4 md:w-1/4 w-full">
                <p className="text-lg underline py-4">Web Development and Freelancing</p>
                    <p className="text-base">
                        {
                            `
                                When I first started to program my main interest was games. And I learned a lot of programming concepts through that.
                                However I soon realized that games were very big projects that required many different skillsets, I started to redirect
                                my attention to web development. I had previous experience with HTML CSS and Javascript, but this time I learned React,
                                since it seemed like the most popular framework at the time and I got to work. I could talk about all the technical,
                                and programming frameworks and apis that I use, but I know most people don't care about that. They want a website that
                                looks good, and gets results. That's why in the last year I've been focusing a lot more on design as well as
                                Search Engine Optimization(SEO). I might not have the most experience around, but I can guarantee that I will not
                                stop working on your project, until you're 100% satisfied with it. Because
                                not doing so would be insulting to those who chose to trust me with such a huge part of their busines.
                            `
                        }
                    </p>
                </section>
                <section className="lg:w-1/4 md:w-1/4 w-full">
                <p className="text-lg underline py-4">Other Skills</p>
                    <p className="text-base">
                        {
                            `
                                Throughout the years I've been programming, and especially before focusing on web development, I picked up some other skills.
                                For game development I learned Java, C# and C++. Later on I wanted to make game engines, and I learned GLFW, OpenGL and GLSL.
                                Programming shaders is one of those things I will always love to do. I'm also familiar with Python and Go, I learned these two
                                because I wanted to make a program that would go through a list of Stock symbols, do some calculations on it and display
                                everything in an Excel sheet. At first
                                I used python and everything was great, but the framework I was using was not very accurate and was prone to break. I found
                                what seemed to be a better framework for Go, which I had never used till that point, then I made the same program again in Go,
                                learning the language along the way. It actually became one of my favorite languages, the code always looked very nice and clean,
                                due to their enforcement of clean code. I've also made shaders in blender and Godot Engine.
                            `
                        }
                    </p>
                </section>
            </section>
            <p className="text-base py-8">
                {
                    `
                        Here are all my links. I'm most active on twitter but, feel free to contact me however it's most convenient for you!
                        Email is arlenmolina101@gmail.com, or click one of the links below to go directly to the site.
                    `
                }
            </p>
            <section className="flex justify-center">
                <section className="flex flex-wrap gap-8 py-4">
                    <Link
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=arlenmolina101@gmail.com"
                        className="text-blue-400 text-4xl transition hover:scale-150"
                    >
                        <FaEnvelope />
                    </Link>
                    <Link 
                        href="https://www.linkedin.com/in/arlen-molina-423159183"
                        className="text-blue-400 text-4xl transition hover:scale-150"
                    >
                        <FaLinkedin />
                    </Link>
                    <Link
                        href="https://github.com/seiyadragon"
                        className="text-blue-400 text-4xl transition hover:scale-150"
                    >
                        <FaGithub />
                    </Link>
                    <Link
                        href="https://twitter.com/arlenmolina101"
                        className="text-blue-400 text-4xl transition hover:scale-150"
                    >
                        <FaTwitter />
                    </Link>
                </section>
            </section>
        </section>
    )
}; export default Intro