import {
  Container,
  IconButton,
  ListContainer,
  PhotoDiv,
  ProfileHeader,
  SearchBar,
  TitleDiv,
} from "./stytles";

import { BASE_URL, api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowLeft, Plus } from "phosphor-react";
import { defaultTheme } from "../../styles/theme/default";
import userThumb from "../../assets/profile-user.png";
import { Input } from "../../Components/Input";
import { useShoppingList } from "../../hooks/shoppingListContext";
import { ItemList } from "../../Components/ItemList";

export function ShoppingList() {
  const navigate = useNavigate();
  const userLocalStorage = localStorage.getItem("@aluchef:user");
  const user = userLocalStorage ? JSON.parse(userLocalStorage) : {};

  const [item, setItem] = useState("");

  const { shoppingList, addItem } = useShoppingList();

  const [userPhoto, setUserPhoto] = useState("");

  async function fetchUser() {
    const response = await api.get(`/api/users/${user.id}?populate=*`);

    return response.data;
  }

  function addToCartList() {
      addItem(item);
  }

  function handleGoBack() {
    navigate(-1);
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
        <h2>Lista de Compras</h2>
      </TitleDiv>

      <ListContainer>
        <SearchBar>
          <Input
            placeholder="Pesquisar"
            onChange={(e) => setItem(e.target.value)}
          />
          <IconButton onClick={addToCartList}>
            <Plus size={24} color={defaultTheme.COLORS.WHITE} />
          </IconButton>
        </SearchBar>

        {shoppingList.length > 0 &&
          shoppingList.map((item) => <ItemList key={item} title={item}/>)}
      </ListContainer>
    </Container>
  );
}
