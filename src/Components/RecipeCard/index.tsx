import { ButtonHTMLAttributes } from "react"
import { Container } from "./styles"

interface RecipeCardProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    img: string
}

export function RecipeCard({img}: RecipeCardProps){
    return <Container>
        <img src={img} alt="" />
    </Container>

}