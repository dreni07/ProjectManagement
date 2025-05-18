import React,{useContext} from 'react'
import default_logo from '../../images/purple-company-logo.png';
import { DashboardContext } from '../Dashboard';

const NavBarMain = () => {
    const { theme } = useContext(DashboardContext);

    const [current_theme,setCurrentTheme] = theme;

    const switching = () => {
        const isDark = document.documentElement.classList.toggle("dark");

        const current_theme = isDark ? "dark" : ""

        setCurrentTheme(current_theme)

        localStorage.setItem("current_theme",current_theme)
    }

  return (
    <div className="border-b-1 border-b-gray-500 flex justify-center items-center">
        <div className="w-[90%] h-[80%] flex items-center justify-between">
            <div className="flex items-center gap-2">
                <img src={default_logo} height="60" width="60"/>
                <h1 className="text-2xl font-outfit">Dren Llazani</h1>
                <svg className="fill-[#333] dark:fill-white h-[15px] w-[15px] cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
            </div>

            <div className="mx-10 relative">
                <svg className="fill-gray-300 h-[12px] w-[12px] absolute top-[50%] left-[3%] transform translate-y-[-50%]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
                <input type="text" placeholder="Type To Search..." className="border-1 border-gray-500 rounded-full px-7 py-2 text-xs h-[35px] w-[270px] font-outfit"/>
            </div>

            <div className="w-[60px] h-[25px] bg-[#333] rounded-full flex items-center justify-between cursor-pointer" onClick={switching}>
                <div className={current_theme == `dark` ? `h-[100%] w-[40%] rounded-full flex justify-center items-center` : `h-[100%] w-[40%] rounded-full bg-[#7156b5] flex justify-center items-center bg-[#7156b5]`}>
                    <svg className="h-[10px] w-[10px] fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"/></svg>
                </div>

                <div className={current_theme == `dark` ? "h-[100%] w-[40%] rounded-full bg-[#7156b5] flex justify-center items-center" : "h-[100%] w-[40%] rounded-full flex justify-center items-center"}>
                    <svg className="h-[10px] w-[10px] fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"/></svg>
                </div>
            </div>

            <div className="flex items-center gap-8">
                <svg className="h-[15px] w-[15px] fill-neutral-400 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM216 232l0 102.1 31-31c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-72 72c-9.4 9.4-24.6 9.4-33.9 0l-72-72c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l31 31L168 232c0-13.3 10.7-24 24-24s24 10.7 24 24z"/></svg>

                <button className="px-4 py-2 bg-[#7156b5] rounded-sm font-light cursor-pointer shadow-sm cursor-pointer text-white font-outfit text-sm">Talk To Roni</button>
            </div>
        </div>
    </div>
  )
}

export default NavBarMain
