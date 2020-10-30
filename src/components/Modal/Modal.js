import React from 'react'
import { Button } from '../Form'
import { createUseStyles } from 'react-jss'

const useModalStyles = createUseStyles({
    modal: {
        width: '100%',
        height: '100%',
        position: 'fixed',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: '99',
        left: '0',
        top: '0'
    },
    modalOverlay: {
        width: '100%',
        height: '100%',
        position: 'fixed',
        backgroundColor: 'rgba(0, 0, 0, 0.3)'
    },
    modalContent: {
        position: 'relative',
        zIndex: '2',
        width: '60%',
        height: '60%',
        backgroundColor: 'white',
        borderRadius: '4px',
        padding: '60px 73px',
        display: 'grid',
        gridTemplateRows: 'auto 1fr auto',
        gridGap: '100px'
    },
    modalHeader: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',

        '& h2': {
            textAlign: 'center',
            fontSize: '40px',
            fontFamily: '"Poppins", sans-serif',
            width: '100%'
        },
        '& button': {
            border: 'none',
            outline: 'none',
            background: 'none',
            position: 'absolute',
            right: '0px'
            
        }
    },
    modalFooter: {
        display: 'flex',
        justifyContent: 'center'
    }
})

const Modal = (props) => {
    const styles = useModalStyles()
    const onComplete = () => {
        props.onComplete()
        props.onClose()
    }
    return (
        <div className={styles.modal}>
            <div className={styles.modalOverlay}></div>
            <div className={styles.modalContent}>
                <div className={styles.modalHeader}>
                    <h2>
                        { props.title }
                    </h2>
                    <button className="close-modal" onClick={props.onClose}>

                    </button>
                </div>
                <div classsName={styles.modalBody}>
                    {props.children}
                </div>
                <div className={styles.modalFooter}>
                    <Button onClick={onComplete}>
                        { props.footerButtonTitle }
                    </Button>
                </div>
            </div>
        </div>
    )
}

Modal.defaultProps = {
    title: '',
    footerButtonTitle: 'Submit'
}

export default Modal