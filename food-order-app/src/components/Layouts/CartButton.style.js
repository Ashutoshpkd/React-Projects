import styled from "styled-components";


export const Button = styled.button`
    margin: 1rem;
    width: 15rem;
    border-radius: 25px;
    background-color: #4d1601;
    border: none;
    cursor: pointer;
    ${props => (props.animate && `
        animation: bump 300ms ease-out;
    `)}

    @keyframes bump {
        0% {
          transform: scale(1);
        }
        10% {
          transform: scale(0.9);
        }
        30% {
          transform: scale(1.1);
        }
        50% {
          transform: scale(1.15);
        }
        100% {
          transform: scale(1);
        }
      }
`;

export const Items = styled.span`
    background-color: red;
    border-radius: 50%;
    width: 12%;
    padding: 5px;
`;

export const Name = styled.span``;

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

export const Image = styled.img`
    width: 30px;
`;