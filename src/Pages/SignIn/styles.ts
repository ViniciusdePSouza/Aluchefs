import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-family: "Roboto", sans-serif;

  padding: 0 9rem;

  background: linear-gradient(180deg,  ${({ theme }) => theme.COLORS.PINK_100} 0%,  ${({ theme }) => theme.COLORS.PINK_300} 100%);


  > img {
   width: 12.5rem;
   margin-bottom: 10rem;
  }
`;

export const ButtonDiv = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;
`
