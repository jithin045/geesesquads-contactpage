import React from 'react'
import Heading from '../../atoms/texts/Heading'
import SubHeading from '../../atoms/texts/SubHeading'

function AddressHeading() {
    return (
        <>
            <Heading children={"Find Your Way to Our Office"} className={"invisible lg:visible lg:text-6xl lg:mt-4 md:mt-0"} />
            <SubHeading children={"Head Office"} className={"mt-5 text-gray-600 text-md"} />
        </>
    )
}

export default AddressHeading