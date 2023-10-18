import styled from 'styled-components';

export const Button = styled.button`
    border: none;
    outline: none;
    border-radius: 50%;
    background-color: hsl(150, 100%, 66%);
    min-width: 66px;
    min-height: 66px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: -33px;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
    transition: 0.1s ease;
    &:hover {
        box-shadow: 0 0 36px hsl(150, 100%, 66%);
    }

    &:not(:active),
    &:not(:focus) {
        transition: 0.5s ease;
    }
`;
