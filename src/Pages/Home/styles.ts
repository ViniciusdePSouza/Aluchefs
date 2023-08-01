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

export const NavButtons = styled.button`
  all: unset;

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
