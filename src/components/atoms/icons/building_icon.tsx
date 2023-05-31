type Props = {
  fill?: string;
  filled?: boolean;
  size?: number;
  width?: number;
  height?: number;
};

export default function BuildingIcon({
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
      <path d="M21 19H23V21H1V19H3V4C3 3.44772 3.44772 3 4 3H14C14.5523 3 15 3.44772 15 4V19H19V11H17V9H20C20.5523 9 21 9.44772 21 10V19ZM5 5V19H13V5H5ZM7 11H11V13H7V11ZM7 7H11V9H7V7Z"></path>
    </svg>
  );
}
