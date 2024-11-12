import styled from 'styled-components';

export const LabelContainer = styled.div`
  font-size: 12px;
  color: ${(props) => props.theme.reader.backgroundColor};
  background-color: ${(props) => props.theme.reader.textColor};
  padding: 5px 10px;
  border-radius: ${(props) => props.theme.borderRadius}px;
`;
