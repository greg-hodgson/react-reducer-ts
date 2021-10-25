import React from 'react'

type ButtonProps = {
    handleClick: () => void,
    title: string,
}

export default function Button ({handleClick, title}: ButtonProps) {
    
    return (
        <>
            <button onClick={handleClick}>{title}</button>
        </>
    )
}