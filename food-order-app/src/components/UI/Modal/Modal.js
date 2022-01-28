import classes from './Modal.module.css';
import ReactDOM from 'react-dom';
import { useContext } from 'react';
import AuthContext from '../../../store/auth-context';

const Modal = (props) => {
    const ctx = useContext(AuthContext)
    return ReactDOM.createPortal(
        <>
        <div className={classes.backdrop} onClick={ctx.closeModal}/>
        <div className={classes.modal}>
            {props.children}
        </div>
        </>,
        document.getElementById('portal')
    )
};

export default Modal;