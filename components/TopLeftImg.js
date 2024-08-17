// // next image
// import Image from "next/image";

// const TopLeftImg = () => {
//   return (
//     <div className="absolute left-0 top-0 mix-blend-color-dodge z-10 w-[200] xl:w-[400px] opacity-50">
//       <Image src="/top-left-img.png" width={400} height={400} alt="" />
//     </div>
//   );
// };

// export default TopLeftImg;


import Image from "next/image";

const TopLeftImg = () => {
  return (
    <div className="absolute left-0 top-0 mix-blend-color-dodge z-10 opacity-50 w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] xl:w-[450px]">
      <Image
        src="/top-left-img.png"
        width={450}
        height={450}
        alt="Decorative Top Left Image"
        className="object-cover"
      />
    </div>
  );
};

export default TopLeftImg;

