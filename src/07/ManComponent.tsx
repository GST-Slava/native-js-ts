import React, {useState} from "react";

export type ManType = {
    name: string
    age: number
    lessons: Array<{ title: string }>
    address: {
        street: {
            title: string
        }
    }
}

type PropsType = {
    title: string
    man: ManType
}

function useSlavaState(m: string){
    return [m, function (){}]
}

export const ManComponent: React.FC<PropsType> = ({title, man, ...props}) => {
    //const {title, man, ...restProps} = props

    const [message, setMessage]= useState('hello')

    return (
        <div>
            <h1>{title}</h1>
            <hr/>
            <div>{man.name}</div>
        </div>
    )
}