import React from 'react'
import star from '../images/star.svg'
import Black_star from '../images/black-star.svg'
import hero_01 from '../images/hero-user-1.png'
import hero_2 from '../images/hero-user-2.png'
import hero_3 from '../images/hero-user-3.png'
import hero_4 from '../images/hero-user-4.png'
import { motion } from 'framer-motion'


const Testimonial = () => {
  return (
    <div className="bg-light-yellow">
      <div className="flex flex-col gap-10 max-w-full">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-[60%] mx-auto"
        >
          <h1 className="text-7xl font-bold font-syne relative flex text-center">
            Clients are always satisfied with us
            <span className="">
              <img
                src={star}
                alt=""
                width="50px"
                height="5px"
                className="absolute top-[61%] right-[8%]"
              />
            </span>
          </h1>
        </motion.div>
        <div 
        className="grid grid-cols-2 gap-7 mx-32">
          <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="border-box border-[1px] border-black flex flex-col gap-5 rounded-2xl py-5 px-6 boxes transition-all duration-100 max-h-[450px]">
            <div className="flex flex-row space-x-1">
              <img src={Black_star} alt="" width="37px" height="35px" />
              <img src={Black_star} alt="" width="37px" height="35px" />
              <img src={Black_star} alt="" width="37px" height="35px" />
              <img src={Black_star} alt="" width="37px" height="35px" />
              <img src={Black_star} alt="" width="37px" height="35px" />
            </div>
            <h1 className="text-3xl font-bold">Super customer service!</h1>
            <p className="text-xl">
              Excellent customer service and I was really impressed and happy
              with my purchase especially as it was a last minute order which
              got to me in time, and when it arrived I was very happy with the
              design and size and so was the recipient.
            </p>
            <div className="flex-grow"></div>
            <div className="flex space-x-2 items-center mt-7">
              <img
                src={hero_01}
                alt=""
                width="70px"
                className="rounded-full border-black border-2"
              />
              <h6 className="font-bold font-syne text-xl">William Jack</h6>
              <p className="text-xl">Founder@XYZ</p>
            </div>
          </motion.div>
          <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="border-box border-[1px] border-black flex flex-col gap-5 rounded-2xl py-5 px-6 boxes transition-all duration-100 max-h-[450px]">
            <div className="flex flex-row space-x-1">
              <img src={Black_star} alt="" width="37px" height="35px" />
              <img src={Black_star} alt="" width="37px" height="35px" />
              <img src={Black_star} alt="" width="37px" height="35px" />
              <img src={Black_star} alt="" width="37px" height="35px" />
              <img src={Black_star} alt="" width="37px" height="35px" />
            </div>
            <h1 className="text-3xl font-bold">
              Exceptional creativity and vision!
            </h1>
            <p className="text-xl">
              Working with Mthemeus was a game-changer for our brand. Their
              exceptional creativity & vision breathed new life into our visual.
              The logo they designed perfectly captures our essence & has become
              instantly recognizable. We couldn't be happier with the results!
            </p>
            <div className="flex-grow"></div>
            <div className="flex space-x-2 items-center mt-7">
              <img
                src={hero_2}
                alt=""
                width="70px"
                className="rounded-full border-black border-2"
              />
              <h6 className="font-bold font-syne text-xl">Smith Align</h6>
              <p className="text-xl">Businessman</p>
            </div>
          </motion.div>
          <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="border-box border-[1px] border-black flex flex-col gap-5 rounded-2xl py-5 px-6 boxes transition-all duration-100 max-h-[450px]">
            <div className="flex flex-row space-x-1">
              <img src={Black_star} alt="" width="37px" height="35px" />
              <img src={Black_star} alt="" width="37px" height="35px" />
              <img src={Black_star} alt="" width="37px" height="35px" />
              <img src={Black_star} alt="" width="37px" height="35px" />
              <img src={Black_star} alt="" width="37px" height="35px" />
            </div>
            <h1 className="text-3xl font-bold">Innovative and professional</h1>
            <p className="text-xl">
              I can't say enough good things about them. Their team is not only
              incredibly talented but also highly professional. They listened to
              our ideas and brought them to life in ways we couldn't have
              imagined. Their innovative approach and dedication to our project.
            </p>
            <div className="flex-grow"></div>
            <div className="flex space-x-2 items-center mt-7">
              <img
                src={hero_3}
                alt=""
                width="70px"
                className="rounded-full border-black border-2"
              />
              <h6 className="font-bold font-syne text-xl">Milano Joe</h6>
              <p className="text-xl">Creative Director</p>
            </div>
          </motion.div>
          <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="border-box border-[1px] border-black flex flex-col gap-5 rounded-2xl py-5 px-6 boxes transition-all duration-100 max-h-[450px]">
            <div className="flex flex-row space-x-1">
              <img src={Black_star} alt="" width="37px" height="35px" />
              <img src={Black_star} alt="" width="37px" height="35px" />
              <img src={Black_star} alt="" width="37px" height="35px" />
              <img src={Black_star} alt="" width="37px" height="35px" />
              <img src={Black_star} alt="" width="37px" height="35px" />
            </div>
            <h1 className="text-3xl font-bold">Transformed our brand</h1>
            <p className="text-xl">
              Our partnership with Mthemeus transformed our brand from ordinary
              to extraordinary. Their branding expertise and meticulous design
              work elevated our marketing materials to a whole new level. Our
              customers have taken notice, and boost in brand recognition.
            </p>
            <div className="flex-grow"></div>
            <div className="flex space-x-2 items-center mt-7">
              <img
                src={hero_4}
                alt=""
                width="70px"
                className="rounded-full border-black border-2"
              />
              <h6 className="font-bold font-syne text-xl">Danial Mark</h6>
              <p className="text-xl">Marketing Director</p>
            </div>
          </motion.div>
        </div>
        <div className="bg-black">
          <div className="flex flex-row whitespace-nowrap gap-x-5 my-2 slide">
            <div className="w-full flex space-x-5  py-5 tracking-[1px]">
              <h1 className="text-limeGreen font-bold text-4xl font-syne">
                Let's create new experiences
              </h1>
              <img src={star} alt="" className="min-w-[42px]" />
            </div>
            <div className=" w-full flex space-x-5 py-5 tracking-[1px]">
              <h1 className="text-limeGreen font-bold text-4xl font-syne">
                Let's create new experiences
              </h1>
              <img src={star} alt="" className="min-w-[42px]" />
            </div>
            <div className=" w-full flex space-x-5 py-5 tracking-[1px]">
              <h1 className="text-limeGreen font-bold text-4xl font-syne">
                Let's create new experiences
              </h1>
              <img src={star} alt="" className="min-w-[42px]" />
            </div>
            <div className=" w-full flex space-x-5 py-5 tracking-[1px]">
              <h1 className="text-limeGreen font-bold text-4xl font-syne">
                Let's create new experiences
              </h1>
              <img src={star} alt="" className="min-w-[42px]" />
            </div>
            {/* <div className="w-full flex space-x-5 py-5 tracking-[1px]">
              <h1 className="text-limeGreen font-bold text-4xl font-syne">
                Let's create new experiences
              </h1>
              <img src="images/star.svg" alt="" className="min-w-[42px]" />
            </div>
            <div className="w-full flex space-x-5 py-5 tracking-[1px]">
              <h1 className="text-limeGreen font-bold text-4xl font-syne">
                Let's create new experiences
              </h1>
              <img src="images/star.svg" alt="" className="min-w-[42px]" />
            </div>
            <div className=" w-full flex space-x-5 py-5 tracking-[1px]">
              <h1 className="text-limeGreen font-bold text-4xl font-syne">
                Let's create new experiences
              </h1>
              <img src="images/star.svg" alt="" className="min-w-[42px]" />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
