import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";
import { Routes } from "./routes";
import { GlobalStyle } from "./styles/global";
import { AuthProvider } from "./hooks/authContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AuthProvider>
        <Routes />
        <GlobalStyle />
      </AuthProvider>
    </ThemeProvider>
  );
}
