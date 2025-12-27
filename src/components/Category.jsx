import React from 'react'
import Card from './Card'

const Category = ({ name }) => {
    return (
        <div className='flex-col'>
            <div className='text-2xl'>{name}</div>
            <div className='flex gap-1 overflow-auto no-scrollbar'>
                <Card image={"/download.jfif"} profilePicture={"/profile.svg"} bookName={"React JS"} />
                <Card image={"/download.jfif"} profilePicture={"/profile.svg"} bookName={"C Language"} />
                <Card image={"/download.jfif"} profilePicture={"/profile.svg"} bookName={"Mathematics"} />
                <Card image={"/download.jfif"} profilePicture={"/profile.svg"} bookName={"English"} />
                <Card image={"/download.jfif"} profilePicture={"/profile.svg"} bookName={"Fundamental Of Information Technology"} />
                <Card image={"/download.jfif"} profilePicture={"/profile.svg"} bookName={"English"} />
                <Card image={"/download.jfif"} profilePicture={"/profile.svg"} bookName={"English"} />
            </div>
        </div>
    )
}

export default Category
