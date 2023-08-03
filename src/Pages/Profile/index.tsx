import { ArrowLeft } from "phosphor-react";
import { Container, IconButton, Nav, NavButton, PhotoDiv, ProfileHeader, TitleDiv } from "./styles";

import { defaultTheme } from "../../styles/theme/default";
import userThumb from '../../assets/profile-user.png'

import { useNavigate } from "react-router-dom";
import { BASE_URL, api } from "../../services/api";
import { useEffect, useState } from "react";

export function Profile() {
    const navigate = useNavigate()
    const userLocalStorage = localStorage.getItem("@aluchef:user")
    const user = userLocalStorage ? JSON.parse(userLocalStorage) : {}

    const [userPhoto, setUserPhoto] = useState('')
    
    function handleGoBack() {
        navigate(-1)
    }
    

    async function fetchUser() {
        const response = await api.get(`/api/users/${user.id}?populate=*`)

        return response.data
    }

    useEffect(() => {
        async function fetchUserPhoto() {
            const response = await fetchUser()

            setUserPhoto(response.photo.url)
        }

        fetchUserPhoto()

    }, [user])

    return <Container>
        <ProfileHeader>
            <PhotoDiv>
                <img src={userPhoto ? `${BASE_URL}${userPhoto}` : userThumb } alt="" />
                <span>{user.username}</span>
            </PhotoDiv>

            <IconButton onClick={handleGoBack}>
            <ArrowLeft size={24} color={defaultTheme.COLORS.BLUE_300} />
            </IconButton>
        </ProfileHeader>

        <TitleDiv>
            <h2>Meu livro de Receitas</h2>
        </TitleDiv>
        <Nav>
            <NavButton>
                Criar Receita
            </NavButton>
            <NavButton>
                Lista de compras
            </NavButton>
        </Nav>
    </Container>
}