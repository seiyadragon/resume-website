import { useState, MouseEvent, useEffect } from "react"
import Image from 'next/image'
import Link from 'next/link'
import { GetServerSideProps } from "next"
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import Hero from "../components/hero"
import Intro from "../components/intro"
import Ribbon from "../components/ribbon"
import Head from "next/head"
import Announcement from "../components/announcement"
import Footer from "../components/footer"
import Skills from "../components/skills"
import EmailList from "../components/email_list"

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

    let supabaseUrl = process.env.SB_URL !== undefined ? process.env.SB_URL : ""
    let supabaseKey = process.env.SB_KEY !== undefined ? process.env.SB_KEY : ""

    return {
        props: {
            quoteText: quote,
            supabaseUrl: supabaseUrl,
            supabaseKey: supabaseKey
        }
    }
}

export type IndexProps = {
    quoteText: Quote,
    supabaseUrl: string,
    supabaseKey: string
}

export type Quote = {
    author: String,
    quote: String,
    id: number
}

const Index = ({quoteText, supabaseUrl, supabaseKey}: IndexProps) => {
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
            <section>
                <Announcement />
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
                    <section className="border-b-2 border-blue-400 pb-16">
                        <Intro />
                    </section>
                    <section className="border-b-2 border-blue-400 pb-8">
                        <EmailList supabaseUrl={supabaseUrl} supabaseKey={supabaseKey}/>
                    </section>
                    <section className="border-b-2 border-blue-400 py-8">
                        <Skills />
                    </section>
                    <Footer />
                </section>
            </section>
        </main>
    )
}; export default Index