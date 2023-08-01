import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-family: "Roboto", sans-serif;

  padding: 0 9rem;

  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.COLORS.PINK_100} 0%,
    ${({ theme }) => theme.COLORS.PINK_300} 100%
  );

  > img {
    width: 12.5rem;
    margin-bottom: 10rem;
  }

  > p {
    color: ${({ theme }) => theme.COLORS.BLUE_300};
    text-align: center;
    font-size: 1.5rem;

    margin-top: 2.5rem;
    margin-bottom: 1rem;

    font-weight: 900;
    line-height: normal;
    letter-spacing: -0.333px;
  }
`;

export const Form = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const FormValidatorAdvisor = styled.p`
  color: ${({ theme }) => theme.COLORS.RED};

  font-weight: 600;
  font-size: 1.2rem;
`;
