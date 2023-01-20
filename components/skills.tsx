import { FaArrowLeft, FaAws, FaCss3, FaDatabase, FaHtml5, FaJava, FaJs, FaNodeJs, FaReact, FaRocket, FaRust, FaShopify, FaWeebly, FaWordpress } from "react-icons/fa";
import Skill from "./skill";
import { useRef, useState } from "react";


const Skills = () => {

    let [isMenuOpen, setMenuOpen] = useState(false)
    let [menuText, setMenuText] = useState("")
    let [menuTitle, setMenuTitle] = useState("")

    const openSkillsMenu = (value: boolean, text: string, title: string) => {
        setMenuOpen(value)
        setMenuText(text)
        setMenuTitle(title)
    }

    return (
        <section className="skills-section lg:px-48 md:px-24 px-12 text-white text-4xl w-full py-8">
            {!isMenuOpen &&
                <section className="flex flex-wrap" style={{'columnGap': '12.55em', 'rowGap': '1em'}}>
                    <section className="flex flex-col gap-y-10">
                        <Skill 
                            icon={<FaJs />} 
                            text="Javascript"
                            menuText={`
                                As a self-taught developer, diving into the world of JavaScript has been a wild ride filled with triumphs and challenges. 
                                From building my first website to creating complex web applications, the journey has been an exciting one. 
                                With every new project, I've pushed myself to learn new skills and techniques, and I'm always eager to take on the next challenge. 
                                Whether it's working with frameworks like React or experimenting with cutting-edge technologies like WebAssembly, 
                                my passion for JavaScript has only grown stronger. This is my story of how I fell in love with the power and potential 
                                of this versatile programming language.
                            `}
                            openMenuFunc={openSkillsMenu}
                        />
                        <Skill 
                            icon={<FaCss3 />} 
                            text="CSS3"
                            menuText={`
                                From my first foray into web design, I've been fascinated by the endless possibilities of CSS. 
                                The ability to bring a website to life with color, typography, and layout has always been my passion. 
                                As a self-taught developer, I've spent countless hours experimenting with different styles and techniques, 
                                pushing the boundaries of what is possible with CSS. From creating simple, elegant designs to experimenting 
                                with the latest CSS features, I've always been driven to improve my skills and push the limits of web design. 
                                This is my story of how I fell in love with the beauty and power of CSS and how it has shaped my career as a developer.
                            `}
                            openMenuFunc={openSkillsMenu}
                        />
                        <Skill 
                            icon={<FaHtml5 />} 
                            text="HTML5"
                            menuText={`
                                As a self-taught developer, my journey with HTML began with creating basic websites and quickly evolved into 
                                a passion for crafting intuitive and visually appealing web pages. From my first experience of writing a 
                                simple line of code to building complex web pages, HTML has been the foundation of my web development skills. 
                                I've spent countless hours experimenting with different tags and attributes, always eager to learn new ways to 
                                enhance the structure and presentation of my web pages. Whether it's working with semantic elements or experimenting 
                                with new web technologies, I've always been driven to improve my skills and push the boundaries of HTML. This is my 
                                story of how I fell in love with the simplicity and power of HTML and how it has shaped my career as a developer.
                            `}
                            openMenuFunc={openSkillsMenu}
                        />
                        <Skill 
                            icon={<FaReact />} 
                            text="React"
                            menuText={`
                                React has been a game-changer for me as a developer. As I dove into the world of web development, I quickly discovered the 
                                power of this JavaScript library for building complex and dynamic user interfaces. From my first 'Hello World' application 
                                to building large-scale web applications, React has been my go-to tool for creating intuitive and responsive user experiences. 
                                I've spent countless hours experimenting with different components, hooks, and patterns, always eager to learn new ways to optimize 
                                and streamline my code. Whether it's working with other libraries and frameworks or experimenting with new features of React, 
                                I've always been driven to improve my skills and push the limits of what's possible with this powerful library. This is my story 
                                of how I fell in love with the simplicity and power of React and how it has shaped my career as a developer.
                            `}
                            openMenuFunc={openSkillsMenu}
                        />
                    </section>
                    <section className="flex flex-col gap-10">
                        <Skill 
                            icon={<FaNodeJs />} 
                            text="NodeJS"
                            menuText={`
                                Node.js has opened up a whole new world of possibilities for me as a developer. 
                                From my first experience of creating a simple server-side script to building complex and 
                                scalable web applications, Node.js has been my go-to tool for server-side development. 
                                I've spent countless hours experimenting with different modules, packages and patterns, 
                                always eager to learn new ways to optimize and streamline my code. Whether it's working 
                                with other libraries and frameworks or experimenting with new features of Node.js, I've 
                                always been driven to improve my skills and push the boundaries of what's possible with 
                                this powerful runtime. This is my story of how I fell in love with the flexibility and 
                                power of Node.js and how it has shaped my career as a developer.
                            `}
                            openMenuFunc={openSkillsMenu}
                        />
                        <Skill 
                            icon={<FaRust />} 
                            text="Rust"
                            menuText={`
                                Rust has been a revelation for me as a developer. From my first experience of writing a 
                                simple program to building complex and reliable systems, Rust has been my go-to language 
                                for systems programming. I've spent countless hours experimenting with different features, 
                                libraries, and patterns, always eager to learn new ways to optimize and improve my code. 
                                Whether it's working with other languages or experimenting with new features of Rust, I've 
                                always been driven to improve my skills and push the boundaries of what's possible with this 
                                powerful programming language. This is my story of how I fell in love with the safety and performance 
                                of Rust and how it has shaped my career as a developer.
                            `}
                            openMenuFunc={openSkillsMenu}
                        />
                        <Skill 
                            icon={<FaRocket />} 
                            text="Rocket"
                            menuText={`
                                Rocket has been a game-changer for me as a web developer. From my first experience of creating a 
                                simple web server to building complex and performant web applications, Rocket has been my go-to 
                                framework for web development in Rust. I've spent countless hours experimenting with different 
                                features, libraries, and patterns, always eager to learn new ways to optimize and improve my code. 
                                Whether it's working with other frameworks or experimenting with new features of Rocket, I've always 
                                been driven to improve my skills and push the boundaries of what's possible with this powerful web framework. 
                                This is my story of how I fell in love with the simplicity and performance of Rocket and how it has shaped my career as a developer.
                            `}
                            openMenuFunc={openSkillsMenu}
                        />
                        <Skill 
                            icon={<FaDatabase />} 
                            text="SQL"
                            menuText={`
                                SQL has been a fundamental part of my journey as a developer. From my first experience of creating a 
                                simple database to designing and querying complex data structures, SQL has been my go-to language for 
                                managing data. I've spent countless hours experimenting with different queries, indexes and normalization 
                                techniques, always eager to learn new ways to optimize and improve my data management skills. Whether 
                                it's working with different databases or experimenting with new SQL features, I've always been driven 
                                to improve my skills and push the boundaries of what's possible with this powerful language. This is my 
                                story of how I fell in love with the expressiveness and power of SQL and how it has shaped my career as a developer.
                            `}
                            openMenuFunc={openSkillsMenu}
                        />
                    </section>
                    <section className="flex flex-col gap-10">
                        <Skill 
                            icon={<FaWordpress />} 
                            text="Wordpress"
                            menuText={`
                                WordPress has been a valuable tool in my journey as a developer. From my first experience of creating a simple blog 
                                to designing and building complex websites, WordPress has been my go-to platform for web development. I've spent 
                                countless hours experimenting with different themes, plugins, and features, always eager to learn new ways to 
                                optimize and improve my web development skills. Whether it's working with different templates or experimenting 
                                with new WordPress features, I've always been driven to improve my skills and push the boundaries of what's possible 
                                with this powerful content management system. This is my story of how I fell in love with the flexibility and ease of 
                                use of WordPress and how it has shaped my career as a developer.
                            `}
                            openMenuFunc={openSkillsMenu}
                        />
                        <Skill 
                            icon={<FaShopify />} 
                            text="Shopify"
                            menuText={`
                                Shopify has been a valuable tool in my journey as an e-commerce developer. From my first experience of setting up 
                                a simple online store to designing and building complex e-commerce platforms, Shopify has been my go-to platform for 
                                building and managing online businesses. I've spent countless hours experimenting with different themes, apps, and 
                                features, always eager to learn new ways to optimize and improve my e-commerce development skills. Whether it's working 
                                with different templates or experimenting with new Shopify features, I've always been driven to improve my skills and push 
                                the boundaries of what's possible with this powerful e-commerce platform. This is my story of how I fell in love with the 
                                flexibility and ease of use of Shopify and how it has shaped my career as a developer.
                            `}
                            openMenuFunc={openSkillsMenu}
                        />
                        <Skill 
                            icon={<FaWeebly />} 
                            text="Weebly"
                            menuText={`
                                Weebly has been a valuable tool in my journey as a website developer. From my first experience of creating a simple 
                                website to designing and building complex online presences, Weebly has been my go-to platform for building and managing 
                                websites. I've spent countless hours experimenting with different themes, features, and integrations, always eager to 
                                learn new ways to optimize and improve my website development skills. Whether it's working with different templates or 
                                experimenting with new Weebly features, I've always been driven to improve my skills and push the boundaries of what's 
                                possible with this powerful website builder. This is my story of how I fell in love with the flexibility and ease of use 
                                of Weebly and how it has shaped my career as a developer.
                            `}
                            openMenuFunc={openSkillsMenu}
                        />
                        <Skill 
                            icon={<FaAws />} 
                            text="AWS"
                            menuText={`
                                AWS has been a game-changer for me as a developer. From my first experience of using a simple cloud service to building 
                                complex and scalable systems, AWS has been my go-to platform for cloud computing. I've spent countless hours experimenting 
                                with different services, features, and best practices, always eager to learn new ways to optimize and improve my cloud development 
                                skills. Whether it's working with different databases or experimenting with new AWS features, I've always been driven to improve 
                                my skills and push the boundaries of what's possible with this powerful cloud platform. This is my story of how I fell in love 
                                with the versatility and scalability of AWS and how it has shaped my career as a developer.
                            `}
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
                    <p className="text-2xl py-4 text-center underline">{menuTitle}</p>
                    <p className="text-base py-4">{menuText}</p>
                </section>
            }
        </section>
    )
}; export default Skills