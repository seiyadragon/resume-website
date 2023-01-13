

type TextColumnProps = {
    title: string,
    body: string,
}

const TextColumn = ({title, body}: TextColumnProps) => {
    return (
        <section className="lg:w-1/4 md:w-1/4 w-full">
            <p className="text-lg underline py-4">{title}</p>
            <p className="text-base">
                {body}
            </p>
        </section>
    )
}; export default TextColumn