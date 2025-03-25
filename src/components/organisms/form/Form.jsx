import React from 'react'
import Heading from '../../atoms/texts/Heading'
import Checkbox from '../../atoms/checkboxs/Checkbox'
import SubmitButton from '../../atoms/buttons/SubmitButton'
import FormGroup from '../../molecules/forms/FormGroup'
import Text from '../../atoms/texts/Text'

function Form() {
    return (
        <>
            <div className="flex flex-col lg:flex-row p-8">

                <div className=" w-full lg:w-1/2 mb-8 lg:mb-0 p-5">
                    <Heading className="text-6xl mb-6">Let's build your expert team</Heading>
                    <Text text={"Email"} className=" text-gray-600 text-xl" />
                    <Text text={"info@geesesquads.com"} className="mb-5 text-2xl opacity-100 hover:opacity-50 transition duration-300" />
                    <Text text={"India"} className=" text-gray-600 mt-4 text-xl" />
                    <Text text={"+91 996-1928-951"} className="text-2xl opacity-100 hover:opacity-50 transition duration-300" />
                </div>


                <form className="flex flex-col w-full lg:w-1/2 p-5" >

                    <FormGroup />

                    <Checkbox className={"mt-5 items-center text-gray-600  mr-2"} label="I have read and accepted the privacy and policy"
                    />

                    <SubmitButton className={"mt-[75px] w-30 bg-black text-white hover:text-black hover:bg-white hover:border-1 transition duration-300 px-6 py-3"} >Submit .</SubmitButton>
                </form>
            </div>
        </>
    )
}

export default Form