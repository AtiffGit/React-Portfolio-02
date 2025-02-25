import React from 'react';
import Section from './common/Section';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import connect from '../assets/mobile.png'
const Contact = () => {
    const icons = [
        {
            id: 1,
            link: "https://twitter.com",
            icon: <FaTwitter />,
        },
        {
            id: 2,
            link: "https://github.com/AtiffGit",
            icon: <FaGithub />,
        },
        {
            id: 3,
            link: "https://linkedin.com",
            icon: <FaLinkedin />,
        },
    ];

    return (
        <Section title='Contact' subtitle='These are the ways you can get in touch with me'>
            <div className='flex flex-col items-center justify-center gap-8 text-center'>
                <div><img src={connect} alt="Contact Info" className='w-32 h-32' /></div>
                <div>
                    <p className='max-w-xs md:max-w-lg font-extralight '>I am open to talk regarding freelancing and full time oppurtunites feel free me to contact me.</p>
                </div>
                <div className='flex w-full items-center justify-evenly text-3xl'>{icons.map(({id,link,icon})=>(
                    <a href={link} target='blank' rel='noopener noreferrer' className='duration-300 ease-in-out hover:text-rose-600 hover:scale-125'>{icon}</a>
                ))}</div>



                {/* form */}
                <div className='p-8 text-left w-full'>
                    <form action="">
                        <div className='gap-4 w-full '>
                            <div className='flex flex-col'>
                                <label className=' capitalize text-sm py-2  '>name</label>
                                <input type="text" name="name" className='border-2 rounded-lg p-3 flex focus:outline-none  border-gray-400 dark:bg-gray-900 dark:text-white' />
                            </div>

                            <div className='flex flex-col'>
                                <label className='capitalize text-sm py-2  '>phone</label>
                                <input type="text" name="phone" className='border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white' />
                            </div>

                            <div className='flex flex-col'>
                                <label className='capitalize text-sm py-2  '>email</label>
                                <input type="text" name="email" className='border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white' />
                            </div>

                            <div className='flex flex-col'>
                                <label className='capitalize text-sm py-2  '>message</label>

                                <textarea name="message" rows='10' className='border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white resize-none'></textarea>
                            </div>
                        </div>

                        <div className='flex items-center justify-center '>
                            <button className='my-8 bg-gradient-to-r from-rose-600 to-teal-500 text-white px-6 py-3  font-seminold  uppercase rounded-md  tracking-wider cursor-pointer hover:scale-105 duration-300'>Send Message</button>
                        </div>
                    </form>

                </div>
            </div>
        </Section>
    );
};

export default Contact;
