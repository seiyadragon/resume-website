import { useState } from "react"

type LanguageSectionProps = {
    language: string,
    description: string
}

export const LanguageSection = ({language, description}: LanguageSectionProps) => {
    const [isMenuActive, setMenuActive] = useState(false)

    return (
        <li className="w-full flex flex-col items-center">
            <button 
                className="mt-4 bg-blue-400 lg:w-1/2 w-full text-center py-2 transition hover:scale-105 shadow-lg"
                onClick={() => setMenuActive(!isMenuActive)}
            >
                {language}
            </button>
            {isMenuActive &&
                <p className="bg-blue-400 lg:w-1/2 w-full py-4 px-4 text-slate-900 text-lg shadow-lg">
                    {description}
                </p>
            }
        </li>
    )
}

const KnownLanguages = () => {
    return (
        <ul className="flex flex-col items-center text-slate-900 text-2xl py-8 lg:w-1/2 w-full">
            <span className="text-4xl text-slate-900 bg-blue-400 w-full text-center py-8 shadow-xl">Languages</span>
            <LanguageSection
                language="Java"
                description={`
                    Java was the first programming language I ever learned. And so my introduction
                    to programming, was through Java. Because of that, I have object-oriented concepts
                    pretty well understood. In fact, object-oriented is still my preferred method of
                    programming. I also took a Java class in college, which refreshed my memory on
                    the language, but on the day to day I do not use it a lot.
                `}
            />
            <LanguageSection
                language="C++"
                description={`
                    In my early days of programming, I wanted to create video games.
                    And what other language would you use for that purpose? C++ was tedious, setting up
                    projects with CMake was annoying to say the least. And basically anything you wanted to do,
                    you needed to program yourself because it was either that or finding some library,
                    which would be harder to include in your project anyway. All joking aside, C++ is a
                    very powerful language, and if the package managers for it were as good as NPM I would
                    definitely use it more. I love the control it gives you over your data, with pointers and
                    all that. Using C++ I learned a lot about OpenGL, and graphics programming including GLSL.
                `}
            />
            <LanguageSection
                language="GLSL"
                description={`
                    I used GLSL a lot to make shaders for OpenGL, I have also used Godot shading language
                    to make shaders for simple godot games, as well as made shaders in Blender.
                `}
            />
            <LanguageSection
                language="C#"
                description={`
                    C# was a nice alternative to C++, it has a syntax very similar to Java but without some of the annoying
                    parts of it. It's fully compatible with C, and so I was able to use the same frameworks I was using, such as
                    SFML, GLFW, OpenGL, etc... It was also much easier to install those frameworks since the dotnet framework, and
                    the package manager is much nicer.
                `}
            />
            <LanguageSection
                language="GO"
                description={`
                    GO is one of my favorite programming languages. It's my goto for system level programming
                    the syntax is very similar to C# and it's very fast and clean. The first time I tried it was
                    to make a project where I wanted a script to automatically rank stocks for me based on a formula
                    given to me by my dad.
                `}
            />
            <LanguageSection
                language="Javascript"
                description={`
                    JavaScript was a language I started to learn during my sophomore year
                    of high school during a web development class. At first, I did not like it
                    because it was different from all the static typed/compiled languages, I
                    had used before. However, after using it for years I've come to fall in love
                    with the language, with how free it is. What I mean is in JavaScript when
                    you want to do something, you just do it and the language allows you, now
                    any errors or bugs created by this is up to you to solve, but JavaScript
                    lets you do it. Currently, JavaScript is the language that I've used the most,
                    and it's the one that I see myself continuing to use for many years in the future.
                `}
            />
            <LanguageSection
                language="TypeScript"
                description={`
                    My journey with TypeScript actually started as an accident, I had heard of it, but never
                    really planned on using it. Until I started using NextJs, when creating a project, it would
                    ask you if you want to use TypeScript, I hit Yes instead of No, and now my project was in TypeScript
                    I knew it was mostly the same as JavaScript, so I just kept going with it, but then I started getting compiler
                    errors. Nothing I couldn't fix with a couple of visits to the docs. TypeScript soon became one of my favorite
                    languages as it gives you the same degree of freedom as JavaScript does while at the same time adding
                    some needed rigidity to the code for readability.
                `}
            />
            <LanguageSection
                language="Rust"
                description={`
                    Rust is a language that I love and hate. The first time I tried Rust was as an alternative to C++ to make a game engine.
                    I loved the package manager and all the features that the language contained but back then I did not like any syntax that wasn't
                    basically Java, C++ or C#. And soon I started battling with the compiler and realized I couln't do whatever I wanted like in C++ and,
                    I quickly abandoned Rust, however not before trying the Rocket api and making my very first web server. It wouldn't be until years later
                    when I began to develop an interest in websites, that I would revisit Rust. Specifially the Rocket api, now armed with an understanding
                    of what I was actually doing I created the simple quotes web api that's used in this website. I still fight with the compiler, but
                    more and more I'm falling in love with Rust. It's got a very elegant syntax very similar to TypeScript and it gives you absolute control
                    over memory and performance without sacrificing safety.
                `}
            />
        </ul>
    )
}; export default KnownLanguages