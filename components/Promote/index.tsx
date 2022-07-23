import React from 'react'
import Cards from './Card';


function Promote() {
  return (
    <div className="w-3/4 mx-auto bg-transparent min-h-full">
        <div className='flex flex-col'>
            <div className='flex bg-gradient-to-l from-[#B27310] via-[#F0D077] to-[#FAC54C]'>
                <div className="mx-auto font-bold text-3xl py-3">พนันออนไลน์</div>
            </div>
            
            <div className='flex flex-col bg-black bg-opacity-50 px-5 justify-center'>
                <Cards/>
            </div>

        </div>
    </div>
  )
}

export default Promote