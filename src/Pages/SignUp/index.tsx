import { Container, Form } from "./styles";

import logo from "../../assets/logo.svg";
import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";

export function SignUp() {
    return <Container>
        <img src={logo}/>

        <Form>
            <Input  placeholder="Nome"/>
            <Input  placeholder="Usuário"/>
            <Input  placeholder="Senha" type="password"/>
            <Input  placeholder="Confirme a Senha" type="password"/>
            <Button title="Criar Conta"/>
        </Form>
    </Container>
}