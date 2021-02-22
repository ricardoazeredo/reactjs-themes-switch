import styled from 'styled-components';

export const Container = styled.div`
  height: 60px;
  background: ${props => props.theme.colors.primary};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;  
`;

// export const CheckedIcon = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items:  center;
//   height: 100%;
//   font-size: 15;
//   padding-right: 2;
// `;

// export const UncheckedIcon = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100%;
//   font-size: 15;
//   color: 'orange';
//   padding-right: 2;
// `;

// export const UncheckedHandleIcon = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100%;
//   color: 'orange';
//   font-size: 20;
// `;