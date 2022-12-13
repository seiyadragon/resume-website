import { useState, MouseEvent } from "react"
import Image from 'next/image'
import Link from 'next/link'
import KnownLanguages from "../components/KnownLanguages"
import ProjectArea from "../components/Projects"

export async function getStaticProps() {
    try {
        var text = await (await fetch("https://8000-cs-c4485005-aa69-4815-acd5-c1bb82c7c641.cs-us-central1-pits.cloudshell.dev/quotes/hourly?authuser=0")).json()
        var quote: Quote = {
            author: text.Author,
            quote: text.Quote,
            id: text.id
        }

        console.log(text)
    } catch {
        var quote: Quote = {author: "null", quote: "null", id: 0}
    }

    return {
        props: {
            quoteText: quote
        }
    }
}

export const Ribbon = ({quoteText}: IndexProps) => {
    return (
        <section className="bg-green-500 text-2xl text-center font-bold py-2 border-b-2 border-green-400 sticky top-0 z-50"
        style={{ 
            "textShadow": "-1px -1px 0 rgb(134 239 172), 1px -1px 0 rgb(134 239 172), -1px 1px 0 rgb(134 239 172), 1px 1px 0 rgb(134 239 172)" 
        }}>
            <span>{quoteToString(quoteText)}</span>
        </section>
    )
}

export const Intro = () => {
    return (
        <section className="shadow-lg lg:py-4 pb-4">
            <p className="text-gray-200 lg:mx-48 md:mx-24 mx-12 py-6 lg:pt-16 pt-6 text-xl">
                {`Hello, my name is Arlen Molina. I'm originally from Cuba but I grew up in Texas.
                I am a programmer with several years of experience
                learning on my own while studying. I started to program in 2015, I loved playing
                Minecraft and wanted to make my own games, so I bought a 500-page Java book and got to work,
                eventually, I was able to create my first game of Pong! Soon I started working on more complicated
                games, eventually switching to C++ and later on C#, it was at this point that I started, using git
                and GitHub to save my projects. My programming path was backwards I could say or at least opposite to most people,
                because I learned C++ before I learned HTML. But eventually I did, my focus switched from wanting to make games,
                into wanting to make something more practical, I mean the internet is everywhere now and a website doesn't just have,
                to run in your browser, it can also be integrated into both mobile and desktop apps with the use of Electron. But I never
                liked much the traditional way of web-development, it was hard to wrap my head around separating the HTML from the JavaScript,
                and I realized it was difficult to work like that, so I decided to look into React and I fell in love. Currently, I use NextJs,
                with TailWindCSS for all sites including this one, but I am able to use React with any stack as I can learn new frameworks easily.`}
            </p>
            <p className="text-gray-200 lg:mx-48 md:mx-24 mx-12 text-xl">
                {`Feel free to contact me regarding any subject! I'm always interested in hearing from potential
                work and or business opportunities!`}
            </p>
            <p className="lg:mx-48 md:mx-24 mx-12 bg-slate-800 lg:w-80 md:w-80 py-2 my-4 text-center transition hover:scale-105 shadow-lg mt-8">
                <Link
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=arlenmolina101@gmail.com"
                    className="text-green-400 text-xl"
                >
                    {"arlenmolina101@gmail.com"}
                </Link>
            </p>
            <p className="lg:mx-48 md:mx-24 mx-12 bg-slate-800 lg:w-80 md:w-80 py-2 my-4 text-center transition hover:scale-105 shadow-lg">
                <Link 
                    href="https://www.linkedin.com/in/arlen-molina-423159183"
                    className="text-green-400 text-xl"
                >
                    {"LinkedIn profile!"}
                </Link>
            </p>
            <p className="lg:mx-48 md:mx-24 mx-12 bg-slate-800 lg:w-80 md:w-80 py-2 my-4 text-center transition hover:scale-105 shadow-lg">
                <Link
                    href="https://github.com/seiyadragon"
                    className="text-green-400 text-xl"
                >
                    {"GitHub profile!"}
                </Link>
            </p>
        </section>
    )
}

export const FrontEnd = () => {
    return (
        <p className="lg:mx-48 md:mx-24 mx-12 text-xl py-8 text-gray-300">
            {`
                My current passion is web development, both front and back-end. I can make,
                full web apps, integrated with any back-end or custom-made backends. For the
                front-end I typically use NextJS, TailwindCSS, and TypeScript. For the back-end,
                I normally use NextJS and TypeScript, but Im also able to use Node and Express, however
                for standalone api's eg... not attached to a front-end I prefer to use Rust and Rocket due
                to the more structured language as well as speed and reliability.
            `}
        </p>
    )
}

export const Education = () => {
    return (
        <p className="lg:mx-48 md:mx-24 mx-12 text-xl py-8 text-gray-300">
            {`I'm on my last year of college. I attend online classes at Colorado Technical University
            and I'm expected to graduate in December, 2023.`}
        </p>
    )
}

export const Quote = () => {
    return (
        <section 
            className="w-full flex flex-col items-center shadow-lg overflow-hidden"
            style={{
                "backgroundImage": "url(/ben.jpg)",
                "backgroundSize": "cover"
            }}
        >
            <section 
                className="w-full flex flex-col items-center overflow-hidden backdrop-blur-md shadow-inner"
                style={{
                    "backgroundColor": "rgb(15, 23, 42, 0.5)"
                }}
            >
                <Image 
                    src="/ben.jpg" 
                    alt="Cant load image!"
                    width={1280} 
                    height={720}
                />
            </section>
        </section>
    )
}

type Quote = {
    author: String,
    quote: String,
    id: number
}

export function quoteToString(quote: Quote) {
    if (quote == null || quote.quote === "null") 
        return "Welcome to my website!"

    return quote.quote + " -" + quote.author
}

type IndexProps = {
    quoteText: Quote
}

const Index = ({quoteText}: IndexProps) => {
    return (
        <main className="bg-gray-900">
            <Ribbon quoteText={quoteText}/>
            <Quote />
            <Intro />
            <section className="shadow-lg">
                <KnownLanguages />
            </section>
            <section className="shadow-lg">
                <ProjectArea />
            </section>
            <section className="shadow-lg">
                <FrontEnd />
            </section>
            <section className="shadow-lg">
                <Education />
            </section>
        </main>
    )
}; export default Index