import React from 'react';
import './Modal.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

const Modal = (props) => {
    return (
        <Aux>
            <Backdrop show={props.click} clicked={props.modalClosed}/>
            <div className='Modal' style={{
                transform: props.click ? 'translateY(0)' : 'translateY(-100)',
                opacity: props.click ? '1' : '0'
            }}>
                {props.children}
            </div>
        </Aux>
    );    
}

export default Modal;