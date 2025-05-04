import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

export default function Slider() {
  return (
    <div className="w-full px-4 py-10">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 1 },
        }}
        className="rounded-lg"
      >
        <SwiperSlide>
          <div className="bg-base-300 border border-base-300 w-full rounded-md shadow-2xl">
            <img className='w-full lg:h-120 h-80' src="https://png.pngtree.com/png-clipart/20221020/original/pngtree-join-us-today-vector-sticker-png-image_8708365.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-base-300 border border-base-300 w-full rounded-md shadow-2xl">
            <img className='w-full lg:h-120 h-80' src="https://img.freepik.com/free-photo/front-view-young-female-posing-with-red-background-fashion-shopping-equality-mall-affectionate-femininity-feminine-horizontal-sale_140725-156455.jpg?t=st=1746387478~exp=1746391078~hmac=a3b05cd5708d49f86cdd90968ceeda1a72c8ab1b507cb0416c155fbc9c7b196d&w=996" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-base-300 border border-base-300 w-full rounded-md shadow-2xl">
            <img className='w-full lg:h-120 h-80' src="https://t3.ftcdn.net/jpg/03/95/54/04/360_F_395540409_rbH3teKkKqfNZenUhFCrzreWo98gAYls.jpg" alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
