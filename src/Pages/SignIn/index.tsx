import { ButtonDiv, Container } from "./styles";

import logo from "../../assets/logo.svg";

import { useNavigate } from "react-router-dom";

import { Button } from "../../Components/Button";

export function SignIn() {
  const navigate = useNavigate();

  function handleGoToLogin() {
    navigate("/login");
  }
  function handleGoToSignUp() {
    navigate("/signup");
  }

  return (
    <Container>
      <img src={logo} alt="logo" />
      <ButtonDiv>
        <Button title="Entrar" onClick={handleGoToLogin} />
        <Button title="Criar Conta" onClick={handleGoToSignUp} />
      </ButtonDiv>
    </Container>
  );
}
