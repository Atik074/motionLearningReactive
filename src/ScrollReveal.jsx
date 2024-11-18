import {motion} from "framer-motion"

const Box =({text})=>{
    return(
        <motion.div 
           initial={{opacity:0, x:-50}}
           whileInView={{
                opacity:1 ,
                x:0 ,
                transition:{
                    duration:2
                }
           }}
           viewPort={{once:false}}
         className="w-32  h-32 bg-green-500 rounded mx-auto mt-10">
            {text}
        </motion.div>
    )
}




const ScrollReveal = () => {
    const grettings = ["Rifat" , "Rony", "Rocky" ,"Halim" ,"Atik"]
    return (
        <div className=" text-3xl">
            {
                grettings.map((gretting ,index)=>(
                    <Box key={index} text={gretting} />
                ))

            }
        </div>
    );
};

export default ScrollReveal;