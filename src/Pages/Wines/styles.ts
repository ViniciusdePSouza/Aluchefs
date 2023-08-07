import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SectionTitle = styled.div`
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

export const WinesSection = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;

  padding: 1rem 2.5rem;
`;

export const WineInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;

  margin: 2rem 0;
  padding-bottom: 1.5rem;

  border-bottom: 1px solid ${({theme}) => theme.COLORS.GRAY_100};

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
