import { BiLogoPostgresql } from "react-icons/bi"
import { RiReactjsLine } from "react-icons/ri"
import { SiExpress, SiMongodb } from "react-icons/si"
import { TbBrandFramerMotion, TbBrandNextjs, TbBrandNodejs } from "react-icons/tb"

import {motion} from "framer-motion"


const iconVariantes = (duration) => ({
    initial : {y:-10},
    animate: {
        y:[10, -10],
        transition:{
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }})

export const Technologies = () => {
  return (
    <div className="pb-24">
        <motion.h2 whileInView={{opacity: 1, y:0}} initial={{opacity: 0, y:-100}} transition={{duration: 1.5}} viewport={{once: true}} className="my-20 text-center text-4xl">Technologies</motion.h2>
        <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration:1.5}} className="flex flex-wrap items-center justify-center gap-4">
            <motion.div  initial="initial" animate="animate" variants={iconVariantes(2.5)} className="p-4">
                <SiMongodb className="text-7xl  text-green-500" />
            </motion.div>
            <motion.div initial="initial" animate="animate" variants={iconVariantes(3)}  className="p-4">
                <SiExpress className="text-7xl  text-green-500" />
            </motion.div>
            <motion.div initial="initial" animate="animate" variants={iconVariantes(3.5)}  className="p-4">
                <RiReactjsLine className="text-7xl text-cyan-400" />
            </motion.div>
            <motion.div initial="initial" animate="animate" variants={iconVariantes(4)}  className="p-4">
                <TbBrandNodejs className="text-7xl text-green-500" />
            </motion.div>
            <motion.div initial="initial" animate="animate" variants={iconVariantes(4.5)}  className="p-4">
                <TbBrandNextjs className="text-7xl " />
            </motion.div>
            <motion.div initial="initial" animate="animate" variants={iconVariantes(5)}  className="p-4">
                <TbBrandFramerMotion className="text-7xl text-red-700" />
            </motion.div>
            <motion.div initial="initial" animate="animate" variants={iconVariantes(5.5)}  className="p-4">
                <BiLogoPostgresql className="text-7xl  text-sky-500" />
            </motion.div>
        </motion.div>
    </div>
  )
}
