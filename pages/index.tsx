export const Ribbon = () => {
    return (
        <section className="bg-green-500 text-orange-200 text-lg text-center font-bold sticky">
            <span>Welcome to my website!</span>
        </section>
    )
}

export const Intro = () => {
    return (
        <p className="text-gray-200 mx-32">
            Hello
        </p>
    )
}

const Index = () => {
    return (
        <main className="bg-black bg-blend-color-burn">
            <Ribbon />
            <Intro />
        </main>
    )
}; export default Index