import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import Image from "next/image";
import img from "@../../../public/image/articles/art5.png";
import step1 from "@../../../public/image/articles/lang/step1.png";
import step2 from "@../../../public/image/articles/lang/step2.png";
import step3 from "@../../../public/image/articles/lang/step3.png";
import step4 from "@../../../public/image/articles/lang/step4.png";
import { AiFillCaretDown } from "react-icons/ai";

function Password() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="flex flex-col sm:gap-1 shadow-lg min-h-full border-[2px] border-[#FAC54C] rounded-xl bg-black  justify-center items-center lg:py-4">
      <div className="flex ">
        <Image src={img} alt="LogoImage" />
      </div>
      <div className="flex flex-col pt-5 ">
        <h1 onClick={() => setVisible(true)} className="text-center text-sm sm:text-xl lg:text-xl font-semibold text-[#FAC54C] cursor-pointer hover:text-white hover:underline">เปลี่ยนรหัสผ่าน</h1>
      </div>
      <Modal
        title="เปลี่ยนรหัสผ่าน"
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
                <h1 className='text-white text-[16px] indent-8'>สำหรับสมัครชิกใหม่ที่ได้รับ Password ล็อคอินจากเจ้าหน้าที่คอลเซ็นเตอร์ แล้วต้องการเปลี่ยนรหัสผ่าน 
                หรือสมาชิกเก่าที่ต้องการเปลี่ยนรหัสผ่าน เว็บไซต์ Betworlds888 เว็บพนันออนไลน์ยอดนิยมอันดับหนึ่งของไทย ได้จัดทำระบบเปลี่ยนรหัสผ่านไว้ให้บริการ 
                ลูกค้าสามารถเปลี่ยนแปลงรหัสผ่านเพื่อยกระดับความปลอดภัยในการใช้งานของลูกค้าได้อย่างง่ายดาย</h1>
            </div>

            {/* Section 1 */}

            <div className="flex flex-col w-full gap-5">
              <div className="flex bg-gradient-to-l from-[#B27310] via-[#F0D077] to-[#FAC54C] ">
                <div className="mx-auto font-bold text-3xl py-3">ขั้นตอนในการเปลี่ยนรหัสผ่าน Betworlds888 มีดังนี้</div>
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

            {/* Section 2 */}

            <div className="flex flex-col w-full gap-5 pb-10">
              <div className="flex bg-gradient-to-l from-[#B27310] via-[#F0D077] to-[#FAC54C] ">
                <div className="mx-auto font-bold text-3xl py-3">ทำไมการเปลี่ยนรหัสผ่านของ Betworlds888 จึงถูกใจลูกค้า</div>
              </div>
              <div className="bg-transparent px-5 py-3 gap-5 border-[2px] border-[#FAC54C] rounded-xl">
                <h1 className='text-white text-[16px] indent-8'>เชื่อว่าสมาชิกเว็บพนันออนไลน์จำนวนไม่น้อย มักเจอปัญหาในการเปลี่ยนแปลงรหัสผ่านในการเข้าใช้งาน 
                ระบบขัดข้องทำให้การยืนยันรหัสผ่านใหม่ไม่สำเร็จ เกิดเป็นความยุ่งยากที่ต้องเสียเวลานาน เพื่อแก้ปัญหาเหล่านั้นให้หมดไป เว็บไซต์ Betworlds888 
                จะช่วยให้ลูกค้าจัดการเปลี่ยนรหัสผ่านได้สะดวก รวดเร็วทันใจ ภายใน 4 ขั้นตอนด้วยเวลาไม่ถึง 1 นาที คุณลูกค้าจะสามารถล็อคอินเข้าสู่ระบบด้วยรหัสผ่านใหม่ได้ทันที 
                ถือเป็นการตอบโจทย์ในการเปลี่ยนรหัสผ่านบนเว็บไซต์เดิมพันออนไลน์ได้อย่างแท้จริง</h1>
              </div>

            </div>

          </div>
        </div>
      </Modal>
    </div>
  )
}

export default Password