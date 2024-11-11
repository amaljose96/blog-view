import { useEffect, useState } from 'react';

export enum DeviceType {
  Mobile = 'Mobile',
  Desktop = 'Desktop',
}

export function useDeviceType(): DeviceType {
  const [deviceType, setDeviceType] = useState<DeviceType>(
    window.innerWidth < 768 ? DeviceType.Mobile : DeviceType.Desktop,
  );

  useEffect(() => {
    const handleResize = () => {
      setDeviceType(
        window.innerWidth < 768 ? DeviceType.Mobile : DeviceType.Desktop,
      );
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return deviceType;
}
