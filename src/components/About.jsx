import React from 'react';
import star from '../images/star.svg';
import video_img from '../images/video.jpg';
import play from '../images/play.svg'

const About = () => {
  return (
    <div className="flex h-[100vh] bg-light-yellow">
      <div className="w-[1080px] mx-auto flex flex-col gap-6 box-border mt-20">
        <div className="grid grid-cols-[2fr_1fr] gap-4 place-items-center">
          <div className="">
            <h1 className="text-6xl font-bold font-syne relative">
              We make
              <span className='ml-3'>
                your
                <img
                  src={star}
                  alt=""
                  width="50px"
                  height="5px"
                  className="absolute top-2 right-[16%]"
                />
              </span>
              business stand out
            </h1>
          </div>
          <div className="w-[400px] flex justify-center items-center">
            <p className="font-normal text-lg">
              We work closely with our clients to know their objectives, target
              audience, unique needs, and practical design solutions.
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="relative h-full">
            <img
              src={video_img}
              alt=""
              width="660px"
              height="540px"
              className="border-black border-2 rounded-3xl"
            />
            <button className="text-lg flex font-syne font-semibold bg-limeGreen text-black rounded-3xl contact p-1 transition-all duration-200 absolute top-[40%] left-[40%] border-gray-900 border-[1px]">
              Play
              <span>
                <img
                  src={play}
                  alt=""
                  width="30px"
                  height="30px"
                  className=""
                />
              </span>
            </button>
          </div>
          <div className="bg-black rounded-xl py-1 px-8 flex flex-col gap-1 text-center w-[400px] h-full ml-4">
            <div className="text-base m-3">
              <h2 className="text-limeGreen text-6xl font-syne font-bold">15+</h2>
              <p className="text-lime-100">Years of experience</p>
              <hr className="border-gray-500 mt-4" />
            </div>
            <div className="m-3 text-base">
              <h2 className="text-limeGreen text-6xl font-syne font-bold">120K</h2>
              <p className="text-lime-100">Successful projects</p>
              <hr className="border-gray-500 mt-4" />
            </div>
            <div className="m-3 text-base">
              <h2 className="text-limeGreen text-6xl font-syne font-bold">100%</h2>
              <p className="text-lime-100">Client satisfaction rate</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
