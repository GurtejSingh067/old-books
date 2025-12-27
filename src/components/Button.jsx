import React from 'react'


const Button = ({name, src}) => {
    return (
        <div className='m-1 px-1.5 py-1 w-fit flex items-center gap-1 rounded-xl bg-[#FFFFFF] shadow-[-3px_4px_3px_rgba(0,0,0,0.25)]'>
            <img className="size-5" src={src} alt="button" />
            <button className='self-center'>{name}</button>
        </div>
    )
}

export default Button
