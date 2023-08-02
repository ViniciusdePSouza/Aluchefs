import { Routes, Route } from 'react-router-dom'

import { Home } from '../Pages/Home'
import { Details } from '../Pages/Details'

export function AppRoutes() {
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/details/:id' element={<Details/>}/>
        </Routes>
    )
}