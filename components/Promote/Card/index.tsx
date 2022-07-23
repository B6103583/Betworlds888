import React from 'react'
import Image from "next/image";
import Ball from "@../../../public/image/Cards/ball.png";
import Bacara from "@../../../public/image/Cards/Bacara.png";
import Casino from "@../../../public/image/Cards/Casino.png";

interface CardProps {
    title: string;
    desc: string;
    img: any;
}

function Cards() {
    const Card = ({ title, desc, img }: CardProps) => {
        return (
            <div className="flex flex-col sm:gap-1 shadow-lg w-[270px] sm:w-[300px] sm:h-[350px] md:w-[430px] lg:w-[300px] lg:h-[370px] border-[2px] border-[#FAC54C] rounded-xl bg-black  justify-center items-center lg:py-4">
                <div className="flex ">
                    <Image src={img} alt="LogoImage" />
                </div>
                <div className="flex flex-col px-5">
                    <h1 className="text-center text-lg sm:text-xl lg:text-xl font-semibold text-[#FAC54C]">{title}</h1>
                    <p className="md:text-[16px] text-white indent-8">{desc}</p>
                </div>
            </div>
        )
    }
  return (
    <div className="w-full grid grid-rows-1  lg:grid-cols-3 sm:gap-8 sm:gap-x-8  sm:p-12 gap-5 justify-center py-5">

            <Card title="แทงบอลออนไลน์"
                desc="แทงบอลกับเราสามารถเลือกเล่นได้หลายประเภท ไม่ว่าจะเป็นบอลชุด บอลเต็ง ทายเตะมุมใบเหลือง หรือจะเป็นแทงใครเป็นผู้เขี่ยลูกฟุตบอลก่อนและมีราคาให้เลือกมากที่สุด"
                img={Ball} />

            <Card title="สูตรบาคาร่า"
                desc="บาคาร่าจัดเป็นหนึ่งในเกมส์ที่ยอดนิยมมากๆของนักพนัน จากการใช้เติมเงินเดิมพันเริ่มต้นเพียง 10 บาททำให้นักพนันทุกคนสามารถร่วมสนุกได้ทันที"
                img={Bacara} />

            <Card title="คาสิโนออนไลน์"
                desc="แหล่งรวมเกมคาสิโนที่มากที่สุดในประเทศ ท่านสามารถสนุกไปกับคาสิโนออนไลน์ได้เงินจริงได้อย่างไร้กังวล บริการอย่างโปร่งใส ถูกต้องตามกฏหมายที่นี่ที่เดียว"
                img={Casino} />

        </div>
  )
}

export default Cards