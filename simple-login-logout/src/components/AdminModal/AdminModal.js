import React, { useContext } from "react";
import ReactDOM from 'react-dom';
import Button  from "../UI/Button/Button";
import AuthContext from "../../store/auth-context";

const AdminModal = (props) => {
    const ctx = useContext(AuthContext);

    const OVERLAY_STYLES = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, .7)',
        //zIndex: 1000
      }

      const MODAL_STYLES = {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#FFF',
        padding: '50px',
        textAlign: 'center',
        //zIndex: 1000
      }

    return ReactDOM.createPortal(
        <>
        <div style={OVERLAY_STYLES}/>
        <div style={MODAL_STYLES}>
            <h2>Hello Admin! How are you.</h2>
            <p>You will achieve great things in life.</p>
            <div >
            <Button type="button" onClick={ctx.closeModal}>Return</Button>
            </div>
        </div>
        </>,
        document.getElementById('portal')
    );
}

export default AdminModal;