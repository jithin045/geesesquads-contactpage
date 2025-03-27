import React from 'react'
import Text from '../../atoms/texts/Text'

function EmailGroup() {
    return (
        <>
            <Text text={"Email"} className=" text-gray-600 text-xl" />
            <Text text={"info@geesesquads.com"} className="mb-5 text-2xl opacity-100 hover:opacity-50 transition duration-300" />
        </>
    )
}

export default EmailGroup