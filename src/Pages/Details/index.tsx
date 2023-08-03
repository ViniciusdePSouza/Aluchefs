import {
  Container,
  HowToDoSection,
  IconButton,
  InfoDiv,
  IngredientItem,
  IngredientsList,
  IngredientsSection,
  PreviewSection,
  SectionTitle,
} from "./styles";

import { Heart } from "phosphor-react";

import { defaultTheme } from "../../styles/theme/default";

import { AppHeader } from "../../Components/AppHeader";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL, api } from "../../services/api";

interface RecipeProps {
  title: string;
  photo: string;
  ingredients: string[];
  description: string;
}

export function Details() {
  const [recipe, setRecipe] = useState<RecipeProps>({} as RecipeProps);

  async function fetchRecipeDetails() {
    const response = await api.get(`/api/recipes/${params.id}?populate=*`);

    return response.data;
  }

  function transformToArray(inputString: string) {
    inputString = inputString.trim();

    const lines = inputString.split("\n");

    const resultArray = lines.map((line) =>
      line.startsWith("-") ? line : `- ${line}`
    );

    return resultArray;
  }

  const params = useParams();

  useEffect(() => {
    async function populateRecipeDetails() {
      const { data } = await fetchRecipeDetails();

      const ingredientsArray = transformToArray(data.attributes.ingredients);

      const recipeDetails = {
        title: data.attributes.title,
        photo: data.attributes.thumb.data.attributes.url,
        ingredients: ingredientsArray,
        description: data.attributes.description,
      };
      setRecipe(recipeDetails);
    }

    populateRecipeDetails();
  }, []);

  return (
    <Container>
      <AppHeader />
      <PreviewSection>
        <img src={`${BASE_URL}${recipe.photo}`} alt="" />
        <InfoDiv>
          <h1>{recipe.title}</h1>
          <p>Por: Fulano de tal</p>
          <IconButton>
            <Heart size={24} color={defaultTheme.COLORS.PINK_300} />
          </IconButton>
        </InfoDiv>
      </PreviewSection>

      <IngredientsSection>
        <SectionTitle>
          <h2>Ingredients</h2>
        </SectionTitle>
        <IngredientsList>
          {recipe.ingredients &&
            recipe.ingredients.map((ingredient, index) => (
              <IngredientItem key={index}>{ingredient}</IngredientItem>
            ))}
        </IngredientsList>
      </IngredientsSection>

      <HowToDoSection>
        <SectionTitle>
          <h2>Modo de fazer</h2>
        </SectionTitle>

        <p>{recipe.description}</p>
      </HowToDoSection>
    </Container>
  );
}
