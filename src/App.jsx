
import './App.css'
import { motion } from "framer-motion"
import Count from './Count'
import ScrollReveal from './ScrollReveal'



//in your project use variants for animation inner folder or outer as your wish
 const shapeVariants ={
    
  initial:{
    opacity:0 ,
    y:"-100vh"
  } ,
  animate:{
    opacity:1 ,
    y :0 ,
    transition:{
      duration:1,
      delay:1 ,
      type:"spring"
    }
  }

 }


function App() {
  const message = "Hey,I am Atikur Rahman,Front End Developer"
  const spliteMessage = message.split(" ")

  return(
    <div className=''>

      {spliteMessage.map((word, index) => (
                <motion.span
                 className='text-3xl  text-amber-600 font-mono'
                    initial={{ opacity: 0}}
                    animate={{ opacity:1}}
                    transition={{
                        duration: 3,
                        delay: index/10,
                    }}
                    key={index}
                >
                    {word}{" "}
                </motion.span>
   
  ))}

      <motion.div
            className="text-2xl  bg-sky-500 p-4 rounded-xl mt-4"
            initial={{opacity:0 , x:"-100vh"}}
            animate={{opacity:1 ,x:0}}
            transition={{duration:1}}
      >
       
           <h3>We learn Framer motion</h3>
           <p>Framer motion is popular for its behaviour and it is a react motion.</p>

      </motion.div>
      <motion.div
            className="text-2xl my-12  bg-amber-500 p-4 rounded-xl "
            initial={{opacity:0 , x:"-100vh"}}
            animate={{opacity:1 ,x:0}}
            transition={{ type:"spring",  damping: 300 ,duration:1}}
      >
       
           <h3>We learn Framer motion</h3>
           <p>Framer motion is popular for its behaviour and it is a react motion.</p>

      </motion.div>
      <motion.div
            className="text-2xl my-12 bg-orange-500 p-4 rounded-xl mt-4"
            initial={{opacity:0 , x:"-100vh"}}
            animate={{opacity:1 ,x:0}}
            transition={{type:"spring" ,bounce:0.8, ease: "linear" , duration:2}}
      >
       
           <h3>We learn Framer motion</h3>
           <p>Framer motion Bounce property and it is type of spring.</p>

      </motion.div>
      <motion.div
              variants={shapeVariants}
            className="text-2xl bg-blue-500 p-4 rounded-xl mt-4"
            initial="initial"
            animate="animate"
      >
       
           <h3>We learn shape variants</h3>
           <p>Framer motion variants and explore.</p>

      </motion.div>

      <hr></hr>
      <Count/>
      <hr></hr>
      <ScrollReveal/>

  </div>

  )}

export default App
