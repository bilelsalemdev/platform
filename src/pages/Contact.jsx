import React from 'react'

function Contact() {
  return (
    <div className='h-screen m-20 w-auto'>
      
      <form action="" method="get" className='h-auto  mx-auto bg-white px-10 py-10 max-w-4xl'>
      <h1 className='m-4 text-gray-500'>Feel free to us what you want to know and we are on your service.</h1>
        <div className='relative mr-8'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="svg">
                  <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
              </svg>


              <input type="text"  id='prenom' placeholder='Prenom of the student' className='bg-gray-100 block m-4 w-full h-12 rounded-xl indent-10 outline-white hover:bg-gray-600	 text-white cursor-pointer transition duration-100 focus:bg-gray-600 ' required/>
        </div>
        <div className='relative mr-8'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="svg ">
                  <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
              </svg>


              <input type="text"  id='name' placeholder='Name of the student' className='bg-gray-100 block m-4 w-full h-12 rounded-xl indent-10 outline-white hover:bg-gray-600	 text-white cursor-pointer transition duration-100 focus:bg-gray-600 ' required/>
        </div>
        <div className='relative mr-8'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="svg  ">
                      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
                  <input type="email" id='email' placeholder='Your Email' className='bg-gray-100 block m-4 w-full h-12 rounded-xl indent-10 outline-white hover:bg-gray-600	 text-white cursor-pointer transition duration-100 focus:bg-gray-600 ' required />
        </div>
        <div className='mr-8'>
          <textarea name="contact" id="contact" className='bg-gray-100 block m-4 w-full h-72 rounded-xl indent-2 outline-white hover:bg-gray-600	 text-white cursor-pointer transition duration-100 focus:bg-gray-600 '></textarea>
        </div>
      </form>
    </div>
  )
}

export default Contact