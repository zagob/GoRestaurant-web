import styled, { css } from 'styled-components';

interface IContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<IContainerProps>`
  margin-bottom: 40px;
  width: 100%;
  height: 50px;
  background: #fff;
  border: none;
  border-radius: 10px;

  display: flex;
  align-items: center;

  ${props =>
    props.isFocused &&
    css`
      color: #ff9000;
      border: 1px solid #ff9000;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #ff9000;
    `}

  input {
    border: 0 none;
    outline: 0;
    width: 100%;
    height: 30px;
    padding-left: 10px;
    font-size: 18px;
    font-family: Roboto;
    font-weight: 300;
    border-radius: 10px;

    

    ${props =>
    props.isFocused &&
    css`
      color: #ff9000;
    `}

    ${props =>
      props.isFilled &&
      css`
        color: #ff9000;
      `}
    }

    svg {
     margin-left: 16px;
   }
`;

// export const Container = styled.div<IContainerProps>`
//   display: flex;
//   align-items: center;

//   background: #fff;
//   border-radius: 8px;
//   padding: 18px 24px;
//   width: 100%;
//   font-size: 16px;

//   & + div {
//     margin-top: 24px;
//   }

//   h1 {
//     margin-bottom: 40px;
//     font-weight: 600;
//     font-size: 36px;
//     line-height: 36px;
//   }

//   ${props =>
//     props.isFocused &&
//     css`
//       color: #ff9000;
//       border-color: #ff9000;
//     `}

//   ${props =>
//     props.isFilled &&
//     css`
//       color: #ff9000;
//     `}

//   input {
//     color: #b7b7cc;

//     &::placeholder {
//       color: #b7b7cc;
//     }
//   }

//   svg {
//     margin-right: 16px;
//   }
// `;
