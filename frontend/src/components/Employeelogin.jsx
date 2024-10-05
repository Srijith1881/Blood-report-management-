import React, { useRef } from 'react'
import { CircleX } from 'lucide-react'
import { useNavigate } from 'react-router-dom'



const Employeelogin = () => {
    const navigate = useNavigate();
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    
    const handleSubmit =(e)=>{
        e.preventDefault();
        const email=emailRef.current.value;
        const password=passwordRef.current.value;
        console.log(email,password)
        if(email && password){
            navigate("/employeedashboard");
        }
        else{
            alert("Please fill in both email and password.");
        }
    }

  return (
    <div className="h-screen w-screen absolute top-0 left-0 bg-black/25 flex justify-center items-center z-50">
        <div className=" h-[50%] w-[30%] bg-red z-50 flex flex-col  bg-white  shadow-lg rounded-md">
            <div className="w-full h-[15%] flex flex-row justify-start px-10 items-center border-2 text-red-600 bg-[#ffe7cd] text-xl font-bold ">
                <div className="w-1/2">
                    Employee's Login
                </div>
                <div className="w-1/2 flex justify-end ">
                    <CircleX onClick={() => navigate("/")}/>
                </div>
            </div>
            <div className="w-full h-[85%] flex flex-row justify-center items-center">
                <form className="w-[80%] h-[80%] flex flex-col justify-center items-center gap-4" onSubmit={handleSubmit}>
                    <input type="email" ref={emailRef} name="" id="email" placeholder="email" className="p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-black rounded-md" required />
                    <input type="password"  ref={passwordRef} name="" id="password" placeholder="password" className="p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-black rounded-md" required />
                    <button type="submit" className="bg-red-600 p-3 text-[#ffe7cd] w-full rounded-md text-lg font-bold">   Login</button>
                </form>
            </div>
            
        </div>
    </div>
  )
}

export default Employeelogin