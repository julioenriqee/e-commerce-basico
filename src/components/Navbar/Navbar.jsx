import React from 'react'
import Logo from '../../assets/js.png'
import { IoSearch } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import DarkMode from './DarkMode';


const Menu = [
    {
        id: 1,
        name: 'Inicio',
        link: '#'
    },
    {
        id: 2,
        name: 'Productos',
        link: '#'
    },
    {
        id: 3,
        name: 'Ofertas',
        link: '#'
    },
    {
        id: 4,
        name: 'Contacto',
        link: '#'
    },
];
const DropdownMenu = [
    {
        id: 1,
        name: 'Tendencia 1',
        link: '#'
    },
    {
        id: 2,
        name: 'Tendencia 2',
        link: '#'
    },
    {
        id: 3,
        name: 'Tendencia 3',
        link: '#'
    },
    {
        id: 4,
        name: 'Tendencia 4',
        link: '#'
    },
];

const Navbar = ({ handleOrderPopup }) => {
  return (
    <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
        {/* upper Navbar */}
      <div className='bg-primary/85 py-2'>
          <div className='container flex justify-between items-center '>
              <div>
                   <a href="#" className='font-bold text-2xl sm:text-3xl flex gap-2'>
                       <img src={Logo} alt="logo" className='w-10 rounded-full' />
                       Jota Shop
                   </a>
              </div>
              {/* search bar and order button */}
              <div className='flex justify-between items-center gap-4 '>
                   <div className='relative group hidden sm:block'>
                       <input type="text" placeholder='Buscar' className='w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800'/>
                       <IoSearch 
                       className='text-gray-500 group-hover:text-primary transition-all duration-300 absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer'
                       />
                   </div>
                {/* order button */}
                <button
                onClick={() => handleOrderPopup()}
                className='bg-secondary/80 transition-all duration-200 text-white  py-1 px-4 rounded-full flex items-center gap-3 group hover:bg-secondary hover:bg-opacity-100'
                >
                <span
                className='group-hover:block hidden transition-all duration-200'
                >Carrito
                </span>
                <FaCartShopping 
                className='text-xl text-white drop-shadow-sm cursor-pointer'
                />
                </button>

                {/* Darkmode Switch */}
                <div>
                    <DarkMode />
                </div>
              </div>
          </div>
      </div>
        {/* lower Navbar */}
      <div data-aos="zoom-in" className='flex justify-center'>
        <ul className='sm:flex hidden items-center gap-4'>
            {
                Menu.map((data)=>(
                    <li key={data.id}>
                        <a href={data.link}
                        className='inline-block px-4 hover:text-primary transition-all duration-200'
                        >{data.name}</a>
                    </li>
                ))
            }
            {/* Simple Dropdown and Links */}
            <li className='group relative cursor-pointer'>
                <a href="#" className='flex items-center gap-[2px] py-2'>
                    Tendencia
                    <span>
                        <FaCaretDown
                        className='transition-all duration-200 group-hover:rotate-180'/>
                    </span>
                    </a>
                    <div className='absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black shadow-md'>
                        <ul>
                            {DropdownMenu.map((data)=>(
                                <li key={data.id}>
                                    <a 
                                    href={data.link}
                                    className='inline-block w-full rounded-md p-2 hover:bg-primary/20'
                                    >
                                        {data.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
