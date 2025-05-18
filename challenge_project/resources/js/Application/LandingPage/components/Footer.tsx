import React from 'react'
import custom_blob from '../../images/customBlob.png'
import Logo from '../../images/ProjectManagemet.png'

const Footer = () => {
  return (
    <div className="mt-20 w-full h-[650px] flex flex-col items-center">
        <div className="w-[80%] relative">
            <img src={custom_blob} className="rounded-sm shadow-lg" style={{ width:"100%",height:"300px" }}/>

            <div className="absolute top-[20%] left-[50%] transform translate-x-[-50%]">
                <h1 className="text-4xl text-white font-outfit font-bold">Change The Way You Work!</h1>

                <p className="mt-5 text-center text-white font-outfit opacity-75 text-md">Stop waiting — make your work and life easier.<br></br>
                Join our platform and start succeeding today.</p>

                <div className="w-full text-center mt-10">
                    <button className="bg-[#7156b5] text-white rounded-sm shadow-sm cursor-pointer font-outfit py-2 px-5">Start Now</button>
                </div>
            </div>
        </div>

        <div className="w-[90%] h-[100px] mt-15 flex justify-between items-center">
            <div className="w-[50%] h-full">
                <div className="flex items-center gap-2">
                    <img src={Logo} height="60" width="60"/>
                    <p className="font-sora font-bold">ProjeX</p>
                </div>
                <div className="pl-8">
                    <p className="text-[#333] font-outfit opacity-75">From planning to delivery, our project management platform brings<br></br> clarity to your workflow. Collaborate seamlessly,<br></br> stay on track, and turn ideas<br></br> into results — faster</p>
                </div>
            </div>

            <div className="w-[50%] h-full flex justify-evenly">
                <div>
                    <h2 className="text-[#333] font-outfit font-bold">General</h2>
                    <ul className="mt-2">
                        <li className="font-outfit text-[#333] text-sm opacity-75 py-2 text-center cursor-pointer">Home</li>
                        <li className="font-outfit text-[#333] text-sm opacity-75 py-2 text-center cursor-pointer">Features</li>
                        <li className="font-outfit text-[#333] text-sm opacity-75 py-2 text-center cursor-pointer">Solutions</li>
                        <li className="font-outfit text-[#333] text-sm opacity-75 py-2 text-center cursor-pointer">Workflow</li>
                        <li className="font-outfit text-[#333] text-sm opacity-75 py-2 text-center cursor-pointer">Support</li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-[#333] font-outfit font-bold text-center">Support</h2>
                    <ul className="mt-2">
                        <li className="font-outfit text-[#333] text-sm opacity-75 py-2 text-center cursor-pointer">Help Center</li>
                        <li className="font-outfit text-[#333] text-sm opacity-75 py-2 text-center cursor-pointer">Contact Us</li>
                        <li className="font-outfit text-[#333] text-sm opacity-75 py-2 text-center cursor-pointer">FAQs</li>
                        <li className="font-outfit text-[#333] text-sm opacity-75 py-2 text-center cursor-pointer">Terms & Services</li>
                        <li className="font-outfit text-[#333] text-sm opacity-75 py-2 text-center cursor-pointer">Privacy Policy</li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-[#333] font-outfit font-bold text-center">Social Media</h2>

                    <div className="mt-2 flex flex-col items-center">
                        <div className="my-3 cursor-pointer h-[45px] w-[45px] flex justify-center items-center group hover:bg-[#7156b5] rounded-full">
                            <svg className="h-[25px] w-[25px] fill-[#333] group-hover:fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg>
                        </div>
                        <div className="my-3 cursor-pointer h-[45px] w-[45px] flex justify-center items-center group hover:bg-[#7156b5] rounded-full">
                            <svg className="h-[25px] w-[25px] fill-[#333] group-hover:fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                        </div>
                        <div className="my-3 cursor-pointer h-[45px] w-[45px] flex justify-center items-center group hover:bg-[#7156b5] rounded-full">
                            <svg className="h-[25px] w-[25px] fill-[#333] group-hover:fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
