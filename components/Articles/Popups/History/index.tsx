import { Modal } from 'antd';
import React, { useState } from 'react';
import Image from "next/image";
import img from "@../../../public/image/articles/art3.png";
import ex from "@../../../public/image/articles/history/ex.png";
import ex2 from "@../../../public/image/articles/history/ex2.png";

function History() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="flex flex-col sm:gap-1 shadow-lg min-h-full border-[2px] border-[#FAC54C] rounded-xl bg-black  justify-center items-center lg:py-4">
      <div className="flex p-1">
        <Image src={img} alt="LogoImage" />
      </div>
      <div className="flex flex-col pt-5 ">
        <h1 onClick={() => setVisible(true)} className="text-center text-sm sm:text-xl lg:text-xl font-semibold text-[#FAC54C] cursor-pointer hover:text-white hover:underline">ดูรายการย้อนหลัง</h1>
      </div>
      <Modal
        title="ดูรายการย้อนหลัง"
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
                <h1 className='text-white text-[16px] indent-8'>ดูรายการเล่นย้อนหลัง Betworlds888 คือ การตรวจเช็ครายการที่เราได้เล่นไปแล้วหรือกำลังเล่น 
                สามารถรู้ถึงเส้นทางการเงินทั้งหมดในบัญชีของท่าน สามารถเข้าดูรายการได้ด้วยไม่กี่ขั้นตอน สะดวก รวดเร็ว ครบจบในเว็บเดียวต้อง Betworlds888</h1>
            </div>

            {/* ตรวจประวัติการเดิมพัน */}

            <div className="flex flex-col w-full gap-5">
              <div className="flex bg-gradient-to-l from-[#B27310] via-[#F0D077] to-[#FAC54C] ">
                <div className="mx-auto font-bold text-2xl sm:text-3xl py-3 text-center">ตรวจประวัติการเดิมพัน</div>
              </div>
              <Image src={ex} alt="LogoImage" />
              <div className="bg-transparent px-5 py-3 gap-5 border-[2px] border-[#FAC54C] rounded-xl">
                <h1 className='text-white text-[16px]'>
                  1. กดตรง ประวติการเล่น<br/>
                  2. เลือก หมวดที่จะดู กดตรงวันที่<br/>
                  3. เลือก รายการที่จะดู กดตรงวันที่<br/>
                  4. เลือก ดูรายการ ที่แทงได้เลย ( ตามภาพ )</h1>
              </div>
            </div>

            {/* ตรวจการเดิมพันค้าง/บิล */}

            <div className="flex flex-col w-full gap-5">
              <div className="flex bg-gradient-to-l from-[#B27310] via-[#F0D077] to-[#FAC54C] ">
                <div className="mx-auto font-bold text-2xl sm:text-3xl py-3 text-center">ตรวจการเดิมพันค้าง/บิล</div>
              </div>
              <Image src={ex2} alt="LogoImage" />
              <div className="bg-transparent px-5 py-3 gap-5 border-[2px] border-[#FAC54C] rounded-xl">
                <h1 className='text-white text-[16px]'>
                  1. หลังเข้าหน้าแทงบอลเเล้วมุมซ้ายบนกดคำว่ารายการ<br/>
                  2. จะแสดงลงรายการที่บิลยังไม่ตัด (ตามรูป)<br/></h1>
              </div>
            </div>

            {/* สรุป */}

            <div className="flex flex-col w-full gap-5 pb-10">
              <div className="flex bg-gradient-to-l from-[#B27310] via-[#F0D077] to-[#FAC54C] ">
                <div className="mx-auto font-bold text-2xl sm:text-3xl py-3 text-center">สรุป วิธีดูรายการย้อนหลัง Betworlds888</div>
              </div>
              <div className="bg-transparent px-5 py-3 gap-5 border-[2px] border-[#FAC54C] rounded-xl">
                <h1 className='text-white text-[16px] indent-8'> ขั้นตอนง่ายๆ สามารถดูด้วยตัวเองได้ ขั้นตอนไม่ยุ่งยาก เข้าใจง่าย ชัดเจน ใช้เวลาไม่ถึง 1 นาที 
                ท่านสามารถตรวจความโปร่งใสของทางเว็บไซต์ Betworlds888 ของทางเราได้ทุกขั้นตอน และเราพร้อมและยินดีที่จะรับความเห็นของทุกท่าน เพื่อนำไปปรับใช้พัฒนาระบบ</h1>
              </div>

            </div>
          </div>

        </div>
      </Modal>
    </div>
  )
}

export default History