import React,{useState,useContext,useRef} from 'react'
import Logo from '../../images/ProjectManagemet.png'
import Modal from 'react-modal'
import { HomeContext } from '../Home'
import { User,Register } from '../constants/types'
import {toast} from 'react-toastify';

Modal.setAppElement('#app');

interface signInModalProps {
    isOpen:boolean
    onRequestClose:() => void
}

interface signUpModalProps {
    isOpen:boolean
    onRequestClose:() => void
}

const csrf_token = document.querySelector("meta[name='csrf-token']")?.getAttribute("content");

const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.3)",  // semi-transparent black
    backdropFilter: "blur(8px)",             // blur effect
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  },
  content: {
    position: "relative",
    backgroundColor: "#1e1e2f",  // dark purple-ish
    padding: "2rem",
    maxWidth: "400px",
    width: "90%",
    borderRadius: "12px",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.7)",
    outline: "none",
    color: "#eee",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    marginBottom:"30px"
  },
};

const googleRedirect = () => {
    window.location.href = "/google_login";
}

const SignInModal = ({isOpen,onRequestClose}:signInModalProps) => {
    const [userData,setUserData] = useState<User>({email:'',password:''})


    const logIn = async () => {

        const options = {
            method:"POST",
            headers:{
                'Content-Type':'application/json',
                'X-CSRF-TOKEN':csrf_token ? csrf_token : ''
            },
            body:JSON.stringify(userData)
        }

        try {
            const response = await fetch("http://127.0.0.1:8001/logIn",options);

            if(!response.ok) {
                throw new Error("Something Went Wrong!");
            }

            const answer = await response.json();

            // console.log(answer);
            if(answer.success) {
                window.location.href = "/dashboard";
                return;
            }

            toast.error(answer.details);
        } catch(err) {
            console.error(err);
        }
    }

    return (
    <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            style={customStyles}
    >
      {/* Close button */}

      <div className="w-full">
        <h1 className="text-3xl font-outfit font-semibold">Sign In</h1>

        <p className="text-sm font-outfit opacity-75 py-2">Welcome back you've been missed</p>

        <div className="mt-4">
            <div className="my-4 flex flex-col">
                <label className="py-1 font-outfit">Email</label>

                <input type="email" placeholder="test@example.com" className="border border-gray-500 px-5 py-2 font-outfit font-light rounded-sm" onChange={(e) => {setUserData({...userData,email:e.target.value})}}/>
            </div>

            <div className="my-4 flex flex-col">
                <label className="py-1 font-outfit">Password</label>
                <input type="password" placeholder="password" className="border border-gray-500 px-5 py-2 font-outfit font-light rounded-sm" onChange={(e) => {setUserData({...userData,password:e.target.value})}}/>
            </div>

            <div className="my-4 flex justify-center">
                <button className="w-full bg-[#7156b5] px-4 py-2 cursor-pointer rounded-md font-outfit" onClick={logIn}>Sign In</button>
            </div>

            <div className="mt-2 flex justify-center relative">
                <p className="text-sm font-outfit opacity-75">or</p>

                <span className="absolute top-[50%] left-[50%] transform translate-x-[-110%] h-[1px] w-[140px] bg-gray-300 opacity-50"></span>

                <span className="absolute top-[50%] right-[-50%] transform translate-x-[-130%] h-[1px] w-[140px] bg-gray-300 opacity-50"></span>
            </div>

            <div className="my-4">
                <button className="w-full bg-transparent border border-neutral-400 text-white font-outfit cursor-pointer py-2 flex items-center justify-center gap-1" onClick={googleRedirect}>
                    <svg className="w-[12px] h-[12px] fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg>
                    Google</button>
            </div>

            <div className="mt-10 text-center">
                <span className="font-outfit opacity-75 text-sm mx-1">Don't have an account?</span>
                <a className="underline font-outfit cursor-pointer mx-1" href="/signUp">Sign Up</a>
            </div>
        </div>
      </div>

    </Modal>
    )
}

export const SignUpModal = ({isOpen,onRequestClose}:signUpModalProps) => {
    const [userData,setUserData] = useState<Register>({name:"",email:"",password:""});

    const emailErrorRef = useRef<HTMLSpanElement>(null);
    const passwordErrorRef = useRef<HTMLSpanElement>(null);

    const emailRegex:RegExp = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;

    const passwordRegex:RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

    const isRegexValid = (value:string,regex:RegExp) => {
        return regex.test(value);
    }

    const signUp = async () => {

        if(isRegexValid(userData.email,emailRegex) && isRegexValid(userData.password,passwordRegex)) {
            const options = {
                method:"POST",
                headers:{
                    'Content-Type':'application/json',
                    'X-CSRF-TOKEN':csrf_token ? csrf_token : ''
                },
                body:JSON.stringify(userData)
            }

            try{
                const response = await fetch("http://127.0.0.1:8001/register",options);

                if(!response.ok) {
                    throw new Error("Something Went Wrong!");
                }

                const answer = await response.json();

                console.log(answer);

                if(answer.success) {
                    window.location.href = "/dashboard"
                    return
                }

                toast.error(answer.details)
            } catch(err) {
                console.error(err);
            }
        } else {
            toast.error("Enter Valid Credentials");
        }

    }

    const handleEmailChange = (e:React.ChangeEvent<HTMLInputElement>) => {

        if(!emailRegex.test(e.target.value)) {
            (emailErrorRef.current as HTMLSpanElement).classList.add("visible");
            (emailErrorRef.current as HTMLSpanElement).classList.remove("hidden");
        } else {
            (emailErrorRef.current as HTMLSpanElement).classList.remove("visible");
            (emailErrorRef.current as HTMLSpanElement).classList.add("hidden");
        }

        setUserData({...userData,email:e.target.value})
    }

    const handlePasswordChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        if(!passwordRegex.test(e.target.value)) {
            (passwordErrorRef.current as HTMLSpanElement).classList.add("visible");
            (passwordErrorRef.current as HTMLSpanElement).classList.remove("hidden");
        } else {
            (passwordErrorRef.current as HTMLSpanElement).classList.remove("visible");
            (passwordErrorRef.current as HTMLSpanElement).classList.add("hidden");
        }

        setUserData({...userData,password:e.target.value});
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            style={customStyles}
            >
            {/* Close button */}

            <div className="w-full">
                <h1 className="text-3xl font-outfit font-semibold">Sign Up</h1>
                <div className="mt-4">

                    <div className="my-4 flex flex-col">
                        <label className="py-1 font-outfit">Username</label>

                        <input type="text" placeholder="User..." className="border border-gray-500 px-5 py-2 font-outfit font-light rounded-sm" onChange={(e) => {setUserData({...userData,name:e.target.value})}}/>
                    </div>

                    <div className="my-4 flex flex-col relative">
                        <label className="py-1 font-outfit">Email</label>
                        <span className="absolute bottom-[-25%] text-xs text-red-500 hidden font-outfit" ref={emailErrorRef}>Invalid Email</span>
                        <input type="email" placeholder="test@example.com" className="border border-gray-500 px-5 py-2 font-outfit font-light rounded-sm" onChange={handleEmailChange}/>
                    </div>

                    <div className="my-4 flex flex-col relative">
                        <label className="py-1 font-outfit">Password</label>
                        <span className="absolute bottom-[-25%] text-xs text-red-500 hidden font-outfit" ref={passwordErrorRef}>Invalid Password  <span className="underline text-white text-md cursor-pointer">Password Details</span></span>
                        <input type="password" placeholder="password" className="border border-gray-500 px-5 py-2 font-outfit font-light rounded-sm" onChange={handlePasswordChange}/>
                    </div>

                    <div className="my-4 mt-5 flex justify-center">
                        <button className="w-full bg-[#7156b5] px-4 py-2 cursor-pointer rounded-md font-outfit" onClick={signUp}>Sign Up</button>
                    </div>

                    <div className="mt-2 flex justify-center relative">
                        <p className="text-sm font-outfit opacity-75">or</p>

                        <span className="absolute top-[50%] left-[50%] transform translate-x-[-110%] h-[1px] w-[140px] bg-gray-300 opacity-50"></span>

                        <span className="absolute top-[50%] right-[-50%] transform translate-x-[-130%] h-[1px] w-[140px] bg-gray-300 opacity-50"></span>
                    </div>

                    <div className="my-4">
                        <button className="w-full bg-transparent border border-neutral-400 text-white font-outfit cursor-pointer py-2 flex items-center justify-center gap-1" onClick={googleRedirect}>
                            <svg className="w-[12px] h-[12px] fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg>
                            Google</button>
                    </div>

                    <div className="mt-10 text-center">
                        <span className="font-outfit opacity-75 text-sm mx-1">Have an account?</span>
                        <a className="underline font-outfit cursor-pointer mx-1" href="/signUp">Sign In</a>
                    </div>
                </div>
            </div>

        </Modal>
    )
}

const NavBar = () => {
    const [isModalOpen,setModalOpen] = useState<boolean>(false);
    const [isSignUpModalOpen,setSignUpOpen] = useState<boolean>(false);

    const { isUserAuthenticated } = useContext(HomeContext);

    const signInHandle = () => {
        if(isUserAuthenticated) {
            window.location.href = "/dashboard";
            return;
        }

       setModalOpen(true);
    }

    const signUpHandle = () => {
        if(isUserAuthenticated) {
            window.location.href = "/dashboard";
            return;
        }

        setSignUpOpen(true);
    }

  return (
    <div className="w-full h-[70px] flex justify-center items-center shadow-sm">
        <SignInModal isOpen={isModalOpen} onRequestClose={() => {setModalOpen(false)}}/>
        <SignUpModal isOpen={isSignUpModalOpen} onRequestClose={() => {setSignUpOpen(false)}}/>
        <div className="w-[95%] h-[90%] flex justify-between items-center">
            <div className="flex items-center">
                <img src={Logo} height="60" width="60"/>
                <p className="font-sora font-bold">ProjeX</p>
            </div>

            <ul>
                <li className="inline px-5 font-sora text-sm cursor-pointer relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-0 before:bg-[#7156b5] before:transition-[width] before:duration-300 hover:before:w-full">
                    Features
                </li>
                <li className="inline px-5 font-sora text-sm cursor-pointer relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-0 before:bg-[#7156b5] before:transition-[width] before:duration-300 hover:before:w-full">
                    Solutions
                </li>
                <li className="inline px-5 font-sora text-sm cursor-pointer relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-0 before:bg-[#7156b5] before:transition-[width] before:duration-300 hover:before:w-full">
                    Workflows
                </li>
                <li className="inline px-5 font-sora text-sm cursor-pointer relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-0 before:bg-[#7156b5] before:transition-[width] before:duration-300 hover:before:w-full">
                    Support
                </li>
            </ul>

            <div>
                <button className="mx-2 cursor-pointer border border-gray-300 px-3 py-1 rounded-sm cursor-pointer text-black font-outfit" onClick={signInHandle}>Sign In</button>
                <button className="mx-2 cursor-pointer bg-[#191818] px-3 py-1 rounded-sm text-white font-outfit" onClick={signUpHandle}>Register</button>
            </div>
        </div>
    </div>
  )
}

export default NavBar
