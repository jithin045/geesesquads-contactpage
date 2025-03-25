import React from 'react'
import BannerSubHeading from '../../molecules/banner/BannerSubHeading'
import BannerHeading from '../../molecules/banner/BannerHeading'

function Banner() {
    return (
        <>
            <div className='bg-cyan-700 flex flex-col justify-center items-center h-[75vh]'>
                <BannerSubHeading />
                <BannerHeading />
            </div>
        </>
    )
}

export default Banner