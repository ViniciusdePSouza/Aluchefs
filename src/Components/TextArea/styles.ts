import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  display: flex;
  flex-direction: column;

  textarea {
    all: unset;
    width: 100%;

    height: 15rem;

    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.GRAY_400};
    font-size: 1.5rem;

    font-weight: 900;

    padding: 0.5rem 0.5rem;

    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_200};

    border-radius: 8px;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }
`;
