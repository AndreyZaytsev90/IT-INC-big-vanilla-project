import React, {useState} from "react";

type LessonsType = {
    title: string
    name?: string
}

export type ManPropsType = {
    name: string,
    age: number,
    lessons: Array<LessonsType>
    address: {
        street:{
            title: string
        }
    }
}

type PropsType = {
    title: string
    man: ManPropsType
    food: Array<string>
    car: {model: string}

}
function useAndreyState(m: string) {
    return [ m , function (){}]
}
function useAndreyState2(m: string) {
    return {
        message: m,
        setMessage: function (){}
    }
}


export const ManComponent: React.FC<PropsType> = ( {title, man, ...props}) => {

    const [message, setMessage ] = useState("hello")

    /*const {title} = props
    const {name} = props.man*/
    /*const { title, man } = props*/

    return <div>
        <h1>{title}</h1>
        <hr/>
        <div>
            {props.car.model}
        </div>
        <div>
            {man.name}
        </div>
    </div>
}