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

type LanguageSectionProps = {
    language: string,
    description: string
}

export const LanguageSection = ({language, description}: LanguageSectionProps) => {
    const [isMenuActive, setMenuActive] = useState(false)

    return (
        <li className="w-full flex flex-col items-center">
            <button 
                className="mt-4 bg-slate-800 lg:w-1/2 sm:w-full text-center py-2 transition hover:scale-105"
                onClick={() => setMenuActive(!isMenuActive)}
            >
                {language}
            </button>
            {isMenuActive &&
                <p className="mb-4 bg-slate-800 lg:w-1/2 sm:w-full py-4 px-4 text-white text-base">
                    {description}
                </p>
            }
        </li>
    )
}

export const KnownLanguages = () => {
    return (
        <ul className="lg:mx-48 md:mx-24 sm:mx-12 flex flex-col items-center text-green-600 text-xl py-16">
            <span className="text-4xl text-green-800 underline">Languages</span>
            <LanguageSection
                language="Java"
                description={`
                    Java was the first programming language I ever learned. And so my introduction
                    to programming, was through Java. Because of that I have object oriented concepts
                    pretty well understood. In fact object oriented is still my preffered method of
                    programming. I also took a Java class in college which refreshed my memory on
                    the language but on the day to day I do not use it a lot.
                `}
            />
            <LanguageSection
                language="C++"
                description={`
                    In my early days of programming, I wanted to create videogames.
                    And what other language would you use for that purpose? C++ was tedious, setting up
                    projects with CMake was annoying to say the least. And basically anything you wanted to do,
                    you needed to program yoursef because it was either that or finding some library,
                    which would be harder to include in your project anyway. All joking aside, C++ is a
                    very powerful language, and if the package managers for it were as good as npm I would
                    definitely use it more. I love the control it gives you over your data, with pointers and
                    all that. Using C++ I learned a lot about OpenGL, and graphics programming including GLSL.
                `}
            />
            <LanguageSection
                language="Javascript"
                description={`
                    Javascript was a language I started to learn during my sophmore year
                    of highschool during a web development class. At first I did not like it
                    because it was different from all the static typed/compiled languages I
                    had used before. However after using it for years I've come to fall in love
                    with the language, with how free it is. What I mean is in Javascript when
                    you want to do something, you just do it and the language allows you, now
                    any errors or bugs created by this is up to you to solve, but Javascript
                    lets you do it. Currently Javascript is the language that I've used the most,
                    and it's the one that I see myself continuing to use for many years in the future.
                `}
            />
            <LanguageSection
                language="TypeScript"
                description={`
                    My journey with TypeScript actually started as an accident, I had heard of it, but never
                    really planned on using it. Until I started using NextJs, when creating a project, it would
                    ask you if you want to use TypeScript, I hit Yes instead of No, and now my project was in TypeScript
                    I knew it was mostly the same as Javascript so I just kept going with it but then I started getting compiler
                    errors. Nothing I couldn't fix with a couple of visits to the docs. TypeScript soon became on of my favorite
                    languages as it gives you the same degree of freedom as Javascript does while at the same time adding
                    some needed rigidity to the code for readability.
                `}
            />
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
        <li className="lg:mx-48 md:mx-24 sm:mx-12 flex flex-col items-center">
            <button 
                className="mt-4 bg-slate-800 lg:w-1/2 sm:w-full text-center py-2 transition hover:scale-105 text-green-600 text-2xl"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {details.name}
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
        </li>
    )
}

const ProjectArea = () => {
    return (
        <ul className="py-16">
            <span className="lg:mx-48 md:mx-24 sm:mx-12 flex flex-col items-center text-4xl text-green-800 underline">Projects</span>
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
        </ul>
    )
}

const Index = () => {
    return (
        <main className="bg-slate-900">
            <Ribbon />
            <Intro />
            <KnownLanguages />
            <ProjectArea />
        </main>
    )
}; export default Index