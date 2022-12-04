import { useState, MouseEvent } from "react"
import Image from 'next/image'
import Link from 'next/link'

export const Ribbon = () => {
    return (
        <section className="bg-green-600 text-4xl text-center font-bold sticky py-2 border-b-2 border-green-400"
        style={{ 
            "textShadow": "-1px -1px 0 limegreen, 1px -1px 0 limegreen, -1px 1px 0 limegreen, 1px 1px 0 limegreen" 
        }}>
            <span>Welcome to my website!</span>
        </section>
    )
}

export const Intro = () => {
    return (
        <p className="text-gray-200 lg:mx-48 md:mx-24 sm:mx-12 py-6 text-xl">
            Hello, my name is Arlen Molina. I am a programmer with several years of experience
            learning on my own, while studying. I started to program in 2013, I loved playing
            Minecraft and wanted to make my own games, so I bought a 500 page Java book and got to work,
            eventually, I was able to create my first game of Pong! Soon I started working on more complicated
            games, eventually switching to C++ and later on C#, it was at this point that I started, using git
            and GitHub to save my projects.
        </p>
    )
}

type ProjectDetails = {
    name: string,
    languages: string[],
    description: string,
    year: string
}

type ProjectProps = {
    details: ProjectDetails,
    images: string[],
    url: string
}

export const Project = ({details, images, url}: ProjectProps) => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <section className="lg:mx-48 md:mx-24 sm:mx-12 flex flex-col items-center">
            <button 
                className={
                    menuOpen ?
                        "bg-green-600 py-2 lg:w-1/2 md:w-1/2 sm:w-full text-3xl hover:bg-green-500 mt-16 mb-0"
                    :
                        "bg-green-600 py-2 lg:w-1/2 md:w-1/2 sm:w-full text-3xl hover:bg-green-500 mt-16 mb-16"
                }
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {details.name}
                <br />
                ⌄
            </button>
            {menuOpen &&
                <section className="lg:w-1/2 md:w-1/2 sm:w-full text-white bg-slate-800 px-4 py-4 mb-16">
                    <p className="mb-0.5">{details.name}</p>
                    <br/>
                    <p className="mb-0.5">{details.languages}</p>
                    <br/>
                    <p className="mb-0.5">{details.description}</p>
                    <br/>
                    <p className="mb-0.5">{details.year}</p>
                    <br/>
                    <Link className="text-lg my-4 underline" href={url}>GitHub</Link>
                    <ul>
                        {images.map((image) => {
                            return (
                                <li key={image} className="px-4 py-4">
                                    <Image src={image} alt="Cant Load Image." width={1920} height={1080} />
                                </li>
                            )
                        })}
                    </ul>
                </section>
            }
        </section>
    )
}

const Index = () => {
    return (
        <main className="bg-slate-900">
            <Ribbon />
            <Intro />
            <Project 
                details= {
                    {
                        name: "Lords of the Sword",
                        languages: ["C#"],
                        description: `
                            Lords of the Sword was my attempt to make a game similar to Mount and Blade,
                            which was one of my favorite games at the time. Originally it was made just for
                            fun, but later on I added several features to turn it into a more complete game
                            for my AP Computer Science class in Junior year of highschool. It is not polished,
                            many features had to be rushed due to the time constraint but it is still quite advanced,
                            for my skills at that time.
                        `,
                        year:"2018"
                    }
                } 
                images={[
                    "/../public/lotsw/title_screen.png",
                    "/../public/lotsw/main_game.png",
                    "/../public/lotsw/city_menu.png",
                    "/../public/lotsw/farm_menu.png"
                ]} 
                url="https://github.com/seiyadragon/Lords-of-the-Sword"
            />
            <Project
                details={
                    {
                        name: "Janux-cxx",
                        languages: ["C++", "GLSL"],
                        description: `
                            Janux-css was my first attempt at an opengl rendering engine/framework,
                            at first the scope of the project was an entire game engine, but I soon realized,
                            that was way beyond my scope and abality to do by myself in a timely manner.
                        `,
                        year: "2020"
                    }
                }
                images={[]}
                url="https://github.com/seiyadragon/janux-cxx"
            />
        </main>
    )
}; export default Index