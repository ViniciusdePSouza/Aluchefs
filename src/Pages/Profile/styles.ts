import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProfileHeader = styled.header`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 4rem;
  padding: 0 2.5rem;
`;

export const PhotoDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 1rem;

  > img {
    width: 8rem;
    height: 8rem;

    border-radius: 100%;
  }

  > span {
    color: ${({ theme }) => theme.COLORS.BLUE_300};
    text-align: center;

    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
  }
`;

export const IconButton = styled.button`
  all: unset;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid ${({ theme }) => theme.COLORS.BLUE_300};
  border-radius: 100%;

  padding: 0.5rem;

  cursor: pointer;
`;

export const TitleDiv = styled.div`
  width: 100%;

  text-align: center;

  background-color: ${({ theme }) => theme.COLORS.YELLOW};

  padding: 1rem;

  margin-top: 3rem;

  > h2 {
    color: ${({ theme }) => theme.COLORS.BLUE_300};

    font-size: 1.8rem;
    font-weight: 900;
  }
`;

export const Nav = styled.nav`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  background-color: ${({ theme }) => theme.COLORS.PINK_300};
  padding: 1rem;
`;

export const NavButton = styled.button`
  all: unset;

  background-color: ${({ theme }) => theme.COLORS.WHITE};

  color: ${({ theme }) => theme.COLORS.BLUE_300};

  font-size: 1.8rem;
  font-weight: 900;

  border-radius: 16px;

  padding: 1rem;
`;

export const FavoritesSection = styled.section`
  width: 100%;
  max-width: 100vw;

  margin-top: 2rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;

  padding: 1rem;

  border-radius: 8px;

  @media (min-width: 768px) {
    max-width: 100vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    gap: 2rem;
  }
`;
