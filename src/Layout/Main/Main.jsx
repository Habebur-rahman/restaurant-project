import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../Shared/NavBar/Navbar";
import Footer from "../../Shared/Footer/Footer";


const Main = () => {
    const location = useLocation();
    const noHeaderFootre = location.pathname.includes('login');
    return (
        <div>
            { noHeaderFootre || <Navbar></Navbar>}
            <Outlet></Outlet>
            { noHeaderFootre || <Footer></Footer>}
        </div>
    );
};

export default Main;