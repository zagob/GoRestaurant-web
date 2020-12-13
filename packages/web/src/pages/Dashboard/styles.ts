import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #fff;

    h1 {
        color: #000;
    }
    
`;

export const Header = styled.div`
  background-color: #c72828;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  box-shadow: 2px 0 10px;

  .search {
    width: 588px;
    /* width: 100%;
    height: 100px; */

    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .search input {
      height: 50px;
      width: 240px;
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
      padding-left: 10px;
      /* margin-right: 10px; */
      border: none;
      box-shadow: 1px 1px 8px #000;

      font-size: 18px;

  }

  .search button {
      box-shadow: 1px 1px 8px #000;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      height: 50px;
      border: none;
      width: 80px;

      background: #41c900;
      color: #fff;
      
      &:hover {
          cursor: pointer;
          color: #ccc;
          background: #39b100;
      }

      &:active{
        background: orangered;
        /* border: 2px solid #000; */
        box-shadow: none;
    }
  }

  .botao {
    margin-right: 50px;
  }

  .botao button {
    width: 150px;
    height: 50px;
    border: none;
    box-shadow: 2px 2px 8px;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* background: #39b100; */

    &:hover {
      cursor: pointer;
      box-shadow: none;
    }
  }

  .botao button .text {
    height: 50px;
    width: 100px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    background: #39b100;
    color: #fff;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    
  }

  .botao button .icon {
    height: 50px;
    width: 50px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #41c900;
    color: #fff;
  }
`;

export const Main = styled.div`
    width: 100%;

    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: space-around;
    
`;

export const Food = styled.div`
    /* border: 2px solid red; */
    border-radius: 10px;
    box-shadow: 1px 1px 5px green;
    background-color: #0101;
    width: 350px;
    height: 400px;

    margin: 20px 0 20px 0;

    &:hover {
        cursor: pointer;
        box-shadow: 1px 1px 5px #c72828;
        
    }

    .icons {
        width: 100%;
        height: 40px;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #ccc;
    }

    .icons .edit {
        margin: 0 0 0 20px;
        transition: 0.2s;
        &:hover {
            color: blue;
        }
    }

    .icons .trash {
        margin: 0 20px 0 0;
    }

    .icons .trash:hover {
        transition: 0.2s;
        color: red;
    }
`;

export const FoodImage = styled.div`
    display: flex;
    justify-content: center;

    img {
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        width: 350px;
        height: 200px;
        border-top: 20px;
    }
`;

export const FoodContent = styled.div`
    height: 150px;
    
`;

export const FoodTitle = styled.h1`
    /* background-color: #ccc; */
    display: flex;
    justify-content: flex-start;
    font-size: 24px;
    font-family: Roboto;
    font-weight: 300;
    margin: 10px 0 0 10px;
`;

export const FoodDescription = styled.h3`
    font-family: Roboto, sans-serif;
    font-weight: 400;
    height: 60px;
    font-size: 18px;
    margin: 10px 0 0 10px;
`;

export const FoodPricing = styled.p`
    font-family: Roboto;
    font-weight: 700;
    color: #41c900;
    height: 50px;
    margin-left: 10px;
    font-size: 26px;
`;
