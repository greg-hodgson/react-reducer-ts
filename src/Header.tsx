import React, { Fragment } from "react";

type NumberProp = {
    number: number,
}

type TextProp = {
    text: string,
}

type ChildProp = {
    children: React.ReactNode,
}

type NumberAndTextProp = NumberProp & TextProp & ChildProp



export default function Header ({text, number, children}: NumberAndTextProp) {
    return (
        <><div>{text}</div>
        <div>{number}</div>
        <div>{children}</div></>
    )

}