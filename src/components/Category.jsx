import React from 'react'
import Card from './Card'

const Category = ({ name }) => {
    return (
        <div className='flex-col'>
            <div className='flex justify-between'>
                <div className='text-2xl'>{name}</div>
                <div className='self-end'>See all</div>
            </div>
            <div className='flex gap-1 overflow-auto no-scrollbar'>
                <Card image={"/download.jfif"} profilePicture={"/profile.svg"} bookName={"React JS"} prize={200} />
                <Card image={"/download.jfif"} profilePicture={"/profile.svg"} bookName={"C Language"} prize={200} />
                <Card image={"/download.jfif"} profilePicture={"/profile.svg"} bookName={"Mathematics"} prize={200} />
                <Card image={"/download.jfif"} profilePicture={"/profile.svg"} bookName={"English"} prize={200} />
                <Card image={"/download.jfif"} profilePicture={"/profile.svg"} bookName={"Fundamental Of Information Technology"} prize={200} />
                <Card image={"/download.jfif"} profilePicture={"/profile.svg"} bookName={"English"} prize={200} />
                <Card image={"/download.jfif"} profilePicture={"/profile.svg"} bookName={"English"} prize={200} />
            </div>
        </div>
    )
}

export default Category
