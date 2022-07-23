import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import Image from "next/image";
import img from "@../../../public/image/articles/art4.png";
import step from "@../../../public/image/articles/lotto/step.jpg";
import step2 from "@../../../public/image/articles/lotto/step2.jpg";

function Lotto() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="flex flex-col sm:gap-1 shadow-lg min-h-full border-[2px] border-[#FAC54C] rounded-xl bg-black  justify-center items-center lg:py-4">
      <div className="flex ">
        <Image src={img} alt="LogoImage" />
      </div>
      <div className="flex flex-col pt-5 ">
        <h1 onClick={() => setVisible(true)} className="text-center text-sm sm:text-xl lg:text-xl font-semibold text-[#FAC54C] cursor-pointer hover:text-white hover:underline">แทงหวยออนไลน์</h1>
      </div>
      <Modal
        title="แทงหวยออนไลน์"
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
                <h1 className='text-white text-[16px] indent-8'> การแทงหวยออนไลน์ คือมิติใหม่ของวงการเล่นหวยที่ถูกใจคนไทยเป็นอย่างมาก จากเดิมที่คอหวยถูกจำกัด
                ให้ต้องแทงผ่านเจ้ามือเท่านั้น ถือว่ามีความเสี่ยงอยู่ไม่น้อย นอกจากนี้ยังต้องลุ้นอีกว่าถ้าแทงถูก เจ้ามือจะจ่ายให้เราหรือไม่<br/>
                </h1>
                <h1 className='text-white text-[16px] indent-8'>เพราะถ้างวดนั้นคนถูกเยอะเป็นเงินจำนวนมาก เจ้ามืออาจเชิดเงินหนีก็เป็นได้ ปัจจุบันผู้ที่หลงใหลในการเล่นหวย แทงหวยจึงมานิยมเล่นหวยในรูปแบบออนไลน์เพิ่มมากขึ้น 
                เพราะสะดวกสบาย ประหยัดเวลา จ่ายจริงจ่ายตรง ไม่มีเบี้ยว และที่สำคัญคือเล่นได้ง่าย แค่มีสมาร์ทโฟนก็เล่นได้ทุกที่ทุกเวลา</h1>
            </div>

            {/* Section 1 */}

            <div className="flex flex-col w-full gap-5">
              <div className="flex bg-gradient-to-l from-[#B27310] via-[#F0D077] to-[#FAC54C] ">
                <div className="mx-auto font-bold text-3xl py-3">ขั้นตอนการแทงหวยออนไลน์กับ Betworlds888</div>
              </div>
              <Image src={step} alt="LogoImage" />
              <Image src={step2} alt="LogoImage" />
              <div className="bg-transparent px-5 py-3 gap-5 border-[2px] border-[#FAC54C] rounded-xl">
                <h1 className='text-white text-[16px]'>
                จากภาพ
                  1. เลือก ประเภท ที่ต้องการแทง เช่น แทง3ตัวบน กด 3D(3ตัว) เลือก 3 ตัวบน<br/>
                  2. กรอกเลข กดเลือก -ใส่เลข-<br/>
                  3. ระบุตัวเลข ที่ต้องการเดิมพัน<br/>
                  4. กดระบุยอด ที่ต้องการเดิมพัน แล้วกด -เดิมพัน- ตามภาพ ( หลังจาก กดเดิมพัน แล้วยังเลือกเลขอื่นๆได้เช่นกัน)<br/>
                  5. ตรวจสอบเลขที่เดิมพัน เลขไหนไม่ต้องการ กดกากบาท ได้เพื่อลบตัวเลขนั้นออก<br/>
                  6. หลังจากการตรวจสอบเเล้ว กด -เดิมพัน- เพื่อยืนยันการแทงอีกครั้ง</h1>
              </div>
            </div>

            {/* Section 2 */}

            <div className="flex flex-col w-full gap-5 pb-10">
              <div className="flex bg-gradient-to-l from-[#B27310] via-[#F0D077] to-[#FAC54C] ">
                <div className="mx-auto font-bold text-3xl py-3">เมื่อถูกรางวัลต้องทำอย่างไร ?</div>
              </div>
              <div className="bg-transparent px-5 py-3 gap-5 border-[2px] border-[#FAC54C] rounded-xl">
                <h1 className='text-white text-[16px]'> ในกรณีที่ท่านสมาชิกถูกรางวัลแล้วต้องการถอนเงิน สามารถแจ้งถอนเงินสดกลับได้ทันที โดยสามารถติดต่อ
                เจ้าหน้าที่คอลเซ็นเตอร์ได้ตลอด 24 ชั่วโมง รอรับเงินภายใน 30 นาที หลังจากแจ้งถอน (ภายใน 30 นาที) หรือตามลำดับก่อน-หลัง 
                หากมีสมาชิกทำรายการถอนเงินจำนวนมาก</h1>
              </div>
            </div>

          </div>

        </div>
      </Modal>
    </div>
  )
}

export default Lotto