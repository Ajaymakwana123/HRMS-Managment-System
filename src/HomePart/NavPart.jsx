import React from 'react'

function NavPart() {
    return (
        <div>
            <div className='items-center flex flex-row justify-between p-3 pe-10 bg-white'>
                <div className='ml-50 font-medium flex gap-6 cursor-pointer'>
                    <a className='border-b-3 border-md border-[#FFC20E]' href="#">Dashboard</a>
                    <a href="#">Requests</a>
                    <a href="#">Payroll</a>
                    <a href="#">Company</a>
                    <a href="#">Extras</a>
                </div>

                <div className='flex gap-4 items-center justify-center'>
                    <img className='h-12' src="./notifi.png" alt="" />
                    <img className='h-12' src="./msg.png" alt="" />
                    <img className='h-12 p-1.5' src="./profile.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default NavPart
