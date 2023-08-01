import {
  CategoryDiv,
  Container,
  HomeHeader,
  IconsNav,
  NavButtons,
} from "./styles";

import logo from "../../assets/logo2.svg";
import { SignOut, User } from "phosphor-react";

import { defaultTheme } from "../../styles/theme/default";
import { CategoryButton } from "../../Components/CategoryButton";
import { api } from "../../services/api";
import { useEffect } from "react";

export function Home() {
  function handleAddCategoryFilter(category: string) {
    console.log(category);
  }

  async function fetchCategories(){
    const response = await api.get('/api/categories')

    return response.data
  }

  useEffect(() => {
    async function populateCategories() {
        const response = fetchCategories()

        console.log(response)
    }

    populateCategories()
  }, [])


  return (
    <Container>
      <HomeHeader>
        <img src={logo} alt="logo" />
        <IconsNav>
          <NavButtons>
            <User size={32} color={defaultTheme.COLORS.BLUE_300} />
          </NavButtons>
          <NavButtons>
            <SignOut size={32} color={defaultTheme.COLORS.BLUE_300} />
          </NavButtons>
        </IconsNav>
      </HomeHeader>

      <CategoryDiv>
        <CategoryButton
          title="Salad"
          onClick={() => handleAddCategoryFilter('Salad')}
        />
        <CategoryButton
          title="Breakfeast"
          onClick={() => handleAddCategoryFilter('Breakfeast')}
        />
        <CategoryButton
          title="Lunch"
          onClick={() => handleAddCategoryFilter('Lunch')}
        />
        <CategoryButton
          title="Drink"
          onClick={() => handleAddCategoryFilter('Drink')}
        />
        <CategoryButton
          title="Dinner"
          onClick={() => handleAddCategoryFilter('Dinner')}
        />
      </CategoryDiv>
    </Container>
  );
}
