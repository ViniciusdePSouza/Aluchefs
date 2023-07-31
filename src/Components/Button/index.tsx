import { Container } from "./styles";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  isLoading?: boolean;
}

export function Button({ title, isLoading = false, ...rest }: ButtonProps) {
  return (
    <Container type="button" disabled={isLoading} {...rest}>
      {isLoading ? "Loading" : title}
    </Container>
  );
}
