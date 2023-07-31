import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;


    display: flex;
    flex-direction: column;

  input {
    all: unset;
    width: 100%;

    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.GRAY_400};
    font-size: 1.5rem;

    font-weight: 900;

    padding: 0 .5rem;

    border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_200};
  }
`;
