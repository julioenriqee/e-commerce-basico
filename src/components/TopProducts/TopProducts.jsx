import React from 'react'
import Image1 from '../../assets/images/1.webp'
import Image2 from '../../assets/images/2.webp'
import Image3 from '../../assets/images/3.webp'
import Image4 from '../../assets/images/4.webp'     //descargar imagenes para esta seccion
import Image5 from '../../assets/images/5.webp'
import Image6 from '../../assets/images/6.png'
import Image7 from '../../assets/images/7.png'

import { FaStar } from 'react-icons/fa'


const ProductsData = [
    {
        id: 1,
        img: Image1,
        title: "Camisa de Hombre",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
    },
    {
        id: 2,
        img: Image2,
        title: "Short de Mujer",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
       },
    {
        id: 3,
        img: Image3,
        title: "Pantalon de Hombre",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
    },
    {
        id: 4,
        img: Image4,
        title: "Camisa de Mujer",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",

    },
    {
        id: 5,
        img: Image5,
        title: "Short de Hombre",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
        },
    {
        id: 6,
        img: Image6,
        title: "Pantalon de Mujer",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
    },
    {
        id: 7,
        img: Image7,
        title: "Zapatillas de Hombre",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",

    },
]

const TopProducts = () => {
  return (
    <div>
      <div className='container'>
        {/* Header section */}
        <div className='text-left mb-10'>
            <p data-aos="fade-up" className='text-sm text-primary '>Mejores Productos</p>
            <h1 data-aos="fade-up" className='text-3xl font-bold'>Productos</h1>
            <p data-aos="fade-up" className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore reprehenderit repellendus natus
            </p>
        </div>
        {/* Body section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center'>
            {ProductsData.map((data) => (
                    <div className='rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]'>
                        {/* image section */}
                        <div>
                            <img src={data.img} alt="" />
                        </div>
                        {/* details section */}
                    </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default TopProducts
