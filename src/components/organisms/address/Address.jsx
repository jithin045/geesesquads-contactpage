import React from 'react'
import DirectionButton from '../../atoms/buttons/DirectionButton'
import AddressImage from '../../molecules/address/AddressImage'
import AddressHeading from '../../molecules/address/AddressHeading'
import AddressText from '../../molecules/address/AddressText'

function Address() {
    return (
        <>
            <div className='h-full flex md:flex-row flex-col items-center p-5'>
                <div className='w-full lg:w-1/2 p-5'>
                    <AddressImage />
                </div>
                <div className='w-full lg:w-1/2 p-5 '>
                    <AddressHeading />
                    <AddressText />
                    <DirectionButton className={"mt-5 w-45 bg-black text-white hover:text-black hover:bg-white hover:border-1 transition duration-300 px-6 py-3"} >Get Direction .</DirectionButton>
                </div>
            </div>
        </>
    )
}

export default Address