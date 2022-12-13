import { useState, MouseEvent } from "react"
import Image from 'next/image'
import Link from 'next/link'

type ProjectDetails = {
    name: string,
    languages: string,
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
        <li className="lg:mx-48 md:mx-24 mx-12 flex flex-col items-center">
            <button 
                className="mt-4 bg-slate-800 lg:w-1/2 w-full text-center py-2 transition hover:scale-105 text-green-500 text-2xl shadow-xl"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {details.name}
            </button>
            {menuOpen &&
                <section className="lg:w-1/2 w-full text-white bg-slate-800 px-4 py-4 shadow-xl">
                    <p className="mb-0.5 text-lg">{details.name}</p>
                    <p className="mb-0.5 text-lg">{details.languages}</p>
                    <p className="mb-0.5 text-lg">{details.description}</p>
                    <p className="mb-0.5 text-lg">{details.year}</p>
                    <Link className="text-lg my-4 underline" href={url}>GitHub</Link>
                    <ul>
                        {images.map((image) => {
                            return (
                                <li key={image} className="px-4 py-4">
                                    <Image className="border-8 border-slate-600 shadow-lg" src={image} alt="Cant Load Image." width={1920} height={1080} />
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
        <ul className="py-8">
            <span 
                className="lg:mx-48 md:mx-24 mx-12 flex flex-col items-center text-4xl text-green-500 underline bg-slate-800 py-8 rounded-xl shadow-xl"
            >
                Projects
            </span>
            <Project 
                details= {
                    {
                        name: "Lords of the Sword",
                        languages: "C#, SFML",
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
                    "/lotsw/title_screen.png",
                    "/lotsw/main_game.PNG",
                    "/lotsw/city_menu.PNG",
                    "/lotsw/farm_menu.PNG"
                ]} 
                url="https://github.com/seiyadragon/Lords-of-the-Sword"
            />
            <Project 
                details= {
                    {
                        name: "Janux-CXX",
                        languages: "C++, GLSL, OpenGL",
                        description: `
                            Janux-CXX was a project that was always beyond my scope, but I needed to learn that lesson somehow.
                            My plan was to create an entire game engine with OpenGL and C++. It ended up being nothing more than,
                            a simple abstraction layer for openGL which can do both 2D and 3D graphics much easier than raw OpenGL.
                        `,
                        year:"2020"
                    }
                } 
                images={[
                    "/januxcxx/drawable.png",
                    "/januxcxx/shader.png",
                    "/januxcxx/texture.png"
                ]} 
                url="https://github.com/seiyadragon/janux-cxx"
            />
            <Project 
                details= {
                    {
                        name: "Life Manager Web",
                        languages: "HTML, JavaScript, CSS",
                        description: `
                            Life manager web was one of my first times ever creating a website, I had messed around
                            with HTML and JavaScript before but never anything major. The website was never finished as it
                            was for practice, and it can't run on a server or anything like that. But the main aspect of it is
                            functional, you can create routines with tasks and stuff and save them.
                        `,
                        year:"2020"
                    }
                } 
                images={[
                    "/lifeManagerWeb/home.png",
                    "/lifeManagerWeb/routines.png"
                ]} 
                url="https://github.com/seiyadragon/LifeManagerWeb"
            />
            <Project 
                details= {
                    {
                        name: "React Calculator",
                        languages: "HTML, JavaScript, CSS, React, JSX",
                        description: `
                            This was my first react application. It was just for the purpose of learning
                            how to use react. It was a fun project to program, it has some bugs but for the most
                            part it works very well.
                        `,
                        year:"2022"
                    }
                } 
                images={[
                    "/reactCalculator/calc_one.png",
                    "/reactCalculator/calc_two.png"
                ]} 
                url="https://github.com/seiyadragon/react-calculator"
            />
            <Project 
                details= {
                    {
                        name: "ScrollHub",
                        languages: "HTML, JavaScript, CSS, React, JSX, NextJS, Supabase",
                        description: `
                            This was a project that I enjoyed working on a lot. It's complete, it does, what it sets out to do.
                            There is still some work that can be done to it such as optimizing, and more support for audiobooks, but for the
                            most part it's complete as it contains something like 65000 free books.
                        `,
                        year:"2022"
                    }
                } 
                images={[
                    "/scrollhub/scrollhub_home.png",
                    "/scrollhub/scrollhub_books.png",
                    "/scrollhub/scrollhub_search.png"
                ]} 
                url="https://github.com/seiyadragon/scrollhub"
            />
            <Project 
                details= {
                    {
                        name: "RossCo Store",
                        languages: "HTML, JavaScript, CSS, React, JSX, NextJS, Supabase",
                        description: `
                            This project was initially going to be for my own business, as I wanted to dropship products from BigBuy.
                            However plans changed before this was ever completed. However it was still a nice looking website, which I used
                            to learn a lot of CSS.
                        `,
                        year:"2022"
                    }
                } 
                images={[
                    "/rosscostore/rosscostore_home_one.png",
                    "/rosscostore/rosscostore_home_two.png",
                    "/rosscostore/rosscostore_shop_one.png",
                    "/rosscostore/rosscostore_shop_two.png"
                ]} 
                url="https://github.com/seiyadragon/rosscostore"
            />
            <Project 
                details= {
                    {
                        name: "HempPyre",
                        languages: "HTML, JavaScript, CSS, React, JSX, NextJS, Supabase",
                        description: `
                            HempPyre was another website created for personal business. It was made using NextJS and BulmaCSS.
                            It's very standard in design and layout, however that was the goal. Eventually the website was no longer
                            of use to me due to other business related issues and so I decided to make it public on GitHub. The whole
                            site was created from start to finish in about 3 days.
                        `,
                        year:"2022"
                    }
                } 
                images={[
                    "/hemppyre/hemppyre_home.png",
                    "/hemppyre/hemppyre_shop.png",
                    "/hemppyre/hemppyre_cart.png"
                ]} 
                url="https://github.com/seiyadragon/hempyre"
            />
            <Project 
                details= {
                    {
                        name: "RustyQuotes",
                        languages: "Rust, Rocket, Supabase, Reqwest",
                        description: `
                            RustyQuotes was my first web api. While I knew what api's were and could make them with
                            NextJs and Express, I never really needed to. However I wanted to start learning backend
                            because my goal is to be a fullstack developer. So I developed a simple api that retrieves
                            famous quotes from my database, you're able to retrive all of them, by id, by author, by quote,
                            random, daily quote, and hourly quote.
                        `,
                        year:"2022"
                    }
                } 
                images={[
                    "/rustyQuotes/rustyquotes_code.png",
                    "/rustyQuotes/rustyquotes_all.png",
                    "/rustyQuotes/rustyquotes_daily.png"
                ]} 
                url="https://github.com/seiyadragon/rustyquotes"
            />
        </ul>
    )
}; export default ProjectArea