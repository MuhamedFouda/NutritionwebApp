import './index.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';



export default function Section7() {
    return (
        <div className='section7'>
            <div className='sectionContent'>
                <p> HERE’S WHAT THEY’RE SAYING </p>
                <h2>"Past Client Feedback"</h2>
                <Swiper
                    loop
                    spaceBetween={100}
                    slidesPerView={1}
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    pagination
                >
                    <SwiperSlide className='slide'>
                        <img src={require('../../../../Assetss/fed6.png')} />
                        <p>
                            “I learned that there are always going to be obstacles in life and it’s how you react to them that sets you apart. I really loved how you ran this program and how you sent us the recipes. They were really amazing and easy! I also learned that some of the things I love and have been told to give up really aren’t that terrible in comparison to the alternative "better" options (i.e. my creamer). I really don’t use that much to have to make a change to a better one. The biggest change I made was starting to try new foods that I never knew about. I absolutely think this approach to eating is sustainable for the long term.”
                        </p>
                        <span>- KELLY SCOTT</span>

                    </SwiperSlide>
                    <SwiperSlide className='slide'>
                        <img src={require('../../../../Assetss/fed1.png')} />
                        <p>
                            “Alix taught me about correct portions, the breakdown of calories and macros and how to fuel my body. By the end of the program, I was keeping a food journal, eating more intuitively and eating better portions. It was great to learn the basics first in order to be set up for success. It doesn't make you feel restricted and learning the nutrition and science, I now feel armed with the knowledge to make the right decisions.”
                        </p>
                        <span>- CHLOE MAYONE</span>
                    </SwiperSlide >
                    <SwiperSlide className='slide'>
                        <img src={require('../../../../Assetss/fed2.png')} />
                        <p>
                            “During the 30 Day Slim Down, I learned how to balance my macronutrients, increased my water intake and started recording what I was eating. Alix supplied great materials and there’s a lot to learn and digest. I look forward to following up with Alix. Thank you for your wonderful program!”
                        </p>
                        <span>- JANE SIEGEL</span>

                    </SwiperSlide>
                    <SwiperSlide className='slide'>
                        <img src={require('../../../../Assetss/fed3.png')} />
                        <p>
                            “I learned that I can eat the right combination of foods and not be hungry or be craving sweets. The biggest change I made during the 30 Day Slim Down was not eating chocolate every day plus another sweet in the day.”
                            <br />
                            *6.5 pounds lost during the 30 Day Slim Down
                        </p>
                        <span>- SHERRY FAGES</span>

                    </SwiperSlide>
                    <SwiperSlide className='slide'>
                        <img src={require('../../../../Assetss/fed4.png')} />
                        <p>
                            “I can definitely see myself eating this way forever. I'm over 50 and have tried nearly everything to lose weight but it's been hard to maintain the dietary restrictions of many diets that are very popular. I am usually an "all or nothing" kind of dieter. Now I feel like I'm not making a huge sacrifice because my mindset is different.”
                            <br />
                            *5 pounds lost during the 30 Day Slim Down
                        </p>
                        <span>- ERICA SMITH</span>

                    </SwiperSlide>
                    <SwiperSlide className='slide'>
                        <img src={require('../../../../Assetss/fed5.png')} />
                        <p>
                            “I have been working with Alix for a few years now and not only has she helped me change my life but she turned me into the cook I never thought I could be! I have lost 100 lbs now - feeling better than ever - and introducing meal prep into my life was a huge part of it. I am a completely new person mentally, physically and emotionally and I owe it all to Alix and the dedication she puts into her clients. I truly believe I wouldn't be where I am without her and her unconditional support!”
                        </p>
                        <span>- DANA RUDNISKY</span>

                    </SwiperSlide>
                    <SwiperSlide className='slide'>
                        <img src={require('../../../../Assetss/fed6.png')} />
                        <p>
                            “I learned that there are always going to be obstacles in life and it’s how you react to them that sets you apart. I really loved how you ran this program and how you sent us the recipes. They were really amazing and easy! I also learned that some of the things I love and have been told to give up really aren’t that terrible in comparison to the alternative "better" options (i.e. my creamer). I really don’t use that much to have to make a change to a better one. The biggest change I made was starting to try new foods that I never knew about. I absolutely think this approach to eating is sustainable for the long term.”
                        </p>
                        <span>- KELLY SCOTT</span>

                    </SwiperSlide>
                </Swiper>

            </div>

        </div>
    )
}
