import { Button } from "../@common/button";
import MenuIcon from "../icons/menu_icon";

type Props = {
  iconSize?: number;
  onPressed: () => void;
};

export default function ToggleButton({ iconSize, onPressed }: Props) {
  return (
    <Button size="fit" rounded="full" onPressed={onPressed}>
      <MenuIcon fill={"var(--title-color)"} size={iconSize} />
    </Button>
  );
}
