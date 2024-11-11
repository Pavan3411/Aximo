import React from 'react';
import star from '../images/star.svg';
import white_arrow from '../images/white_arrow.svg';

const Product = () => {
  return (
    <div className="bg-black h-[100vh]">
      <div className="flex justify-center p-2 m-2 border-box">
        <h1 className="text-6xl font-bold font-syne relative text-center text-lime-50 mt-20">
          Have a wide range of <br />
          creative projects
          <span>
            <img
              src={star}
              alt=""
              width="50px"
              height="5px"
              className="absolute top-[70px] right-[5px]"
            />
          </span>
        </h1>
      </div>
      <div className="flex gap-4 overflow-x-hidden mt-10">
        <div className=" border-lime-50 border-4 rounded-2xl min-w-[400px] h-[280px] bg-product1 bg-no-repeat text-lime-200 flex flex-col place-content-end relative p-3">
          <h1 className='text-lime-50 font-syne font-bold text-2xl'>Product Design</h1>
          <p className='text-lime-100'>
            Developing the look and feel of physical <br />
            products, aesthetics, and functionality.
          </p>
          <img src={white_arrow} alt="" className='w-10 h-10 absolute bottom-12 right-6'/>
        </div>
        <div className=" border-lime-50 border-4 rounded-2xl min-w-[400px] h-[280px] bg-product2 bg-no-repeat text-lime-200 flex flex-col place-content-end relative p-3">
          <h1 className='text-lime-50 font-syne font-bold text-2xl'>Product Design</h1>
          <p className='text-lime-100'>
            Developing the look and feel of physical <br />
            products, aesthetics, and functionality.
          </p>
          <img src={white_arrow} alt="" className='w-10 h-10 absolute bottom-12 right-6'/>
        </div>
        <div className=" border-lime-50 border-4 rounded-2xl min-w-[400px] h-[280px] bg-product3 bg-no-repeat text-lime-200 flex flex-col place-content-end relative p-3">
          <h1 className='text-lime-50 font-syne font-bold text-2xl'>Product Design</h1>
          <p className='text-lime-100'>
            Developing the look and feel of physical <br />
            products, aesthetics, and functionality.
          </p>
          <img src={white_arrow} alt="" className='w-10 h-10 absolute bottom-12 right-6'/>
        </div>
        <div className=" border-lime-50 border-4 rounded-2xl min-w-[400px] h-[280px] bg-product4 bg-no-repeat text-lime-200 flex flex-col place-content-end relative p-3">
          <h1 className='text-lime-50 font-syne font-bold text-2xl'>Product Design</h1>
          <p className='text-lime-100'>
            Developing the look and feel of physical <br />
            products, aesthetics, and functionality.
          </p>
          <img src={white_arrow} alt="" className='w-10 h-10 absolute bottom-12 right-6'/>
        </div>
        <div className=" border-lime-50 border-4 rounded-2xl min-w-[400px] h-[280px] bg-product1 bg-no-repeat text-lime-200 flex flex-col place-content-end relative p-3">
          <h1 className='text-lime-50 font-syne font-bold text-2xl'>Product Design</h1>
          <p className='text-lime-100'>
            Developing the look and feel of physical <br />
            products, aesthetics, and functionality.
          </p>
          <img src={white_arrow} alt="" className='w-10 h-10 absolute bottom-12 right-6'/>
        </div>
        <div className=" border-lime-50 border-4 rounded-2xl min-w-[400px] h-[280px] bg-product2 bg-no-repeat text-lime-200 flex flex-col place-content-end relative p-3">
          <h1 className='text-lime-50 font-syne font-bold text-2xl'>Product Design</h1>
          <p className='text-lime-100'>
            Developing the look and feel of physical <br />
            products, aesthetics, and functionality.
          </p>
          <img src={white_arrow} alt="" className='w-10 h-10 absolute bottom-12 right-6'/>
        </div>
      </div>
    </div>
  )
}

export default Product
