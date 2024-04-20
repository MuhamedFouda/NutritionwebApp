import './index.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';



export default function Section5() {
    return (
        <div className='section5'>
            <h2> Book a session and benefit from our services </h2>
            <Swiper
            loop
                spaceBetween={100}
                slidesPerView={1}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                pagination
            >
                <SwiperSlide className='slide'>
                    <img src={require('../../../../assets/1.1.jpg')} />
                    <p>
                        A weekly diet plan suitable for each person
                    </p>
                </SwiperSlide >
                <SwiperSlide className='slide'>
                    <img src={require('../../../../assets/1.2.jpg')} />
                    <p>
                        Daily follow-up on WhatsApp
                    </p>
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <img src={require('../../../../assets/1.3.jpg')} />
                    <p>
                        Zoom Meeting is a monthly educational session in which we talk and discuss topics important to our health and weight loss journey
                    </p>                
                    </SwiperSlide>
                <SwiperSlide className='slide'>
                    <img src={require('../../../../assets/جروب.png')} />
                    <p>
                    A group for continuous encouragement and support and to answer your questions at any time                    
                    </p>                
                    </SwiperSlide>
                <SwiperSlide className='slide'>
                    <img src={require('../../../../assets/1.5.png')} />
                    <p>
                    Zoom Meeting is a monthly educational session in which we talk and discuss topics important to our health and weight loss journey                    
                    </p>                
                    </SwiperSlide>
                <SwiperSlide className='slide'>
                    <img src={require('../../../../assets/1.6.webp')} />
                    <p>
                    Weekly healthy recipes that help us enjoy our lives without any deprivation                   
                     </p>                
                    </SwiperSlide>
                <SwiperSlide className='slide'>
                    <img src={require('../../../../assets/1.7.jpg')} />
                    <p>
                    Easy exercise system from home                     
                    </p>                
                    </SwiperSlide>
                <SwiperSlide className='slide'>
                    <img src={require('../../../../assets/1.8.jpg')} />
                    <p>
                        Follow up on tests, health status, and a vitamin plan suitable for each person individually
                    </p>
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <img src={require('../../../../assets/competion.jpg')} />
                    <p>
                    Monthly competitions and incentive gifts                    
                    </p>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
