import { ButtonDiv, Container } from "./styles";

import logo from "../../assets/logo.svg";

import { Button } from "../../Components/Button";

export function SignIn() {
  return (
    <Container>
      <img src={logo} alt="logo" />
      <ButtonDiv>
        <Button title="Entrar"/>
        <Button title="Criar Conta"/>
      </ButtonDiv>
    </Container>
  );
}
