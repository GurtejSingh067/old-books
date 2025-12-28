import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className='m-1 p-2 rounded-lg flex justify-between bg-[#E8E9EE] shadow-[-3px_4px_3px_rgba(0,0,0,0.25)]'>
        <div className='flex gap-3'>
          <div className='p-1 px-2 rounded-lg bg-[#FFFFFF] shadow-[-3px_4px_3px_rgba(0,0,0,0.25)]'>
            <img className='size-5' src="/link.png" alt="Quick Links" />
            <span className='hidden'>Quick Links</span>
          </div>
          <div className='p-1 px-2 rounded-lg bg-[#FFFFFF] shadow-[-3px_4px_3px_rgba(0,0,0,0.25)]'>
            <img className='size-5' src="/phone.png" alt="Contact Us" />
            <span className='hidden'>Contact Us</span>
          </div>
          <div className='p-1 px-2 rounded-lg bg-[#FFFFFF] shadow-[-3px_4px_3px_rgba(0,0,0,0.25)]'>
            <img className='size-5' src="/aboutUs.png" alt="About Us" />
            <span className='hidden'>About Us</span>
          </div>
          <div className='p-1 px-2 rounded-lg bg-[#FFFFFF] shadow-[-3px_4px_3px_rgba(0,0,0,0.25)]'>
            <img className='size-5' src="/privacy-policy.png" alt="Privacy Policy" />
            <span className='hidden'>Privacy Policy</span>
          </div>
        </div>
        <div className="getMeAChai p-1 px-2 flex rounded-lg gap-2 bg-[#FFB3B3] shadow-[-3px_4px_3px_rgba(0,0,0,0.25)]">
          Get Me A Chai
          <img className='size-6 rounded-2xl self-center' src="/tea.gif" alt="cup" />
        </div>
      </footer>
    </div>
  )
}

export default Footer
