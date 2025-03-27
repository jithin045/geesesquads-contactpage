import React from 'react'
import Text from '../../atoms/texts/Text'


function TextGroup() {
    return (
        <>
            <Text text={"India"} className=" text-gray-600 mt-4 text-xl" />
            <Text text={"+91 996-1928-951"} className="text-2xl opacity-100 hover:opacity-50 transition duration-300" />
        </>
    )
}

export default TextGroup