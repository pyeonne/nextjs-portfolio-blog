type Props = {
  fill?: string;
  filled?: boolean;
  size?: number;
  width?: number;
  height?: number;
};

export default function WorkIcon({
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
      <g transform="translate(2.75 2.45)">
        <path
          d="M.5,2.628V0"
          transform="translate(8.711 11.439)"
          fill="none"
          stroke={fill}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          stroke-width="1.5"
        />
        <path
          d="M18.257,0l-.029.021a17.52,17.52,0,0,1-9.1,2.393A17.48,17.48,0,0,1,.03.021L0,0"
          transform="translate(0.082 9.027)"
          fill="none"
          stroke={fill}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          stroke-width="1.5"
        />
        <path
          d="M0,8.2C0,2.051,2.3,0,9.211,0s9.211,2.051,9.211,8.2-2.3,8.2-9.211,8.2S0,14.355,0,8.2Z"
          transform="translate(0 2.697)"
          fill="none"
          stroke={fill}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          stroke-width="1.5"
        />
        <path
          d="M6.525,2.919v-.63A2.184,2.184,0,0,0,4.465,0H2.06A2.184,2.184,0,0,0,0,2.289v.63"
          transform="translate(5.949 0)"
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
