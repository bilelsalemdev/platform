import React from 'react'
import {Link} from 'react-router-dom'
function Mainfooter() {
  return (
    <footer className='bg-sky-500 h-40 flex justify-evenly'>
      <div className='flex items-center justify-center  '>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-white m-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
          </svg>
          <div className="ms:text-xl md:text-4xl text-white ml-0 mr-4 mt-4 mb-4 p-10 font-bold"><Link to={'/'}>Salah Academy</Link></div>
      </div>
      <div className='flex flex-col m-4 p-10'>
          <h6 className='font-bold text-gray-50 tracking-widest text-xl'>You can find us on :</h6>
          <div className='flex '> 
              <div className='mr-6 mt-4 text-gray-50 hover:text-blue-500 cursor-pointer text-xl'>
                <i class="fa-brands fa-facebook"></i>
              </div>
              <div className='mr-6 mt-4 text-gray-50 hover:text-black cursor-pointer text-xl'>
                <i class="fa-brands fa-github"></i>
              </div>    
              <div className='mr-6 mt-4 text-gray-50 hover:text-sky-500 cursor-pointer text-xl'>
                <i class="fa-brands fa-linkedin"></i>
              </div>
              <div className='mr-6 mt-4 text-gray-50 hover:text-sky-400 cursor-pointer text-xl'>
                <i class="fa-brands fa-twitter"></i>
              </div>    
              <div className='mr-6 mt-4 text-gray-50 hover:text-red-600 cursor-pointer text-xl'>
                <i class="fa-brands fa-youtube"></i>
              </div>
          </div>
      </div>    
          
    </footer>
  )
}

export default Mainfooter