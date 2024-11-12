import { DeviceType } from '../../hooks/useDeviceType';
import { styled } from 'styled-components';
export const OuterContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.menuBackgroundColor};
  display: flex;
  overflow: hidden;
`;
export const Content = styled.div`
  flex-grow: 1;
`;

export const AppContent = styled.div<{ deviceType: DeviceType }>`
  height: calc(100vh - 50px);
  background-color: ${(props) => props.theme.containerBackgroundColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: ${(props) => props.theme.borderRadius}px 0px 0px 0px;
`;
export const InnerContainer = styled.div<{ deviceType: DeviceType }>`
  width: ${(props) =>
    props.deviceType === DeviceType.Mobile ? 'calc(100% - 100px)' : '960px'};
  min-width: ${(props) =>
    props.deviceType === DeviceType.Mobile ? 'calc(100% - 100px)' : '960px'};
  padding: ${(props) =>
    props.deviceType === DeviceType.Desktop ? '20px' : '5px'};
`;
