import { TextareaHTMLAttributes } from "react";
import { Container } from "./styles";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLInputElement> {
    placeholder: string;
}

export function TextArea({placeholder}: TextAreaProps) {
    return <Container>
        <textarea placeholder={placeholder}></textarea>
    </Container>
}