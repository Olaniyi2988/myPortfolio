import React from 'react'
import Button from '../Button/Button'

const Header = () => {
    return (
        <div>
            <div className='shadow-md w-full fixed top-0 left- px-10'>
                <div className='md:flex justify-between py-2 md:py-5'>
                    {/* left */}
                    <div className='flex text-xl'>
                        <span></span>
                        OLATUNBOSUN
                    </div>

                    <div className='border-b border-gray md:border-none my-1'></div>

                    {/* right */}
                    <div className='md:flex text-center'>
                        <ul className='md:flex md:items-center '>
                            <li className='text-xl hover:bg-yellow md:px-5 md:py- rounded'>
                                <a href="#">bosun</a>
                            </li>
                            <li className='text-xl hover:bg-yellow md:px-5 md:py- rounded'>
                                <a href="#">bosun</a>
                            </li>
                            <li className='text-xl hover:bg-yellow md:px-5 md:py- rounded'>
                                <a href="#">bosun</a>
                            </li>
                            <li className='text-xl hover:bg-yellow md:px-5 md:py- rounded'>
                                <a href="#">bosun</a>
                            </li>
                            <li className='text-xl hover:bg-yellow md:px-5 md:py- rounded'>
                                <a href="#">bosun</a>
                            </li>
                        </ul>

                        <Button
                            name='Get started'
                        />
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Header
