import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";
import { Routes } from "./routes";
import { GlobalStyle } from "./styles/global";
import { AuthProvider } from "./hooks/authContext";
import { FavoritesProvider } from "./hooks/favoritesContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <FavoritesProvider>
        <AuthProvider>
          <Routes />
          <GlobalStyle />
        </AuthProvider>
      </FavoritesProvider>
    </ThemeProvider>
  );
}
