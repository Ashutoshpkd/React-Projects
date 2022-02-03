import styled from "styled-components";

export const Wrapper = styled.div``;

export const BackDrop = styled.div`
    ${props => !props.isSpinner && `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        z-index: 20;
        background-color: rgba(0, 0, 0, 0.75);
    `}
    ${props => props.isSpinner && `
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.75);
    `}
`;

export const Modal = styled.div`
    ${props => !props.isSpinner && `
        position: fixed;
        top: 20vh;
        left: 25%;
        width: 50%;
        background-color: white;
        padding: 1rem;
        border-radius: 14px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
        z-index: 30;
        animation: slide-down 300ms ease-out forwards;
    `}
    ${props => props.isSpinner && `
        position: fixed;
        top: 50%;
        left: 50%;
        tranform: translate(-50%, -50%);
    `}

    @media (min-width: 768px) {
        .modal {
          width: 40rem;
          left: calc(50% - 20rem);
        }
      }
      
      @keyframes slide-down {
        from {
          opacity: 0;
          transform: translateY(-3rem);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
`;