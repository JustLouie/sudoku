import { createUseStyles } from 'react-jss'

export default createUseStyles({
    modal: {
        width: '100%',
        height: '100%',
        position: 'fixed',
        backgroundColor: 'rgb(0, 0, 0, 0.7)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    modalContent: {
        width: '100%',
        maxWidth: '700px'
    }
})