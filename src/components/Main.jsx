import Button from "./Button"
import Category from './Category'

const Main = () => {
    return (
        <main className='flex-1 overflow-y-auto no-scrollbar'>
            <div className='md:flex md:max-h-[93vh]'>
                <div className='leftConatiner m-1 p-2 pt-4.5 hidden bg-[#F1EFF6] rounded-xl shadow-[-3px_4px_3px_rgba(0,0,0,0.25)] md:inline'>
                    <div>Something Might Be Here</div>
                    <div className="buttons">
                        <Button name={"Books"} src={"/book.svg"} className='w-[25vw] rounded-lg' />
                        <Button name={"Bundle"} src={"/books.svg"} className='w-[25vw] rounded-lg' />
                        <Button name={"Upload"} src={"/upload.svg"} className='w-[25vw] rounded-lg' />
                        <Button name={"Profile"} src={"/profile.svg"} className='w-[25vw] rounded-lg' />
                        <Button name={"Settings"} src={"/setting.svg"} className='w-[25vw] rounded-lg' />
                    </div>
                </div>
                <div className='m-1 p-2 rounded-xl bg-[#e6e1f3] shadow-[-3px_4px_3px_rgba(0,0,0,0.25)] md:overflow-x-scroll no-scrollbar'>
                    <div className='flex justify-between md:hidden'>
                        <div className="buttons flex">
                            <Button name={"Books"} src={"/book.svg"} className='w-fit rounded-xl' />
                            <Button name={"Bundle"} src={"/books.svg"} className='w-fit rounded-xl' />
                            <Button name={"Upload"} src={"/upload.svg"} className='w-fit rounded-xl' />
                            <Button name={"Profile"} src={"/profile.svg"} className='w-fit rounded-xl' />
                        </div>
                        <div className="setting flex">
                            <img className="size-5 self-center" src="/setting.svg" alt="setting" />
                        </div>
                    </div>
                    <div className='p-1 overflow-scroll rounded-xl flex flex-col gap-5 no-scrollbar'>
                        <Category name={"Web Development"} />
                        <Category name={"App Development"} />
                        <Category name={"BCA"} />
                        <Category name={"BSC"} />
                        <Category name={"BA"} />
                        <Category name={"Colleges"} />
                        <Category name={"University"} />
                        <Category name={"10th"} />
                        <Category name={"12th"} />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main
