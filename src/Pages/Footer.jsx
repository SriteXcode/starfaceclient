import React from 'react'
import { NavLink } from 'react-router-dom';
import Elementapi from '../assets/Api/Elementsapi';


const Footer = () => {
  return (
    <div className="bg-gray-900 grid grid-cols-1 md:grid-cols-3 gap-6 p-6 text-white text-left">
      <div>
      <NavLink to="/about" className="text-lg font-semibold mb-2 flex items-center gap-1 text-white hover:text-gray-300"> 
                      About Us
                    </NavLink>
        <p>Learn more about our company and values.</p>
      </div>
      <div>
      <NavLink to="/service" className="text-lg font-semibold mb-2 flex items-center gap-1 text-white hover:text-gray-300"> 
                      Services
                    </NavLink>
        <p>Explore the services we offer to our clients.</p>
      </div>
      <div>
      <NavLink to="/contact" className="text-lg font-semibold mb-2 flex items-center gap-1 text-white hover:text-gray-300"> 
                      Contact
                    </NavLink>
        <p>Get in touch with us for inquiries.</p>
      </div>
      {/* <div className="md:col-span-1 mt-6">
        <h4 className="text-lg font-semibold mb-2">Quick Access Links</h4>
        <ul className="list-disc list-inside">
          <li><a href="/home" className="text-blue-600 hover:underline">Home</a></li>
          <li><a href="/about" className="text-blue-600 hover:underline">About</a></li>
          <li><a href="/services" className="text-blue-600 hover:underline">Services</a></li>
          <li><a href="/contact" className="text-blue-600 hover:underline">Contact</a></li>
        </ul>
      </div> */}

{/* Elements Dropdown */}
<div className='relative group mx-2 w-[100px] h-[35px]'>

                  {/* <li className='hover:bg-gray-800 px-3 py-2 rounded-md'> */}
                    <NavLink className="text-lg font-semibold mb-2 flex items-center gap-1 text-white hover:text-gray-300"> 
                      Elements
                      <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </NavLink>
                  {/* </li> */}
                  <div className='absolute left-[100px] top-[-230px] hidden group-hover:block bg-gray-800 shadow-lg z-50 rounded-md w-[500px] max-h-[600px] overflow-hidden mt-1 p-4 border border-gray-600'>
                    <div className='grid grid-cols-2 p-4 gap-4'>
                      {Elementapi.map((category) => (
                        <div key={category.category}>
                          <h2 className='font-bold text-white mb-2 border-b border-gray-700 pb-2'>{category.category}</h2>
                          <ul className='space-y-1'>
                            {category.data.map((item) => (
                              <li key={item.id} className='px-3 py-1.5 hover:bg-gray-700 rounded-md transition duration-200'>
                                <NavLink to={item.path} className='block text-gray-300 hover:text-white'>{item.name}</NavLink>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

      <div className="md:col-span-1 mt-6">
      <NavLink to="/faq" className="text-lg font-semibold mb-2 flex items-center gap-1 text-white hover:text-gray-300"> 
                      FAQ
                    </NavLink>
        <p>Find answers to common questions.</p>
      </div>
      <div className="md:col-span-1 mt-6">
        
      <NavLink to="/TandQ" className="text-lg font-semibold mb-2 flex items-center gap-1 text-white hover:text-gray-300"> 

                      Terms & Conditions
                    </NavLink>
        <p>Read our terms and conditions.</p>
      </div>
      <div className="md:col-span-3 mt-6 text-center">
        <p className="text-sm">© {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer