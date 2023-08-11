import { TextareaHTMLAttributes, forwardRef } from "react";
import { Container } from "./styles";

interface TextAreaProps extends TextareaHTMLAttributes<TextareaHTMLAttributes> {
    placeholder: string;
}

export const TextArea = forwardRef<TextareaHTMLAttributes, TextAreaProps>(
  ({ placeholder, ...rest }, ref) => {
    return (
      <Container>
        <textarea placeholder={placeholder} ref={ref} {...rest}></textarea>
      </Container>
    );
  }
);