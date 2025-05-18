import React,{createContext,useState,useEffect} from 'react'
import NavBar from './components/NavBar'
import MainSection from './components/MainSection'
import Features from './components/Features';
import Solutions from './components/Solutions';
import Workflow from './components/Workflow';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';


export const HomeContext = createContext();

const Home = () => {
    const [isUserAuthenticated,setUserAuthenticated] = useState<boolean>(false);

    useEffect(() => {
        async function isUserAuthenticated() {
            try{
                const response = await fetch("http://127.0.0.1:8001/isAuthenticated");

                if(!response.ok) {
                    throw new Error("Something Went Wrong!");
                }

                const answer = await response.json();

                setUserAuthenticated(answer.success);
            } catch(err) {
                console.error(err);
            }
        }

        isUserAuthenticated();
    },[]);

  return (
    <HomeContext.Provider value={{ isUserAuthenticated:isUserAuthenticated }}>
        <ToastContainer position="top-right"/>
        <div className="w-full h-screen">
            <NavBar/>
            <MainSection/>
            <Features/>
            <Solutions/>
            <Workflow/>
            <hr></hr>
            <Footer/>
        </div>
    </HomeContext.Provider>

  )
}

export default Home
