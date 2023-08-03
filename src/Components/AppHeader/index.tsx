import { BackButton, Container, IconButtons } from "./styles";

import { defaultTheme } from "../../styles/theme/default";
import logo from "../../assets/logo2.svg";

import { ArrowLeft, User } from "phosphor-react";
import { useNavigate } from "react-router-dom";

export function AppHeader() {
  const navigate = useNavigate()

  function handleGoBack() {
    navigate(-1)
  }

  function handleGoToProfile() {
    navigate('/profile')
  }

  return (
    <Container>
      <BackButton onClick={handleGoBack}>
        <ArrowLeft size={24} color={defaultTheme.COLORS.BLUE_300} />
      </BackButton>

      <img src={logo} alt="logo" />

      <IconButtons onClick={handleGoToProfile}>
        <User size={32} color={defaultTheme.COLORS.BLUE_300} />
      </IconButtons>
    </Container>
  );
}
