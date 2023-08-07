import { Container, IconButton } from "./styles";

import check from "../../assets/check.svg";
import { defaultTheme } from "../../styles/theme/default";
import { X } from "phosphor-react";
import { useShoppingList } from "../../hooks/shoppingListContext";

interface itemCheckProps {
  title: string;
}

export function ItemList({ title }: itemCheckProps) {
  const { deleteItem } = useShoppingList();

  function deleteGrocery(item: string) {
    deleteItem(item);
  }
  return (
    <Container>
      <IconButton >
        <img src={check} alt="" />
      </IconButton>
      <p>{title}</p>

      <IconButton onClick={() => deleteGrocery(title)}>
        <X size={24} color={defaultTheme.COLORS.PINK_300} />
      </IconButton>
    </Container>
  );
}
