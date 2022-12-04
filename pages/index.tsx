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
            and GitHub to save my projects. My programming path was backwards I could say or atleast opposite to most people,
            because I learned C++ before I learned HTML. But eventually I did, my focus switched from wanting to make games,
            into wanting to make something more practical, I mean the internet is everywhere now and a website doesn't just have,
            to run in your browser, it can also be integrated into both mobile and desktop apps with the use of Electron. But I never
            liked much the traditional way of web-development, it was hard to wrap my head around separating the html from the javascript,
            and I realized it was difficult to work like that, so I decided to look into React and I fell in love. Currently I use Nextjs,
            for all sites including this one, but I am able to use React with any stack as I can learn new frameworks easily.
        </p>
    )
}

export const KnownLanguages = () => {
    const languageLinkClass = "my-2 bg-slate-800 lg:w-1/2 sm:w-full text-center py-2 hover:scale-105"

    return (
        <ul className="lg:mx-48 md:mx-24 sm:mx-12 flex flex-col items-center text-green-600 text-xl mt-8">
            <li className={languageLinkClass}><Link href="/java">Java</Link></li>
            <li className={languageLinkClass}><Link href="/cpp">C++</Link></li>
            <li className={languageLinkClass}><Link href="/c#">C#</Link></li>
            <li className={languageLinkClass}><Link href="/go">Go</Link></li>
            <li className={languageLinkClass}><Link href="/javascript">Javascript</Link></li>
            <li className={languageLinkClass}><Link href="/typescript">Typescript</Link></li>
            <li className={languageLinkClass}><Link href="/rust">Rust</Link></li>
            <li className={languageLinkClass}><Link href="/nim">Nim</Link></li>
            <li className={languageLinkClass}><Link href="/python">Python</Link></li>
        </ul>
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
            <KnownLanguages />
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
        </main>
    )
}; export default Index