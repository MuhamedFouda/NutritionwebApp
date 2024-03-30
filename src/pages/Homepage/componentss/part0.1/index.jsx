import './index.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';



export default function Part0_1() {
    return (
        <div className='part01'>
            <h2>If you book a session, what can you benefit from with us?</h2>
            <Swiper
            loop
                spaceBetween={100}
                slidesPerView={1}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                pagination
            >
                <SwiperSlide className='slide'>
                    <img src={require('../../../../assets/نظام-غذائي-للتخسيس.jpg')} />
                    <p>
                        A weekly diet plan suitable for each person
                    </p>
                </SwiperSlide >
                <SwiperSlide className='slide'>
                    <img src={require('../../../../assets/تطبيق-WaapLog-Last-Seen-Notificationط.webp')} />
                    <p>
                        Daily follow-up on WhatsApp
                    </p>
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <img src={require('../../../../assets/zoom-con.jpg')} />
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
                    <img src={require('../../../../assets/0-monthly-meeting-thumb.webp')} />
                    <p>
                    Zoom Meeting is a monthly educational session in which we talk and discuss topics important to our health and weight loss journey                    
                    </p>                
                    </SwiperSlide>
                <SwiperSlide className='slide'>
                    <img src={require('../../../../assets/1.jpg')} />
                    <p>
                    Weekly healthy recipes that help us enjoy our lives without any deprivation                   
                     </p>                
                    </SwiperSlide>
                <SwiperSlide className='slide'>
                    <img src={require('../../../../assets/Workout Schedule.jpg')} />
                    <p>
                    Easy exercise system from home                     
                    </p>                
                    </SwiperSlide>
                <SwiperSlide className='slide'>
                    <img src={require('../../../../assets/follow-37564635.jpg')} />
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
