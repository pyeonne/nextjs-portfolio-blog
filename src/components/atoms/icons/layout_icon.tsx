type Props = {
  fill?: string;
  size?: number;
  width?: number;
  height?: number;
  className?: string;
};

export default function LayoutIcon({
  fill = "currentColor",
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
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="mx-auto"
      {...props}
    >
      <path d="M20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20ZM11 13H5V19H11V13ZM13 19H19V5H13V19ZM11 5H5V11H11V5Z"></path>
    </svg>
  );
}
