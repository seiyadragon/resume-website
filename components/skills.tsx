import { FaAws, FaCss3, FaDatabase, FaHtml5, FaJava, FaJs, FaNodeJs, FaReact, FaRocket, FaRust, FaShopify, FaWeebly, FaWordpress } from "react-icons/fa";
import Skill from "./skill";


const Skills = () => {
    return (
        <section className="lg:px-48 md:px-24 px-12 text-white text-4xl w-full py-8">
            <section className="flex flex-wrap" style={{'columnGap': '12.55em', 'rowGap': '1em'}}>
                <section className="flex flex-col gap-y-10">
                    <Skill 
                        icon={<FaJs />} 
                        text="Javascript"
                        menuText=""
                    />
                    <Skill 
                        icon={<FaCss3 />} 
                        text="CSS3"
                        menuText=""
                    />
                    <Skill 
                        icon={<FaHtml5 />} 
                        text="HTML5"
                        menuText=""
                    />
                    <Skill 
                        icon={<FaReact />} 
                        text="React"
                        menuText=""
                    />
                </section>
                <section className="flex flex-col gap-10">
                    <Skill 
                        icon={<FaNodeJs />} 
                        text="NodeJS"
                        menuText=""
                    />
                    <Skill 
                        icon={<FaRust />} 
                        text="Rust"
                        menuText=""
                    />
                    <Skill 
                        icon={<FaRocket />} 
                        text="Rocket"
                        menuText=""
                    />
                    <Skill 
                        icon={<FaDatabase />} 
                        text="SQL"
                        menuText=""
                    />
                </section>
                <section className="flex flex-col gap-10">
                    <Skill 
                        icon={<FaWordpress />} 
                        text="Wordpress"
                        menuText=""
                    />
                    <Skill 
                        icon={<FaShopify />} 
                        text="Shopify"
                        menuText=""
                    />
                    <Skill 
                        icon={<FaWeebly />} 
                        text="Weebly"
                        menuText=""
                    />
                    <Skill 
                        icon={<FaAws />} 
                        text="AWS"
                        menuText=""
                    />
                </section>
            </section>
        </section>
    )
}; export default Skills