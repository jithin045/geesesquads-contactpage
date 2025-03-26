import React from 'react'
import Heading from '../../atoms/texts/Heading'

function Location() {
    return (
        <>
            <div className='flex flex-col justify-center items-center p-5 lg:p-[50px]'>
                <Heading children={"Find Us on Google Maps"} className={"text-center text-6xl p-5"}/>
                <iframe className='w-full lg:h-screen h-[50vh] p-5 lg:p-[50px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.6294434312263!2d76.33129137354148!3d10.047405172220238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0872cd0c440001%3A0x9b87235f1cd38ae8!2sGeesesquads%20Software%20Services%20Private%20Limited!5e0!3m2!1sen!2sin!4v1742990038159!5m2!1sen!2sin"></iframe>
            </div>
        </>
    )
}

export default Location