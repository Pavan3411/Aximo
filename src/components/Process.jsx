import React from 'react';
import arrow_less from '../images/arrow-less.svg';
import star from '../images/star.svg';
import { motion } from 'framer-motion';

const Process = () => {
  return (
    <section>
      <div className="bg-light-yellow">
        <motion.div
      initial={{ y: 300, opacity: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2, mass:0.5 }}
        className="mx-auto max-w-[1280px] h-[90vh] flex items-center">
          <div className="max-w-[60%] flex flex-col gap-7">
            <h1 className="text-7xl font-bold font-syne relative">
              Our
              <span className='ml-3'>
                high-quality
                <img
                  src={star}
                  alt=""
                  width="70px"
                  height="7px"
                  className="absolute top-[4%] right-[7%]"
                />
              </span>
              working processes
            </h1>
            <p className="text-2xl max-w-[90%]">
              We focus at every stage on effective communication and
              collaboration between the client and ensuring that the final
              design meets the client's objectives and expectations.
            </p>
            <p className="text-2xl max-w-[90%]">
              It is important to note that these are simplified steps, and the
              actual work process may vary depending on the complexity of the
              project.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="hover:bg-lime-400 border-box border-[1px] border-black rounded-lg transition-all contact boxes p-4 space-y-2 relative group">
              <h1 className="font-syne text-2xl">
                01/ Project idea
                <img
                  src={arrow_less}
                  alt=""
                  className="absolute top-6 right-6 group-hover:rotate-180 transition-all duration-200"
                />
              </h1>
              <p className="text-lg font-sans">
                The process starts with a detailed discussion with the client to
                understand their idea & goals.
              </p>
            </div>
            <div className="hover:bg-lime-400 border-box border-[1px] border-black rounded-lg transition-all contact boxes p-4 space-y-2 relative group">
              <h1 className="font-syne text-2xl">
                02/ Brainstormig
                <img
                  src={arrow_less}
                  alt=""
                  className="absolute top-6 right-6 group-hover:rotate-180 transition-all duration-200"
                />
              </h1>
              <p className="text-lg font-sans">
                The process starts with a detailed discussion with the client to
                understand their idea & goals.
              </p>
            </div>
            <div className="hover:bg-lime-400 border-box border-[1px] border-black rounded-lg transition-all contact boxes p-4 space-y-2 relative group">
              <h1 className="font-syne text-2xl">
                03/ Launch
                <img
                  src={arrow_less}
                  alt=""
                  className="absolute top-6 right-6 group-hover:rotate-180 transition-all duration-200"
                />
              </h1>
              <p className="text-lg font-sans">
                The process starts with a detailed discussion with the client to
                understand their idea & goals.
              </p>
            </div>
          </div>
        </motion.div>
        <div className="h-[10vh] -mt-[40px]">
          <hr className="border-t-2 border-gray-200 w-[1280px] mx-auto" />
        </div>
      </div>
    </section>
  )
}

export default Process
