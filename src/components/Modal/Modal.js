import React from 'react'
import { Button } from 'src/components/Form'

const Modal = (props) => {
    return (
        <div className="modal">
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