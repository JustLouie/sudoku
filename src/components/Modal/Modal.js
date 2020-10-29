import React from 'react'
import { Button } from 'src/components/Form'
import { createUseStyles } from 'react-jss'

const useModalStyles = createUseStyles({
    modal: {
        width: '100%',
        height: '100%',
        position: 'fixed',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
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
        width: '80%',
        height: '80%',
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

        'h2': {
            textAlign: 'center',
            fontSize: '40px',
        },
        'button': {
            border: 'none',
            outline: 'none',
            background: 'none',
            position: 'absolute',
            right: '0px'
            
        }
    },
    modalFooter: {
        
    }
})

const Modal = (props) => {
    return (
        <div className="modal">
            <div className={styles.modalOverlay}
            <div className="modal-content">
                <div className="modal=header">
                    <h2>
                        { props.title }
                    </h2>
                    <button className="close-modal">

                    </button>
                </div>
                <div classsName="modal-body">
                    {...props.children}
                </div>
                <div classname="modal-footer">
                    <Button>
                        { props.footerButtonTitle }
                    </Button>
                </div>
            </div>
        </div>
    )
}

Moda.defaultProps = {
    title: '',
    footerButtonTitle: 'Submit'
}

export default Modal