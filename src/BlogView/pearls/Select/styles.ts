import styled from 'styled-components';
export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const SelectLabel = styled.label`
  font-size: 14px;
  margin-bottom: -12px;
  z-index: 10;
  padding: 5px;
  margin-left: 12px;
  background-color: ${(props) => props.theme.containerBackgroundColor};
  width: fit-content;
`;
export const SelectComponent = styled.select`
  appearance: none;
  webkit-appearance: none;
  background-color: ${(props) => props.theme.containerBackgroundColor};
  padding: 15px 20px;

  border-radius: ${(props) => props.theme.borderRadius}px;
  color: ${(props) => props.theme.textColor};
  font-size: 16px;
`;
