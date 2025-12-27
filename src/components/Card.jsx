import React from 'react'

const Card = ({ image, profilePicture, bookName }) => {
    return (
        <div>
            <div className="card1 w-fit min-w-40.5 p-1 flex-col rounded-xl bg-[#FFFFFF] shadow-[-3px_3px_3px_rgba(0,0,0,0.25)]">
                <div>
                    <img className="size-40 rounded-sm" src={image} alt="bookimage" />
                </div>
                <div className='flex items-center gap-1'>
                    <img className="size-5" src={profilePicture} alt="Profile Picture" />
                    <span className='truncate w-32.5 text-sm'>{bookName}</span>
                </div>
            </div>
        </div>
    )
}

export default Card
