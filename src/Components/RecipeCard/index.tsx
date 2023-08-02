import { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";

interface RecipeCardProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  img: string;
}

export function RecipeCard({ img, ...rest }: RecipeCardProps) {
  return (
    <Container {...rest}>
      <img src={img} alt="" />
    </Container>
  );
}
