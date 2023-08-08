import Form from "react-bootstrap/Form";
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

  > h2 {
    color: ${({ theme }) => theme.COLORS.BLUE_300};

    font-size: 1.8rem;

    font-weight: 900;
  }
`;

export const FormNewRecipe = styled.form`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 1.5rem;

  padding: 1.5rem 2.5rem;

  > h2 {
    text-align: left;
  }
`;

export const SelectsDiv = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2.5rem;
`;

export const SelectBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 1rem;
`;

export const Select = styled(Form.Select)`
  width: 100%;

  align-self: center;

  padding: 1rem;

  border-radius: 8px;

  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2rem;

  > option {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 1.2rem;

    color: ${({ theme }) => theme.COLORS.GRAY_200};

    &:selected {
      background-color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;

export const SelectErrorMessage = styled.div`
  color: ${({ theme }) => theme.COLORS.RED};
`;

export const InputFileGroup = styled(Form.Group)`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const InputFileLabel = styled(Form.Label)`
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

export const InputFileControl = styled(Form.Control)`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 1.2rem;
  background-color: ${({ theme }) => theme.COLORS.BLUE_100};
  padding: 1rem;

  border-radius: 8px;
`;

export const FormValidatorAdvisor = styled.p`
  color: ${({ theme }) => theme.COLORS.RED};

  font-weight: 600;
  font-size: 1.2rem;
`;
