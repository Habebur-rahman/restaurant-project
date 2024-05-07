import Sectiontitle from "../../../components/sectiontitle/Sectiontitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Testimonials = () => {

   const [reviews, setReviews] = useState([])

   useEffect ( ()=> {
      fetch ('reviews.json')
      .then (res => res.json())
      .then (data => setReviews(data))

   },[])

    return (
        <section className=" px-8 mb-20">
            <Sectiontitle
            subHeading={"What Our Client Say"}
            heading={"TESTIMONIALS"}
            ></Sectiontitle>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper ">
       
        {
            reviews.map(review => <SwiperSlide
              key={review._id}
            >
                <div className="mt-8 mb-4 text-center flex flex-col items-center">
                <Rating
                 style={{ maxWidth: 180 }}
                 value={review.rating}
                readOnly
                   />
                    <p className="py-2">{review.details}</p>
                    <h1 className="text-3xl text-yellow-500">{review.name}</h1>
                </div>
            </SwiperSlide>)
        }
            </Swiper>
        </section>
    );
};

export default Testimonials;