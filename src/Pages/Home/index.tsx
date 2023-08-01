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
import { useEffect, useState } from "react";

interface CategoryProps {
  attributes: {
    name: string;
    createdAt: Date;
    updatedAt: Date;
  };
  id: number;
}

export function Home() {
  const [allCategories, setAllCategories] = useState<CategoryProps[]>([]);
  const [categoriesFilterArray, setCategoriesFilterArray] = useState<string[]>([])

  function handleAddCategoryFilter(category: string) {
    if(!categoriesFilterArray.includes(category)){
      setCategoriesFilterArray((prevState) => [...prevState, category]);
    }

    console.log(categoriesFilterArray)
  }

  async function fetchCategories() {
    const response = await api.get("/api/categories");

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
    console.log(allCategories);
  }, [allCategories]);

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
        {allCategories.length > 0 &&
          allCategories.map((category) => (
            <CategoryButton
              title={category.attributes.name}
              key={category.id}
              onClick={() => handleAddCategoryFilter(category.attributes.name)}
            />
          ))}
      </CategoryDiv>
    </Container>
  );
}
