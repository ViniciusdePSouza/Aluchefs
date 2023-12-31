import { Container, Form, FormValidatorAdvisor } from "./styles";

import logo from "../../assets/logo.svg";
import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { UserProps } from "../../@types/user";
import { api } from "../../services/api";

import { AuthResponse, useAuth } from "../../hooks/authContext";
import { useNavigate } from "react-router-dom";

const registerFormSchema = z
  .object({
    username: z.string(),
    email: z.string().email("Email inválido"),
    password: z.string().min(6, "A senha deve conter ao menos 6 caracteres"),
    confirmPassword: z
      .string()
      .min(6, "A senha deve conter ao menos 6 caracteres"),
  })
  .refine(
    ({ confirmPassword, password }) => {
      if (confirmPassword !== password) {
        return false;
      }

      return true;
    },
    { message: "A confirmação da senha e a senha informada devem ser iguais" }
  );

type RegisterFormData = z.infer<typeof registerFormSchema>;

export function SignUp() {  
    const { signIn } = useAuth()
  
    const navigate = useNavigate()
    
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<RegisterFormData>({
        resolver: zodResolver(registerFormSchema),
    });
    
    async function handleRegisterUser({ email, password, username }: UserProps) {
    try {
      await api.post<AuthResponse>("/api/auth/local/register", {
        username,
        email,
        password,
      });

      signIn({ identifier: email, password});

      navigate('/')
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Container>
      <img src={logo} />

      <Form onSubmit={handleSubmit(handleRegisterUser)}>
        <Input placeholder="Nome" {...register("username")} />
        <FormValidatorAdvisor>
          {errors.username ? errors.username?.message : ""}
        </FormValidatorAdvisor>
        <Input placeholder="Email" {...register("email")} />
        <FormValidatorAdvisor>
          {errors.email ? errors.email?.message : ""}
        </FormValidatorAdvisor>
        <Input placeholder="Senha" type="password" {...register("password")} />
        <FormValidatorAdvisor>
          {errors.password ? errors.password?.message : ""}
        </FormValidatorAdvisor>
        <Input
          placeholder="Confirme a Senha"
          type="password"
          {...register("confirmPassword")}
        />
        <FormValidatorAdvisor>
          {errors.confirmPassword ? errors.confirmPassword?.message : ""}
        </FormValidatorAdvisor>
        <Button title="Criar Conta" type="submit" isLoading={isSubmitting} />
      </Form>
    </Container>
  );
}
