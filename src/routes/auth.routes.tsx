import { Routes, Route } from 'react-router-dom'
import { SignIn } from '../Pages/SignIn'
import { Login } from '../Pages/Login'
import { SignUp } from '../Pages/SignUp'

export function AuthRoutes() {
    return(
        <Routes>
            <Route path='/' element={<SignIn/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<SignUp/>}/>
        </Routes>
    )
}