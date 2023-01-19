import { createClient } from '@supabase/supabase-js';
import {useState} from 'react'

type EmailListProps = {
    supabaseUrl: string,
    supabaseKey: string
}

const EmailList = ({supabaseUrl, supabaseKey}: EmailListProps) => {

    const [inputValue, setInputValue] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [errorMessageColor, setErrorMessageColor] = useState("text-red-400")

    return (
        <section className="lg:px-48 md:px-24 px-12 text-white w-full py-8">
            <p className="py-8 text-xl">
                {
                    `
                        Are you looking to improve your web development and programming skills? 
                        My email newsletter is the perfect solution for you! By subscribing, 
                        you will receive free information and tutorials on the latest web development 
                        trends and techniques. I cover everything from HTML and CSS to JavaScript and 
                        PHP, so you can stay up-to-date with the latest industry standards. Plus, our 
                        newsletter is completely free and you can unsubscribe at any time. Don't miss
                        out on this opportunity to take your skills to the next level. Subscribe now!
                    `
                }
            </p>
            <section className="flex gap-8 text-4xl">
                <input 
                    type="text" 
                    className="bg-transparent border-2 border-blue-400 outline-none w-full rounded-full px-4 h-16 -translate-y-1"
                    placeholder="Type your email here!"
                    value={inputValue}
                    onChange={(event) => setInputValue(event.target.value)}
                />
            </section>
            <p className={`${errorMessageColor} text-center`}>{errorMessage}</p>
            <section className="text-center">
                <button className="group transition-all duration-300 ease-in-out md:text-8xl text-4xl py-8 animate-pulse"
                    onClick={async () => {
                        if (inputValue.includes('@') && inputValue.includes('.com'))
                            var isEmailValid = true
                        else {
                            isEmailValid = false

                            setErrorMessageColor("text-red-400")
                            setErrorMessage("This email is not valid!")
                        }

                        if (isEmailValid) {
                            let supabase = await createClient(supabaseUrl, supabaseKey)

                            let {data, error} = await supabase.from("Emails").select().eq("email", inputValue.toString())

                            if (data?.length === 0) {
                                await supabase.from("Emails").insert({
                                    email: inputValue
                                })

                                setInputValue("")

                                setErrorMessageColor("text-green-400")
                                setErrorMessage("Email successfully submitted!")
                            } else {
                                setErrorMessageColor("text-red-400")
                                setErrorMessage("Email already exists!")
                            }
                        }
                    }}
                >
                    <span className='bg-left-bottom bg-gradient-to-r text-blue-400 from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
                        Subscribe
                    </span>
                </button>
            </section>
        </section>
    )
}; export default EmailList