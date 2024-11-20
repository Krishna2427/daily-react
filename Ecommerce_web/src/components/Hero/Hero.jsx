import React from 'react'

import image1 from '../../assets/hero/sale.jpg'
import image2 from '../../assets/hero/kids.jpeg';
import image3 from '../../assets/Hero/women.jpeg'

function Hero() {
    const imageList = [
        {
            id: 1,
            img: image1,
            title: "Upto 50% Off on all Mobils ",
            description: `Experience smooth performance and premium features at an 
                    affordable price. Your perfect companion for work and play!`
        },
        {
            id: 2,
            img: image2,
            title: "Upto 70% Off on all kis wear ",
            description: `Discover stylish and comfortable kids' wear at unbeatable prices. 
                      Perfect for every occasion, offering both quality and affordability!`
        },
        {
            id: 3,
            img: image3,
            title: "Upto 60% Off on all womens wear ",
            description: `Explore trendy and comfortable women's wear at great prices. Ideal for 
                      any occasion, combining style, quality, and affordability!`
        },
    ]

    return (
        <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] flex justify-center
    items-center duration-200 dark:bg-gray-100 dark:text-white'>
            {/* background pattern */}
            <div className='h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl
         rotate-45 -z-9'>
            </div>
            {/* Hero section */}
            <div className='container pb-8 sm:pb-0'>
                <div>
                    <div className='grid gtid-cols-1 sm:grid-cols-2'>
                        {/* text contet section */}
                        <div>
                            <h1>LOrem ipsum dolor sit:</h1>
                            <p>
                                lorem ipsum dolor sit amet consectetur
                                adipisicing elit. vitae.
                            </p>
                        </div>
                        <div>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero