import styled from "styled-components";


export const Header = styled.header`
    border-bottom: 1px solid;
    text-align: center;
`;

export const Title = styled.h2``;

export const Message = styled.div``;

export const Overlay = styled.div`
position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,.7);
    zindex: 1000;
`;

export const Button = styled.button`
padding: 1rem;
color: white;
background-color: purple;
`;

export const Modal = styled.div`
position: fixed;
left: 50%;
top: 50%;
transform: translate(-50%,-50%);
z-index: 1000;
`;

export const Footer = styled.footer`
    padding-top: 1rem;
`;

export const BackDrop = styled.div`
background: rgba(0, 0, 0, 0.75);
`
