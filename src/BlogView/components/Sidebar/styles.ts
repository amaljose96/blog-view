import { DeviceType } from 'BlogView/hooks/useDeviceType';
import styled from 'styled-components';

export const SidebarContainer = styled.div<{
  deviceType: DeviceType;
}>`
  width: 50px;
  box-sizing: border-box;
  height: 100vh;

  overflow: hidden;
  background-color: ${(props) => props.theme.menuBackgroundColor};
  z-index: 100;
  transition: all 0.3s;

  &:hover {
    width: 220px;
  }
  ${(props) =>
    props.deviceType === DeviceType.Mobile &&
    `
    width:15px;
    
    `}
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
  background-color: ${(props) => props.theme.menuHoverBackgroundColor}8;
  border-radius: ${(props) => props.theme.borderRadius}px;
  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.menuHoverBackgroundColor};
  }
`;
