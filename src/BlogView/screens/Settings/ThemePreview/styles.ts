import styled from 'styled-components';

export const ThemePreviewContainer = styled.div`
  background-color: ${(props) => props.theme.reader.backgroundColor};
  border-radius: 8px;
  padding: 2px;
  opacity: 0.9;
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;
export const ThemeNameContainer = styled.div<{
  isSelected: boolean;
  fontFamily: string;
}>`
  color: ${(props) => props.theme.reader.textColor};
  font-weight: ${(props) => (props.isSelected ? 'bold' : 'normal')};
  text-decoration: ${(props) => (props.isSelected ? 'underline' : 'none')};
  padding: 10px 15px;
  font-family: ${(props) => props.fontFamily};
`;
