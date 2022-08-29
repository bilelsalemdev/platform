import React from 'react'
import {Link} from 'react-router-dom'
function Signup() {
  return (
    <div className='flex flex-col  justify-center h-screen m-auto relative  '>
      <h1 className='text-center text-sky-400 font-bold m-5  cursor-default text-4xl'>CREATE ACCOUNT</h1>
      <div className='flex flex-row-reverse justify-center shadow-xl w-auto mx-auto'>
        <div className='aside'>
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
          <Link to='/Login'><input type="submit" value='Login' name="login" id="login" className='rounded-full border-gray-50 border-2 text-gray-50 font-bold p-2 text-center cursor-pointer hover:bg-gray-50 hover:text-sky-400 transition duration-100' /></Link>
        </div>
        <div >

          <form action="/" method="get" className='h-auto  mx-auto bg-white px-10 py-10 '>
              
            <div className='relative'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="svg">
                  <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
              </svg>


              <input type="text"  id='prenom' placeholder='Prenom of the student' className='input' required/>
            </div>
            <div className='relative'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="svg ">
                  <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
              </svg>


              <input type="text"  id='name' placeholder='Name of the student' className='input' required/>
            </div>
            <div className='relative'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="svg  ">
                      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
                  <input type="email" id='email' placeholder='Your Email' className='input' required />
            </div>
            <p className='font-bold text-gray-500 w-96 text-center'>You will receive a message on this email, please check if it's incorrect .</p>     
            <div className='relative '>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="svg">
                <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" />
              </svg>

              <input type="date" name="date" id="date" className='bg-gray-100 block m-4 w-96 h-10 rounded-xl indent-5 outline-white hover:bg-gray-600	 cursor-pointer transition duration-100 focus:bg-gray-600 text-gray-400 p-2' required/>
            </div>   
            <h6 className='text-center text-gray-500 text-sm'><span className="text-red-500">*</span>Date of Birth</h6>
            <div className='relative '>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="svg">
                <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clipRule="evenodd" />
              </svg>


              <input type="password" placeholder='Password ( minimum 8 characters )'  className='input' required/>
            </div>   
            <div className='relative '>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="svg">
                <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clipRule="evenodd" />
              </svg>


              <input type="password" placeholder='Confirm the password'  className='input' required/>
            </div>   
            <div className='relative '>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="svg">
                <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>



              <input type="text" placeholder='Write your state'  className='input' required/>
            </div>   
            <div className='relative '>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="svg">
                <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
                <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
                <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
              </svg>




              <input type="text" placeholder='Choose your division'  className='input' required/>
            </div>   
            <div className='flex justify-center'>
              <input type="submit" value='Register' className='rounded-full border-gray-500 border-2 text-gray-500 font-bold p-2 text-center cursor-pointer hover:bg-gray-500 hover:text-gray-50 transition duration-100'  />
              </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup