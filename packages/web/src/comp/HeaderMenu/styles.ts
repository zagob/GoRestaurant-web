import styled from 'styled-components';

export const Container = styled.div`
  background-color: #c72828;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  .search {
    /* border: 1px solid #000; */
    width: 588px;
    /* width: 100%;
    height: 100px; */

    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .botao {
    margin-right: 50px;
  }

  .botao button {
    width: 150px;
    height: 50px;
    border: none;
    box-shadow: 2px 2px 15px;
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
    /* margin-left: 20px; */
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
    background-color: #0101;
    width: 350px;
    height: 400px;

    margin: 20px 0 20px 0;

    .trash {
        display: flex;
        justify-content: flex-end;
        margin-right: 20px;
    }

    .trash span:hover {
        transition: 0.2s;
        color: red;
    }
`;

export const FoodImage = styled.div`
    display: flex;
    justify-content: center;

    img {
        width: 350px;
        height: 200px;
        border-top: 20px;
    }
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


// export const Container = styled.div`
//   background: #c72828;
//   width: 100%;
//   height: 50px;
//   padding: 30px 0;
//   border: 1px solid red;
//   display: flex;

//   .div {
//     width: 400px;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     /* border: 1px solid red; */
//   }

//   header {
//     width: 1280px;
//     margin: 0 auto;
//     padding: 0 0 160px;
//     display: flex;
//     align-items: center;
//     justify-content: space-between;

//     nav {
//       div {
//         button {
//           font-weight: 600;
//           border-radius: 8px;
//           border: 0;
//           background: #39b100;
//           color: #fff;

//           display: flex;
//           flex-direction: row;
//           align-items: center;

//           .text {
//             padding: 16px 24px;
//           }

//           .icon {
//             display: flex;
//             padding: 16px 16px;
//             background: #41c900;
//             border-radius: 0 8px 8px 0;
//             margin: 0 auto;
//           }
//         }
//       }
//     }
//   }
// `;

