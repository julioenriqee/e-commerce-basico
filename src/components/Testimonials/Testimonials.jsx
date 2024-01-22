import React from 'react'
import Slider from 'react-slick';
import Image1 from '../../assets/images/1.webp'
import Image2 from '../../assets/images/2.webp'
import Image3 from '../../assets/images/3.webp'
import Image4 from '../../assets/images/4.webp'
import Image5 from '../../assets/images/5.webp'

const TestimonialsData = [   //agregamos la data de los testimonios y las imagenes
    {
        id: 1,
        image: Image1,
        name: "John Doe",
        title: "CEO",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
    },
    {
        id: 2,
        image: Image2,
        name: "John Doe",
        title: "CEO",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
    },
    {
        id: 3,
        image: Image3,
        name: "John Doe",
        title: "CEO",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
        aosDelay: "800",
    },
    {
        id: 4,
        image: Image4,
        name: "John Doe",
        title: "CEO",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
    },
    {
        id: 5,
        image: Image5,
        name: "John Doe",
        title: "CEO",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
    },
];
const Testimonials = () => {

    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2,
              }
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
          ]
      };


  return (
    <div className='py-10 mb-10'>
      <div className='container'>
        {/* header section */}
        <div className='text-center mb-10 mas-x-[600px] mx-auto'>
            <p data-aos="fade-up" className='text-sm text-primary '>Reseñas de clientes</p>
            <h1 data-aos="fade-up" className='text-3xl font-bold'>Testimonios</h1>
            <p data-aos="fade-up" className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore reprehenderit repellendus natus
            </p>
        </div>
        {/* testimonials cards */}
        <div
        data-aos="zoom-in"
        >
            <Slider {...settings}>
                {TestimonialsData.map((data) => (
                    <div className='my-6'>
                        <div
                        key={data.id}
                        data-aos="fade-up"
                        className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative'
                        >
                            <div className='mb-4'>
                                <img 
                                src={data.img} 
                                alt="" 
                                className='rounded-full w-20 h-20'
                                />
                            </div>
                            <div className='flex flex-col items-center gap-4'>
                                <div className='space-y-3'>
                                <p className='text-xs text-gray-400'
                                >{data.text}</p>
                                <h1 className='text-xl font-bold text-black/80 dark:text-light'
                                >{data.name}</h1>
                                </div> 
                            </div>
                            <p className='text-black/20 text-9xl font-serif absolute top-0 right-0'>
                                ”
                            </p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
