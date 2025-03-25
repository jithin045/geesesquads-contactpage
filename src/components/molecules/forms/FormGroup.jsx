import React from 'react'
import Input from '../../atoms/inputs/Input'
import Textarea from '../../atoms/inputs/TextArea'

function FormGroup() {
    return (
        <>
            <div className="w-full flex flex-col gap-5 ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input type="text" placeholder="Full name*" />
                    <Input type="text" placeholder="Company Name" />
                    <Input type="email" placeholder="Business Mail*" />
                    <Input type="tel" placeholder="Phone Number" />
                </div>
                <Textarea  placeholder="Describe briefly how we can help you" />
            </div>
        </>
    )
}

export default FormGroup