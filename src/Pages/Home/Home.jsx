import Banner from "./banner/Banner";
import Category from "./category/Category";
import Popularmenu from "./category/popularmenu/Popularmenu";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Category></Category>
           <Popularmenu></Popularmenu>
        </div>
    );
};

export default Home;