import ReactDOM from 'react-dom';
import * as S from './ErrorModal.style';


const ErrorModal = (props) => {

    const {
        title,
        message,
        closeModal,
    } = props;

    return ReactDOM.createPortal(
        <>
        <S.Overlay />
            <S.Modal>
                <S.Header>
                    <S.Title>{title}</S.Title>
                </S.Header>
                <S.Message>{message}</S.Message>
                <S.Footer>
                    <S.Button type='button' onClick={() => closeModal()}>Okay</S.Button>
                </S.Footer>
        </S.Modal>
        </>,
        document.getElementById('portal')
    )
};

export default ErrorModal;