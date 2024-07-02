import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className='bg-black fixed top-0 left-0 w-full flex justify-between items-center h-24 text-white px-8 shadow-lg z-50'>
            <div className='flex-1'>
                <Link className='font-extrabold text-3xl tracking-wide' to="/">Home</Link>
            </div>
            <div className='hidden md:flex space-x-8'>
                <ul className='flex space-x-8'>
                    <li className="active">
                        <Link className='text-lg font-medium hover:text-gray-400 transition-colors duration-300' to="/about">About</Link>
                    </li>
                    <li>
                        <Link className='text-lg font-medium hover:text-gray-400 transition-colors duration-300' to="/contact">Contact Me</Link>
                    </li>
                </ul>
            </div>
            <div className='flex md:hidden'>
                <button onClick={() => setIsOpen(!isOpen)} className='text-white'>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                    </svg>
                </button>
            </div>
            {isOpen && (
                <div className='md:hidden absolute top-24 left-0 w-full bg-black z-50'>
                    <ul className='flex flex-col space-y-4 items-center py-4'>
                        <li className="active">
                            <Link className='text-lg font-medium hover:text-gray-400 transition-colors duration-300' to="/about">About</Link>
                        </li>
                        <li>
                            <Link className='text-lg font-medium hover:text-gray-400 transition-colors duration-300' to="/contact">Contact Me</Link>
                        </li>
                    </ul>
                </div>
            )}
            <div className='flex-1'></div>
        </nav>
    );
}
