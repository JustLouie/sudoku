import React, { useState, useEffect }  from 'react'
import * as R from 'ramda'
import { createUseStyles } from 'react-jss'

const useInputStyles = createUseStyles({
    basicInput: {
        outline: 'none',
        height: '50px',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid transparent',
        fontSize: '24px',
        borderRadius: '8px',
        textAlign: 'center',
        borderColor: props => props?.error ? '#FF3838' : '#313131',
        color: props => props?.error ? '#FF3838' : props.prefilled ? 'black' : 'blue',
        pointerEvents: props => props.prefilled ? 'none' : 'unset',

        '&::-webkit-outer-spin-button,&::-webkit-inner-spin-button': {
            '-webkit-appearance': 'none',
            margin: 0
        },
        '@media screen and (min-width: 1024px)': {
            height: '70px'
        }
    },
    radioInput: {
        display: 'flex',
        gap: '38.33px',
        alignItems: 'center',
        '& i': {
            width: '16px',
            height: '16px',
            borderRadius: '100%',
            border: '2px solid #181EAD',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '&::before': {
                content: '""',
                width: '10px',
                height: '10px',
                borderRadius: '100%',
                backgroundColor: '#181EAD',
                display: 'none'
            }
        },
        '& input': {
            display: 'none',
            '&:checked + i': {
                '&::before': {
                    display: 'block'
                }
            }
        },
        '& span': {
            fontSize: '24px',
            fontFamily: '"Poppins", sans-serif',
            fontWeight: '500'
        }
    }
})

const RadioInput = (props) => {
    const styles = useInputStyles(props)
    return (
        <label className={styles.radioInput}>
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

    useEffect(() => {
        setValue(props.value)
    }, [props.value])

    
    if (props.type === 'radio') {
        return <RadioInput {...props} />
    }

    return (
        <input 
            className={styles.basicInput}
            value={value}
            onChange={(e) => {
                if (props.restriction === undefined) {
                    setValue(e.target.value)
                } else {
                    if (!props.restriction(e.target.value)) {
                        return false
                    }
                    if (props.onChange) {
                        props.onChange(e.target.value)
                    }

                    setValue(e.target.value)
                }
            }}
            {...R.omit(['className', 'value', 'onChange', 'prefilled', 'restriction', 'error'], props)}
        />
    )
}

Input.defaultProps = {
    value: ''
}

export default Input