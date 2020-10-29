import React, { useState }  from 'react'
import * as R from 'ramda'
import { createUseStyles } from 'react-jss'

const useInputStyles = createUseStyles({
    basicInput: {
        border: 'none',
        outline: 'none',
        height: '50px',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid transparent',
        fontSize: '24px',
        borderRadius: '8px',
        textAlign: 'center',
        borderColor: props => props?.error ? '#FF3838' : '#313131',
        color: props => props?.error ? '#FF3838' : props.prefilled ? 'black' : 'blue',

        '&::-webkit-outer-spin-button,&::-webkit-inner-spin-button': {
            '-webkit-appearance': 'none',
            margin: 0
        },
        '@media screen and (min-width: 1024px)': {
            height: '70px'
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
    const styles = useInputStyles(props)
    const [ value, setValue ] = useState(props.value)

    if (props.type === 'radio') {
        return <RadioInput {...props} />
    }

    return (
        <input 
            className={styles.basicInput}
            value={value}
            onChange={(e) => {
                if (props.onChange) {
                    props.onChange(e.target.value)
                }

                if (props.restriction === undefined) {
                    setValue(e.target.value)
                } else {
                    if (!props.restriction(e.target.value)) {
                        return false
                    }

                    setValue(e.target.value)
                }
            }}
            {...R.omit(['className', 'value', 'onChange'], props)}
        />
    )
}

Input.defaultProps = {
    value: ''
}

export default Input