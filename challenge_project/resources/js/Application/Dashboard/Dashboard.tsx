import React,{useEffect,useState,createContext} from 'react'
import SideBar from './components/SideBar'
import MainSection from './components/MainSection'

export const DashboardContext = createContext();

const Dashboard = () => {

    const [current_theme,setTheme] = useState<string>("");

    useEffect(() => {
        const current_theme = localStorage.getItem("current_theme");

        if(current_theme == "dark") {
            document.documentElement.classList.add(current_theme);
        }

        setTheme(current_theme as string);
    },[]);

  return (
    <DashboardContext.Provider value={{ theme:[current_theme,setTheme] }}>
        <div className="w-full h-screen grid grid-cols-[1fr_6fr] bg-background">
            <SideBar/>
            <MainSection/>
        </div>
    </DashboardContext.Provider>

  )
}

export default Dashboard
