import Sectiontitle from '../../../components/sectiontitle/Sectiontitle';
import './Featured.css';
import featuredImage from '../../../assets/home/featured.jpg';

const Featured = () => {
    return (
        <div className='pt-10 featured-item bg-fixed'>
            <Sectiontitle
              subHeading={"Check it out"}
              heading={"OUR MENU"}
            ></Sectiontitle>
            <div className='md:flex justify-center items-center pt-5 pb-24 px-56'>
                <div>
                  <img className=' ' src={featuredImage} alt="" />
                </div>


                <div className='md:ml-10 '>
                <p className= 'text-2xl pb-4'>May 06, 2024</p>
                <h1 className='uppercase pb-3 text-3xl'>where can i get some?</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem nemo molestiae iure deleniti nulla omnis repudiandae tempore, ipsam totam ipsa dicta ea doloremque, cumque aperiam ut hic aut! Voluptas, necessitatibus!</p>
                <button className="btn btn-outline border-0 border-b-4 mt-5 ">ORDER NOW</button>
                </div>

            </div>
            
        </div>
    );
};

export default Featured;