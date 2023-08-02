import {
  CategoryDiv,
  Container,
  HomeHeader,
  IconsNav,
  IconButtons,
  SearchBar,
  BodySection,
  RecipeSection,
} from "./styles";

import logo from "../../assets/logo2.svg";
import { MagnifyingGlass, SignOut, User, X } from "phosphor-react";

import { defaultTheme } from "../../styles/theme/default";
import { CategoryButton } from "../../Components/CategoryButton";
import { BASE_URL, api } from "../../services/api";
import { useEffect, useState } from "react";
import { Input } from "../../Components/Input";
import { RecipeCard } from "../../Components/RecipeCard";
import { useAuth } from "../../hooks/authContext";

interface CategoryProps {
  attributes: {
    name: string;
    createdAt: Date;
    updatedAt: Date;
  };
  id: number;
}

interface RecipesProps {
  id: number;
  photo: string;
  title: string;
}

export function Home() {
  const [allCategories, setAllCategories] = useState<CategoryProps[]>([]);
  const [categoriesFilterArray, setCategoriesFilterArray] = useState<string[]>(
    []
  );
  const [recipes, setRecipes] = useState<RecipesProps[]>([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState<RecipesProps[]>([]);

  const { signOut } = useAuth()

  function handleAddCategoryFilter(category: string) {
    if (!categoriesFilterArray.includes(category)) {
      setCategoriesFilterArray((prevState) => [...prevState, category]);
    }

    console.log(categoriesFilterArray);
  }

  function handleSignOut() {
    signOut()
  }

  async function fetchCategories() {
    const response = await api.get("/api/categories");

    return response.data;
  }

  async function fetchRecipes() {
    const response = await api.get("/api/recipes?populate=*");

    return response.data;
  }

  useEffect(() => {
    async function populateCategories() {
      const response = await fetchCategories();

      setAllCategories(response.data);
    }
    populateCategories();
  }, []);
  useEffect(() => {
    async function populateRecipes() {
      const response = await fetchRecipes();

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const recipesArray = response.data.map((recipes: any) => {
        return {
          id: recipes.id,
          photo: recipes.attributes.thumb.data.attributes.url,
          title: recipes.attributes.title,
        };
      });

      setRecipes(recipesArray);
    }
    populateRecipes();
  }, []);

  useEffect(() => {
    if (search.trim() === "") {
      setSearchResults([]);
      return;
    }

    const filteredRecipeByName = recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(search.toLowerCase())
    );

    setSearchResults(filteredRecipeByName);
  }, [search, recipes]);

  return (
    <Container>
      <HomeHeader>
        <img src={logo} alt="logo" />
        <IconsNav>
          <IconButtons>
            <User size={32} color={defaultTheme.COLORS.BLUE_300} />
          </IconButtons>
          <IconButtons onClick={handleSignOut}>
            <SignOut size={32} color={defaultTheme.COLORS.BLUE_300} />
          </IconButtons>
        </IconsNav>
      </HomeHeader>

      <CategoryDiv>
        {allCategories.length > 0 &&
          allCategories.map((category) => (
            <CategoryButton
              title={category.attributes.name}
              key={category.id}
              onClick={() => handleAddCategoryFilter(category.attributes.name)}
            />
          ))}
      </CategoryDiv>
      <BodySection>
        <SearchBar>
          <MagnifyingGlass size={18} />
          <Input
            placeholder="Pesquisar"
            onChange={(e) => setSearch(e.target.value)}
          />
          <IconButtons>
            <X size={18} />
          </IconButtons>
        </SearchBar>

        <RecipeSection>
          {searchResults.length > 0
            ? searchResults.map((recipe) => (
                <RecipeCard
                  key={recipe.id}
                  img={`${BASE_URL}${recipe.photo}`}
                />
              ))
            : recipes.length > 0 &&
              recipes.map((recipe) => (
                <RecipeCard
                  key={recipe.id}
                  img={`${BASE_URL}${recipe.photo}`}
                />
              ))}
        </RecipeSection>
      </BodySection>
    </Container>
  );
}
