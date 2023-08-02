import { BackButton, Container, IconButtons } from "./styles";

import { defaultTheme } from "../../styles/theme/default";
import logo from "../../assets/logo2.svg";

import { ArrowLeft, User } from "phosphor-react";

export function AppHeader() {
  return (
    <Container>
      <BackButton>
        <ArrowLeft size={24} color={defaultTheme.COLORS.BLUE_300} />
      </BackButton>

      <img src={logo} alt="logo" />

      <IconButtons>
        <User size={32} color={defaultTheme.COLORS.BLUE_300} />
      </IconButtons>
    </Container>
  );
}
