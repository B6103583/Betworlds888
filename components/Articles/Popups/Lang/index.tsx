import { Modal } from 'antd';
import React, { useState } from 'react';
import Image from "next/image";
import img from "@../../../public/image/articles/art2.png";
import step1 from "@../../../public/image/articles/lang/step1.png";
import step2 from "@../../../public/image/articles/lang/step2.png";
import step3 from "@../../../public/image/articles/lang/step3.png";
import step4 from "@../../../public/image/articles/lang/step4.png";
import { AiFillCaretDown } from "react-icons/ai";

function Lang() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="flex flex-col sm:gap-1 shadow-lg min-h-full border-[2px] border-[#FAC54C] rounded-xl bg-black  justify-center items-center lg:py-4">
      <div className="flex p-1">
        <Image src={img} alt="LogoImage" />
      </div>
      <div className="flex flex-col pt-5 ">
        <h1 onClick={() => setVisible(true)} className="text-center text-sm sm:text-xl lg:text-xl font-semibold text-[#FAC54C] cursor-pointer hover:text-white hover:underline">เปลี่ยนภาษาใน Betworlds888</h1>
      </div>
      <Modal
        title="เปลี่ยนภาษาใน UFABETWORLDS"
        centered
        visible={visible}
        onCancel={() => setVisible(false)}
        width={1200} 
        footer={false}
      >
        {/* Inside */}
        <div className='bg-black bg-opacity-95 '>
          <div className="flex flex-col items-center bg-black bg-opacity-25 h-full px-10 gap-5">
            <div className="pt-5">
              <Image src={img} alt="LogoImage" />
            </div>
            <div className="bg-transparent px-5 py-3 gap-5 border-[2px] border-[#FAC54C] rounded-xl">
                <h1 className='text-white text-[16px] indent-8'>เมื่อสมาชิกล็อคอินเข้าสู่ระบบแล้ว เพื่อความสะดวกในการทำรายการต่างๆของเว็บ Betworlds888 เว็บไซต์พนันออนไลน์ชั้นนำของเอเชีย 
                และอันดับหนึ่งของไทย เรามีปุ่มเปลี่ยนภาษาไว้รองรับถึง 5 ภาษาได้แก่ ภาษาไทย ภาษาอังกฤษ ภาษาจีน ภาษาเวียดนาม และภาษาลาว ลูกค้าสามารถเปลี่ยนภาษาได้ตามต้องการในคลิกเดียว</h1>
            </div>

            {/* ขั้นตอนการเปลี่ยนภาษา */}

            <div className="flex flex-col w-full gap-5">
              <div className="flex bg-gradient-to-l from-[#B27310] via-[#F0D077] to-[#FAC54C] ">
                <div className="mx-auto font-bold text-2xl sm:text-3xl py-3 text-center">ขั้นตอนการเปลี่ยนภาษา มีดังต่อไปนี้</div>
              </div>
              <div className="bg-transparent px-5 py-3 gap-5 border-[2px] border-[#FAC54C] rounded-xl">
                <h1 className='text-white text-[16px] indent-8'>ลูกค้าเว็บไซต์ Betworlds888 สามารถเข้าใจขั้นตอนในการเปลี่ยนภาษาได้ง่ายภายใน 2 ขั้นตอนเท่านั้น การเปลี่ยนภาษา 
                และมีคำธิบายพร้อมภาพไว้ให้แล้วด้านล่างนี้</h1>
              </div>
              
              <h1 className="text-white text-4xl flex items-end">ขั้นตอนที่ 1<AiFillCaretDown fill="#FAC54C"/></h1>
              <Image src={step1} alt="LogoImage" />
              <h1 className="text-white text-4xl flex items-end">ขั้นตอนที่ 2<AiFillCaretDown fill="#FAC54C"/></h1>
              <Image src={step2} alt="LogoImage" />
              <h1 className="text-white text-4xl flex items-end">ขั้นตอนที่ 3<AiFillCaretDown fill="#FAC54C"/></h1>
              <Image src={step3} alt="LogoImage" />
              <h1 className="text-white text-4xl flex items-end">ขั้นตอนที่ 4<AiFillCaretDown fill="#FAC54C"/></h1>
              <Image src={step4} alt="LogoImage" />

            </div>

            {/* ระบบเปลี่ยนภาษาดีที่สุด */}

            <div className="flex flex-col w-full gap-5 pb-10">
              <div className="flex bg-gradient-to-l from-[#B27310] via-[#F0D077] to-[#FAC54C] ">
                <div className="mx-auto font-bold text-2xl sm:text-3xl py-3 text-center">ระบบเปลี่ยนภาษาดีที่สุดต้อง Betworlds888 เท่านั้น</div>
              </div>
              <div className="bg-transparent px-5 py-3 gap-5 border-[2px] border-[#FAC54C] rounded-xl">
                <h1 className='text-white text-[16px] indent-8'>การทำรายการในเว็บเดิมพันออนไลน์ เรื่องของภาษาในรายละเอียดข้อมูลที่แสดงผลมีความสำคัญต่อการใช้งานอย่างมาก 
                เว็บไซต์ Betworlds888 ที่เปิดให้บริการมายาวนานเกือบ 20 ปี ได้ติดตั้งปุ่มเปลี่ยนภาษาที่ดีที่สุด สะดวกรวดเร็วทันใจ ดำเนินการเสร็จสิ้นหลังจากเข้าสู่ระบบภายในเวลาไม่ถึง 30 วินาที 
                นอกจากนี้ยังมีภาษาให้เปลี่ยนมากถึง 5 ภาษา อันได้แก่ ภาษาไทย ภาษาอังกฤษ ภาษาจีน ภาษาเวียดนาม และภาษาลาว เพื่อตอบสนองการใช้งานของลูกค้า ที่ไม่จำกัดแค่ประเทศไทย 
                แต่ยังครอบคลุมในระดับเอเชียอีกด้วย</h1>
              </div>

            </div>


          </div>

        </div>
      </Modal>
    </div>
  )
}

export default Lang