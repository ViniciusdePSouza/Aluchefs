import { InputHTMLAttributes } from "react";
import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}

export function Input({ placeholder, ...rest }: InputProps) {
  return (
    <Container>
      <input placeholder={placeholder} {...rest} />
    </Container>
  );
}
