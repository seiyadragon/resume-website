import {useState} from 'react'
import { FaArrowLeft } from 'react-icons/fa';

type SkillProps = {
    icon: any,
    text: string,
    menuText?: string
}

const Skill = ({icon, text, menuText}: SkillProps) => {

    let [isOpen, setOpen] = useState(false)

    return (
        <button className="text-blue-400 group transition-all duration-300 ease-in-out"
            onClick={() => setOpen(!isOpen)}
        >
            <span className='flex gap-6 bg-left-bottom bg-gradient-to-r text-blue-400 from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
                {icon}
                {text}
            </span>

            {isOpen &&
                <section className='skills-menu absolute backdrop-blur-xl md:left-48 border-2 border-blue-400' 
                    style={{
                        'transform': 'translate(0px, -2.95em)', 
                        'width': '80vw'
                    }}
                >
                    <p className='text-left text-white text-base py-4 px-4'>
                        {menuText}  
                    </p>
                </section>
            }
        </button>
    )
}; export default Skill