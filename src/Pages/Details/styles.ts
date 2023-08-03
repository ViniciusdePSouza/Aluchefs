import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0 2.5rem;
`;

export const PreviewSection = styled.section`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 2rem;

  > img {
    flex-shrink: 0;
    width: 14rem;
    height: 14rem;

    object-fit: cover;

    border-radius: 8px;
  }
`;

export const InfoDiv = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  gap: 1rem;

  > h1 {
    color: ${({ theme }) => theme.COLORS.BLUE_300};

    font-size: 1.8rem;
    font-weight: 400;
    line-height: normal;
  }

  > p {
    color: ${({ theme }) => theme.COLORS.PINK_300};

    font-size: 1.5rem;
    font-weight: 700;
    line-height: normal;
  }
`;

export const IconButton = styled.button`
  all: unset;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;

export const IngredientsSection = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export const IngredientsList = styled.ul`
  margin-top: 2rem;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1rem;
  }
`;

export const IngredientItem = styled.ol`
  color: rgba(0, 0, 0, 0.68);

  font-size: 1.5rem;

  font-weight: 900;

  margin-top: 2rem;
`;

export const SectionTitle = styled.div`
  width: 100%;

  text-align: center;

  background-color: ${({ theme }) => theme.COLORS.YELLOW};

  padding: 1rem;

  border-radius: 16px;

  margin-top: 3rem;

  > h2 {
    color: ${({ theme }) => theme.COLORS.BLUE_300};

    font-size: 1.8rem;

    font-weight: 900;
  }
`;

export const HowToDoSection = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;

  > p {
    color: rgba(0, 0, 0, 0.68);

    font-size: 1.5rem;

    font-weight: 900;

    margin-top: 2rem;
  }
`;

export const WinesSection = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 2rem 0;
`;

export const WineInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;

  margin: 2rem 0;

  > img {
    width: 13rem;
    height: 13rem;

    border-radius: 8px;
  }
`;

export const WineDescriptionDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  > h2 {
    color: ${({ theme }) => theme.COLORS.BLUE_300};

    font-size: 1.8rem;

    font-weight: 900;
  }

  > p {
    color: rgba(0, 0, 0, 0.68);

    font-size: 1.4rem;

    font-weight: 900;

    margin-top: 2rem;
  }
`;
