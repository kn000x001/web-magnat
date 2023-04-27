import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export default () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      autoplay={true}
      breakpoints={{
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      loop={true}
    >
        <SwiperSlide>
            <div className="p-6 slider-1 rounded-lg">
                <div className="my-2">
                    <h2>“Upwork enables us to differentiate ourselves from our competitors and produce content at a higher caliber.”</h2>
                    <p>
                    Josh Machiz, Chief Digital Officer
                    </p>
                </div>

                <div className="border-b-2 border-white">
                    <p>Results</p>
                </div>
                <div>
                    <h4>Emmy Winning</h4>
                    <p>Facebook Watch program</p>
                </div>

                <div>
                    <h4>Millions</h4>
                    <p>of impressions generated per client per IPO</p>
                </div>
            </div>
        </SwiperSlide>
      <SwiperSlide>
            <div className="p-6 slider-2 rounded-lg">
                <div className="my-2">
                    <h2>“Upwork enables us to differentiate ourselves from our competitors and produce content at a higher caliber.”</h2>
                    <p>
                    Josh Machiz, Chief Digital Officer
                    </p>
                </div>

                <div className="border-b-2 border-white">
                    <p>Results</p>
                </div>
                <div>
                    <h4>Emmy Winning</h4>
                    <p>Facebook Watch program</p>
                </div>

                <div>
                    <h4>Millions</h4>
                    <p>of impressions generated per client per IPO</p>
                </div>
            </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="p-6 slider-3 rounded-lg">
                <div className="my-2">
                    <h2>“Upwork enables us to differentiate ourselves from our competitors and produce content at a higher caliber.”</h2>
                    <p>
                    Josh Machiz, Chief Digital Officer
                    </p>
                </div>

                <div className="border-b-2 border-white">
                    <p>Results</p>
                </div>
                <div>
                    <h4>Emmy Winning</h4>
                    <p>Facebook Watch program</p>
                </div>

                <div>
                    <h4>Millions</h4>
                    <p>of impressions generated per client per IPO</p>
                </div>
            </div>
      </SwiperSlide>
    </Swiper>
  );
};
