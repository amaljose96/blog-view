export type IconName = 'home' | 'recent' | 'saved' | 'appIcon';

interface IIconProps {
  name: IconName;
  color: string;
  size: string;
}

export function Icon({ name, color, size }: IIconProps) {
  const iconMap = {
    home: (
      <svg
        width={size}
        height={size}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.5 18.3333V9.99996H12.5V18.3333M2.5 7.49996L10 1.66663L17.5 7.49996V16.6666C17.5 17.1087 17.3244 17.5326 17.0118 17.8451C16.6993 18.1577 16.2754 18.3333 15.8333 18.3333H4.16667C3.72464 18.3333 3.30072 18.1577 2.98816 17.8451C2.67559 17.5326 2.5 17.1087 2.5 16.6666V7.49996Z"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    saved: (
      <svg
        width={size}
        height={size}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.5 3.26662C11.775 3.55829 11.1084 3.88329 10.5834 4.20829L10.4417 4.29995C10.2 4.44995 9.8 4.44995 9.55833 4.29995L9.35 4.17498C7.86666 3.24998 5.21666 2.36662 3.46666 2.22495C2.475 2.14162 1.66669 2.89161 1.66669 3.88328V13.95C1.66669 14.75 2.31668 15.4999 3.11668 15.5999L3.35838 15.6333C5.16671 15.875 7.95833 16.7916 9.55833 17.6666L9.5917 17.6833C9.8167 17.8083 10.175 17.8083 10.3917 17.6833C11.9917 16.7999 14.7917 15.875 16.6083 15.6333L16.8834 15.5999C17.6834 15.4999 18.3334 14.75 18.3334 13.95V3.89162C18.3334 2.89162 17.5167 2.14996 16.525 2.2333H16.475C16.275 2.24996 16.0584 2.27499 15.8334 2.31666M12.5 3.26662V6.66663L14.1667 5.55829L15.8334 6.66663V2.31666M12.5 3.26662C13.5917 2.83329 14.8084 2.48333 15.8334 2.31666M10 4.57494V17.0749"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    recent: (
      <svg
        width={size}
        height={size}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.7 1.66663H7.30001C4.16668 1.66663 3.92501 4.48329 5.61668 6.01663L14.3833 13.9833C16.075 15.5166 15.8333 18.3333 12.7 18.3333H7.30001C4.16668 18.3333 3.92501 15.5166 5.61668 13.9833L14.3833 6.01663C16.075 4.48329 15.8333 1.66663 12.7 1.66663Z"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    appIcon: (
      <svg
        width={size}
        height={size}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_2_40)">
          <path
            d="M15.8333 2.5H4.16667C3.24619 2.5 2.5 3.24619 2.5 4.16667V15.8333C2.5 16.7538 3.24619 17.5 4.16667 17.5H15.8333C16.7538 17.5 17.5 16.7538 17.5 15.8333V4.16667C17.5 3.24619 16.7538 2.5 15.8333 2.5Z"
            stroke={color}
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_2_40">
            <rect width="20" height="20" fill={color} />
          </clipPath>
        </defs>
      </svg>
    ),
  };
  return iconMap[name];
}
