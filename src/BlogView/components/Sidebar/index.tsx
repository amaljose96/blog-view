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
import { useNavigate } from 'react-router';
import { DataManager } from 'BlogView/DataManager';
import { useTranslation } from 'react-i18next';

export function Sidebar() {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const deviceType = useDeviceType();
  const navigate = useNavigate();
  const dataManager = new DataManager();

  const translatedTexts: Record<string, string> = {
    homepage: t('Home'),
    recent: t('Recent Articles'),
    saved: t('Saved Articles'),
  };

  const hasRecentlyOpened =
    dataManager.getRecentlyOpenedArticleSummaries().length > 0;

  return (
    <SidebarContainer deviceType={deviceType}>
      <SidebarHeader>
        <Icon name="appIcon" color={theme.textColor} size="25px" />
      </SidebarHeader>
      <SidebarOptions>
        {sidebarOptions
          .filter((sidebarOption) => {
            if (sidebarOption.key === 'recent') {
              return hasRecentlyOpened;
            }
            return true;
          })
          .map((sidebarOption) => {
            return (
              <SidebarOptionContainer
                onClick={() => {
                  navigate(sidebarOption.route);
                }}
              >
                <Icon
                  name={sidebarOption.icon}
                  color={theme.textColor}
                  size={'20px'}
                />

                {translatedTexts[sidebarOption.key]}
              </SidebarOptionContainer>
            );
          })}
      </SidebarOptions>
    </SidebarContainer>
  );
}
