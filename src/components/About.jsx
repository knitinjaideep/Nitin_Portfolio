import React from 'react'
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { Tilt } from 'react-tilt';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({index, title, icon}) => {
  return (
    // <p>{title}</p>
    <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-3 px-12 min-h-[150px] flex justify-evenly items-center flex-col'
      >
        <img src={icon} alt={title} className='w-16 h-16 object-contain'></img>
        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
  )
}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>
    <motion.p variants={fadeIn("", "", 0.1, 1)}
    className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
      A software engineer with dedicated to crafting cutting-edge software solutions that merge technical excellence with a user-centric approach. My passion for problem solving drives me to embrace challenges, collaborate effectively with cross-functional teams, and deliver high-quality code. 
      With a strong foundation in frontend and backend technologies complimented with designing, I am commited to continuous learning, staying updated on industry trends, and contributing to the advancement of technology
      Let's connect incase you find any of this interesting.
    </motion.p>

    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service}/>
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(About, "about");