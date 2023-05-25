type Props = {
  fill?: string;
  filled?: boolean;
  size?: number;
  width?: number;
  height?: number;
};

export default function ImageIcon({
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
      {...props}
    >
      <g transform="translate(2 2)">
        <path
          d="M0,3.71S.812,2.073,1.994,2.073,3.78,3.448,5.09,3.448,7.868,0,9.352,0,11.9,2.391,11.9,2.391"
          transform="translate(4.071 10.749)"
          fill="none"
          stroke={fill}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          stroke-width="1.5"
        />
        <path
          d="M3.115,1.558A1.558,1.558,0,1,1,1.557,0,1.558,1.558,0,0,1,3.115,1.558Z"
          transform="translate(5.024 5.547)"
          fill="none"
          stroke={fill}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          stroke-width="1.5"
        />
        <path
          d="M0,9.25c0,6.937,2.313,9.25,9.25,9.25s9.25-2.313,9.25-9.25S16.187,0,9.25,0,0,2.313,0,9.25Z"
          transform="translate(0.75 0.75)"
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
