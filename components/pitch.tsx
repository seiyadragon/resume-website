import { createClient } from "@supabase/supabase-js";
import Link from "next/link";
import { use, useState } from "react";
import { FaArrowLeft, FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

type PitchProps = {
    supabaseUrl: string,
    supabaseKey: string
}

const Pitch = ({supabaseUrl, supabaseKey}: PitchProps) => {

    let [isMenuOpen, setMenuOpen] = useState(false)
    let [formText, setFormText] = useState(["", "", "", ""])
    let [errorMessage, setErrorMessage] = useState("")

    return (
        <section className="text-white lg:px-48 md:px-24 px-12 py-2">
            {!isMenuOpen &&
                <section>
                    <p className="text-xl py-10">
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
                    <section className="w-fit mx-auto md:text-8xl text-6xl">
                        <button className="text-blue-400 group transition-all duration-300 ease-in-out animate-pulse py-8"
                            onClick={() => {
                                setMenuOpen(!isMenuOpen)
                            }}
                        >
                            <span className='flex gap-6 bg-left-bottom bg-gradient-to-r text-blue-400 from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
                                Contact me today!
                            </span>
                        </button>
                    </section>
                </section>
            }
            {isMenuOpen &&
                <section className="">
                    <button className="text-blue-400 group transition-all duration-300 ease-in-out py-8 text-4xl"
                        onClick={() => {
                            setMenuOpen(!isMenuOpen)
                            setErrorMessage("")
                        }}
                    >
                        <span className='flex gap-6 bg-left-bottom bg-gradient-to-r text-blue-400 from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
                            <FaArrowLeft />
                        </span>
                    </button>
                    <section className="text-2xl flex flex-col gap-4">
                        <input 
                            type="text" 
                            className="outline-none px-4 py-1 border-2 border-blue-400 bg-transparent rounded-2xl" 
                            placeholder="Name"
                            value={formText[0]}
                            onChange={(event) => {
                                let tmp = [...formText]
                                tmp[0] = event.target.value

                                setFormText(tmp)
                            }}
                        />
                        <input 
                            type="text" 
                            className="outline-none px-4 py-1 border-2 border-blue-400 bg-transparent rounded-2xl" 
                            placeholder="Email"
                            value={formText[1]}
                            onChange={(event) => {
                                let tmp = [...formText]
                                tmp[1] = event.target.value
                                
                                setFormText(tmp)
                            }}
                        />
                        <input 
                            type="text" 
                            className="outline-none px-4 py-1 border-2 border-blue-400 bg-transparent rounded-2xl" 
                            placeholder="Phone"
                            value={formText[2]}
                            onChange={(event) => {
                                let tmp = [...formText]
                                tmp[2] = event.target.value
                                
                                setFormText(tmp)
                            }}
                        />
                        <input 
                            type="text" 
                            className="outline-none px-4 py-1 border-2 border-blue-400 bg-transparent rounded-2xl" 
                            placeholder="Website"
                            value={formText[3]}
                            onChange={(event) => {
                                let tmp = [...formText]
                                tmp[3] = event.target.value
                                
                                setFormText(tmp)
                            }}
                        />
                        <p className="text-red-400 text-base text-center">{errorMessage}</p>
                    </section>
                    <section className="w-fit mx-auto md:text-8xl text-6xl">
                        <button className="text-blue-400 group transition-all duration-300 ease-in-out py-8"
                            onClick={async () => {
                                let shouldCancel = false

                                formText.forEach((text) => {
                                    if (text === "") {
                                        shouldCancel = true
                                    }
                                })

                                if (shouldCancel) {
                                    setErrorMessage("Please fill out all the fields!")
                                    return
                                }

                                let supabase = await createClient(supabaseUrl, supabaseKey)

                                let {data, error} = await supabase.from("Leads").select().eq("email", formText[0].toString())

                                if (data?.length === 0) {
                                    await supabase.from("Leads").insert({
                                        name: formText[0],
                                        email: formText[1],
                                        phone: formText[2],
                                        website: formText[3]
                                    })
    
                                    setFormText(["", "", "", ""])
                                    setMenuOpen(!isMenuOpen)
                                    setErrorMessage("")
                                    
                                } else {
                                    setErrorMessage("Email already found in database!")
                                }
                            }}
                        >
                            <span className='flex gap-6 bg-left-bottom bg-gradient-to-r text-blue-400 from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
                                Contact me today!
                            </span>
                        </button>
                    </section>
                </section>
            }
        </section>
    )
}; export default Pitch;