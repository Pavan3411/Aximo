import React, { useState } from 'react';
import aximo from '../images/aximo.svg';
import { FaCaretUp } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import list from './list.json';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
        <div className="flex mx-auto justify-evenly p-2 h-[10vh] header items-center text-white bg-black">
          <div className="flex gap-3 items-center flex-star">
            <img
              src={aximo}
              alt="Logo"
              width="105px"
              height="105px"
              className="mx-4"
            />

            <ul className="flex justify-center text-xl p-5 space-x-7">
              <li className='relative flex '><button onClick={() => setIsOpen((prev) => !prev)} href="" className=''>Demo
              {!isOpen ? (
                <FaCaretUp className="h-8 w-8"/>
              ) : (
                <FaCaretDown className="h-8 w-8"/>
              )}

                </button>
                {isOpen &&  (
                  <div className='absolute bg-white border-2 border-black text-black top-16 w-[200px] flex flex-col '>
                    {list.map((item,i) => (
                      <div className='flex px-4 py-2'>
                        <h3 className=''>{item.Demo}</h3>
                      </div>
                    ))}
                  </div>
                )}
                </li>
              <li className=''><a href="">About Us</a></li>
              <li className='relative flex '><button onClick={() => setIsOpen((prev) => !prev)} href="" className=''>Pages
              {!isOpen ? (
                <FaCaretUp className="h-8 w-8"/>
              ) : (
                <FaCaretDown className="h-8 w-8"/>
              )}

                </button>
                {isOpen ==='Pages' &&  (
                  <div className='absolute bg-white border-2 border-black text-black top-16 w-[200px] flex flex-col '>
                    {list.map((item,i) => (
                      <div className='flex px-4 py-2'>
                        <h3 className=''>{item.Pages}</h3>
                      </div>
                    ))}
                  </div>
                )}
                </li>
                <li className='relative flex '><button onClick={() => setIsOpen((prev) => !prev)} href="" className=''>Blog
              {!isOpen ? (
                <FaCaretUp className="h-8 w-8"/>
              ) : (
                <FaCaretDown className="h-8 w-8"/>
              )}

                </button>
                {isOpen ==='Blog' &&  (
                  <div className='absolute bg-white border-2 border-black text-black top-16 w-[200px] flex flex-col '>
                    {list.map((item,i) => (
                      <div className='flex px-4 py-2'>
                        <h3 className=''>{item.Blog}</h3>
                      </div>
                    ))}
                  </div>
                )}
                </li>
              <li><a href="">Contact Us</a></li>
            </ul>
          </div>
          <button className="text-xl font-syne font-semibold bg-limeGreen text-black p-1 rounded-3xl px-2 contact transition-all duration-200">
            Contact Us
          </button>
        </div>
    </div>
  )
}

export default Navbar
