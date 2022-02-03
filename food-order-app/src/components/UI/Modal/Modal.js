import classes from './Modal.module.css';
import ReactDOM from 'react-dom';
import { useContext } from 'react';
import AuthContext from '../../../store/auth-context';
import * as S from './Modal.style';

const Modal = (props) => {
    const ctx = useContext(AuthContext);
    return ReactDOM.createPortal(
        <>
        <S.BackDrop isSpinner={props.isSpinner} onClick={ctx.closeModal}/>
        <S.Modal isSpinner={props.isSpinner} data-locator='modal'>
            {props.children}
        </S.Modal>
        </>,
        document.getElementById('portal')
    )
};

export default Modal;