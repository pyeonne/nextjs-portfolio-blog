type Props = {
  fill?: string;
  filled?: boolean;
  size?: number;
  width?: number;
  height?: number;
};

export default function HomeIcon({
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
      <defs>
        <linearGradient x1="50%" y1="92.034%" x2="50%" y2="7.2%" id="a">
          <stop offset="0%" stopColor="currentColor" />
          <stop stopOpacity="0" offset="100%" stopColor="white" />
        </linearGradient>
      </defs>{" "}
      <g id="Home" transform="translate(2.4 2)">
        <path
          d="M0,.5H5.815"
          transform="translate(6.679 13.635)"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
        />
        <path
          d="M0,11.713c0-5.631.614-5.238,3.919-8.3C5.365,2.246,7.615,0,9.558,0s4.237,2.235,5.7,3.41c3.305,3.065,3.918,2.672,3.918,8.3C19.172,20,17.213,20,9.586,20S0,20,0,11.713Z"
          transform="translate(0)"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
        />
      </g>
    </svg>
  );
}
