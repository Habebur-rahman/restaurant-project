import Featured from "./Featured/Featured";
import Banner from "./banner/Banner";
import Category from "./category/Category";
import Popularmenu from "./category/popularmenu/Popularmenu";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Category></Category>
           <Popularmenu></Popularmenu>
           <Featured></Featured>
        </div>
    );
};

export default Home;