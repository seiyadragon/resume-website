import { useState, MouseEvent, useEffect } from "react"
import Image from 'next/image'
import Link from 'next/link'
import { GetServerSideProps } from "next"
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import Hero from "../components/hero"
import Intro from "../components/intro"
import Ribbon from "../components/ribbon"
import Head from "next/head"

export const getServerSideProps = async () => {
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

export type IndexProps = {
    quoteText: Quote
}

export type Quote = {
    author: String,
    quote: String,
    id: number
}

const Index = ({quoteText}: IndexProps) => {
    const IMAGE_SWITCH_WIDTH = 1200

    let [isWide, setWide] = useState(true)
    let [innerWidth, setInnerWidth] = useState(0)

    useEffect(() => {
        if (typeof window !== "undefined") {
            if (window.innerWidth <= IMAGE_SWITCH_WIDTH) {
                setWide(false)
            } else {
                setWide(true)
            }

            setInnerWidth(window.innerWidth)

            window.addEventListener("resize", (event) => {
                if (window.innerWidth <= IMAGE_SWITCH_WIDTH) {
                    setWide(false)
                } else {
                    setWide(true)
                }

                setInnerWidth(window.innerWidth)
            })
        }
    }, [isWide])

    if (quoteText.author === null || quoteText.author === "null")
        quoteText.author = "Proverb"

    return (
        <main className="bg-gray-900">
            <Head>
                <title>Arlen Molina</title>
                <link rel="favicon" href="/ben.jpg"/>
                <meta charSet="UTF-8" />
            </Head>
            <Ribbon />
            <section className="shadow-lg">
                <Hero isWide={isWide} innerWidth={innerWidth}/>
            </section>
            <section
                style={{
                    "backgroundImage": "url(/stranger.jpg)",
                    "backgroundSize": `${isWide ? "cover" : "contain"}`
                }}
            >
                <section className="backdrop-blur-lg"
                    style={{
                        "backgroundColor": "rgb(15, 23, 42, 0.5)"
                    }}
                >
                    <section className="lg:px-48 md:px-24 px-12 text-orange-600 text-5xl py-8">
                        <p className="italic">{quoteText.quote}</p>
                        <p className="italic">- {quoteText.author}</p>
                    </section>
                    <Intro />
                </section>
            </section>
        </main>
    )
}; export default Index