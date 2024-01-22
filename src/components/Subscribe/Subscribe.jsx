import React from 'react'
import Banner  from '../../assets/images/bannerxd.jpg'


const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '30vh',
    width: '100vw',
}

const Subscribe = () => {
  return (
    <div data-aos="zoom-in" className='bg-gray-800 text-white' style={BannerImg}>
      <div className='container backdrop-blur-sm py-10'>
        <div className='space-y-6 max-w-xl mx-auto'>
            <h1 className='text-2xl !text-center sm:text-left sm:text-4xl font-semibold'>
            Suscribete para tener notias de ofertas
            </h1>
            <input
            data-aos="fade-up"
            type="text"
            placeholder='Ingresa tu correo'
            className='w-full p-3 text-black'
            />
        </div>
      </div>
    </div>
  )
}

export default Subscribe
