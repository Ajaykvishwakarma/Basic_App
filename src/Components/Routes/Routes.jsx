import { Nav } from '../Navbar/Navbar';
import { Routes, Route } from "react-router-dom";
import { Home } from "../Home/Home";
import { Details } from '../Details/Details';
import { Login } from '../Auth/Login/Login';
import { Register } from '../Auth/Register/Register';
export const AllRoutes = () => {

    return(
        <>
        <Nav />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/details/:id' element={<Details />} />
            <Route path='/signin' element={<Login />} />
            <Route path='/signup' element={<Register />} />
        </Routes>

        </>
    )
}