import { styled } from "styled-components";

export const Container = styled.button`
  all: unset;
  min-width: 100%;


  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.8rem;

  padding: 1.7rem;
  margin-top: 0.8rem;

  text-align: center;
  font-size: 1.6rem;
  font-weight: 700;

  border-radius: 15px;
  background: ${({ theme }) => theme.COLORS.WHITE};

  color: ${({ theme }) => theme.COLORS.BLUE_300};

  cursor: pointer;
`;
