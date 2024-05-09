import { Helmet } from "react-helmet-async";
import Cover from "../../../Shared/Cover/Cover";
import menuImg from '../../../assets/menu/dessert-bg.jpeg';
import Popularmenu from '../.././Home/category/popularmenu/Popularmenu';
import Number from "../Number/Number";


const Menu = () => {
    return (
        <div>
           <Helmet>
            <title>Restaurant | Menu </title>
            </Helmet>
            <Cover
             img={menuImg}
             title={"our menu"}
            ></Cover>
            <Popularmenu></Popularmenu>
            <Number></Number>
        </div>
    );
};

export default Menu;