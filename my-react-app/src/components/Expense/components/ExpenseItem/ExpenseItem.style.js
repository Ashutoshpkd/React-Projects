import styled from 'styled-components';

export const ExpenseItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    margin: 1rem 0;
    background-color: #4b4b4b;
`;

export const Description = styled.div`
    color: #3a3a3a;
    font-size: 30px;
    align-items: center;
    flex: 1;
    margin: 0 3rem;
    color: white;
    @media (min-width: 580px) {
        font-size: 1.25rem;
    }
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    flex: 1;
    @media (min-width: 580px) {
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        flex: 1;
    }
`

export const Amount = styled.div`
    font-size: 25px;
    font-weight: bold;
    color: white;
    background-color: #40005d;
    border: 1px solid white;
    padding: 0.5rem;
    border-radius: 12px;
    @media (min-width: 580px) {
        font-size: 1.25rem;
        padding: 0.5rem 1.5rem;
    }
`;

export const Date = styled.div`
    margin-left: 15px;
    font-size: 25px;
    color: black;
    font-weight: bold;
`;