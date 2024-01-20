import React from 'react'
import Image1 from '../../assets/hero/women.png'
import Image2 from '../../assets/hero/shopping.png'
import Image3 from '../../assets/hero/sale.png'
import Slider from 'react-slick'

const ImageList = [
    {
        id: 1,
        image: Image1,
        title: "50% de descuento en ropa de mujeres",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia."
    },
    {
        id: 2,
        image: Image2,
        title: "30% de descuento en ropa de hombres",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia."
    },
    {
        id: 3,
        image: Image3,
        title: "70% de descuento en productos seleccionados",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia."
    },
]

const Hero = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEasy: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    //   var settings = {
    //     dots: false,
    //     infinite: false,
    //     speed: 800,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 4000,
    //     cssEasy: "ease-in-out",
    //     pauseOnHover: false,
    //     pauseOnFocus: true,
    //   };

  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200'>
        {/* Background pattern */}
      <div className='h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-full rotate-45 -z-9'>
        
      </div>
      {/* hero section */}
      <div className='container pb-8 sm:pb-0'>
        <Slider {...settings}>
            {ImageList.map((data) => (
                <div>
                <div className='grid grid-cols-1 sm:grid-cols-2'>
                    {/* text content section */}
                    <div
                    className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relarive z-10'
                    >
                        <h1 className='text-5xl sm-text-6xl lg:text-7xl font-bold'>{data.title}</h1>
                        <p className='text-sm'>{data.description}</p>
                        <div>
                            <button className='bg-primary/80 transition-all duration-200 text-white  py-1 px-4 rounded-full flex items-center gap-3 group hover:bg-primary/50 hover:bg-opacity-100'>
                                Compra ahora
                            </button>
                        </div>
                    </div>
                    {/* image section */}
                    <div className='order-1 sm:order-2'>
                        <div className='relative z-10'>
                            <img src={data.image} alt="" 
                            className='w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto'
                            />
                        </div>
                    </div>
                </div>
            </div>
            ))}
        </Slider>
      </div>
    </div>
  )
}

export default Hero
