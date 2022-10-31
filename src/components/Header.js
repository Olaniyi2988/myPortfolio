
import logo from '../img/logo.png'

const Header = () => {



    // let [open, setOpen] = useState(false)

    
    return (
        <div>
            <div className='shadow-md w-full fixed top-0 left-0'>
                <div className='md:flex items-center justify-between py-2 md:px-10 px-7'>
                    {/* left */}
                    <div className='flex items-center space-x-2 cursor-pointer'>
                        <span>
                            <img src={logo} alt="" className='h-10' />
                        </span>
                        <h3 className='text-xl font-bold'>OLATUNBOSUN</h3>
                    </div>

                    {/* right */}
                    <div className={`md:flex `}>
                        <div className=' cursor-pointer'>
                            <ul className={`md:flex md:items-center md:pd-0 absolute md:static bg-white md:z-auto`}>
                                <li className='md:ml-8 text-xl my-3'>
                                    <a href="#">Home</a>
                                </li>
                                <li className='md:ml-8 text-xl my-3'>
                                    <a href="#">About</a>
                                </li>
                                <li className='md:ml-8 text-xl my-3'>
                                    <a href="#">Contact</a>
                                </li>
                                <li className='md:ml-8 text-xl my-3'>
                                    <a href="#">Portfolio</a>
                                </li>

                                <button className='text-xl text-white font-medium py-2 px-6 md:ml-8 bg-blue hover:bg-lightblue rounded-full duration-500'>Hire Me</button>
                            </ul>
                        </div>
                        
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Header
