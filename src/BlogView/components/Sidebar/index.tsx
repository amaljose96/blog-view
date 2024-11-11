import { useTheme } from 'BlogView/pearls/theme/useTheme';
import {
  SidebarContainer,
  SidebarHeader,
  SidebarOptionContainer,
  SidebarOptions,
} from './styles';

import { Icon } from 'BlogView/pearls/Icon';
import { useDeviceType } from 'BlogView/hooks/useDeviceType';

import { sidebarOptions } from './config';

export function Sidebar() {
  const { theme } = useTheme();
  const deviceType = useDeviceType();

  console.log(open);
  return (
    <SidebarContainer deviceType={deviceType}>
      <SidebarHeader>
        <Icon name="appIcon" color={theme.textColor} size="25px" />
      </SidebarHeader>
      <SidebarOptions>
        {sidebarOptions.map((sidebarOption) => {
          return (
            <SidebarOptionContainer>
              <Icon
                name={sidebarOption.icon}
                color={theme.textColor}
                size={'20px'}
              />

              {sidebarOption.text}
            </SidebarOptionContainer>
          );
        })}
      </SidebarOptions>
    </SidebarContainer>
  );
}
