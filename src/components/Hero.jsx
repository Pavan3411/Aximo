import React from 'react';
import star from '../images/star.svg';
import hero_user_1 from '../images/hero-user-1.png';
import hero_user_2 from '../images/hero-user-2.png';
import hero_user_3 from '../images/hero-user-3.png';
import hero_img from '../images/hero-img.jpg';
import arrow from '../images/arrow.svg';
import call from '../images/icon-buttery-white-phone.svg';

const Hero = () => {
  return (
    <div className="bg-black h-[100vh] flex items-center">
      <div className="flex w-[75%] mx-auto gap-x-[20px]">
        <div className="flex flex-col py-5 px-2 w-[65%]">
          <h1 className="font-bold text-8xl text-lightGreen font-syne ">
            A
            <span className="inline-flex gap-5 ml-4">
              creative
              <img src={star} alt="" width="74px" height="70px" />
            </span>
            design studio
          </h1>
          <p className="text-lime-50 text-lg mt-6 max-w-[530px]">
            We're a creative design studio specializing in meeting the needs of
            the new generation. We offer innovative and cutting-edge design
            solutions to help our clients stand out in today's fast-paced.
          </p>
          <div className="flex items-center gap-4 my-3">
            <div className="flex my-5 -space-x-3">
              <img
                src={hero_user_1}
                alt=""
                width="50px"
                height="50px"
                className="rounded-full border-[6px] border-black z-[3]"
              />
              <img
                src={hero_user_2}
                alt=""
                width="50px"
                height="50px"
                className="rounded-full border-[6px] border-black z-[6]"
              />
              <img
                src={hero_user_3}
                alt=""
                width="50px"
                height="50px"
                className="rounded-full border-[6px] border-black z-[9]"
              />
            </div>
            <span className="text-lime-50 font-semibold inline">
              Believed by more than a thousand people
            </span>
          </div>
          <button className="font-syne font-bold text-base bg-limeGreen text-black border-black border-2 rounded-full py-[16px] contact transition-all duration-200 relative max-w-[320px] text-start pl-5 ">
            Book a free consultation
            <div className='absolute top-[24%] right-[5%] bg-black rounded-full p-1'>
            <img src={call} alt="" className='w-6 h-6' /> </div>
          </button>
        </div>
        <div className="flex items-center justify-center w-[35%]">
          <img
            src={hero_img}
            alt="hero-img"
            className="border-lime-100 border-4 rounded-3xl h-[450px] w-[550px] self-stretch"
          />
          <img
            src={arrow}
            alt=""
            className="absolute left-[42%] bottom-[15%] z-10"
            width="250px"
            height="200px"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
