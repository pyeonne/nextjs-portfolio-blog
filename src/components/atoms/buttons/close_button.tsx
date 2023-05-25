import { Button } from "../@common/button";
import CloseIcon from "../icons/close_icon";

type Props = {
  iconSize?: number;
  onPressed: () => void;
  classes?: string;
};

export default function CloseButton({ iconSize, onPressed, classes }: Props) {
  return (
    <Button size="fit" rounded="full" onPressed={onPressed} classes={classes}>
      <CloseIcon fill={"var(--title-color)"} size={iconSize} />
    </Button>
  );
}
