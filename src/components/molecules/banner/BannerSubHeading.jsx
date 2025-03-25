import React from 'react'
import HomeIcon from '../../atoms/icons/HomeIcon'
import SlashIcon from '../../atoms/icons/SlashIcon'
import SubHeading from '../../atoms/texts/SubHeading'

function BannerSubHeading() {
    return (
        <>
            <div className='flex items-center justify-between'>
                <div className='flex items-center justify-between opacity-50 hover:opacity-100 transition duration-300'>
                    <HomeIcon />
                    <SlashIcon />
                </div>
                <SubHeading children={"Contact Us"} className={"text-white"} />
            </div>
        </>
    )
}

export default BannerSubHeading