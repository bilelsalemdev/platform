import React, { useState } from "react";
import {Link, Route, Switch } from 'react-router-dom' 
export default function Navbar(){
    const [hidden, setHidden] = useState(true)
    return(
        <div className="flex justify-between md:items-center p-4">
            <div className="text-3xl font-bold flex justify-between md:items-center ">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
                <div className="ms:text-xl md:text-4xl text-sky-400 my-2 "><Link to={'/'}>Salah Academy</Link></div>
            </div>
            <ul className={` justify-around md:items-center m-4 ${hidden ? 'hidden' : ''} md:flex block`}>
                
                <li className="link"><Link to={'/about'}>About</Link></li>
                <li className="link"><Link to={'/contact'}>Contact</Link></li>
                <li className="link"><Link to={'/signup'}>Sign Up</Link></li>
                <li className="link"><Link to={'/login'}>Log In</Link></li>
            </ul>
           <div className={`md:hidden ${hidden ? '' : 'hidden'}`} onClick={() => setHidden(prevState => !prevState)}>
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 mx-5 text-blue-400 hover:text-sky-900 cursor-pointer my-4`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
           </div>
           <div className={`md:hidden ${hidden ? 'hidden' : ''}`} onClick={() => setHidden(prevState => !prevState)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 mx-5 text-blue-400 hover:text-sky-900 cursor-pointer my-4">
                    <path fillRule="evenodd" d="M3.97 3.97a.75.75 0 011.06 0L12 10.94l6.97-6.97a.75.75 0 111.06 1.06L13.06 12l6.97 6.97a.75.75 0 11-1.06 1.06L12 13.06l-6.97 6.97a.75.75 0 01-1.06-1.06L10.94 12 3.97 5.03a.75.75 0 010-1.06z" clipRule="evenodd" />
                </svg>
           </div>
           
        </div>

    )
}