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
  let places = await fetch('https://amrtago.vercel.app/place/find/Hotel');
  return places.json();
}

export default function Hotels() {
  let places = use(getPosts());

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
        {places.slice(1, 8).map((place) => (
          <SwiperSlide key={place._id} className="h-[250px] relative ">
            <Image
              src={`https://skydigitmm.com/gotripapi/${place?.images[0]?.pathimages}`}
              alt={place.placeId}
              sizes="100vh"
              fill
              style={{
                objectFit: 'cover',
                borderRadius: '15px',
              }}
            />
            <div className="px2 py-1 bg-white text-gray-900 text-sm absolute bottom-0 text-center font-semibold block mx-auto w-full">
              {place.localize.name[0]}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
