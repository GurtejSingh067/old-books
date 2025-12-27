import React from 'react'
import Button from "./Button"
import Category from './Category'

const Main = () => {
    return (
        <div className='m-1 p-2 flex-col rounded-xl bg-[#F1EFF6]'>
            <div className='flex justify-between'>
                <div className="buttons flex">
                    <Button name={"Books"} src={"/book.svg"} />
                    <Button name={"Bundle"} src={"/books.svg"} />
                    <Button name={"Upload"} src={"/upload.svg"} />
                    <Button name={"Profile"} src={"/profile.svg"} />
                </div>
                <div className="setting flex">
                    <img className="size-5 self-center" src="/setting.svg" alt="setting" />
                </div>
            </div>
            <div className='p-1 rounded-xl flex flex-col gap-5'>
                <Category name={"Web Development"}/>
                <Category name={"App Development"}/>
            </div>
        </div>
    )
}

export default Main
