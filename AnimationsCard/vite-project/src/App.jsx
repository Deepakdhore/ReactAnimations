import { useState } from 'react'
import { motion } from 'framer-motion'
import './App.css'

export default function App() {
  
  return (
    <>
     <motion.div classname="box">
      <motion.div className="card"
      drag
      whileDrag={{
        scale:[2,1,2,1,2]
      }}
      dragConstraints={{
        top:-100,
        left:0,
        right:100,
        bottom:100
      }}
      initial={{
        x:0,
        y:0
      }}
      // animate={{
      //   x:[ 0  , 1000,1000, 0],
      //   y:[-100,-100, 0 , 0],
      //   rotate:[90,180,270,360],
      //   scale:1,
        
      // }}
      whileHover={{
        backgroundColor:"blue"
      }}
      whileTap={{
        rotate:3600
      }}
      transition={{
        duration:3,
       delay:1,
        repeat:Infinity,
        
      }}
      >
      
      </motion.div>
     </motion.div>
    </>
  )
}


