import { FaArrowLeft, FaAws, FaCss3, FaDatabase, FaHtml5, FaJava, FaJs, FaNodeJs, FaReact, FaRocket, FaRust, FaShopify, FaWeebly, FaWordpress } from "react-icons/fa";
import Skill from "./skill";
import { useRef, useState } from "react";


const Skills = () => {

    let [isMenuOpen, setMenuOpen] = useState(false)
    let [menuText, setMenuText] = useState("")

    const openSkillsMenu = (value: boolean, text: string) => {
        setMenuOpen(value)
        setMenuText(text)
    }

    return (
        <section className="skills-section lg:px-48 md:px-24 px-12 text-white text-4xl w-full py-8">
            {!isMenuOpen &&
                <section className="flex flex-wrap" style={{'columnGap': '12.55em', 'rowGap': '1em'}}>
                    <section className="flex flex-col gap-y-10">
                        <Skill 
                            icon={<FaJs />} 
                            text="Javascript"
                            menuText="Javascript"
                            openMenuFunc={openSkillsMenu}
                        />
                        <Skill 
                            icon={<FaCss3 />} 
                            text="CSS3"
                            menuText="CSS3"
                            openMenuFunc={openSkillsMenu}
                        />
                        <Skill 
                            icon={<FaHtml5 />} 
                            text="HTML5"
                            menuText="HTML5"
                            openMenuFunc={openSkillsMenu}
                        />
                        <Skill 
                            icon={<FaReact />} 
                            text="React"
                            menuText="React"
                            openMenuFunc={openSkillsMenu}
                        />
                    </section>
                    <section className="flex flex-col gap-10">
                        <Skill 
                            icon={<FaNodeJs />} 
                            text="NodeJS"
                            menuText="NodeJS"
                            openMenuFunc={openSkillsMenu}
                        />
                        <Skill 
                            icon={<FaRust />} 
                            text="Rust"
                            menuText="Rust"
                            openMenuFunc={openSkillsMenu}
                        />
                        <Skill 
                            icon={<FaRocket />} 
                            text="Rocket"
                            menuText="Rocket"
                            openMenuFunc={openSkillsMenu}
                        />
                        <Skill 
                            icon={<FaDatabase />} 
                            text="SQL"
                            menuText="SQL"
                            openMenuFunc={openSkillsMenu}
                        />
                    </section>
                    <section className="flex flex-col gap-10">
                        <Skill 
                            icon={<FaWordpress />} 
                            text="Wordpress"
                            menuText="Wordpress"
                            openMenuFunc={openSkillsMenu}
                        />
                        <Skill 
                            icon={<FaShopify />} 
                            text="Shopify"
                            menuText="Shopify"
                            openMenuFunc={openSkillsMenu}
                        />
                        <Skill 
                            icon={<FaWeebly />} 
                            text="Weebly"
                            menuText="Weebly"
                            openMenuFunc={openSkillsMenu}
                        />
                        <Skill 
                            icon={<FaAws />} 
                            text="AWS"
                            menuText="AWS"
                            openMenuFunc={openSkillsMenu}
                        />
                    </section>
                </section>
            }
            {isMenuOpen &&
                <section className="h-full">
                    <Skill
                        icon={<FaArrowLeft />}
                        text=""
                        menuText=""
                        openMenuFunc={openSkillsMenu}
                        initialState={true}
                    />
                    <p className="text-base py-8">{menuText}</p>
                </section>
            }
        </section>
    )
}; export default Skills