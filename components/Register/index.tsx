import React from 'react'
import Image from "next/image";
import register from "@../../../public/image/register.png";

function Carousels() {
  return (
    <div className="w-3/4 mx-auto bg-transparent min-h-full ">
        <div className='flex md:py-8 items-center justify-center '>
            <Image src={register} alt="register" />
        </div>
    </div>
  )
}

export default Carousels