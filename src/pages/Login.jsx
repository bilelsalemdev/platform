import React from 'react'
import {Link} from 'react-router-dom'
function Login() {
  return (
    <div className='flex  justify-center  w-auto mx-auto h-auto'>
      <div className='flex flex-row-reverse justify-center shadow-xl  w-auto mx-auto items-center my-64'>
        <div className='login-aside'>
          <div className="text-3xl font-bold flex justify-center items-center pl-10 ">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-gray-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
              <div className="text-xl md:text-4xl text-gray-50 my-2 ">
                <Link to={'/'}>Salah Academy</Link>
              </div>
          </div>
          <h1 className="text-xl md:text-4xl text-gray-50 my-2 cursor-default">Welcome back</h1>
          <p className=" text-gray-50 my-2 text-center p-2 cursor-default">To stay in touch with us, please log in with your personal information .</p>
          <Link to={'/Signup'}><input type="submit" value='Register' name="Register" id="register" className='rounded-full border-gray-50 border-2 text-gray-50 font-bold p-2 text-center cursor-pointer hover:bg-gray-50 hover:text-sky-400 transition duration-100' /></Link>
        </div>
        <form action="/" method="get" className='h-auto  mx-auto bg-white px-10 py-10  flex flex-col items-center justify-center'>
              <h1 className='text-center text-gray-500 font-bold text-2xl'>Salah Academy</h1>
             <div>
                <div className='relative'>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="svg  ">
                          <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                          <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                      </svg>
                      <input type="email" id='email' placeholder='Your Email' className='input' required/>
                </div>
                
                <div className='relative '>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="svg">
                    <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clipRule="evenodd" />
                  </svg>
    
    
                  <input type="password" placeholder='Enter the password'  className='input' required minLength={8}/>
                </div>   
                
                <div className='flex justify-center mt-2 pt-4'>
                 <input type="submit" value='Login' className='rounded-full border-gray-500 border-2 text-gray-500 font-bold p-2 text-center cursor-pointer hover:bg-gray-500 hover:text-gray-50 transition duration-100'  />
                </div>
                <div className='text-center my-4 text-gray-500 font-bold cursor-pointer'>
                  <Link to={'/Newpassword'}>Forgot your password ?</Link>
                </div>
              </div>
         </form>
         </div>
        </div>
        
    
    
  )
}

export default Login