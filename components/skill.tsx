import {useState, useEffect} from 'react'
import { FaArrowLeft } from 'react-icons/fa';

type SkillProps = {
    icon: any,
    text: string,
    menuText: string,
    openMenuFunc: any,
    initialState?: boolean
}

const Skill = ({icon, text, menuText, openMenuFunc, initialState}: SkillProps) => {

    let [isOpen, setOpen] = useState(false)

    useEffect(() => {

        if (initialState) {
            setOpen(initialState)
        }

    }, [isOpen])

    return (
        <button className="text-blue-400 group transition-all duration-300 ease-in-out"
            onClick={() => {
                openMenuFunc(!isOpen, menuText, text)
                setOpen(!isOpen)
            }}
        >
            <span className='flex gap-6 bg-left-bottom bg-gradient-to-r text-blue-400 from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
                {icon}
                {text}
            </span>
        </button>
    )
}; export default Skill