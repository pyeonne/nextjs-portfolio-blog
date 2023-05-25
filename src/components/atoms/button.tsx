import { tv, type VariantProps } from "tailwind-variants";

const buttonStyles = tv({
  base: "",
  variants: {
    size: {
      fit: "w-fit h-fit",
    },
    rounded: {
      full: "rounded-full",
    },
  },
});

type ButtonVariants = VariantProps<typeof buttonStyles>;

interface ButtonProps extends ButtonVariants {
  id?: string;
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  onPressed: () => void;
  classes?: string;
}

export const Button = (props: ButtonProps) => {
  return (
    <button
      id={props.id}
      className={buttonStyles({ ...props, class: props.classes })}
      onClick={props.onPressed}
      type={props.type ?? "button"}
    >
      {props.children}
    </button>
  );
};
