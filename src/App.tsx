import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";
import { Routes } from "./routes";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Routes />
      <GlobalStyle />
    </ThemeProvider>
  );
}
