import { InputHTMLAttributes, forwardRef } from "react";
import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, ...rest }, ref) => {
    return (
      <Container>
        <input placeholder={placeholder} ref={ref} {...rest} />
      </Container>
    );
  }
);