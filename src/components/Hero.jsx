import React from 'react'
import { motion } from 'framer-motion'
// import ProficPic from '../assets/proficpic.jpg'
import { HERO_CONTENT } from '../constants/index'
import Resume from '../files/Muzammil_Resume.pdf'

const containerVarients = {
    hidden: { opacity: 0, x: -100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            staggerChildren: 0.5,
            duration: 0.5
        }
    }
}

const childVarients = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
}


const Hero = () => {
    return (
        <div className="pb-4 lg:mb-36">
            <div className="flex flex-wrap lg:flex-row-reverse">
                <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:p-8">
                        {/* <motion.img 
                        src={ProficPic} 
                        alt="ProficPic" 
                        width={650}
                        height={650}
                        className='border border-stone-900 rounded-3xl' 
                        initial = {{ opacity: 0, x: 100 }}
                        animate = {{ opacity: 1, x: 0 }}
                        transition = {{ duration: 1, delay: 0.5 }}
                        /> */}
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVarients}
                        className="flex justify-center flex-col items-center lg:items-start mt-10">
                        <motion.h2 variants={childVarients} className='pb-2 text-4xl tracking-tighter lg:text-8xl'>Muzammil A</motion.h2>
                        <motion.span variants={childVarients} className='bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent text-2xl'>MERN Stack Developer</motion.span>
                        <motion.p variants={childVarients} className='my-2 max-w-lg py-6 text-xl loading-relaxed tracking-tighter'>{HERO_CONTENT}</motion.p>
                        <motion.a variants={childVarients} href={Resume}
                            target='_blank'
                            rel="noopener noreferrer"
                            download
                            className='bg-white rounded-full p-4 text-sm text-stone-900 mb-10 transition duration-300 ease-in-out'
                        >Download Resume</motion.a>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Hero