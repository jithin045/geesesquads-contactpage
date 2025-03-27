import React from 'react'
import LocationMap from '../../molecules/maps/LocationMap'

function Location() {
    return (
        <>
            <div className='flex flex-col justify-center items-center p-5 lg:p-[50px]'>
                <LocationMap />
            </div>
        </>
    )
}

export default Location