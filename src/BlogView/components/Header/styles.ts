import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  height: 50px;
  font-size: 24px;
  font-weight: bold;
  color: ${(props) => props.theme.textColor};
  display: flex;
  align-items: center;
  padding-left: 10px;
`;
