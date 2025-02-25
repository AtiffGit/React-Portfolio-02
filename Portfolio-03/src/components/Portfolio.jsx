import React from 'react'
import Section from './common/Section';
import {FaGithub,FaExternalLinkAlt}from "react-icons/fa";

import p1 from '../assets/p1.jpg'; // Make sure to replace with the correct path
import p2 from '../assets/p2.jpg'; // Make sure to replace with the correct path
import p3 from '../assets/p3.jpg';         // Make sure to replace with the correct path
import p4 from '../assets/p4.jpg';   // Make sure to replace with the correct path
import p5 from '../assets/p5.jpg';   // Make sure to replace with the correct path
import p6 from '../assets/p6.jpg';   // Make sure to replace with the correct pathjpg
const Portfolio = () => {
    const portfolio = [
        {
            id:1,
            image:p1,
            title:"Best App",
            github:"https://github.com/AtiffGit",
            demo:"https://nodejs.org/en/",
        },
        {
            id:2,
            image:p2,
            title:"Best App",
            github:"https://github.com/AtiffGit",
            demo:"https://nodejs.org/en/",
        },
        {
            id:3,
            image:p3,
            title:"Age Of Empires",
            github:"https://github.com/AtiffGit",
            demo:"https://nodejs.org/en/",
        },
        {
            id:4,
            image:p4,
            title:"Best App",
            github:"https://github.com/AtiffGit",
            demo:"https://nodejs.org/en/",
        },
        {
            id:5,
            image:p5,
            title:"Best App",
            github:"https://github.com/AtiffGit",
            demo:"https://nodejs.org/en/",
        },
        {
            id:6,
            image:p6,
            title:"Best App",
            github:"https://github.com/AtiffGit",
            demo:"https://nodejs.org/en/",
        },
    ]
  return (
    <Section title="Portfolio" subtitle="loremorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, doloribus? Iusto reprehenderit quod expedita, molestias eaque et ducimus, consequuntur repellendus sunt accusantium rem rerum est dolor consectetur ">
      

      <div className='grid gap-8 lg:gap-14 lg:grid-cols-2 '>

        {
            portfolio.map(({id,image,title,github,demo}) =>(
                <div className=' max-w-lg  flex shadow-lg shadow-gray-300 rounded-2xl overflow-hidden'>
                    <img src={image} alt={title} className='w-2/3' />
                    <div className='w-1/3 flex flex-col items-center justify-evenly p-1'>
                        <h2>{title}</h2>
                        <a className='text-2xl cursor-pointer duration-150 hover:scale-110' href={github} target='blanl' rel='noopener noreferrer'><FaGithub/></a>
                        <a className='text-2xl cursor-pointer duration-150 hover:scale-110' href={demo} target='blanl' rel='noopener noreferrer'><FaExternalLinkAlt/></a>
                    </div>
                </div>
            ))
        }

      </div>
    </Section>
  )
}

export default Portfolio
