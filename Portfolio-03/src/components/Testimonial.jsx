import React from 'react'
import Section from './common/Section';
import avatar from "../assets/avatar.png"

const Testimonial = () => {

    const texttimonial = [
        {
            id:1,
            image:avatar,
            namee:"Spongebob",
            comment:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque obcaecati, ex quis sit deserunt officia?",

        },
        {
            id:2,
            image:avatar,
            namee:"Rehman",
            comment:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque obcaecati, ex quis sit deserunt officia?",

        },
        {
            id:3,
            image:avatar,
            namee:"Fellix",
            comment:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque obcaecati, ex quis sit deserunt officia?",

        },
        
    ]
  return (
   <Section title="Testimonials" subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, rem? Eum cupiditate voluptas assumenda iure.">

    <div className='max-w-xl flex flex-col gap-8'>
        {
            texttimonial.map(({id,image,namee,comment})=>(
            <div className='flex p-4 justify-center items-center shadow-md rounded-xl dark:shadow-gray-300'>
                <div className='w-1/3'>
                    <img src={image} alt={namee} className='w-20 h-20 object-cover object-top pt-2 ' />
                </div>
                <div className='w-2/3 flex flex-col justify-center items-center gap-3 p-2'>
                    <h3 className='text-xl font-semibold '>{namee}</h3>
                    <p className='text-sm font-extralight'>{comment}</p>
                </div>
            </div>
            ))
        }
    </div>
   </Section>
  )
}



export default Testimonial
