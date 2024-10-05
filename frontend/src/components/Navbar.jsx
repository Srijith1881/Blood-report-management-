
import { CircleX, User2 } from 'lucide-react'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const [visible, setvisible] = useState(false)
    const navigate = useNavigate();

    return (
        <>
            <div className="w-full h-[4rem] flex justify-center items-center bg-[#ffe7cd] shadow-sm shadow-white rounded-sm">
                <div className="w-[80%] h-full flex justify-center items-center flex-row">
                    <div className='w-1/2 flex h-full justify-start items-center font-bold text-xl text-red-600'>Blood Report Management System</div>
                    <div className='pl- w-1/2 flex  h-full justify-end items-center'>
                        <User2 className='h-9 w-10 text-red-600 rounded-full border-2 border-red-600   hover:border-white hover:text-white'onClick={() => setvisible(true)} />
                        <p className='h-9 w-10 p-2 text-red-600 font-bold'>login</p>
                    </div>
                </div>

            </div>
            {
                visible&&(
                    <>
                        <div className="h-screen w-screen absolute top-0 left-0 bg-black/25 flex justify-center items-center z-50">
                            <div className=" h-[50%] w-[30%] bg-red z-50 flex flex-col  bg-white  shadow-lg rounded-md">
                                <div className="w-full h-[15%] flex flex-row justify-start px-10 items-center border-2 text-red-600 bg-[#ffe7cd] text-xl font-bold ">
                                    <div className="w-1/2">
                                        User type
                                    </div>
                                    <div className="w-1/2 flex justify-end ">
                                        <CircleX onClick={() => setvisible(!visible)}/>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center mt-10 space-y-4">
                    <button className="w-2/3 bg-red-600 hover:bg-red-950 text-white font-bold py-2 px-4 rounded"onClick={() => navigate("/employeelogin")}>
                        Employee Login
                    </button>
                    <button className="w-2/3 bg-red-600 hover:bg-red-950 text-white font-bold py-2 px-4 rounded"onClick={() => navigate("/patientlogin")}>
                        Patient Login
                    </button>
                </div>
                                
                            </div>
                        </div>
                    </>
                )
            }
            
        </>
    )
}

export default Navbar