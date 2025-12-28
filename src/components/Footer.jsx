import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className='m-1 p-2 rounded-lg flex justify-between bg-[#E8E9EE] shadow-[-3px_4px_3px_rgba(0,0,0,0.25)]'>
        <div className='flex gap-5'>
            <div className='p-1 px-2 rounded-lg bg-[#FFFFFF] shadow-[-3px_4px_3px_rgba(0,0,0,0.25)]'>Quick Links</div>
            <div className='p-1 px-2 rounded-lg bg-[#FFFFFF] shadow-[-3px_4px_3px_rgba(0,0,0,0.25)]'>Contact Us</div>
            <div className='p-1 px-2 rounded-lg bg-[#FFFFFF] shadow-[-3px_4px_3px_rgba(0,0,0,0.25)]'>About Us</div>
        </div>
        <div className="getMeAChai p-1 px-2 rounded-lg bg-[#FFB3B3] shadow-[-3px_4px_3px_rgba(0,0,0,0.25)]">
            Get Me A Chai
        </div>
      </footer>
    </div>
  )
}

export default Footer
