import React from 'react';
import star from '../images/star.svg';
import ui from '../images/ui.svg';
import black_arrow from '../images/black-arrow.svg';
import graphic from '../images/graphic.svg';
import web from '../images/web.svg';
import motion_img from '../images/motion.svg';
import { motion } from 'framer-motion';

const Work = () => {
  return (
    <div className="h-[110vh] w-full bg-light-yellow">
      <div className="flex mx-auto flex-col">
        <div className='mt-12'>
          <motion.h1 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-6xl font-bold font-syne mx-auto flex justify-center relative">
            We provide effective <br />
            design solutions
            <img
              src={star}
              alt=""
              width="50px"
              height="5px"
              className="text-center absolute top-[57%] right-[34%]"
            />
          </motion.h1>
        </div>
        <motion.div 
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="grid grid-cols-2 mx-auto mt-10 gap-7">
          <div className="box-border border-[1px] border-blue-950 w-[550px] h-[312px] rounded-3xl hover:bg-lime-300 transition-all duration-200 shadow-slate-100 boxes flex flex-col p-8 gap-y-5 ">
            <img src={ui} alt="" className="w-16 h-16" />
            <h3>UI/UX Design</h3>
            <p>
              Focusing on user interface (UI) and user experience (UX) design to
              enhance the usability and accessibility of digital products & app.
            </p>
            <img
              src={black_arrow}
              alt=""
              className="h-10 w-10 arrow"
            />
          </div>
          <div className="box-border border-[1px] border-blue-950 w-[550px] h-[312px] rounded-3xl hover:bg-lime-300 transition-all duration-200 shadow-slate-100 boxes flex flex-col p-8 gap-y-5 ">
            <img src={graphic} alt="" className="w-16 h-16" />
            <h3>Graphic Design</h3>
            <p>
              Creating visual elements such as logos, branding materials, page
              layout techniques, brochures, & other marketing collateral.
            </p>
            <img
              src={black_arrow}
              alt=""
              className="h-10 w-10 arrow"
            />
          </div>
          <div className="box-border border-[1px] border-blue-950 w-[550px] h-[312px] rounded-3xl hover:bg-lime-300 transition-all duration-200 shadow-slate-100 boxes flex flex-col p-8 gap-y-5 ">
            <img src={web} alt="" className="w-16 h-16" />
            <h3>Web Design</h3>
            <p>
              Designing and developing websites to ensure they are visually look
              and appealing, user-friendly, and functional your website.
            </p>
            <img
              src={black_arrow}
              alt=""
              className="h-10 w-10 arrow"
            />
          </div>
          <div className="box-border border-[1px] border-blue-950 w-[550px] h-[312px] rounded-3xl hover:bg-lime-300 transition-all duration-200 shadow-slate-100 boxes flex flex-col p-8 gap-y-5 ">
            <img src={motion_img} alt="" className="w-16 h-16" />
            <h3>Motion Graphics</h3>
            <p>
              Creating animated graphics, videos for various purposes, including
              marketing and entertainment. To help sell a product or service.
            </p>
            <img
              src={black_arrow}
              alt=""
              className="h-10 w-10 arrow"
            />
          </div>
          
        </motion.div>
      </div>
      <hr class="w-[1280px] mx-auto border-lime-500 border-[1px] mt-7" />
    </div>
  )
}

export default Work
