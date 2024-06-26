import { FC } from 'react'

import { theme } from '../../constants/theme'

import { IconProps } from '../../interfaces/ui'

const SwitchDown: FC<IconProps> = ({
  fill = theme.backgroundHighlight,
  className,
}) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="20" cy="20" r="20" fill={fill} />
    <g clipPath="url(#clip0_3270_3546)">
      <path
        d="M29.4328 17.4021L20.8482 25.6273C20.6016 25.8699 20.3321 26.0092 20.0625 26.0092C19.793 26.0092 19.5248 25.9095 19.3173 25.7087L10.7327 17.4835C10.3017 17.0724 10.2877 16.3901 10.7004 15.9607C11.1103 15.5283 11.7956 15.5142 12.2237 15.9284L20.0625 23.3992L27.9418 15.8523C28.3686 15.4382 29.055 15.4522 29.4651 15.8846C29.8779 16.3105 29.8639 16.9933 29.4328 17.4021Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_3270_3546">
        <rect
          width="20.125"
          height="23"
          fill="white"
          transform="translate(30.125 31) rotate(-180)"
        />
      </clipPath>
    </defs>
  </svg>
)

export default SwitchDown
