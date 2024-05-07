import Featured from "./Featured/Featured";
import Testimonials from "./Testimonials/Testimonials";
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
           <Testimonials></Testimonials>
        </div>
    );
};

export default Home;