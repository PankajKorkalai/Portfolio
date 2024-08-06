import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";
import { FreeMode, Pagination } from 'swiper';

const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Branding',
    description: 'Crafting memorable brands with strong visual identities and strategies.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'Creating engaging and user-friendly designs for web and mobile.',
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'Building robust web and mobile applications tailored to your needs.',
  },
  {
    icon: <RxReader />,
    title: 'Marketing',
    description: 'Delivering compelling content that captures your brand’s voice and engages audiences.',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'Enhancing your website’s visibility and driving organic traffic with effective SEO strategies.',
  },
];

const ServiceSlider = () => {
  return (
    <Swiper 
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className='h-[240px] sm:h-[340px]'
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='bg-[rgba(65,47,123,0.15)] h-[100%] rounded-lg px-6 py-8 flex flex-col justify-between group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
              {/* icons */}
              <div className='text-4xl text-accent mb-4 flex-shrink-0'>{item.icon}</div>
              {/* title & desc*/}
              <div className='flex-1'>
                <div className='mb-2 text-lg'>{item.title}</div>
                <p className='leading-normal'>{item.description}</p>
              </div>
              {/* arrow */}
              <div className='text-3xl'>
                <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300'/>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
