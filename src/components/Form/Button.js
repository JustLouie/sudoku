import React from 'react'

const Button = (props) => {
    return (
        <button className={`custom-button ${props.type}`}>
            { props.children }
        </button>
    )
}

Button.defaultProps = {
    type: 'blue-button'
}

export default Button