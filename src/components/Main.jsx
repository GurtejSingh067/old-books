import React from 'react'
import Button from "./Button"
import Category from './Category'

const Main = () => {
    return (
        <div className='m-1 p-2 flex-col rounded-xl bg-[#F1EFF6] shadow-[-3px_4px_3px_rgba(0,0,0,0.25)]'>
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
            <div className='p-1 max-h-[80vh] overflow-scroll rounded-xl flex flex-col gap-5'>
                <Category name={"Web Development"}/>
                <Category name={"App Development"}/>
                <Category name={"BCA"}/>
                <Category name={"BCA"}/>
                <Category name={"BCA"}/>
                <Category name={"BCA"}/>
                <Category name={"BCA"}/>
                <Category name={"BCA"}/>
                <Category name={"BCA"}/>
            </div>
        </div>
    )
}

export default Main
