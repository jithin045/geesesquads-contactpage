import React from 'react'
import Checkbox from '../../atoms/checkboxs/Checkbox'
import SubmitButton from '../../atoms/buttons/SubmitButton'
import FormGroup from '../../molecules/forms/FormGroup'
import EmailGroup from '../../molecules/forms/EmailGroup'
import TextGroup from '../../molecules/forms/TextGroup'
import FormHeading from '../../molecules/forms/FormHeading'

function Form() {
    return (
        <>
            <div className="flex flex-col lg:flex-row p-8">

                <div className=" w-full lg:w-1/2 mb-8 lg:mb-0 lg:p-5">
                    <FormHeading />
                    <EmailGroup />
                    <TextGroup />
                </div>


                <form className="flex flex-col w-full lg:w-1/2 p-5" >

                    <FormGroup />
                    <Checkbox className={"mt-5 items-center text-gray-600  mr-2"} label="I have read and accepted the privacy and policy"
                    />
                    <SubmitButton className={"mt-[75px] w-30 bg-black hover:bg-white text-white hover:text-black hover:border-1 transition duration-300 px-6 py-3"} >Submit .</SubmitButton>
                </form>
            </div>
        </>
    )
}

export default Form