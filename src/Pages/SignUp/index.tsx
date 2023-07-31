import { Container, Form, FormValidatorAdvisor } from "./styles";

import logo from "../../assets/logo.svg";
import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";


import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from "react-hook-form";

import { UserProps } from "../../@types/user";

const registerFormSchema = z
  .object({
    name: z.string(),
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

  type RegisterFormData = z.infer<typeof registerFormSchema>

export function SignUp() {
    const {register, handleSubmit, formState: { errors, isSubmitting }} = useForm<RegisterFormData>({
        resolver: zodResolver(registerFormSchema),
    })

    function handleRegisterUser(user: UserProps) {
        console.log(user)
    }

  return (
    <Container>
      <img src={logo} />

      <Form onSubmit={handleSubmit(handleRegisterUser)}>
        <Input placeholder="Nome" {...register('name')}/>
        <FormValidatorAdvisor>
          {errors.name ? errors.name?.message : ""}
        </FormValidatorAdvisor>
        <Input placeholder="Email" {...register('email')}/>
        <FormValidatorAdvisor>
          {errors.email ? errors.email?.message : ""}
        </FormValidatorAdvisor>
        <Input placeholder="Senha" type="password" {...register('password')}/>
        <FormValidatorAdvisor>
          {errors.password ? errors.password?.message : ""}
        </FormValidatorAdvisor>
        <Input placeholder="Confirme a Senha" type="password" {...register('confirmPassword')}/>
        <FormValidatorAdvisor>
          {errors.confirmPassword ? errors.confirmPassword?.message : ""}
        </FormValidatorAdvisor>
        <Button title="Criar Conta" type='submit' isLoading={isSubmitting}/>
      </Form>
    </Container>
  );
}


