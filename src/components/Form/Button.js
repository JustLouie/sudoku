import React from 'react'
import { createUseStyles } from 'react-jss'

const useButtonStyles = createUseStyles({
    'blue-button': {
        border: 'none',
        outline: 'none',
        backgroundColor: '#181EAD',
        borderRadius: '41px',
        height: '60px',
        minWidth: '375px',
        textAlign: 'center',
        color: 'white',
        fontSize: '24px',
        cursor: 'pointer'
    }
})

const Button = (props) => {
    const styles = useButtonStyles()
    return (
        <button className={styles[props.type]}>
            { props.children }
        </button>
    )
}

Button.defaultProps = {
    type: 'blue-button'
}

export default Button