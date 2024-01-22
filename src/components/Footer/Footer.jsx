import React from 'react'
import footerLogo from '../../assets/js.png'
import Banner from '../../assets/footer.jpg'
import { 
    FaInstagram,
    FaFacebook,
    FaTwitter,
    FaLocationArrow,
    FaPhone,
} from 'react-icons/fa';

const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
    height: '100%',
    width: '100%',
};

const FooterLinks = [
    {
        title: "Home",
        link: "/",
    },
    {
        title: "About",
        link: "/about",
    },
    {
        title: "Contact",
        link: "/contact",
    },
    {
        title: "Products",
        link: "/products",
    }
];

const Footer = () => {
  return (
    <div style={BannerImg} className='text-white'>
      <div className='container'>
        <div 
        data-aos="zoom-in"
        className='grid md:grid-cols-3 pb-44 pt-5'>
            {/* company details */}
            <div className='py-8 px-4'>
                <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3'>
                    <img src={footerLogo} alt="" 
                    className='max-w-[50px]'
                    />
                    JotaShops</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, cum odit. Blanditiis quae facilis corrupti corporis tempora quod sed impedit.</p>
            </div>
            {/* Footer Links */}
            <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
                <div className='py-8 px-4'>
                    <h1 className='sm:text-xl text-xl font-bold sm:text-left text-justify mb-3'>Links Importantes</h1>
                    <ul className='flex flex-col gap-3'>
                        {FooterLinks.map((link) => (
                            <li key={link.link} className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200'>
                                <span>{link.title}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='py-8 px-4'>
                    <h1 className='sm:text-xl text-xl font-bold sm:text-left text-justify mb-3'>Links</h1>
                    <ul className='flex flex-col gap-3'>
                        {FooterLinks.map((link) => (
                            <li key={link.link} className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200'>
                                <span>{link.title}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <div className='flex items-center gap-3 mt-6'>
                        <a href="#">
                        <FaInstagram className='text-3xl text-gray-200 hover:text-primary duration-300' />
                        </a>
                        <a href="#">
                        <FaFacebook className='text-3xl text-gray-200 hover:text-primary duration-300' />
                        </a>
                        <a href="#">
                        <FaTwitter className='text-3xl text-gray-200 hover:text-primary duration-300' />
                        </a>
                    </div>
                    <div className='mt-6'>
                        <div className='flex items-center gap-3'>
                            <FaLocationArrow className='text-gray-200 text-2xl' />
                            <p>123, Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                        </div>
                        <div className='flex items-center gap-3 mt-3'>
                            <FaPhone className='text-gray-200 text-2xl' />
                            <p>+234 123 456 7890</p>
                        </div>
                    </div>
            </div>
            </div>

            {/* social links */}

            
        </div>
      </div>
    </div>
  )
}

export default Footer
