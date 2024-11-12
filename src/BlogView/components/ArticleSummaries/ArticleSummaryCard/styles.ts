import styled from 'styled-components';

export const ArticleSummaryCardContainer = styled.div`
  background-color: ${(props) => props.theme.reader.backgroundColor};
  display: flex;
  border-radius: ${(props) => props.theme.borderRadius}px;
  color: ${(props) => props.theme.reader.textColor};
  box-shadow: 0px 0px 10px 1px ${(props) => props.theme.reader.textColor};
`;
export const SummaryImage = styled.img`
  height: 165px;
  width: 165px;
  border-radius: ${(props) => props.theme.borderRadius}px 0px 0px
    ${(props) => props.theme.borderRadius}px;
`;
export const CardContent = styled.div`
  padding-bottom: 20px;
  padding-left: 20px;
  height: 165px;
  overflow: scroll;
  box-sizing: border-box;
`;

export const ArticleTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;
