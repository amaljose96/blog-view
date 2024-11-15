import { DeviceType } from 'BlogView/hooks/useDeviceType';
import styled from 'styled-components';

export const SidebarContainer = styled.div<{
  deviceType: DeviceType;
}>`
  min-width: 50px;
  width: 50px;
  box-sizing: border-box;
  height: 100vh;

  overflow: hidden;
  background: linear-gradient(
    to left,
    ${(props) => props.theme.menuBackgroundColor},
    ${(props) => props.theme.menuBackgroundColor}22
  );

  z-index: 100;
  transition: all 0.3s;

  &:hover {
    width: 220px;
    min-width: 220px;
  }
`;

export const SidebarHeader = styled.div`
  height: 50px;
  width: 50px;
  font-size: 24px;
  color: ${(props) => props.theme.textColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SidebarOptions = styled.div`
  padding: 5px;
  padding-top: 30px;
  padding-bottom: 30px;
  height: calc(100vh - 50px);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const SidebarOptionsSet = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
export const SidebarOptionContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  gap: 15px;
  width: 200px;
  box-sizing: border-box;
  color: ${(props) => props.theme.textColor};
  font-size: 16px;
  background-color: ${(props) => props.theme.menuHoverBackgroundColor}88;
  border-radius: ${(props) => props.theme.borderRadius}px;
  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.menuHoverBackgroundColor};
  }
`;
