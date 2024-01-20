import { data } from 'autoprefixer'
import React from 'react'
import Image1 from '../../assets/images/1.webp'
import Image2 from '../../assets/images/2.webp'
import Image3 from '../../assets/images/3.webp'
import Image4 from '../../assets/images/4.webp'
import Image5 from '../../assets/images/5.webp'
import Image6 from '../../assets/images/6.png'
import Image7 from '../../assets/images/7.png'

import { FaStar } from 'react-icons/fa6'


const ProductsData = [
    {
        id: 1,
        image: Image1,
        title: "50% de descuento en ropa de Hombres",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
        rating: 4.7,
        colors: "brown",
        aosDelay: "400",
    },
    {
        id: 2,
        image: Image2,
        title: "30% de descuento en ropa de Mujer",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
        rating: 4.7,
        colors: "Yellow",
        aosDelay: "600",
    },
    {
        id: 3,
        image: Image3,
        title: "70% de descuento en productos seleccionados",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
        rating: 4.7,
        colors: "Pink",
        aosDelay: "800",
    },
    {
        id: 4,
        image: Image4,
        title: "50% de descuento en ropa de Hombres",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
        rating: 4.7,
        colors: "brown",
        aosDelay: "1000",
    },
    {
        id: 5,
        image: Image5,
        title: "30% de descuento en ropa de Mujer",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
        rating: 4.7,
        colors: "Yellow",
        aosDelay: "1200",
    },
    {
        id: 6,
        image: Image6,
        title: "70% de descuento en productos seleccionados",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
        rating: 4.7,
        colors: "Pink",
        aosDelay: "1400",
    },
    {
        id: 7,
        image: Image7,
        title: "50% de descuento en ropa de Hombres",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
        rating: 4.7,
        colors: "brown",
        aosDelay: "1600",
    },
]

const Products = () => {
  return (
    <div className='mt-14 mb-12'>
      <div className='container'>
        {/* header section */}
        <div className='text-center mb-10 mas-x-[600px] mx-auto'>
            <p data-aos="fade-up" className='text-sm text-primary '>Productos más vendidos</p>
            <h1 data-aos="fade-up" className='text-3xl font-bold'>Productos</h1>
            <p data-aos="fade-up" className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore reprehenderit repellendus natus
            </p>
        </div>
        {/* body section */}
        <div>
            <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>
                {/* card section */}
                {ProductsData.map((data) => (
                        <div
                        data-aos='fade-up'
                        data-aos-delay={data.aosDelay}
                        key={data.id}
                        className='space-y-3'
                        >
                            <img src={data.image} alt="" 
                            className='h-[220px] w-[150px] object-cover rounded-md'
                            />
                            <div>
                                <h3 className='font-semibold'>{data.title}</h3>
                                <p className='text-sm text-gray-600'>{data.colors}</p>
                                <div className='flex items-center gap-1'>
                                    <FaStar className='text-yellow-400' />
                                    <span>{data.rating}</span>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Products
