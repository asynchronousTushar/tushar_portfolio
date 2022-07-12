import './Testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
    {
        name: "Ernest Achiever",
        avatar: AVTR1,
        review: "   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad necessitatibus consequatur laudantium magnam blanditiis quasi est odio quod, laborum possimus! A eaque reiciendis tempore cum provident vero ex neque facilis."
    },
    {
        name: "Ernest Achiever",
        avatar: AVTR2,
        review: "   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad necessitatibus consequatur laudantium magnam blanditiis quasi est odio quod, laborum possimus! A eaque reiciendis tempore cum provident vero ex neque facilis."
    },
    {
        name: "Ernest Achiever",
        avatar: AVTR3,
        review: "   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad necessitatibus consequatur laudantium magnam blanditiis quasi est odio quod, laborum possimus! A eaque reiciendis tempore cum provident vero ex neque facilis."
    },
    {
        name: "Ernest Achiever",
        avatar: AVTR4,
        review: "   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad necessitatibus consequatur laudantium magnam blanditiis quasi est odio quod, laborum possimus! A eaque reiciendis tempore cum provident vero ex neque facilis."
    },
];

const Testimonials = () => {
    return (
        <section id="testimonials">
            <h5>Review from Clients</h5>
            <h2>Testimonials</h2>
            <Swiper className="container testimonials__container"
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{clickable: true}}
            >
                {data.map((rev, index) => (
                    <SwiperSlide className="testimonial" key={index}>
                        <div className="client__avatar">
                            <img src={rev.avatar} alt="avatar1" />
                        </div>
                        <h5 className="client__name">{rev.name}</h5>
                        <small className="client__review">
                            {rev.review}
                        </small>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

export default Testimonials;