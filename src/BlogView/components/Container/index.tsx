/**
 * This component creates the body element for the page.
 * This resizes the page to 960px on desktop and for mobile devices it resizes to screen width.
 */

import { ReactNode } from 'react';
import { DeviceType, useDeviceType } from '../../hooks/useDeviceType';

import { InnerContainer, AppContent, OuterContainer, Content } from './styles';
import { Sidebar } from '../Sidebar';
import { Header } from '../Header';

interface IContainerProps {
  children: ReactNode;
}

export function Container({ children }: IContainerProps) {
  const deviceType = useDeviceType();
  const containerWidth =
    deviceType === DeviceType.Mobile ? 'calc(100% - 50px)' : '960px';

  return (
    <OuterContainer>
      <Sidebar />
      <Content>
        <Header />
        <AppContent deviceType={deviceType}>
          <InnerContainer width={containerWidth}>{children}</InnerContainer>
        </AppContent>
      </Content>
    </OuterContainer>
  );
}
