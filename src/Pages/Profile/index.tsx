import { ArrowLeft } from "phosphor-react";
import {
  Container,
  FavoritesSection,
  IconButton,
  Nav,
  NavButton,
  PhotoDiv,
  ProfileHeader,
  TitleDiv,
} from "./styles";

import { defaultTheme } from "../../styles/theme/default";
import userThumb from "../../assets/profile-user.png";

import { useNavigate } from "react-router-dom";
import { BASE_URL, api } from "../../services/api";
import { useEffect, useState } from "react";
import { useFavs } from "../../hooks/favoritesContext";
import { RecipeCard } from "../../Components/RecipeCard";

export function Profile() {
  const navigate = useNavigate();
  const userLocalStorage = localStorage.getItem("@aluchef:user");
  const user = userLocalStorage ? JSON.parse(userLocalStorage) : {};

  const [userPhoto, setUserPhoto] = useState("");

  const { favsList } = useFavs();

  function handleGoBack() {
    navigate(-1);
  }

  function handleGoToDetails(id: number) {
    navigate(`/details/${id}`);
  }
  function handleGoToWines() {
    navigate('/wines');
  }
  function handleGoToShoppingList() {
    navigate('/shoppinglist');
  }

  async function fetchUser() {
    const response = await api.get(`/api/users/${user.id}?populate=*`);

    return response.data;
  }

  useEffect(() => {
    async function fetchUserPhoto() {
      const response = await fetchUser();

      setUserPhoto(response.photo.url);
    }

    fetchUserPhoto();
  }, [user]);

  return (
    <Container>
      <ProfileHeader>
        <PhotoDiv>
          <img src={userPhoto ? `${BASE_URL}${userPhoto}` : userThumb} alt="" />
          <span>{user.username}</span>
        </PhotoDiv>

        <IconButton onClick={handleGoBack}>
          <ArrowLeft size={24} color={defaultTheme.COLORS.BLUE_300} />
        </IconButton>
      </ProfileHeader>

      <TitleDiv>
        <h2>Meu livro de Receitas</h2>
      </TitleDiv>
      <Nav>
        <NavButton>Criar Receita</NavButton>
        <NavButton onClick={handleGoToShoppingList}>Lista de compras</NavButton> 
        <NavButton onClick={handleGoToWines}>Vinhos</NavButton> 
      </Nav>

      <FavoritesSection>
        {favsList.length > 0 &&
          favsList.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              img={`${BASE_URL}${recipe.photo}`}
              onClick={() => handleGoToDetails(recipe.id)}
            />
          ))}
      </FavoritesSection>
    </Container>
  );
}
