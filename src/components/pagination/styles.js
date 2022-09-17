import styled from 'styled-components';

export const DivWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
`;

export const PaginationWrap = styled.ul`
  display: flex;
  list-style: none;
  text-align: center;
  border-radius: 3px;
  color: black;
  padding: 1px;
  background-color: aquamarine;
`;

export const PaginationItems = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 600;
  background: ${(props) => (props.isClicked ? `white` : 'transparent')};

  &:hover {
    cursor: pointer;
    color: black;
    background-color: white;
  }
`;

export const PageButton = styled.button`
  -webkit-tap-highlight-color: transparent;

  &:focus {
    outline: none;
  }
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
  
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  color: black;
  padding: 10px 15px;
  
`;
