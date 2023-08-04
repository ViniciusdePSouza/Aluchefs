import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";
import { Routes } from "./routes";
import { GlobalStyle } from "./styles/global";
import { AuthProvider } from "./hooks/authContext";
import { FavoritesProvider } from "./hooks/favoritesContext";
import { ShoppingListProvider } from "./hooks/shoppingListContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <FavoritesProvider>
        <ShoppingListProvider>

        <AuthProvider>
          <Routes />
          <GlobalStyle />
        </AuthProvider>
        </ShoppingListProvider>
      </FavoritesProvider>
    </ThemeProvider>
  );
}
