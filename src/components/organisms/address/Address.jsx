import React from 'react'
import Heading from '../../atoms/texts/Heading'
import SubHeading from '../../atoms/texts/SubHeading'
import Text from '../../atoms/texts/Text'
import DirectionButton from '../../atoms/buttons/DirectionButton'
import Image from '../../atoms/images/Image'

function Address() {
    return (
        <>
            <div className='h-full flex items-center p-[50]'>
                <div className='w-full lg:w-1/2 p-5'>
                    <Image />
                </div>
                <div className='w-full lg:w-1/2 flex flex-col justify-bewteen '>
                    <Heading children={"Find Your Way to Our Office"} className={"text-6xl mt-4 md:mt-2"} />
                    <SubHeading children={"Head Office"} className={"mt-5 text-gray-600 text-md"} />
                    <Text text={"21/152, Corrazone Panadan, Kalamassery, Kochi University, Ernakulam, Kerala, India, 682022"} className="mb-5 text-2xl" />
                    <DirectionButton className={"mt-5 w-45 bg-black text-white hover:text-black hover:bg-white hover:border-1 transition duration-300 px-6 py-3"} >Get Direction .</DirectionButton>
                </div>
            </div>
        </>
    )
}

export default Address