import React from 'react'
import * as R from 'radma'

const RadioInput = (props) => {
    return (
        <lable className="radio-input">
            <input type="radio" {...R.omit(['type', 'children'], props)} />
            <i />
            <span>
                {props.children}
            </span>
        </lable>
    )
}


const Input = (props) => {
    if (props.type === 'radio') {
        return <RadioInput {...props} />
    }

    retrun (
        <input className="basic-input" {...R.omit(['className'], props)} />
    )
}

export default Input