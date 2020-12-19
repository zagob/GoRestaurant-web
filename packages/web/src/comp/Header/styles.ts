import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 60px;

    display: flex;
    justify-content: flex-end;
    align-items: center;

    div button {
        width: 160px;
        height: 40px;
        border: none;
        text-transform: uppercase;

        
        background-color: #b0e886;
        margin-right: 20px;
        transition: 0.3s;

        &:hover {
            background-color: #8ef342;
            cursor: pointer;
        }
    }
`;