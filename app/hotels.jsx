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

SwiperCore.use([Pagination, Navigation]);

import { use } from 'react';

async function getPosts() {
  let hotels = await fetch('https://amrtago.vercel.app/place/find/Hotel');
  return hotels.json();
}

export default function Hotels() {
  let hotels = use(getPosts());

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-gray-900 font-semibold text-md">
          Hotels in your area
        </h2>
        <h3 className="text-gray-600 font-semibold text-md ">See More...</h3>
      </div>

      {/* swiper components */}

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={10}
        slidesPerView={2}
        loop
        // autoplay={{ delay: 5000 }}
        // navigation
        // pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {hotels.slice(1, 8).map((hotel) => (
          <SwiperSlide key={hotel._id} className="h-[250px] relative ">
            <Image
              src={`https://skydigitmm.com/gotripapi/${hotel?.images[0]?.pathimages}`}
              alt={hotel.placeId}
              sizes="100vh"
              fill
              style={{
                objectFit: 'cover',
                borderRadius: '15px',
              }}
            />
            <div className="px2 py-1 bg-white text-gray-900 text-sm absolute bottom-0 text-center font-semibold block mx-auto w-full">
              {hotel.localize.name[0]}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
