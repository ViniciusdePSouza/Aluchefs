import { Routes, Route } from 'react-router-dom'

import { Home } from '../Pages/Home'
import { Details } from '../Pages/Details'
import { Profile } from '../Pages/Profile'
import { ShoppingList } from '../Pages/ShoppingList'
import { Wines } from '../Pages/Wines/wines'
import { CreateRecipe } from '../Pages/CreateRecipe'

export function AppRoutes() {
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/details/:id' element={<Details/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/shoppinglist' element={<ShoppingList/>}/>
            <Route path='/wines' element={<Wines/>}/>
            <Route path='/createrecipe' element={<CreateRecipe/>}/>
        </Routes>
    )
}