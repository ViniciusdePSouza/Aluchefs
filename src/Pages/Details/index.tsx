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
  WineDescriptionDiv,
  WineInfo,
  WinesSection,
} from "./styles";

import { Heart } from "phosphor-react";

import { defaultTheme } from "../../styles/theme/default";

import { AppHeader } from "../../Components/AppHeader";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL, api } from "../../services/api";
import { useFavs } from "../../hooks/favoritesContext";
import { WineProps } from "../../@types/wines";

interface RecipeProps {
  id: number;
  title: string;
  photo: string;
  ingredients: string[];
  description: string;
}

interface WinesInfoProps {
  id: number;
  name: string;
  description: string;
  photo: string;
}

export function Details() {
  const [recipe, setRecipe] = useState<RecipeProps>({} as RecipeProps);
  const [winesId, setWinesId] = useState<number[]>([]);
  const [wines, setWines] = useState<WinesInfoProps[]>([]);

  const { addNewFavorite } = useFavs();

  function handleAddNewFavorite() {
    const newFavRecipe = {
      id: recipe.id,
      photo: recipe.photo,
      title: recipe.title,
    };

    addNewFavorite(newFavRecipe);
  }

  async function fetchRecipeDetails() {
    const response = await api.get(`/api/recipes/${params.id}?populate=*`);

    return response.data;
  }

  async function fetchWine(id: number) {
    const response = await api.get(`/api/wines/${id}?populate=*`);

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
        id: data.id,
        title: data.attributes.title,
        photo: data.attributes.thumb.data.attributes.url,
        ingredients: ingredientsArray,
        description: data.attributes.description,
      };

      const wines = data.attributes.wines.data;
      const winesIdArray = wines.map((wine: WineProps) => wine.id);

      setWinesId(winesIdArray);
      setRecipe(recipeDetails);
    }

    populateRecipeDetails();
  }, []);

  useEffect(() => {
    async function populateWines() {
      const fetchWines = winesId.map((id: number) => fetchWine(id));
      const winesArray = await Promise.all(fetchWines);

      const wineInfo = winesArray.map((wine) => {
        return {
          id: wine.data.id,
          name: wine.data.attributes.name,
          description: wine.data.attributes.description,
          photo: wine.data.attributes.photo.data.attributes.url,
        };
      });

      setWines(wineInfo);
    }

    populateWines();
  }, [winesId]);

  return (
    <Container>
      <AppHeader />
      <PreviewSection>
        <img src={`${BASE_URL}${recipe.photo}`} alt="" />
        <InfoDiv>
          <h1>{recipe.title}</h1>
          <p>Por: Fulano de tal</p>
          <IconButton onClick={handleAddNewFavorite}>
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

      <WinesSection>
        <SectionTitle>
          <h2>Para Acompanhar</h2>
        </SectionTitle>

        {wines.length > 0 &&
          wines.map((wine) => (
            <WineInfo key={wine.id}>
              <img src={`${BASE_URL}${wine.photo}`} alt="Foto do vinho" />
              <WineDescriptionDiv key={wine.id}>
                <h2>{wine.name}</h2>
                <p>{wine.description}</p>
              </WineDescriptionDiv>
            </WineInfo>
          ))}
      </WinesSection>
    </Container>
  );
}
