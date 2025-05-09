'use client'

import { scrollTo } from "./utils/scrollTo"
import { FaArrowRight, FaArrowDown } from "react-icons/fa";

import { useEffect } from "react";
import gsap from "gsap";

import Image from "next/image";

const Landing = () => {

  // const gradientRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   if (gradientRef.current) {
  //     gsap.fromTo(
  //       gradientRef.current,
  //       { width: '0%' },
  //       { width: '100%', duration: 1.2, ease: 'power2.out' }
  //     );
  //   }
  // }, []);

  useEffect(() => {

    gsap.from("#message1", {
      opacity:0,
      y:-50,
      duration: 1.3,
      delay:0.5,
      ease: "power1.out"
    });

    gsap.from("#message2", {
      autoAlpha: 0,
      duration: 1,
      delay:2,
      ease: "power1.out"
    });
  }, [])
  
  const handleScroll = () => {
    scrollTo('#about', { offset: 20, delay: 0, duration: 1000})
  }

  // https://nutritionsource.hsph.harvard.edu/wp-content/uploads/2024/11/AdobeStock_173185034-1024x576.jpeg

  return (
    <div className="w-[100vw] h-[100vh]">

      <div className="cover"></div>

      <Image 
        src="/diabetes-bg.avif"
        alt="Coat of Arms of Malta"
        fill
        sizes="100vw"
        className="absolute -z-2 w-full h-full object-contain"
      />

      {/* <div
        ref={gradientRef}
        className="h-full bg-gradient-to-l from-white to-black absolute left-0 top-0 -z-2 "
      /> */}

      <div className="flex flex-col justify-center w-full h-full items-center m-[0 auto] text-white z-5">
        <h1 className="text-2xl text-center uppercase tracking-widest" id="message1">
          Diabetes doesn't wait
        </h1>
        <h1 className="text-3xl sm:text-7xl font-bold text-center mt-[20px]" id="message2">
          Why should{" "}
          <span className="text-[orange]">you</span>?
        </h1>
        
        <div className="flex flex-row gap-[2rem] mt-[40px]">
          <button 
            className="flex items-center gap-[0.3rem] border border-gray-300 rounded-full px-4 py-2 cursor-pointer font-bold
            bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition ease-in-out duration-500 
            hover:from-purple-500 hover:via-pink-500 hover:to-blue-500 hover:scale-110"
            onClick={handleScroll}
          >
            Learn more <FaArrowDown />
          </button>
          <button 
            className="flex items-center gap-[0.3rem] border border-gray-300 rounded-full px-4 py-2 cursor-pointer font-bold
            transition ease-in-out duration-500 bg-[white] text-black
            hover:bg-black hover:text-white"
          >
            Get tested <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Landing