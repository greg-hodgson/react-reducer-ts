import React, { useState } from "react"

type TProps = {
    handleEnter: (text: string) => void
}

export default function Input ({handleEnter}: TProps) {

    const [text, setText] = useState<string>("")
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value)
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.code === "Enter") {
            handleEnter(text)
            setText("")
        }
    }

    return (
        <>
            <input
                placeholder="Input here and press Enter."
                onChange={handleChange}
                type="text" value={text}
                onKeyDown={handleKeyDown}
            />
        </>
    )
}