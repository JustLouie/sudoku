import React from 'react'
import * as R from 'ramda'
import { createUseStyles } from 'react-jss'

const useInputStyles = createUseStyles({
    basicInput: {
        border: 'none',
        outline: 'none',
        minHeight: '100px',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid transparent',
        fontSize: '40px',
        borderRadius: '8px',
        textAlign: 'center',
        borderColor: props => props?.error ? 'FF3838' : '#313131',
        color: props => props?.error ? 'FF3838' : 'black',

        '&::-webkit-outer-spin-button,&::-webkit-inner-spin-button': {
            '-webkit-appearance': 'none',
            margin: 0
        }
    }
})

const RadioInput = (props) => {
    return (
        <label className="radio-input">
            <input type="radio" {...R.omit(['type', 'children'], props)} />
            <i />
            <span>
                {props.children}
            </span>
        </label>
    )
}


const Input = (props) => {
    const styles = useInputStyles()

    if (props.type === 'radio') {
        return <RadioInput {...props} />
    }

    return (
        <input className={styles.basicInput} {...R.omit(['className'], props)} />
    )
}

export default Input