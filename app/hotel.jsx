'use client';

import SwiperCore, {
  Pagination,
  Navigation,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import p1 from '../public/pol1.webp';
import p2 from '../public/mdy-o-paine.jpg';
import p3 from '../public/mdy-pagoda.jpg';
import p4 from '../public/ygn-shwetidone.jpeg';

SwiperCore.use([Pagination, Navigation]);

const Slider = () => {
  return (
    <div className="mt-2">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={1}
        slidesPerView={1}
        loop
        // autoplay={{ delay: 5000 }}
        // navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <div className="w-screen relative h-[300px] ">
            <Image
              src={p2}
              alt="pol"
              sizes="100vw"
              fill
              style={{
                objectFit: 'cover',
              }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-screen relative h-[300px] ">
            <Image
              src={p3}
              alt="pol"
              sizes="100vw"
              fill
              style={{
                objectFit: 'cover',
              }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-screen relative h-[300px] ">
            <Image
              src={p1}
              alt="pol"
              sizes="100vw"
              fill
              style={{
                objectFit: 'cover',
              }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-screen relative h-[300px] ">
            <Image
              src={p4}
              alt="pol"
              sizes="100vw"
              fill
              style={{
                objectFit: 'cover',
              }}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default function Hotel() {
  return (
    <>
      <div>
        <Slider />
      </div>
    </>
  );
}
