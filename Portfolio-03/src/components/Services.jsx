import React from 'react';
import Section from './common/Section';
import commerce from '../assets/commerce.png'; // Make sure to replace with the correct path
import research from '../assets/research.png'; // Make sure to replace with the correct path
import web from '../assets/web.png';         // Make sure to replace with the correct path
import mobile from '../assets/mobile.png';   // Make sure to replace with the correct path

const Services = () => {
    const services = [
        {
            id: 1,
            image: commerce,
            title: "Ecommerce Website",
        },
        {
            id: 2,
            image: web,
            title: "Web Development",
        },
        {
            id: 3,
            image: mobile,
            title: "Mobile Development",
        },
        {
            id: 4,
            image: research,
            title: "Research and Development",
        },
    ];

    return (
        <Section title="services ⛏️" subtitle="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, doloribus? Iusto reprehenderit quod expedita, molestias eaque et ducimus, consequuntur repellendus sunt accusantium rem rerum est dolor consectetur beatae vero numquam.">
            <div className='grid gap-10 lg:grid-cols-2 '>
                {services.map(({ id, image, title }) => (
                    <div key={id} className='flex flex-col items-center justify-center p-5 shadow-lg dark:shadow-gray-100 rounded-xl duration-300 ease-in-out hover:scale-110 cursor-pointer'>
                        <img src={image} alt={title}  className='w-36 h-36 md:-w-44 md:h-44 object-contain '/>
                        <h3 className='mt-5 text-base'>{title}</h3>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Services;
