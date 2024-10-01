"use client"
import Link from "next/link"
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { useState } from "react";

 const Navbar = () => {
    const[isopen, setispoen] = useState(false)
    return(
        <nav className="fixed shadow-xl w-full h-24 bg-white border-2 z-10">
        <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
            <div className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="82" height="40" fill="none" viewBox="0 0 82 40">
                    <path fill="#FFD43D" d="M73.365 19.71c0 2.904-2.241 5.31-5.27 5.31-3.03 0-5.228-2.406-5.228-5.31 0-2.905 2.199-5.312 5.228-5.312s5.27 2.407 5.27 5.311Z"></path>
                    <path fill="#FF0C81" d="M48.764 19.544c0 2.946-2.323 5.145-5.27 5.145-2.904 0-5.227-2.2-5.227-5.145 0-2.947 2.323-5.104 5.228-5.104 2.946 0 5.27 2.158 5.27 5.104Z"></path>
                    <path fill="#11EEFC" d="M20.074 25.02c3.029 0 5.27-2.406 5.27-5.31 0-2.905-2.241-5.312-5.27-5.312-3.03 0-5.228 2.407-5.228 5.311 0 2.905 2.199 5.312 5.228 5.312Z"></path>
                    <path fill="#171A26" d="M68.095 30.54c-6.307 0-11.12-4.897-11.12-10.872 0-5.934 4.855-10.83 11.12-10.83 6.349 0 11.162 4.938 11.162 10.83 0 5.975-4.855 10.871-11.162 10.871Zm0-5.52c3.03 0 5.27-2.406 5.27-5.31 0-2.905-2.24-5.312-5.27-5.312-3.029 0-5.228 2.407-5.228 5.311 0 2.905 2.199 5.312 5.228 5.312ZM43.08 40c-4.813 0-8.506-2.116-10.373-5.934l4.896-2.655c.913 1.784 2.614 3.195 5.394 3.195 3.486 0 5.85-2.448 5.85-6.473v-.374c-1.12 1.411-3.111 2.49-6.016 2.49-5.768 0-10.373-4.481-10.373-10.581 0-5.934 4.813-10.788 11.12-10.788 6.431 0 11.162 4.605 11.162 10.788v8.299C54.74 35.27 49.76 40 43.08 40Zm.415-15.311c2.946 0 5.27-2.2 5.27-5.145 0-2.947-2.324-5.104-5.27-5.104-2.905 0-5.228 2.158-5.228 5.104s2.323 5.145 5.228 5.145ZM20.074 30.54c-6.307 0-11.12-4.897-11.12-10.872 0-5.934 4.854-10.83 11.12-10.83 6.348 0 11.162 4.938 11.162 10.83 0 5.975-4.855 10.871-11.162 10.871Zm0-5.52c3.029 0 5.27-2.406 5.27-5.31 0-2.905-2.241-5.312-5.27-5.312-3.03 0-5.228 2.407-5.228 5.311 0 2.905 2.199 5.312 5.228 5.312ZM0 0h5.892v30H0V0ZM82 6.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"></path>
                </svg>
                
            </div>
    
            <ul className="flex gap-8">
            <div className="flex flex-col">
                    <div onClick={() => setispoen(!isopen)} className="cursor-pointer transition duration-500 ease-in-out hover:bg-sky-400 rounded-lg hover:rounded-full hover:shadow-md hover:text-white active:bg-transparent p-2">ABOUT US</div>
                    
                        {isopen && (
                            <div className="absolute top-20 z-20 bg-white rounded-lg border-2 p-4"> 
                                <ul className="flex flex-col gap-2"> 
                                    <li className="relative flex items-center hover:cursor-pointer hover:outline hover:outline-sky-400 rounded-md focus:outline focus:outline-sky-400 p-2 m-2 gap-4">
                                        <div><svg className="flex items-center gap-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"  color="#000000" fill="none">
                                            <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M21.5 13.5H16.5743C15.7322 13.5 15.0706 14.2036 14.6995 14.9472C14.2963 15.7551 13.4889 16.5 12 16.5C10.5111 16.5 9.70373 15.7551 9.30054 14.9472C8.92942 14.2036 8.26777 13.5 7.42566 13.5H2.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                                        </svg>
                                        </div>
                                        <div className="flex items-center">
                                        Accomplishments
                                        </div>
                                    </li>
                                    <li className="relative flex items-center hover:cursor-pointer hover:outline hover:outline-sky-400 rounded-md focus:outline focus:outline-sky-400 p-2 m-2 gap-4">
                                        <div><svg className="flex items-center gap-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"  color="#000000" fill="none">
                                            <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M21.5 13.5H16.5743C15.7322 13.5 15.0706 14.2036 14.6995 14.9472C14.2963 15.7551 13.4889 16.5 12 16.5C10.5111 16.5 9.70373 15.7551 9.30054 14.9472C8.92942 14.2036 8.26777 13.5 7.42566 13.5H2.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                                        </svg>
                                        </div>
                                        <div className="flex items-center">
                                        Founding Members
                                        </div>
                                    </li>
                                    <li className="relative flex items-center hover:cursor-pointer hover:outline hover:outline-sky-400 rounded-md focus:outline focus:outline-sky-400 p-2 m-2 gap-4">
                                        <div><svg className="flex items-center gap-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"  color="#000000" fill="none">
                                            <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M21.5 13.5H16.5743C15.7322 13.5 15.0706 14.2036 14.6995 14.9472C14.2963 15.7551 13.4889 16.5 12 16.5C10.5111 16.5 9.70373 15.7551 9.30054 14.9472C8.92942 14.2036 8.26777 13.5 7.42566 13.5H2.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                                        </svg>
                                        </div>
                                        <div className="flex items-center">
                                        Team
                                        </div>
                                    </li>
                                    <li className="relative flex items-center hover:cursor-pointer hover:outline hover:outline-sky-400 rounded-md focus:outline focus:outline-sky-400 p-2 m-2 gap-4">
                                        <div><svg className="flex items-center gap-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"  color="#000000" fill="none">
                                            <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M21.5 13.5H16.5743C15.7322 13.5 15.0706 14.2036 14.6995 14.9472C14.2963 15.7551 13.4889 16.5 12 16.5C10.5111 16.5 9.70373 15.7551 9.30054 14.9472C8.92942 14.2036 8.26777 13.5 7.42566 13.5H2.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                                        </svg>
                                        </div>
                                        <div className="flex items-center">
                                       Clients
                                        </div>
                                    </li>
                                    <li className="relative flex items-center hover:cursor-pointer hover:outline hover:outline-sky-400 rounded-md focus:outline focus:outline-sky-400 p-2 m-2 gap-4">
                                        <div><svg className="flex items-center gap-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"  color="#000000" fill="none">
                                            <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M21.5 13.5H16.5743C15.7322 13.5 15.0706 14.2036 14.6995 14.9472C14.2963 15.7551 13.4889 16.5 12 16.5C10.5111 16.5 9.70373 15.7551 9.30054 14.9472C8.92942 14.2036 8.26777 13.5 7.42566 13.5H2.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                                        </svg>
                                        </div>
                                        <div className="flex items-center">
                                        Awards
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        )}
                        
                    
                </div>
                <Link href="/aboutus" className="transition duration-500 ease-in-out hover:bg-sky-400 rounded-lg hover:rounded-full hover:shadow-md hover:text-white active:bg-transparent">
                    <li className="p-2">ABOUT US</li>
                </Link>
                <Link href="/expertise" className="transition duration-500 ease-in-out hover:bg-sky-400 rounded-lg hover:rounded-full hover:shadow-md hover:text-white active:bg-transparent">
                    <li className="p-2">EXPERTISE</li>
                </Link>
                <Link href="/sectors" className="transition duration-500 ease-in-out hover:bg-sky-400 rounded-lg hover:rounded-full hover:shadow-md hover:text-white active:bg-transparent">
                    <li className="p-2">SECTORS</li>
                </Link>
                <Link href="/media" className="transition duration-500 ease-in-out hover:bg-sky-400 rounded-lg hover:rounded-full hover:shadow-md hover:text-white active:bg-transparent">
                    <li className="p-2">MEDIA</li>
                </Link>
                <Link href="/careers" className="transition duration-500 ease-in-out hover:bg-sky-400 rounded-lg hover:rounded-full hover:shadow-md hover:text-white active:bg-transparent">
                    <li className="p-2">CAREERS</li>
                </Link>
            </ul>
    
            <div className="flex mx-2 gap-3">
                <AiFillInstagram className="text-2xl" />
                <CiMail className="text-2xl" />
                <FaLinkedinIn className="text-2xl" />
            </div>
        </div>
    </nav>
    
    )
}
export default Navbar