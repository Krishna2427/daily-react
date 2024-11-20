import Logo from '../assets/logo.jpeg';
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartPlus } from 'react-icons/fa'; // Correct import
import { data } from 'autoprefixer';

const NavBar = () => {
    const menu = [
        {
            id:1,
            name:"Home",
            link:"/#",
        },
        {
            id:2,
            name:"Top Rated",
            link:"/#services"
        },
        {
            id:3,
            name:"Kids Wear",
            link:"/#kids",
        },
        {
            id:3,
            name:"Mens Wear",
            link:"/# mens"
        },
        {
            id:4,
            name:"Electronics",
            link:"/#electronics"
        }
    ]
    const dropdownlist = [
        {
            id:1,
            name:"trading products",
            links:"/#"
        },
        {   
            id:2,
            name:"Best Selling",
            links:"/#"
        },
        {
            id:3,
            name:"Top Rated",
            links:"/#"
        },
    ]
    return (
        <div className='shadow-md bg-white duration-200 relative z-40'>
            {/* {Upper Navbar} */}
            <div className='bg-primary py-0'>
                <div className='container flex justify-between items-center'>
                    <div>
                        <a href="/"
                            className='font-bold text-2xl sm:text-3xl flex gap-2 text-white'>
                            <img src={Logo} alt="Logo"
                                className='w-10'
                            />
                            Shopsy
                        </a>
                    </div>
                    {/* search bar */}
                    <div className='flex justify-between items-center gap-4'>
                        <div className=' relative group hidden sm:block'>
                            <input type="text"
                                placeholder='Search'
                                className='w-[200px] sm:w-[200px]
                         group-hover:w-[300px] transition-all rounded-full duration-300 border border-gray-300
                         px-3 py-1 focus:outline-none focus:ring focus:ring-primary'/>

                            <IoMdSearch className="text-gray-500 group-hover:text-primary absolute
                            top-1/2 -translate-y-1/2 right-3"/>
                        </div>
                        {/* order button */}
                        <button onClick={() => alert("Ordered not available yet")}
                        className='bg-gradient-to-t from-primary to-secondary rounded-full transition-all
                        duration-300 text-white px-4 py-1 flex items-center gap-3 group'>
                        <span className='group-hover:block hidden transform-all duration-200'>Order</span>
                        <FaCartPlus className='text-xl text-white drop-shadow-sm
                        cursor-pointer'/>
                    </button>
                    {/* Darkmode Switch */}
                    {/* <DarkMode/> */}
                    </div>
                </div>
            </div>
            {/* {lower Navbar} */}
            <div className=' flex justify-center'>

                <ul className='sm:flex hidden items-center gap-3'>
                    {menu.map((data, index)=>(
                        <li key={index}>
                            <a href={data.link}
                            className='inline-block px-4 hover:text-primary duration-200'
                            >{data.name}</a>
                        </li>   
                    ))} 
                    <li className='group relative cursor pointer'>
                        <a href="#"
                        className='flex items-center gap-[2px] py-2'
                        >
                            Trending Products
                            <span>
                                <FaCaretDown
                                className='transition-all
                                duration-200
                                group-hover:rotate-180'
                                />
                            </span>
                        </a>
                        <div>
                            <ul className='absolute z-[9999] hidden group-hover:block w-[150px] rounded-md
                            bg-white p-2 text-black shadow-md'>
                                {dropdownlist.map((list)=>(
                                    <li key={list.id}>
                                         <a href={list.links}
                                         className='inline-block w-full rounded-md p-2
                                         hover:bg-primary/20 '
                                         >{list.name}</a>
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

export default NavBar;
