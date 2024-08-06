// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "Portfolio ",
          path: "/thumb1.jpg",
          link: "https://example.com/project1",
        },
        {
          title: "Ransomware",
          path: "/thumb2.jpg",
          link: "https://example.com/project2",
        },
        {
          title: "Health-Connect",
          path: "/thumb3.jpg",
          link: "https://example.com/project3",
        },
        {
          title: "Work in Progress",
          path: "/thumb4.jpg",
          link: "https://example.com/project4",
        },
      ],
    },
    // {
    //   images: [
    //     {
    //       title: "Project 5",
    //       path: "/thumb4.jpg",
    //       link: "https://example.com/project5",
    //     },
    //     {
    //       title: "Project 6",
    //       path: "/thumb1.jpg",
    //       link: "https://example.com/project6",
    //     },
    //     {
    //       title: "Project 7",
    //       path: "/thumb2.jpg",
    //       link: "https://example.com/project7",
    //     },
    //     {
    //       title: "Project 8",
    //       path: "/thumb3.jpg",
    //       link: "https://example.com/project8",
    //     },
    //   ],
    // },
  ],
};

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

// icons
import { BsArrowRight } from "react-icons/bs";
// next images
import Image from "next/image";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, imgIndex) => {
                return (
                  <div className="relative rounded-lg overflow-hidden flex items-center justify-center group" key={imgIndex}>
                    <a href={image.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center relative overflow-hidden group">
                      {/* image */}
                      <Image src={image.path} width={500} height={300} alt={image.title} />
                      {/* overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                      {/* title */}
                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                        <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                          <div className="delay-100">{image.title}</div>
                          <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200"><BsArrowRight /></div>
                        </div>
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
