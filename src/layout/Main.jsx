import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../pages/Shared/NavBar/NavBar";
import Footer from "../pages/Shared/Footer/Footer";


const Main = () => {
    const location = useLocation();
    const isOnErrorPage = location.pathname === "/errorPage";
    const isOnLoginPage = location.pathname === "/login";
    const isOnRegisterPage = location.pathname === "/register";

    return (
        <div>
            {!isOnErrorPage && !isOnLoginPage && !isOnRegisterPage && <NavBar></NavBar>}

            <Outlet></Outlet>

            {!isOnErrorPage && !isOnLoginPage && !isOnRegisterPage && <Footer></Footer>}
        </div>
    );
};

export default Main;