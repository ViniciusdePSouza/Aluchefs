import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HomeHeader = styled.header`
  width: 100%;

  display: flex;
  align-items: baseline;
  justify-content: space-between;

  padding: 1.5rem 4rem;
`;

export const IconsNav = styled.nav`
  display: flex;
  align-items: center;

  gap: 1.5rem;
`;

export const IconButtons = styled.button`
  all: unset;

  display:flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  border-radius: 8px;

  padding: 1rem;

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.BLUE_100};
  }
`;

export const CategoryDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  overflow-x: auto;
  padding:  1.6rem;

  gap: 1.2rem;

  background-color: ${({ theme }) => theme.COLORS.YELLOW};

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PINK_300};
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: #f1f1f1;
    border-radius: 4px;
  }
`;

export const BodySection = styled.section`
  width: 100%;
  height: 100%;

  padding: 0 2.5rem;
`

export const SearchBar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  gap: 1rem;

  background-color: ${({theme}) => theme.COLORS.BLUE_100};

  padding: 0 1.6rem;

  border-radius: 16px;

  margin-top: 1.8rem;
`

export const RecipeSection = styled.div`
  width: 100%;
  max-width: 100vw;

  margin-top: 2rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  
  border-radius: 8px;

  
  @media (min-width: 768px) {
    max-width: 100vw;
      display: flex;
      flex-wrap: wrap; 
      justify-content: flex-start;
      align-items: center;
      gap: 2rem;
   }
`
