import React from 'react'


const Button = ({
    name, 
    src, 
    className=""
}) => {
    return (
        <div className={`m-1 px-1.5 py-1 ${className} flex items-center gap-1 bg-[#FFFFFF] shadow-[-3px_4px_3px_rgba(0,0,0,0.25)]`}>
            <img className='size-5 min-w-3.5' src={src} alt="button" />
            <button className='text-[clamp(12px,2vw,20px)] self-center smsc:text-[14px] md:text-lg'>{name}</button>
        </div>
    )
}

export default Button
