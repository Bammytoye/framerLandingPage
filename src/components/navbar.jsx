import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const Navbar = ({onSignUpClick }) => {
    return (
        <nav className='px-36 py-3'>
            <motion.div
                className='p-5 flex justify-between items-center border-b-2 border-gray-300 cursor-pointer'
                initial={{ opacity: 0, y: -20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5 }} 
            >
                <h1 className='font-bold'>
                    earnwave
                </h1>

                <div className='flex space-x-5'>
                    {["About", "For Business", "Media", "Blog"].map((item) => (
                        <motion.a
                            key={item}
                            className='hover:text-gray-400 border-b-2 border-transparent hover:border-gray-300'
                            href="#"
                            whileHover={{ scale: 1.1 }} 
                            transition={{ duration: 0.2 }} 
                        >
                            {item}
                        </motion.a>
                    ))}
                </div>
                
                    <motion.button
                        className='bg-white px-4 py-1 rounded-full border hover:bg-transparent hover:border-gray-400'
                        whileHover={{ scale: 1.1, backgroundColor: "#f7f7f7" }} 
                        transition={{ duration: 0.2 }}
                        onClick={onSignUpClick} 
                    >
                        Sign Up
                    </motion.button>
            </motion.div>
        </nav>
    );
}

export default Navbar;
