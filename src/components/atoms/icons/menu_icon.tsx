type Props = {
  fill?: string;
  filled?: boolean;
  size?: number;
  width?: number;
  height?: number;
};

export default function MenuIcon({
  fill = "currentColor",
  filled,
  size,
  width,
  height,
  ...props
}: Props) {
  return (
    <svg
      width={size || width || 24}
      height={size || height || 24}
      fill={fill}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M16 18V20H5V18H16ZM21 11V13H3V11H21ZM19 4V6H8V4H19Z"></path>
    </svg>
  );
}
