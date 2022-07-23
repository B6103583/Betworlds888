import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import Image from "next/image";
import img from "@../../../public/image/articles/art7.png";
import tips from "@../../../public/image/articles/tips.png";

function Tips() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="flex flex-col sm:gap-1 shadow-lg min-h-full border-[2px] border-[#FAC54C] rounded-xl bg-black  justify-center items-center lg:py-4">
      <div className="flex ">
        <Image src={img} alt="LogoImage" />
      </div>
      <div className="flex flex-col pt-5 ">
        <h1 onClick={() => setVisible(true)} className="text-center text-sm sm:text-xl lg:text-xl font-semibold text-[#FAC54C] cursor-pointer hover:text-white hover:underline">เคล็ดลับแทงบอลให้ได้กำไร</h1>
      </div>
      <Modal
        title="เคล็ดลับแทงบอลให้ได้กำไร"
        centered
        visible={visible}
        onCancel={() => setVisible(false)}
        width={1200} 
        footer={false}
      >
        {/* Inside */}
        <div className='bg-black bg-opacity-95 '>
          <div className="flex flex-col items-center bg-black bg-opacity-25 h-full px-10 gap-8">
            <div className="pt-5">
              <Image src={img} alt="LogoImage" />
            </div>
            <div className="bg-transparent px-5 py-3 gap-5 border-[2px] border-[#FAC54C] rounded-xl">
                <h1 className='text-white text-[16px] indent-8'>เชื่อว่าหนึ่งในเกมพนันที่มีคนสนใจมากที่สุดในโลกคงหนีไม่พ้นการแทงบอลออนไลน์เพราะเป็นกีฬาที่ผู้ชาย
                ส่วนใหญ่ชื่นชอบที่จะดูและสามารถดูร่วมกันกับครอบครัวหรือเพื่อนๆได้โดยต่างฝ่ายต่างมีทีมที่เชียร์ทำให้เพิ่มความสนุกมากขึ้นไปอีก</h1>
                <h1 className='text-white text-[16px] indent-8'>แต่อย่างไรก็ตามหากอยากให้สนุกมากขึ้นไปอีกการเดิมพันเพื่อเพิ่มความท้าทายสักเล็กน้อยก็เป็นสิ่งที่น่าสนใจ
                แต่ทว่าจะแทงยังไงถึงจะได้กำไรเชื่อว่าคงเป็นข้อสงสัยของนักพนันหลายๆคนอยู่ไม่น้อย แน่นอนว่าวันนี้ทางเว็บ มีคำตอบพร้อมเคล็ดลับมาให้กันแบบฟรีๆ 
                ถ้าพร้อมแล้วไปติดตามกันได้เลย!</h1>
            </div>

            {/* Section 1 */}

            <div className="flex flex-col w-full gap-5 ">
              <div className="flex bg-gradient-to-l from-[#B27310] via-[#F0D077] to-[#FAC54C] ">
                <div className="mx-auto font-bold text-3xl py-3">แทงบอล คือ</div>
              </div>
              <Image src={tips} alt="LogoImage" />
              <div className="bg-transparent px-5 py-3 gap-5 border-[2px] border-[#FAC54C] rounded-xl">
                <h1 className='text-white text-[16px] indent-8'> ก่อนจะไปดูเคล็ดลับและคำตอบของวิธีการทำกำไรเรามาทำความรู้จักการแทงบอล กันสักนิดโดยทางเว็บไซต์
                ให้บริการด้านการแทงบอลออนไลน์แบบครบวงจรทั้งบอลเต็ง, บอลสเต็ป, บอลlive, แทงใบเหลือง-ใบแดง, จุดโทษ, เตะมุม เราก็มีมาให้เลือกทั้งหมด</h1>
                <h1 className='text-white text-[16px] indent-8'>ซึ่งรูปแบบการเล่นและราคาต่อรองจะเป็นแบบสากลทั้งหมดทำให้ไม่ต้องกังวลว่านักพนันจะเสียเปรียบแต่อย่างใด
                พร้อมกันนั้นเรายังเป็นหนึ่งในเว็บที่มีอัตราการจ่ายเงินที่ยุติธรรมที่สุดในโลกทำให้มั่นใจได้เลยว่าการแทงบอลแต่ละครั้งนั้นจะได้รับผลตอบแทนสูงสุดโดยที่ใช้เงินน้อยที่สุดซึ่ง
                ไม่มีเว็บไหนในประเทศที่ให้เท่านี้มาก่อน</h1>
              </div>
            </div>

            {/* Section 2 */}

            <div className="flex flex-col w-full gap-5 ">
              <div className="flex bg-gradient-to-l from-[#B27310] via-[#F0D077] to-[#FAC54C] ">
                <div className="mx-auto font-bold text-3xl py-3">แทงบอลออนไลน์เลือกแทงอะไรได้บ้าง</div>
              </div>
              <div className="bg-transparent px-5 py-3 gap-5 border-[2px] border-[#FAC54C] rounded-xl">
                <h1 className='text-white text-[16px] indent-8'>การแทงบอลออนไลน์ในเว็บนั้นมีให้เลือกมากมายทำให้นักพนันสามารถเลือกแทงได้ตามใจชอบตามกำลังเงิน
                และความถนัดของแต่ละคนซึ่งแต่ละแบบก็มีวิธีการเล่นที่แตกต่างกันออกไปแต่ก็ไม่ได้ยุ่งยากอะไรนักสามารถทำความเข้าใจได้ง่าย</h1>
                <h1 className='text-white text-[16px] indent-8'>อย่างไรก็ตามการแทงบอลออนไลน์ส่วนมากจะนิยมแทงกันหลักๆเพียง 5 แบบเท่านั้นซึ่งจะมีอะไรบ้างไปดูกันเลย!</h1>
              </div>

            </div>

            {/* Types */}
            <div className="flex flex-col items-start gap-5 ">
              <div className="flex bg-gradient-to-l from-[#B27310] via-[#F0D077] to-[#FAC54C] ">
                <div className=" font-bold text-3xl w-fit p-3 text-center">บอลเต็ง</div>
              </div>
              <div className="bg-transparent px-5 py-3 gap-5 border-[2px] border-[#FAC54C] rounded-xl">
                <h1 className='text-white text-[16px] indent-8'>คือการเลือกแทงบอลแบบคู่ต่อคู่ โดยนำเอาอัตราต่อรองมาเป็นตัวแบ่งว่าทีมไหนเป็นทีมต่อและทีมไหนเป็น
                ทีมรองโดยจะมีผลตอบแทนที่แตกต่างออกไปซึ่งเป็นหนึ่งในการแทงที่ได้รับความนิยมอย่างมาก</h1>
              </div>
            </div>

            <div className="flex flex-col items-start gap-5 ">
              <div className="flex bg-gradient-to-l from-[#B27310] via-[#F0D077] to-[#FAC54C] ">
                <div className=" font-bold text-3xl w-fit p-3 text-center">บอลสเต็ป</div>
              </div>
              <div className="bg-transparent px-5 py-3 gap-5 border-[2px] border-[#FAC54C] rounded-xl">
                <h1 className='text-white text-[16px] indent-8'>การเลือกแทงลักษณะนี้เหมาะอย่างมากสำหรับที่มีทุนตํ่าแต่ต้องการได้ผลตอบแทนสูงโดยจะเป็นการแทง
                มากกว่า 2 คู่ขึ้นไปในหนึ่งบิลซึ่งยิ่งแทงหลายคู่มากเท่าไหร่หากเข้าผลตอบแทนก็จะสูงขึ้นตามไปด้วย</h1>
              </div>
            </div>

            <div className="flex flex-col items-start gap-5 ">
              <div className="flex bg-gradient-to-l from-[#B27310] via-[#F0D077] to-[#FAC54C] ">
                <div className=" font-bold text-3xl w-fit p-3 text-center">บอลlive</div>
              </div>
              <div className="bg-transparent px-5 py-3 gap-5 border-[2px] border-[#FAC54C] rounded-xl">
                <h1 className='text-white text-[16px] indent-8'>การแทงบอลlive นั้นส่วนใหญ่จะต้องมีเวลาในการดูฟุตบอลเพราะเป็นการแทงบอลแบบเรียลไทม์โดยอัตรา
                ต่อรองจะเปลี่ยนไปเรื่อยๆตามทิศทางของเกมซึ่งเหมาะสำหรับคนที่มีความรู้และมองภาพรวมออกว่าจะเกิดอะไรขึ้น</h1>
              </div>
            </div>

            <div className="flex flex-col items-start gap-5 ">
              <div className="flex bg-gradient-to-l from-[#B27310] via-[#F0D077] to-[#FAC54C] ">
                <div className=" font-bold text-3xl w-fit p-3 text-center">แทงใบเหลือง-ใบแดง</div>
              </div>
              <div className="bg-transparent px-5 py-3 gap-5 border-[2px] border-[#FAC54C] rounded-xl">
                <h1 className='text-white text-[16px] indent-8'>ชื่อก็บอกอยู่แล้วว่ามันคือการแทงใบเหลืองและใบแดงที่จะเกิดขึ้นในเกมตลอดเวลา 90 นาทีหรือเฉพาะ
                ครึ่งแรกก็ได้ ซึ่งการทายก็ไม่ยากเลยทางเจ้ามือจะมีอัตราการต่อรองเปิดมาให้เช่นจะมีใบเหลือเกิน 5 ใบหรือไม่ในตลอดทั้งเกมซึ่งเราสามารถเลือกทายว่าเกินหรือไม่เกินก็ได้</h1>
              </div>
            </div>

            <div className="flex flex-col items-start gap-5 ">
              <div className="flex bg-gradient-to-l from-[#B27310] via-[#F0D077] to-[#FAC54C] ">
                <div className=" font-bold text-3xl w-fit p-3 text-center">แทงเตะมุมหรือลูกทุ่ม</div>
              </div>
              <div className="bg-transparent px-5 py-3 gap-5 border-[2px] border-[#FAC54C] rounded-xl">
                <h1 className='text-white text-[16px] indent-8'>ส่วนอันนี้ไม่ได้แตกต่างจากการแทงใบเหลือง - ใบแดงเท่าไหร่ วิธีการเล่นเหมือนกันแต่เปลี่ยนตรงมาทาย
                ว่าเกมดังกล่าวจะเกิดการเตะมุมหรือลุกทุ่มเท่าไหร่ แน่นอนว่าเจ้ามือจะเปิดราคาให้ทายเหมือนเดิม</h1>
              </div>
            </div>

            <div className="flex flex-col items-start gap-5 ">
              <div className="flex bg-gradient-to-l from-[#B27310] via-[#F0D077] to-[#FAC54C] ">
                <div className=" font-bold text-3xl w-fit p-3 text-center">เคล็ดลับการทำกำไรจากการแทงบอล</div>
              </div>
              <div className="bg-transparent px-5 py-3 gap-5 border-[2px] border-[#FAC54C] rounded-xl">
                <h1 className='text-white text-[16px] indent-8'>หลังจากรู้แล้วว่าการแทงบอลมีอะไรกันบ้างคราวนี้มาถึงเคล็ดลับการทำกำไรจากการแทงบอลกันบ้างซึ่งวันนี้เรา
                จะเปิดเผยให้รู้กันแบบหมดเปลือกโดยไม่มีปิดปังซึ่งนักพนันทุกคนสามารถนำไปใช้ได้ทันที ดังนี้!</h1>
              </div>
            </div>

            <div className="flex flex-col items-start gap-5 ">
              <div className="flex bg-gradient-to-l from-[#B27310] via-[#F0D077] to-[#FAC54C] ">
                <div className=" font-bold text-3xl w-fit p-3 text-center">1.ตรวจสอบอัตราต่อรองอยู่เสมอ</div>
              </div>
              <div className="bg-transparent px-5 py-3 gap-5 border-[2px] border-[#FAC54C] rounded-xl">
                <h1 className='text-white text-[16px] indent-8'>ถือเป็นข้อสำคัญเลยที่คุณต้องคำนึงถึงเป็นอย่างแรกเพราะมันจะช่วยให้คุณได้เปรียบตั้งแต่ก่อนบอลจะเริ่มแข่ง
                เพราะหากคุณได้ราคาที่ดีในการเดิมพันนั่นหมายความว่าคุณจะสามารถทำกำไรได้มากขึ้นกว่าเดิมและเป็นการลดความเสี่ยงในการเสียพนันอีกด้วย</h1>
              </div>
            </div>

            <div className="flex flex-col items-start gap-5 ">
              <div className="flex bg-gradient-to-l from-[#B27310] via-[#F0D077] to-[#FAC54C] ">
                <div className=" font-bold text-3xl w-fit p-3 text-center">2.เล่นให้หลากหลาย</div>
              </div>
              <div className="bg-transparent px-5 py-3 gap-5 border-[2px] border-[#FAC54C] rounded-xl">
                <h1 className='text-white text-[16px] indent-8'>อย่างที่ทราบว่าการแทงบอลนั้นสามารถแทงได้ ทั้งบอลเต็ง บอลสเต็ป การแทงเตะมุม แทงลูกทุ่ม 
                แทงใบเหลือง และมีอื่นๆอีกมากมาย ดังนั้นเราไม่ควรควรยึดติดกับการแทงแบบใดแบบหนึ่งมากจนเกินไป ซึ่งการทำแบบนี้จะทำให้โอกาสทำกำไรเพิ่มสูงขึ้นและ
                ถือเป็นการยืดหยุ่นสไตล์การเล่นของเราเองให้มีทางเลือกมากกว่าเดิม</h1>
              </div>
            </div>

            <div className="flex flex-col items-start gap-5 ">
              <div className="flex bg-gradient-to-l from-[#B27310] via-[#F0D077] to-[#FAC54C] ">
                <div className=" font-bold text-3xl w-fit p-3 text-center">3.ควรดูการถ่ายทอดสด</div>
              </div>
              <div className="bg-transparent px-5 py-3 gap-5 border-[2px] border-[#FAC54C] rounded-xl">
                <h1 className='text-white text-[16px] indent-8'>ทำไมเราถึงแนะนำให้คุณติดตามการถ่ายทอดสดนั้นก็เพราะว่าในบางครั้งคุณจำเป็นต้องรู้สถานการณ์ที่อาจ
                จะเกิดขึ้นและสุ่มเสี่ยงจะแพ้หรือมีโอกาสทำกำไรได้เมื่อถึงเวลานั้นเอง เพราะหากคุณไม่ได้ติดตามเกมในช่วงเวลาดังกล่าวคุณจะไม่มีทางรู้เลยว่าอะไรจะเกิดขึ้นนั้นถือไม่ใช่สิ่ง
                ที่ถูกต้องในการทำกำไร</h1>
              </div>
            </div>

            <div className="flex flex-col items-start gap-5 ">
              <div className="flex bg-gradient-to-l from-[#B27310] via-[#F0D077] to-[#FAC54C] ">
                <div className=" font-bold text-3xl w-fit p-3 text-center">4.หยุดเล่นทีมรัก</div>
              </div>
              <div className="bg-transparent px-5 py-3 gap-5 border-[2px] border-[#FAC54C] rounded-xl">
                <h1 className='text-white text-[16px] indent-8'>นักพนันส่วนใหญ่มักจะมีทีมที่รักและเชียร์อยู่เป็นประจำซึ่งนั้นทำให้พวกเขาตัดใจที่จะแทงทีมตรงข้ามไม่ได้
                แม้ว่ารู้ทั้งรู้ว่าอาจจะทำให้เสียเงินก็ตาม แน่นอนว่ามันเป็นทางเลือกที่ผิดสุดๆซึ่งเราขอแนะนำว่าหากคุณตัดใจในการเล่นฝั่งตรงข้ามไม่ได้ก็ควรที่จะมองข้ามคู่นี้ไปซะ
                เพราะไม่อย่างนั้นคุณอาจจะหมดตัวกับมันได้</h1>
              </div>
            </div>

            <div className="flex flex-col items-start gap-5 pb-10">
              <div className="flex bg-gradient-to-l from-[#B27310] via-[#F0D077] to-[#FAC54C] ">
                <div className=" font-bold text-3xl w-fit p-3 text-center">สรุปเหตุผลที่ควรแทงบอลออนไลน์</div>
              </div>
              <div className="bg-transparent px-5 py-3 gap-5 border-[2px] border-[#FAC54C] rounded-xl">
                <h1 className='text-white text-[16px] indent-8'>การแทงบอลออนไลน์นั้นถือเป็นหนึ่งในการพนันที่ยุติธรรมที่สุดในโลกเลยก็ว่าได้เนื่องจากมีการถ่ายทอดสด
                ให้ผู้ชมได้เห็นตลอดเวลาที่ลงแข่งซึ่งแตกต่างจากการเล่นพนันบางอย่างที่เราไม่มีทางรู้เลยว่าอะไรจะเกิดขึ้นบ้าง</h1>
                <h1 className='text-white text-[16px] indent-8'>ประกอบกับโอกาสในการทำกำไรที่ต้องบอกว่าสูงพอตัวขอเพียงคุณศึกษาวิธีการเล่นให้ดีเราเชื่อว่าคุณจะสร้าง
                ผลกำไรจากการแทงบอลออนไลน์ได้ไม่ยากและอาจจะกลายเป็นแหล่งทำเงินของคุณเลยก็ว่าได้</h1>
              </div>
            </div>

          </div>
        </div>
      </Modal>
    </div>
  )
}

export default Tips