import React from 'react';
import aximo from '../images/aximo.svg';
import linkedin from '../images/white-linkedin.svg';
import instagram from '../images/white-instagram.svg';
import facebook from '../images/white-facebook.svg';
import twitter from '../images/white-twitter.svg';
import linkedin_black from '../images/linkedin.svg';
import instagram_black from '../images/instagram.svg';
import facebook_black from '../images/facebook.svg';
import twitter_black from '../images/twitter.svg';
import arrow from '../images/arrow.svg';
import star from '../images/star.svg';
import white_arrow from '../images/white_arrow.svg';
import { delay, motion } from "framer-motion";



const Contact = () => {

  return (
    <div className="bg-black">
      <div className="p-2 h-[90vh] text-white grid grid-cols-[2fr_1fr] py-20 mx-auto w-[1280px] items-center leading-none relative">
        <motion.div 
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:-100}}
                transition={{duration: 0.6 , delay:0.2, type: "spring", stiffness: "220"}}
        className="flex flex-col py-2 space-y-10 ">
          <h1 className="text-[71px] tracking-normal font-bold font-syne relative text-lime-100">
            Let's start
            <span className='ml-4'>
              a
              <img
                src={star}
                alt=""
                width="60px"
                height="60px"
                className="top-[6%] left-[55%] absolute"
              />
            </span>
            <br />
            project together
          </h1>
          <p className="text-[20px] w-[600px] tracking-wide leading-6 text-lime-50">
            We work closely with our clients to understand their objectives,
            target audience, and unique needs. We use our creative skills to
            translate these requirements and practical design solutions.
          </p>
          <div className='flex flex-col text-[21px] gap-y-2'>
          <h6 className="text-lime-400">Give us a call:</h6>
          <p className="font-sans">(123)-456-7890</p> </div>
          <div className='flex flex-col text-[21px] gap-y-2'> <h6 className="text-lime-400 font-syne">
            Send us an email:
          </h6>
          <p className="font-sans">xyzmail@email.com</p> </div>
          
          <div className="flex space-x-3">
            <div className='border-white border-[1px] rounded-full flex p-2 group hover:bg-limeGreen icons'>
            <a href="https://x.com/home?lang=en" />
            <img
              src={twitter}
              alt=""
              className="w-4 h-4 group-hover:hidden hover:shadow-white/50"
            /> 
            <img
              src={twitter_black}
              alt=""
              className="w-4 h-4 hidden group-hover:block"
            /></div>
            <div className='border-white border-[1px] rounded-full flex p-2 group hover:bg-limeGreen icons'>
            <a href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F" />
            <img
              src={facebook}
              alt=""
              className="w-4 h-4 group-hover:hidden"
            /> 
            <img
              src={facebook_black}
              alt=""
              className="w-4 h-4 hidden group-hover:block"
            /></div>
            <div className='border-white border-[1px] rounded-full flex p-2 group hover:bg-limeGreen icons'>
            <a href="https://www.instagram.com/" />
            <img
              src={instagram}
              alt=""
              className="w-4 h-4 group-hover:hidden"
            /><img
            src={instagram_black}
            alt=""
            className="w-4 h-4 hidden group-hover:block"
          /> </div>
            <div>
            <div className='border-white border-[1px] rounded-full flex p-2 group hover:bg-limeGreen icons'>
              <a href="https://www.linkedin.com/feed/"
                className=""/>
              <img
                src={linkedin}
                alt=""
                className="w-4 h-4 group-hover:hidden"
              /><img
              src={linkedin_black}
              alt=""
              className="w-4 h-4 hidden group-hover:block"
            /> </div>
            </div>
          </div>
        </motion.div>
        <img
            src={arrow}
            alt=""
            width="300px"
            height="300px"
            className="absolute bottom-40 left-[30%]"
          />
        <motion.div 
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:100}}
        transition={{duration: 0.6 , delay:0.2, type: "spring", stiffness: "220"}}
        className="text-white">
          <h6 className="mb-4 text-2xl text-lime-50 ">Send us a message</h6>
          <form className="flex flex-col gap-4 font-syne text-[21px]">
            <input
              type="text"
              placeholder="Your name"
              className="bg-black border-[1px] border-white py-3 px-4 rounded-full w-96 placeholder-style"
            />
            <input
              type="text"
              placeholder="Your email address"
              className="bg-black border-[1px] border-white py-3 px-4 rounded-full w-96 placeholder-style"
            />
            <input
              type="text"
              placeholder="Your phone number"
              className="bg-black border-[1px] border-white py-3 px-4 rounded-full w-96 placeholder-style"
            />
            <textarea
              type="text"
              placeholder="Write your message here.."
              className="bg-black border-[1px] border-white py-3 px-4 rounded-xl w-96 placeholder-style"
              rows="4"
            ></textarea>
            <button className="font-syne font-bold text-base bg-limeGreen text-black rounded-full py-[16px] contact transition-all duration-200 relative w-96 text-left px-7 border-black border-2">
            Send message
            <div></div>
            <img src={white_arrow} alt="" className='absolute bg-black rounded-full p-2 top-[8%] right-[2%] w-12 h-12'/>
          </button>
          </form>
        </motion.div>
      </div>
      <div className="h-[10vh] bg-black w-[980px] mx-auto">
        <hr />
        <div className="flex justify-between py-6 pl-2">
          <img
            src={aximo}
            alt="aximo-logo"
            width="90px"
            height="90px"
          />
          <p className="text-white">
            © Copyright 2024, All Rights Reserved by P.Suthar
          </p>
        </div>
      </div>
    </div>
  )
}

export default Contact
