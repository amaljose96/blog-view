import styled from 'styled-components';

export const CardContainer = styled.div`
  background-color: ${(props) => props.theme.reader.backgroundColor};
  padding: 16px;
  border-radius: ${(props) => props.theme.borderRadius}px;
`;
