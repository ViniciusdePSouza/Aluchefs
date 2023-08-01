import styled from "styled-components";

export const Container = styled.button`
  all: unset;

  border-radius: 16px;

  color: ${({ theme }) => theme.COLORS.BLUE_300};
  text-align: center;
  font-size: 1.5rem;

  font-weight: 700;
  line-height: normal;

  background-color: ${({ theme }) => theme.COLORS.WHITE};

  padding: 1rem 2rem;

  cursor: pointer;

  &:active {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); 
    transform: translateY(2px);
  }
`;
