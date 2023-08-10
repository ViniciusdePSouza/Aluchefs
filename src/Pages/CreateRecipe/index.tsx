import { ChangeEvent, useEffect, useState } from "react";
import { Input } from "../../Components/Input";
import { TextArea } from "../../Components/TextArea";
import {
  Container,
  SectionTitle,
  FormNewRecipe,
  SelectsDiv,
  SelectBox,
  Select,
  InputFileGroup,
  InputFileLabel,
  InputFileControl,
  FormValidatorAdvisor,
} from "./styles";
import { api } from "../../services/api";
import { Button } from "../../Components/Button";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

interface WineProps {
  id: number;
  name: string;
}

interface CategoryProps {
  id: number;
  name: string;
}

const newRecipeSchema = z.object({
  title: z
    .string()
    .nonempty()
    .refine((value) => value.trim() !== "", {
      message: "Esse campo é obrigatório",
    }),
  ingredients: z
    .string()
    .nonempty()
    .refine((value) => value.trim() !== "", {
      message: "Esse campo é obrigatório",
    }),
  howToDo: z
    .string()
    .nonempty()
    .refine((value) => value.trim() !== "", {
      message: "Esse campo é obrigatório",
    }),
  category: z
    .string()
    .nonempty()
    .refine((value) => value.trim() !== "", {
      message: "Esse campo é obrigatório",
    }),
  wine: z
    .string()
    .nonempty()
    .refine((value) => value.trim() !== "", {
      message: "Esse campo é obrigatório",
    }),
});

type NewRecipeData = z.infer<typeof newRecipeSchema>;

export function CreateRecipe() {
  const [wines, setWines] = useState<WineProps[]>([]);
  const [categories, setCategories] = useState<CategoryProps[]>([]);
  const [photo, setPhoto] = useState<File | null>(null);

  async function fetchWines() {
    const response = api.get("/api/wines?populate=*");

    return response;
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<NewRecipeData>({
    resolver: zodResolver(newRecipeSchema),
  });

  async function handleCreateNewRecipe({
    category,
    howToDo,
    ingredients,
    title,
    wine,
  }: NewRecipeData) {
    if (!photo) {
      return alert("é necessária uma foto para a sua receita");
    }

    try {
      const response = await api.post("/api/recipes", {
        data: {
          title,
          description: howToDo,
          ingredients,
          wines: [{ id: wine }],
          category: [{ id: category }],
        },
      });

      const formData = new FormData();

      formData.append("ref", "api::recipe.recipe");
      formData.append("refId", response.data.data.id);
      formData.append("field", "thumb");
      formData.append("files", photo);

      await api.post("/api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("receita criada");
    } catch (err) {
      console.log(err);
    }
  }

  function handleFileChanges(e: ChangeEvent<HTMLInputElement>) {
    const selectedFile = e.target.files && e.target.files[0];

    if (selectedFile) {
      setPhoto(selectedFile);
    }
  }

  async function fetchCategories() {
    const response = api.get("/api/categories");

    return response;
  }

  const ingredientsPlaceHolder = ` Adicione os ingredientes da sua receita: -1L de leite -2 cebolas etc ...`;
  const howToDoPlaceholder = "Modo de fazer";

  useEffect(() => {
    async function populateWines() {
      const response = await fetchWines();

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const winesArray = response.data.data.map((wine: any) => {
        return {
          id: wine.id,
          name: wine.attributes.name,
        };
      });

      setWines(winesArray);
    }
    populateWines();
  }, []);

  useEffect(() => {
    async function populateCategories() {
      const response = await fetchCategories();

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const categoriesArray = response.data.data.map((category: any) => {
        return {
          id: category.id,
          name: category.attributes.name,
        };
      });

      setCategories(categoriesArray);
    }

    populateCategories();
  }, []);
  return (
    <Container>
      <SectionTitle>
        <h2>Criar nova receita</h2>
      </SectionTitle>

      <FormNewRecipe onSubmit={handleSubmit(handleCreateNewRecipe)}>
        <Input placeholder="Nome da receita" {...register("title")} />
        {
          <FormValidatorAdvisor>
            {errors.title ? errors.title?.message : ""}
          </FormValidatorAdvisor>
        }

        <TextArea
          placeholder={ingredientsPlaceHolder.trim()}
          {...register("ingredients")}
        />
        {
          <FormValidatorAdvisor>
            {errors.ingredients ? errors.ingredients?.message : ""}
          </FormValidatorAdvisor>
        }

        <TextArea placeholder={howToDoPlaceholder} {...register("howToDo")} />
        {
          <FormValidatorAdvisor>
            {errors.howToDo ? errors.howToDo?.message : ""}
          </FormValidatorAdvisor>
        }

        <SelectsDiv>
          <SelectBox>
            <Select aria-label="categoria do prato" {...register("category")}>
              <option>Escolha a categoria</option>
              {categories &&
                categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
            </Select>
          </SelectBox>
          <SelectBox>
            <Select aria-label="vinho para acompanhar" {...register("wine")}>
              <option>Escolha o vinho</option>
              {wines &&
                wines.map((wine) => (
                  <option key={wine.id} value={wine.id}>
                    {wine.name}
                  </option>
                ))}
            </Select>
          </SelectBox>
        </SelectsDiv>

        <InputFileGroup>
          <InputFileLabel>Foto do prato</InputFileLabel>
          <InputFileControl
            type="file"
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleFileChanges(e)}
          />
        </InputFileGroup>



        <Button title="Criar Receita" isLoading={isSubmitting} type="submit" />
      </FormNewRecipe>
    </Container>
  );
}
