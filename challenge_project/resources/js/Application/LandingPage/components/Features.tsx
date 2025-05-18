import React,{useRef} from 'react'
import {motion,useInView} from 'framer-motion'
import { FeatureType } from '../constants/types'
import calendar_image from '../../images/calendar_image.png';
import ai_review from '../../images/ai-review.png';
import document_analysis from '../../images/document_analysis.png';

const Features = () => {
    const feature_details:FeatureType[] = [
        {
            feature_image:calendar_image,
            feature_title:"Integrated Calendar",
        },

        {
            feature_image:ai_review,
            feature_title:"AI Agent Support",
        },

        {
            feature_image:document_analysis,
            feature_title:"Document Analysis",
        }
    ]




  return (
    <div className="w-full h-[650px] mt-15 flex justify-center">
        <div className="w-[90%]">
            <div className="w-full flex justify-between">
                <div className="relative">
                    <p className="absolute top-[-40%] text-[#7156b5] font-bold text-sm p-1"><span className="absolute top-0 left-0 h-[100%] w-[2px] rounded-sm bg-[#7156b5]"></span>WHY CHOOSE US</p>
                    <h1 className="text-5xl text-[#333] font-outfit">Discover the Benefits of <br></br>Our Platform</h1>
                </div>

                <div>
                    <p className="font-outfit opacity-75">Discover why top teams and companies trust us to streamline their<br></br> project management.
From clear task organization to seamless collaboration,<br></br> our platform empowers teams to work smarter.<br></br>
Save time, reduce complexity, and keep every<br></br> project on track.</p>
                </div>
            </div>

            <div className="w-full flex justify-between mt-25">
                {feature_details.map((feature, index) => {

                    const ref = useRef<HTMLDivElement | null>(null);

                    const isInView = useInView(ref, { once: false,margin:'-100px' });

                    return (
                        <motion.div
                            key={index}
                            ref={ref}
                            initial={{ opacity: 0, translateY: "10px" }}
                            animate={
                            isInView
                                ? { opacity: 1, translateY: "0px" }
                                : { opacity: 0, translateY: "10px" }
                            }
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="h-[350px] w-[32%] shadow-[inset_0px_-8px_0px_9px_#7156b5]"
                        >
                            <div className="w-full h-[50%] flex justify-center mt-2">
                                <img src={feature.feature_image} height="250" width="250"/>
                            </div>

                            <div className="w-full h-[10%] text-center mt-4">
                                <h1 className="text-[#333] font-bold font-outfit text-xl">{feature.feature_title}</h1>
                            </div>

                            <div className="w-full h-[40%] text-center mt-2">
                                <button className="px-5 py-2 bg-[#9a87ca] text-white rounded-sm cursor-pointer shadow-md">View Details</button>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

        </div>


    </div>
  )
}

export default Features
