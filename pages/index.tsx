import { useState, MouseEvent } from "react"
import Image from 'next/image'
import Link from 'next/link'
import KnownLanguages from "../components/KnownLanguages"
import ProjectArea from "../components/Projects"
import { GetStaticProps } from "next"
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

export const getStaticProps = async () => {
    try {
        var text = await (await fetch("https://seiyadragon.vercel.app/api/quote")).json()
        var quote: Quote = {
            author: text.Author,
            quote: text.Quote,
            id: text.id
        }

        console.log(text)
    } catch {
        var quote: Quote = {author: "Emory Andrew Tate II", quote: `
            My unmatched perspicacity coupled with
            my sheer indefatigability makes me a feared
            opponent in any realm of human endeavour.
        `, id: 0}
    }

    return {
        props: {
            quoteText: quote
        }
    }
}

export const Ribbon = ({quoteText}: IndexProps) => {
    return (
        <section className="backdrop-blur-lg text-2xl text-center font-bold py-2 border-b-2 border-blue-400 sticky top-0 z-50"
        style={{ 
            "textShadow": "-1px -1px 0 rgb(96 165 250), 1px -1px 0 rgb(96 165 250), -1px 1px 0 rgb(96 165 250), 1px 1px 0 rgb(96 165 250)" 
        }}>
            <span>{quoteToString(quoteText)}</span>
        </section>
    )
}

export const Intro = () => {
    return (
        <section className="lg:py-4 pb-4">
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
            <p className="lg:mx-48 md:mx-24 mx-12 text-xl py-6 text-gray-300">
                {`I'm on my last year of college for a Bachelor's in Computer Science. I attend online classes at Colorado Technical University
                and I'm expected to graduate in December, 2023.`}
            </p>
            <p className="lg:mx-48 md:mx-24 mx-12 text-xl py-6 text-gray-300">
                {`My current passion is web development, both front and back-end. I can make,
                full web apps, integrated with any back-end or custom-made backends. I can also
                bring these web apps to mobile or desktop with the use of ReactNative and Electron.
                I am excited to start working and contributing my skills to projects.`}
            </p>
            <p className="text-gray-200 lg:mx-48 md:mx-24 mx-12 text-xl py-6">
                {`Feel free to contact me regarding any subject! I'm always interested in hearing from potential
                work and or business opportunities!`}
            </p>
            <section className="flex flex-wrap lg:mx-48 md:mx-24 mx-12 gap-8 py-4">
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
    return quote.quote + " -" + quote.author
}

type IndexProps = {
    quoteText: Quote
}

const Index = ({quoteText}: IndexProps) => {
    return (
        <main className="bg-gray-900">
            <Ribbon quoteText={quoteText}/>
            <section className="shadow-lg">
                <Quote />
            </section>
            <section
                style={{
                    "backgroundImage": "url(/earth.jpg)",
                    "backgroundSize": "cover"
                }}
            >
                <section className="backdrop-blur-md"
                    style={{
                        "backgroundColor": "rgb(15, 23, 42, 0.5)"
                    }}
                >
                    <Intro />
                </section>
            </section>
            <section
                style={{
                    "backgroundImage": "url(/twitter_background_2.png)",
                    "backgroundSize": "tile"
                }}
            >
                <section className="backdrop-blur-md"
                    style={{
                        "backgroundColor": "rgb(15, 23, 42, 0.5)"
                    }}
                >
                    <section className="lg:mx-48 md:mx-24 mx-12 flex flex-wrap">
                        <KnownLanguages />
                        <ProjectArea />
                    </section>
                </section>
            </section>
        </main>
    )
}; export default Index