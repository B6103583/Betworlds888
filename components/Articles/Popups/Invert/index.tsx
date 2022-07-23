import React, { useState } from 'react';
import Image from "next/image";
import img from "@../../../public/image/articles/art1.png";
import Link from 'next/link';


function Invert() {
  return (
    <div className="flex flex-col sm:gap-1 shadow-lg min-h-full border-[2px] border-[#FAC54C] rounded-xl bg-black  justify-center items-center lg:py-4">
      <div className="flex p-1">
        <Image src={img} alt="LogoImage" />
      </div>
      <div className="flex flex-col pt-5 ">
        <Link href="">
          <a><h1 className="text-center text-sm sm:text-xl lg:text-xl font-semibold text-[#FAC54C] cursor-pointer hover:text-white hover:underline" >ลงทุนกับ Betworlds888</h1></a>
        </Link>
      </div>
    </div>
  )
}

export default Invert