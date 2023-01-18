import { FaAws, FaCss3, FaDatabase, FaHtml5, FaJava, FaJs, FaNodeJs, FaReact, FaRocket, FaRust, FaShopify, FaWeebly, FaWordpress } from "react-icons/fa";


const Skills = () => {
    return (
        <section className="lg:px-48 md:px-24 px-12 text-white text-4xl w-full py-8">
            <section className="flex flex-wrap" style={{'columnGap': '10em', 'rowGap': '1em'}}>
                <section className="flex flex-col gap-10">
                    <section className="flex gap-6">
                        <FaJs className="text-blue-400"/>
                        <p>JavaScript</p>
                    </section>
                    <section className="flex gap-6">
                        <FaCss3 className="text-blue-400"/>
                        <p>CSS3</p>
                    </section>
                    <section className="flex gap-6">
                        <FaHtml5 className="text-blue-400"/>
                        <p>HTML5</p>
                    </section>
                    <section className="flex gap-6">
                        <FaReact className="text-blue-400"/>
                        <p>React</p>
                    </section>
                </section>
                <section className="flex flex-col gap-10 md:-translate-x-5">
                    <section className="flex gap-6">
                        <FaNodeJs className="text-blue-400"/>
                        <p>NodeJS</p>
                    </section>
                    <section className="flex gap-6">
                        <FaRust className="text-blue-400"/>
                        <p>Rust</p>
                    </section>
                    <section className="flex gap-6">
                        <FaRocket className="text-blue-400"/>
                        <p>Rocket</p>
                    </section>
                    <section className="flex gap-6">
                        <FaDatabase className="text-blue-400"/>
                        <p>SQL</p>
                    </section>
                </section>
                <section className="flex flex-col gap-10">
                    <section className="flex gap-6">
                        <FaWordpress className="text-blue-400"/>
                        <p>WordPress</p>
                    </section>
                    <section className="flex gap-6">
                        <FaShopify className="text-blue-400"/>
                        <p>Shopify</p>
                    </section>
                    <section className="flex gap-6">
                        <FaWeebly className="text-blue-400"/>
                        <p>Weebly</p>
                    </section>
                    <section className="flex gap-6">
                        <FaAws className="text-blue-400"/>
                        <p>AWS</p>
                    </section>
                </section>
            </section>
        </section>
    )
}; export default Skills