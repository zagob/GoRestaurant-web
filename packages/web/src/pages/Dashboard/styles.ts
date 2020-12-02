import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1 {
        color: #000;
    }
`;

export const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100px;
`;

export const Main = styled.div`
    width: 100%;

    display: grid;
    grid-template-columns: auto auto auto auto;
    justify-content: space-around;
    
`;

export const Food = styled.div`
    background-color: #0101;
    width: 350px;
    height: 400px;
`;

export const FoodImage = styled.div`
    display: flex;
    justify-content: center;
`;

export const FoodContent = styled.div`
    /* border: 1px solid red; */
    
`;

export const FoodTitle = styled.h1`
    background-color: #ccc;
    display: flex;
    justify-content: center;
    font-size: 20px;
`;

export const FoodDescription = styled.h3`
    font-size: 18px;
    margin-left: 10px;
`;

export const FoodPricing = styled.p`
    margin-left: 10px;
    font-size: 26px;
`;
