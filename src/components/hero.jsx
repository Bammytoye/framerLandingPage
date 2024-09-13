import React from 'react';
import { MdLock } from "react-icons/md";
import { motion } from 'framer-motion';

const hero = () => {
    return (
        <section className='py-8'>
            <div>
                <div className='flex flex-col justify-center items-center'>
                    <motion.h1
                        className='text-8xl mb-5'
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Connect. Learn. Earn
                    </motion.h1>

                    <motion.p
                        className='w-[550px] text-center text-gray-600 line-clamp-3 mb-5'
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        With Earnwave, you can take control of your data by deciding what to share anonymously
                        and earn from it. Turn your data into a valuable asset while maintaining privacy,
                        and receive rewards for sharing information on your terms. Empower yourself and profit
                        from your data with Earnwave.
                    </motion.p>
                </div>

                <div className='flex justify-center items-center space-x-10'>
                    <p className="w-4 h-4 rounded-full bg-gray-200"></p>
                    <p className="w-8 h-8 rounded-full bg-gray-200"></p>
                    <p className="w-12 h-12 rounded-full bg-gray-200 flex justify-center items-center"><MdLock /></p>
                    <p className="w-8 h-8 rounded-full bg-gray-200"></p>
                    <p className="w-4 h-4 rounded-full bg-gray-200"></p>
                </div>
            </div>

            <div className='px-20 flex justify-center items-center mt-4 space-x-6'>
                <motion.div
                    className="bg-white border rounded-[40px] px-8 py-2 flex space-x-4"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05, rotateY: 20 }} 
                    transition={{ duration: 0.5 }}
                >
                    <div>
                        <p className="bg-gray-100 px-3 py-1 rounded-2xl text-sm w-[100px] mb-3">Your Earning</p>
                        <h2 className="text-6xl mb-3">$30.00</h2>
                        <p className='text-sm'>Next payout is</p>
                        <p className='text-sm'>10.550 pts</p>
                    </div>
                    <img className='w-[150px] h-[230px] self-end' src="/images/grapgh-removebg-preview.png" alt="graph" />
                </motion.div>

                <motion.div
                    className="bg-white border rounded-[40px] px-8 py-2 flex-col space-y-10 justify-center w-[400px]"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05, rotateY: -10 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h3 className='text-xl mb-14 bg-gray-100 px-3 py-1 rounded-2xl w-[180px] mx-auto text-center'>
                        Connect Sources
                    </h3>
                    <div className='flex justify-center space-x-3'>
                        <img className='w-[100px] h-[50px]' src="/images/uber-removebg-preview.png" alt="" />
                        <img className='w-[50px] h-[50px]' src="/images/amazon-removebg-preview.png" alt="" />
                    </div>
                    <div className='flex justify-between'>
                        <img className='w-[50px] h-[50px]' src="/images/netflix-removebg-preview.png" alt="" />
                        <img className='w-[50px] h-[50px]' src="/images/netflix-removebg-preview.png" alt="" />
                    </div>
                    <div className='flex justify-center items-center'>
                        <img className='w-[150px] h-[50px]' src="/images/app_stotre_-removebg-preview.png" alt="" />
                    </div>
                </motion.div>

                <motion.div
                    className="bg-white border rounded-[40px] px-8 py-2 flex space-x-4"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05, rotateY: 10 }} 
                    transition={{ duration: 0.5 }}
                >
                    <div>
                        <p className="bg-gray-100 px-3 py-1 rounded-2xl text-sm w-[100px] mb-3">Your Earning</p>
                        <h2 className="text-6xl mb-3">$30.00</h2>
                        <p className='text-sm'>Next payout is</p>
                        <p className='text-sm'>10.550 pts</p>
                    </div>
                    <img className='w-[150px] h-[230px] self-end' src="/images/grapgh-removebg-preview.png" alt="graph" />
                </motion.div>
            </div>
        </section>
    );
}

export default hero;
