import React from 'react'
import star from '../images/star.svg'
import linkedin from '../images/white-linkedin.svg'
import instagram from '../images/white-instagram.svg'
import facebook from '../images/white-facebook.svg'
import twitter from '../images/white-twitter.svg'
import linkedin_black from '../images/linkedin.svg'
import instagram_black from '../images/instagram.svg'
import facebook_black from '../images/facebook.svg'
import twitter_black from '../images/twitter.svg'
import Team_1 from '../images/team-img-1.jpg'
import Team_2 from '../images/team-img-2.jpg'
import Team_3 from '../images/team-img-3.jpg'
import Team_4 from '../images/team-img-4.jpg'
import { motion } from 'framer-motion'
const Team = () => {
  return (
    <div className="bg-light-yellow h-[100vh] space-y-16">
      <motion.div 
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="mx-64 my-24">
        <h1 className="text-7xl font-bold font-syne relative text-center">
          We have a team of creative
          <span className='ml-3'>
          people
            <img
              src={star}
              alt="Team-01"
              width="50px"
              height="5px"
              className="absolute top-[60%] right-[14%]"
            />
          </span>
        </h1>
      </motion.div>
      <div className="flex gap-5 mx-36">
        <div className="flex flex-col items-center gap-2 relative group/item max-w-76">
        <div className='overflow-hidden border-4 border-black rounded-2xl '>
          <img
            src={Team_1}
            alt=""
            className="transition-all duration-300 hover:scale-110"
          /> </div>
          <div className="absolute group-hover/item:-translate-y-5 bottom-20 space-x-3 opacity-0 group-hover/item:opacity-100 flex flex-row transition-all duration-300 ">
            <div className='bg-black rounded-full p-2 border-white hover:border-black border-[1px] flex hover:bg-limeGreen transition-all duration-300 icons'>
            <a href="" className='group/link flex transition-all duration-300'>
              <img src={twitter} alt="" className="opacity-100  group-hover/link:opacity-0 group-hover/link:hidden transition-all duration-300" />
              <img
                src={twitter_black}
                alt=""
                className="opacity-0 hidden group-hover/link:opacity-100 group-hover/link:block transition-all duration-300"
              />
              </a>
            </div>
            <div className='bg-black rounded-full p-2 border-white hover:border-black border-[1px] flex hover:bg-limeGreen transition-all duration-300 icons'>
            <a href="" className='group/link flex transition-all duration-300'>
              <img src={instagram} alt="" className="opacity-100  group-hover/link:opacity-0 group-hover/link:hidden transition-all duration-300" />
              <img
                src={instagram_black}
                alt=""
                className="opacity-0 hidden group-hover/link:opacity-100 group-hover/link:block transition-all duration-300"
              />
              </a>
            </div>
            <div className='bg-black rounded-full p-2 border-white hover:border-black border-[1px] flex hover:bg-limeGreen transition-all duration-300 icons'>
            <a href="" className='group/link flex transition-all duration-300'>
              <img src={facebook} alt="" className="w-4 h-4 opacity-100  group-hover/link:opacity-0 group-hover/link:hidden transition-all duration-300" />
              <img
                src={facebook_black}
                alt=""
                className="w-4 h-4 opacity-0 hidden group-hover/link:opacity-100 group-hover/link:block transition-all duration-300"
              />
              </a>
            </div>
            <div className='bg-black rounded-full p-2 border-white hover:border-black border-[1px] flex hover:bg-limeGreen transition-all duration-300 icons'>
            <a href="" className='group/link flex transition-all duration-300'>
              <img src={linkedin} alt="" className="opacity-100  group-hover/link:opacity-0 group-hover/link:hidden transition-all duration-300" />
              <img
                src={linkedin_black}
                alt=""
                className="opacity-0 hidden group-hover/link:opacity-100 group-hover/link:block transition-all duration-300"
              />
              </a>
            </div>
          </div>
          <h1 className="text-3xl font-syne font-bold">Andrew Mark</h1>
          <p className="text-xl font-medium">CEO & Founder</p>
        </div>
        <div className="flex flex-col items-center gap-2 relative group/item">
        <div className='overflow-hidden border-4 border-black rounded-2xl'>
          <img
            src={Team_2}
            alt=""
            className="transition-all duration-300 hover:scale-110"
          /> </div>
          <div className="absolute group-hover/item:-translate-y-5 bottom-20 space-x-3 opacity-0 group-hover/item:opacity-100 flex flex-row transition-all duration-300 ">
            <div className='bg-black rounded-full p-2 border-white hover:border-black border-[1px] flex hover:bg-limeGreen transition-all duration-300 icons'>
            <a href="" className='group/link flex transition-all duration-300'>
              <img src={twitter} alt="" className="opacity-100  group-hover/link:opacity-0 group-hover/link:hidden transition-all duration-300" />
              <img
                src={twitter_black}
                alt=""
                className="opacity-0 hidden group-hover/link:opacity-100 group-hover/link:block transition-all duration-300"
              />
              </a>
            </div>
            <div className='bg-black rounded-full p-2 border-white hover:border-black border-[1px] flex hover:bg-limeGreen transition-all duration-300 icons'>
            <a href="" className='group/link flex transition-all duration-300'>
              <img src={instagram} alt="" className="opacity-100  group-hover/link:opacity-0 group-hover/link:hidden transition-all duration-300" />
              <img
                src={instagram_black}
                alt=""
                className="opacity-0 hidden group-hover/link:opacity-100 group-hover/link:block transition-all duration-300"
              />
              </a>
            </div>
            <div className='bg-black rounded-full p-2 border-white hover:border-black border-[1px] flex hover:bg-limeGreen transition-all duration-300 icons'>
            <a href="" className='group/link flex transition-all duration-300'>
              <img src={facebook} alt="" className="w-4 h-4 opacity-100  group-hover/link:opacity-0 group-hover/link:hidden transition-all duration-300" />
              <img
                src={facebook_black}
                alt=""
                className="w-4 h-4 opacity-0 hidden group-hover/link:opacity-100 group-hover/link:block transition-all duration-300"
              />
              </a>
            </div>
            <div className='bg-black rounded-full p-2 border-white hover:border-black border-[1px] flex hover:bg-limeGreen transition-all duration-300 icons'>
            <a href="" className='group/link flex transition-all duration-300'>
              <img src={linkedin} alt="" className="opacity-100  group-hover/link:opacity-0 group-hover/link:hidden transition-all duration-300" />
              <img
                src={linkedin_black}
                alt=""
                className="opacity-0 hidden group-hover/link:opacity-100 group-hover/link:block transition-all duration-300"
              />
              </a>
            </div>
          </div>
          <h1 className="text-3xl font-syne font-bold">Jack Taylor</h1>
          <p className="text-xl font-medium">Senior Designer</p>
        </div>
        <div className="flex flex-col items-center gap-2 relative group/item">
        <div className='overflow-hidden border-4 border-black rounded-2xl'>
          <img
            src={Team_4}
            alt=""
            className="transition-all duration-300 hover:scale-110"
          /> </div>
          <div className="absolute group-hover/item:-translate-y-5 bottom-20 space-x-3 opacity-0 group-hover/item:opacity-100 flex flex-row transition-all duration-300 ">
            <div className='bg-black rounded-full p-2 border-white hover:border-black border-[1px] flex hover:bg-limeGreen transition-all duration-300 icons'>
            <a href="" className='group/link flex transition-all duration-300'>
              <img src={twitter} alt="" className="opacity-100  group-hover/link:opacity-0 group-hover/link:hidden transition-all duration-300" />
              <img
                src={twitter_black}
                alt=""
                className="opacity-0 hidden group-hover/link:opacity-100 group-hover/link:block transition-all duration-300"
              />
              </a>
            </div>
            <div className='bg-black rounded-full p-2 border-white hover:border-black border-[1px] flex hover:bg-limeGreen transition-all duration-300 icons'>
            <a href="" className='group/link flex transition-all duration-300'>
              <img src={instagram} alt="" className="opacity-100  group-hover/link:opacity-0 group-hover/link:hidden transition-all duration-300" />
              <img
                src={instagram_black}
                alt=""
                className="opacity-0 hidden group-hover/link:opacity-100 group-hover/link:block transition-all duration-300"
              />
              </a>
            </div>
            <div className='bg-black rounded-full p-2 border-white hover:border-black border-[1px] flex hover:bg-limeGreen transition-all duration-300 icons'>
            <a href="" className='group/link flex transition-all duration-300'>
              <img src={facebook} alt="" className="w-4 h-4 opacity-100  group-hover/link:opacity-0 group-hover/link:hidden transition-all duration-300" />
              <img
                src={facebook_black}
                alt=""
                className="w-4 h-4 opacity-0 hidden group-hover/link:opacity-100 group-hover/link:block transition-all duration-300"
              />
              </a>
            </div>
            <div className='bg-black rounded-full p-2 border-white hover:border-black border-[1px] flex hover:bg-limeGreen transition-all duration-300 icons'>
            <a href="" className='group/link flex transition-all duration-300'>
              <img src={linkedin} alt="" className="opacity-100  group-hover/link:opacity-0 group-hover/link:hidden transition-all duration-300" />
              <img
                src={linkedin_black}
                alt=""
                className="opacity-0 hidden group-hover/link:opacity-100 group-hover/link:block transition-all duration-300"
              />
              </a>
            </div>
          </div>
          <h1 className="text-3xl font-syne font-bold">Martine Joy</h1>
          <p className="text-xl font-medium">Project Manager</p>
        </div>
        <div className="flex flex-col items-center gap-2 relative group/item">
        <div className='overflow-hidden border-4 border-black rounded-2xl'>
          <img
            src={Team_3}
            alt=""
            className="transition-all duration-300 hover:scale-110"
          /> </div>
          <div className="absolute group-hover/item:-translate-y-5 bottom-20 space-x-3 opacity-0 group-hover/item:opacity-100 flex flex-row transition-all duration-300 ">
            <div className='bg-black rounded-full p-2 border-white hover:border-black border-[1px] flex hover:bg-limeGreen transition-all duration-300 icons'>
            <a href="" className='group/link flex transition-all duration-300'>
              <img src={twitter} alt="" className="opacity-100  group-hover/link:opacity-0 group-hover/link:hidden transition-all duration-300" />
              <img
                src={twitter_black}
                alt=""
                className="opacity-0 hidden group-hover/link:opacity-100 group-hover/link:block transition-all duration-300"
              />
              </a>
            </div>
            <div className='bg-black rounded-full p-2 border-white hover:border-black border-[1px] flex hover:bg-limeGreen transition-all duration-300 icons'>
            <a href="" className='group/link flex transition-all duration-300'>
              <img src={instagram} alt="" className="opacity-100  group-hover/link:opacity-0 group-hover/link:hidden transition-all duration-300" />
              <img
                src={instagram_black}
                alt=""
                className="opacity-0 hidden group-hover/link:opacity-100 group-hover/link:block transition-all duration-300"
              />
              </a>
            </div>
            <div className='bg-black rounded-full p-2 border-white hover:border-black border-[1px] flex hover:bg-limeGreen transition-all duration-300 icons'>
            <a href="" className='group/link flex transition-all duration-300'>
              <img src={facebook} alt="" className="w-4 h-4 opacity-100  group-hover/link:opacity-0 group-hover/link:hidden transition-all duration-300" />
              <img
                src={facebook_black}
                alt=""
                className="w-4 h-4 opacity-0 hidden group-hover/link:opacity-100 group-hover/link:block transition-all duration-300"
              />
              </a>
            </div>
            <div className='bg-black rounded-full p-2 border-white hover:border-black border-[1px] flex hover:bg-limeGreen transition-all duration-300 icons'>
            <a href="" className='group/link flex transition-all duration-300'>
              <img src={linkedin} alt="" className="opacity-100  group-hover/link:opacity-0 group-hover/link:hidden transition-all duration-300" />
              <img
                src={linkedin_black}
                alt=""
                className="opacity-0 hidden group-hover/link:opacity-100 group-hover/link:block transition-all duration-300"
              />
              </a>
            </div>
          </div>
          <h1 className="text-3xl font-syne font-bold">Adam Straw</h1>
          <p className="text-xl font-medium">Web Developer</p>
        </div>
        
      </div>
    </div>
  )
}

export default Team
