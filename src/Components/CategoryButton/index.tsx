import { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";

interface CategoryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
  }

export function CategoryButton({ title, ...rest }: CategoryButtonProps){
 return <Container type='button' {...rest}>
    {title}
 </Container>
}