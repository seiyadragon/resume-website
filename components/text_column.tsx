import { useState } from "react";


type TextColumnProps = {
    title: string,
    body: string,
}

const TextColumn = ({title, body}: TextColumnProps) => {
    return (
        <section className="text-column w-full border-2 border-blue-400 shadow-xl rounded-lg py-4 px-4 backdrop-blur-lg hover:backdrop-blur-3xl">
            <section className="hover:opacity-90 opacity-60 transition-opacity">
                <p className="text-lg underline py-4">{title}</p>
                <p className="text-base">
                    {body}
                </p>
            </section>
        </section>
    )
}; export default TextColumn