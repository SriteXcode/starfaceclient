import React from 'react'

const Whyus = () => {
  return (
    <div className="why-us-container lg:max-w-4xl w-[95vw] mx-auto p-6 bg-[#f1e9db] shadow-md rounded-lg my-6 ">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-4">Why Choose Us?</h1>
      <p className="text-base md:text-lg lg:text-xl text-center mb-6">Here are some reasons why we stand out:</p>
      <ul className="list-disc list-inside space-y-2">
        <li className="text-lg md:text-xl">High-quality service</li>
        <li className="text-lg md:text-lg">Expert team</li>
        <li className="text-lg md:text-lg">Customer satisfaction guaranteed</li>
        <li className="text-lg md:text-lg">Innovative solutions</li>
      </ul>
    </div>
  )
}

export default Whyus