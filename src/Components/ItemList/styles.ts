import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  gap: 1rem;

  padding: .8rem;

  border: 1px solid ${({theme}) => theme.COLORS.PINK_300};
  border-radius: 8px;

  margin-top: 1rem;

  > p {
    color: rgba(0, 0, 0, 0.68);
    width: 100%;
    font-family: "Roboto";
    font-size: 1.5rem;

    font-weight: 900;
    line-height: normal;
  }
`;

export const IconButton = styled.button`
  all: unset;

  width: 22px;

  display: flex;
  justify-content: center;

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.BLUE_100};
  }
`;
