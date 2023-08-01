import { Container, Form, FormValidatorAdvisor } from "./styles";

import logo from "../../assets/logo.svg";

import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/authContext";

const loginFormSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "A senha deve conter ao menos 6 caracteres"),
});

type LoginFormData = z.infer<typeof loginFormSchema>;

export function Login() {
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
  });

  async function handleLogin({ email, password }: LoginFormData) {
    try {
      signIn({ identifier: email, password });
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  }

  function handleGoToRegister() {
    navigate("/signup");
  }

  return (
    <Container>
      <img src={logo} />

      <Form onSubmit={handleSubmit(handleLogin)}>
        <Input placeholder="Email" {...register("email")} />
        <FormValidatorAdvisor>
          {errors.email ? errors.email?.message : ""}
        </FormValidatorAdvisor>
        <Input placeholder="Senha" type="password" {...register("password")} />
        <FormValidatorAdvisor>
          {errors.password ? errors.password?.message : ""}
        </FormValidatorAdvisor>

        <Button title="Entrar" type="submit" isLoading={isSubmitting} />
      </Form>

      <p>Ainda nao possui conta?</p>

      <Button title="Registrar-se" onClick={handleGoToRegister} />
    </Container>
  );
}
