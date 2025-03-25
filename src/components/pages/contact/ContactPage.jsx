import React from 'react'
import Banner from '../../organisms/banner/Banner'
import Form from '../../organisms/form/Form'
import Address from '../../organisms/address/Address'

function ContactPage() {
    return (
        <>
            <div className='h-[75]'>
                <Banner />
            </div>
            <div className=''>
                <Form />
            </div>
            <div className='bg-cyan-50  mb-5'>
                <Address />
            </div>
        </>
    )
}

export default ContactPage