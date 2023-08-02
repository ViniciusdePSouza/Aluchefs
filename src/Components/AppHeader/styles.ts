import { styled } from "styled-components";

export const Container = styled.header`
    width: 100%;
    max-width: 100vw;

    display: flex;
    align-items: baseline;
    justify-content: space-between;

    padding: 1rem 2.5rem;

    margin-bottom: 2.4rem;
`

export const BackButton = styled.button`
    all: unset;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 100%;
    border: 1px solid ${({theme}) => theme.COLORS.BLUE_300};
`

export const IconButtons = styled.button`
  all: unset;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  border-radius: 8px;

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.BLUE_100};
  }
`;