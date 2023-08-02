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
 photo: string
}

export function Home() {
  const [allCategories, setAllCategories] = useState<CategoryProps[]>([]);
  const [categoriesFilterArray, setCategoriesFilterArray] = useState<string[]>(
    []
  );
  const [recipes, setRecipes] = useState<RecipesProps[]>([])

  function handleAddCategoryFilter(category: string) {
    if (!categoriesFilterArray.includes(category)) {
      setCategoriesFilterArray((prevState) => [...prevState, category]);
    }

    console.log(categoriesFilterArray);
  }

  async function fetchCategories() {
    const response = await api.get("/api/categories");

    return response.data;
  }

  async function fetchRecipes() {
    const response = await api.get("/api/recipes?populate=*")

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

      const recipesArray = response.data.map((recipes: any) => {
        return {
          id: recipes.id,
          photo: recipes.attributes.thumb.data.attributes.url
        }
      })

      setRecipes(recipesArray);

    }
    populateRecipes();
  }, []);

  return (
    <Container>
      <HomeHeader>
        <img src={logo} alt="logo" />
        <IconsNav>
          <IconButtons>
            <User size={32} color={defaultTheme.COLORS.BLUE_300} />
          </IconButtons>
          <IconButtons>
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
          <Input placeholder="Pesquisar" />
          <IconButtons>
            <X size={18} />
          </IconButtons>
        </SearchBar>

        <RecipeSection>
          {
            recipes.length > 0 && recipes.map((recipes) => (

              <RecipeCard key={recipes.id} img={`${BASE_URL}${recipes.photo}`}/>
            ))
          }

        </RecipeSection>
      </BodySection>

      
    </Container>
  );
}
