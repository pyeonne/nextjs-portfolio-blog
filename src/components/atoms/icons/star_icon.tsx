type Props = {
  fill?: string;
  filled?: boolean;
  size?: number;
  width?: number;
  height?: number;
};

export default function StarIcon({
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
      <g transform="translate(3 3)">
        <path
          d="M9,0C6.964,0,6.771,3.547,5.559,4.8S.578,4.62.055,6.844s2.868,2.98,3.286,4.889-1.651,4.591.119,5.926S7.134,15.975,9,15.975s3.771,3.019,5.541,1.685-.3-4.017.119-5.926,3.808-2.664,3.286-4.889-4.292-.791-5.5-2.044S11.036,0,9,0Z"
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
