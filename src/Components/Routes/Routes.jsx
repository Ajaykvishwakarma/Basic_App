import { Nav } from '../Navbar/Navbar';
import { Routes, Route } from "react-router-dom";
import { Home } from "../Home/Home";
export const AllRoutes = () => {

    return(
        <>
        <Nav />
        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>

        </>
    )
}