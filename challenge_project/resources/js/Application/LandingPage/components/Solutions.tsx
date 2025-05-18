import React,{useRef} from 'react'

import {motion,useInView} from 'framer-motion';
import analytics from '../../images/analytics (2).png';
import reminder from '../../images/reminder.png'
import diagram_map from '../../images/diagram_map.png'




const Solutions = () => {
    const first_ref = useRef<HTMLDivElement>(null);
    const second_ref = useRef<HTMLDivElement>(null);
    const third_ref = useRef<HTMLDivElement>(null);

    const first_view = useInView(first_ref,{once:true,margin:"-100px"});
    const second_view = useInView(second_ref,{once:true,margin:"-100px"});
    const third_view = useInView(third_ref,{once:true,margin:"-100px"});

  return (
    <div className="mt-10 w-full h-[600px]">
        <div className="w-full flex flex-col items-center relative">
            <p className="absolute top-[-25%] text-[#7156b5] font-bold text-sm p-1"><span className="absolute top-0 left-0 h-[100%] w-[2px] rounded-sm bg-[#7156b5]"></span>SOLUTIONS</p>
            <h1 className="text-5xl text-[#333] font-outfit text-center">Achieve Better Task <br></br>Organization</h1>
            <p className="font-outfit text-[#333] opacity-75 mt-5 text-center">Streamline your workflow with intuitive task management tools.<br></br> Easily create, prioritize, and track tasks to stay focused<br></br> and organized every step of the way.</p>
        </div>

        <div className="w-full flex justify-center">
            <div className="w-[80%] flex justify-between items-center gap-2 mt-5">
                <motion.div
                    ref={first_ref}
                    className="bg-white border border-gray-300 shadow-md h-[320px] w-[30%] flex flex-col items-center cursor-pointer transition duration-300 hover:transform hover:translate-y-[-10px]"
                    initial={{ opacity:0,translateY:'50px' }}
                    animate={first_view ? { opacity:1,translateY:"0px" } : {opacity:0,translateY:"50px"}}
                    transition={{duration:1 }}
                >
                    <div className="h-[60%] w-[90%] flex justify-center items-center bg-gray-50 mt-2 rounded-sm shadow-sm">
                        <img src={analytics} height="300" width="300"/>
                    </div>

                    <div className="w-[80%]">
                        <h1 className="mt-5 text-[#333] font-outfit font-bold">Great Task Analytics</h1>
                    </div>

                    <div className="w-[80%] mt-2">
                        <p className="text-xs font-outfit opacity-75">Great task progress overview to help employees <br></br>
                        organize better and ship faster</p>
                    </div>
                </motion.div>

                <motion.div
                    ref={second_ref}
                    className="bg-white border border-gray-300 shadow-md h-[320px] w-[30%] flex flex-col items-center cursor-pointer transition duration-300 hover:transform hover:translate-y-[-10px]"
                    initial={{ opacity:0,translateY:'50px' }}
                    animate={second_view ? { opacity:1,translateY:"0px" } : {opacity:0,translateY:"50px"}}
                    transition={{ duration:1 }}
                >
                    <div className="h-[60%] w-[90%] flex justify-center items-center bg-gray-50 mt-2 rounded-sm shadow-sm">
                        <img src={reminder} height="150" width="150"/>
                    </div>

                    <div className="w-[80%]">
                        <h1 className="mt-5 text-[#333] font-outfit font-bold">Task Reminder</h1>
                    </div>

                    <div className="w-[80%] mt-2">
                        <p className="text-xs font-outfit opacity-75">Stay on top of your schedule with automatic reminders.<br></br></p>
                    </div>
                </motion.div>

                <motion.div
                    ref={third_ref}
                    className="bg-white border border-gray-300 shadow-md h-[320px] w-[30%] flex flex-col items-center cursor-pointer transition duration-300 hover:transform hover:translate-y-[-10px]"
                    initial={{ opacity:0,translateY:'50px' }}
                    animate={third_view ? { opacity:1,translateY:"0px" } : {opacity:0,translateY:"50px"}}
                    transition={{ duration:1 }}
                >
                    <div className="h-[60%] w-[90%] flex justify-center items-center bg-gray-50 mt-2 rounded-sm shadow-sm">
                        <img src={diagram_map} height="250" width="250"/>
                    </div>

                    <div className="w-[80%]">
                        <h1 className="mt-5 text-[#333] font-outfit font-bold">Great Task Organization</h1>
                    </div>

                    <div className="w-[80%] mt-2">
                        <p className="text-xs font-outfit opacity-75">Organize your tasks from low-high priority with <br></br>
                        modern charts and diagrams!</p>
                    </div>
                </motion.div>
            </div>
        </div>


    </div>
  )
}

export default Solutions
