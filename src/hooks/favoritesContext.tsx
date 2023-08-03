import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface FavoritesContextType {
  favsList: FavoritesRecipeProps[];
  addNewFavorite: (recipe: FavoritesRecipeProps) => void;
}

interface FavoritesProviderProps {
  children: ReactNode;
}

interface FavoritesRecipeProps {
  id: number;
  photo: string;
  title: string;
}

export const FavoritesContext = createContext({} as FavoritesContextType);

function FavoritesProvider({ children }: FavoritesProviderProps) {
  const [favsList, setFavslist] = useState<FavoritesRecipeProps[]>([]);

  function addNewFavorite(recipe: FavoritesRecipeProps) {
    const isRecipeAlreadyFavorite = favsList.some(
      (favRecipe) => favRecipe.id === recipe.id
    );

    if (isRecipeAlreadyFavorite) {
      alert("Essa receita já está na sua lista de favoritos");
    } else {
      const newFavsList = [...favsList, recipe];
      localStorage.setItem('@aluchef:favs', JSON.stringify(newFavsList)); 
      setFavslist(newFavsList);
      alert("Receita adicionada na sua lista de favoritos");
    }
  }

  useEffect(() => {
    const list = localStorage.getItem('@aluchef:favs')
    if (list) {
      setFavslist(JSON.parse(list))
    }
}, [])

  return (
    <FavoritesContext.Provider value={{ favsList, addNewFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

function useFavs() {
  const context = useContext(FavoritesContext);

  return context;
}

export { FavoritesProvider, useFavs };
