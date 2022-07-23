import React from 'react'
import Image from "next/image";
import qr from "@../../../public/image/qr.jpg";
import friend from "@../../../public/image/pro_friend.png";
import newplayer from "@../../../public/image/pro_newplayer.png";

function Promotion() {
  return (
    <div className="w-3/4 mx-auto bg-transparent min-h-full">
        <div className='flex flex-col bg-black bg-opacity-50 '>
            <div className='flex bg-gradient-to-l from-[#B27310] via-[#F0D077] to-[#FAC54C]'>
                <div className="mx-auto font-bold text-3xl py-3 text-transparent">Promotion</div>
            </div>
            <div className='flex flex-col md:flex-row bg-black bg-opacity-50 p-10 gap-8 '>

                {/* QR Code */}
                <div className="flex flex-col md:w-1/3 bg-[#6c757d] bg-opacity-25 p-8 gap-5 border-[2px] border-[#FAC54C] rounded-xl justify-center items-center">
                    <h1 className="text-center text-lg sm:text-xl lg:text-xl font-semibold text-[#FAC54C]">สมัครสมาชิก</h1>
                    <div className="flex ">
                        <Image src={qr} alt="LogoImage" />
                    </div>
                    <h1 className="text-center text-lg sm:text-xl lg:text-xl font-semibold text-[#FAC54C]">ติดต่อ @Betworlds888</h1>
                </div>

                {/* Promotion */}
                <div className="flex flex-col md:w-2/3 bg-[#6c757d] bg-opacity-25 px-5 border-[2px] border-[#FAC54C] rounded-xl justify-center items-center">
                    <h1 className="text-center text-lg sm:text-xl lg:text-2xl font-semibold text-[#FAC54C] pt-8">โปรโมชั่น</h1>
                    <div className='flex flex-col md:flex-row'>
                        <div className="flex flex-col md:w-1/2 p-5 gap-5 justify-center items-center">
                            <div className="flex ">
                                <Image src={newplayer} alt="LogoImage" />
                            </div>
                            <h1 className="text-center text-lg sm:text-xl lg:text-xl font-semibold text-[#FAC54C]">โปรลูกค้าใหม่</h1>
                        </div>
                        <div className="flex flex-col md:w-1/2 p-5 gap-5 justify-center items-center">
                            <div className="flex ">
                                <Image src={friend} alt="LogoImage" />
                            </div>
                            <h1 className="text-center text-lg sm:text-xl lg:text-xl font-semibold text-[#FAC54C]">โปรแนะนำเพื่อน</h1>
                        </div>

                    </div>
                    
                </div>
                
            </div>

        </div>

    </div>
  )
}

export default Promotion