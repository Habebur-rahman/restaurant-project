import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import Sectiontitle from '../../../components/sectiontitle/Sectiontitle';



import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';









const Category = () => {
    return (
        <section>
            <Sectiontitle
           subHeading={"From 10:00am To 11:00pm"}
           heading={"Order online"}

            ></Sectiontitle>
        <Swiper
        slidesPerView={4}
        spaceBetween={25}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-20"
      >
        <SwiperSlide> <img src={slide1} alt="" /> 
        <h3 className='text-3xl uppercase text-center -mt-16 text-white'>Salads</h3>
        </SwiperSlide>
        <SwiperSlide><img src={slide2} alt="" />
        <h3 className='text-3xl uppercase text-center -mt-16 text-white'>Pizzas</h3>
        </SwiperSlide>
        <SwiperSlide><img src={slide3} alt="" />
        <h3 className='text-3xl uppercase text-center -mt-16 text-white'>Soups</h3>
        </SwiperSlide>
        <SwiperSlide><img src={slide4} alt="" />
        <h3 className='text-3xl uppercase text-center -mt-16 text-white'>Desserts</h3>
        </SwiperSlide>
        <SwiperSlide><img src={slide5} alt="" />
        <h3 className='text-3xl uppercase text-center -mt-16 text-white'>Salads</h3>
        </SwiperSlide>
        
        
      </Swiper>
      </section>
    );
};

export default Category;