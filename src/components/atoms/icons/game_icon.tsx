type Props = {
  fill?: string;
  filled?: boolean;
  size?: number;
  width?: number;
  height?: number;
};

export default function GameIcon({
  fill = "currentColor",
  filled = false,
  size,
  width,
  height,
  ...props
}: Props) {
  return (
    <svg
      width={size || width || 24}
      height={size || height || 24}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(2 1.977)">
        <path
          d="M.477,0V3.575"
          transform="translate(6.777 10.085)"
          fill="none"
          stroke={fill}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          stroke-width="1.5"
        />
        <path
          d="M3.648.477H0"
          transform="translate(5.432 11.395)"
          fill="none"
          stroke={fill}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          stroke-width="1.5"
        />
        <path
          d="M.528.477h-.1"
          transform="translate(12.949 9.716)"
          fill="none"
          stroke={fill}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          stroke-width="1.5"
        />
        <path
          d="M.528.477h-.1"
          transform="translate(14.68 13.128)"
          fill="none"
          stroke={fill}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          stroke-width="1.5"
        />
        <path
          d="M0,0H0A1.293,1.293,0,0,0,1.306,1.28H2.314a2.005,2.005,0,0,1,2.02,1.978V4.265"
          transform="translate(6.514 0.239)"
          fill="none"
          stroke={fill}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          stroke-width="1.5"
        />
        <path
          d="M19.1,7.414C19.1,1.854,16.709,0,9.549,0S0,1.854,0,7.414s2.387,7.414,9.549,7.414S19.1,12.975,19.1,7.414Z"
          transform="translate(0.716 4.504)"
          fill="none"
          stroke={fill}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          stroke-width="1.5"
        />
      </g>
    </svg>
  );
}
