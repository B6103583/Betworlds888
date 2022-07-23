import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import Image from "next/image";
import img from "@../../../public/image/articles/art6.png";

function Tips() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="flex flex-col sm:gap-1 shadow-lg min-h-full border-[2px] border-[#FAC54C] rounded-xl bg-black  justify-center items-center lg:py-4">
      <div className="flex ">
        <Image src={img} alt="LogoImage" />
      </div>
      <div className="flex flex-col pt-5 ">
        <h1 onClick={() => setVisible(true)} className="text-center text-sm sm:text-xl lg:text-xl font-semibold text-[#FAC54C] cursor-pointer hover:text-white hover:underline">คำถามที่พบบ่อย</h1>
      </div>
      <Modal
        title="คำถามที่พบบ่อย"
        centered
        visible={visible}
        onCancel={() => setVisible(false)}
        width={1200} 
        footer={false}
      >
        {/* Inside */}
        <div className='bg-black bg-opacity-95 '>
          <div className="flex flex-col items-center bg-black bg-opacity-25 h-full px-10 gap-10">
            <div className="pt-5">
              <Image src={img} alt="LogoImage" />
            </div>
            <div className="bg-transparent px-5 py-3 gap-5 border-[2px] border-[#FAC54C] rounded-xl">
                <h1 className='text-white text-[16px] indent-8'>แน่นอนว่าเมื่อคุณเข้ามายังเว็บไซต์นี่ หลายคนอาจจะเคยเห็นแบรนด์ Betworlds888 มาแล้วจากที่ใดที่หนึ่ง 
                ถึงอย่างไรก็ยังมีคำถามที่ยังอยากรู้ ทั้งเกี่ยวกับความปลอดภัยในตัวเว็บไซต์ วิธีการเล่นไม่ว่าจะเป็นการพนันออนไลน์ คาสิโน รวมถึงเรื่องเครดิตต่างๆ จ่ายเงิน หรือ 
                ถอนเงินอย่างไร วิธีไหนบ้าง ในหน้านี้เราได้รวบรวมให้คุณได้เรียนรู้ก่อนจะใช้งานจริง</h1>
            </div>

            {/* Section 1 */}

            <div className="flex flex-col w-full gap-5">
              <div className="flex bg-gradient-to-l from-[#B27310] via-[#F0D077] to-[#FAC54C] ">
                <div className="mx-auto font-bold text-3xl py-3">Betworlds888 จ่ายจริง จ่ายชัวร์ มีความน่าเชื่อถือ</div>
              </div>
              <div className="bg-transparent px-5 py-3 gap-5 border-[2px] border-[#FAC54C] rounded-xl">
                <h1 className='text-white text-[16px] indent-8'>เป็นคำถามที่หลายคนนั้นอยากจะรู้ และทราบเป็นลำดับต้นๆว่าเว็บที่ท่านกำลังจะเติมเงินเข้าไปเล่นพนันออนไลน์
                 มีความน่าเชื่อถือมากแค่ไหน สำหรับ Betworlds888 นับเป็นเว็บไซต์การพนันอันดับต้นๆในทวีปเอเชีย เนื่องจากเราเปิดให้บริหารมานานร่วม 20 ปี 
                 ทั้งนี้จะสังเกตได้จากแบรด์ที่ชื่อเป็นที่คุ้นหู คุ้นตาของเหล่านักพนันหลายๆท่าน</h1>
                 <h1 className='text-white text-[16px] indent-8'> โดยจุดมุ่งหมายที่เราคำนึงถึงเป็อันดับแรกคือเรื่องของความ “ปลอดภัย” ที่เราสามารถยืนด้วยความแข็งแกร่ง
                 ท่ามกลางเว็บไซต์การพนันมากมายที่เติบโตขึ้นมา เราไม่ได้มองว่าเขาเป็นคู่แข่ง แต่มองเหมือนเพื่อนร่วมทางที่ผลักดันให้เราไม่หยุดพัฒนา แม้ว่าจะผ่านมาเป็น 20 ปี
                 ในวงการนี้แต่เว็บของเรายังคงมีการปรับรูปแบบให้ผู้เล่นนั้นสบายใจที่สุดหลังจากร่วมสนุกกับทางเรา โดยทุกอย่างโปร่งใส สามารถตรวจสอบได้ทุกขั้นตอน</h1>
              </div>
            </div>

            {/* Section 2 */}

            <div className="flex flex-col w-full gap-5">
              <div className="flex bg-gradient-to-l from-[#B27310] via-[#F0D077] to-[#FAC54C] ">
                <div className="mx-auto font-bold text-3xl py-3">Betworlds888 เกมส์ไหนได้รับความนิยมที่สุด</div>
              </div>
              <div className="bg-transparent px-5 py-3 gap-5 border-[2px] border-[#FAC54C] rounded-xl">
                <h1 className='text-white text-[16px] indent-8'>สำหรับคนไหนอยากเล่นคาสิโนออนไลน์ ที่สามารถเล่นได้ง่ายสนุกตื่นเต้นเร้าใจ และได้รับความนิยมที่สุด 
                เราขอแนะนำสำหรับมือใหม่ต้องห้ามพลาด “บาคาร่าออนไลน์” เกมที่เป็นการเล่นนับแต้มในไพ่ มีวิธีการเล่นคล้าย “ป็อกเด้งไทย” มากที่สุดทั้งนี้เป็นเกมที่ได้รับความนิยมทั้ง
                มือใหม่ และขาประจำให้ความสนใจมากมายทีเดียว</h1>
                <h1 className='text-white text-[16px] indent-8'>นอกจากนี้ไฮโลก็เป็นอีกหนึ่งเกมที่อยู่คู่คนไทยมาช้านาน ท่านสามารถดูวิธีการเล่น และเข้าใจได้โดยใช้เวลา
                ไม่นาน นอกจากเกมข้างต้นที่เราแนะนำไปแล้ว ทางเรายังมีพนันออนไลน์ทุกรูปแบบทั้งกีฬา เกมส์ หรือจะเป็นหวยก็ต่างได้รับความนิยมไม่แพ้กัน 
                ท่านสามารถเลือกเมนูในเว็บไซต์ของเรา และลองดูวิธีการเล่นก่อนจะพนันจริงได้เลย</h1>
              </div>

            </div>

            {/* Section 3 */}

            <div className="flex flex-col items-end gap-5 ">
              <div className="flex bg-gradient-to-l w-56 justify-center from-[#B37834] to-[#FAC54C] ">
                <div className=" font-bold text-3xl py-3 ">มั่นใจเว็บเราได้</div>
              </div>
              <div className="bg-transparent px-5 py-3 gap-5 rounded-xl">
                <h1 className='text-white text-[16px] text-center px-5'>เหตุผลแรกที่เรามีความมั่นใจเต็มเปี่ยมคือเว็บไซต์ของเรามีความน่าเชื่อถือ ด้วยการมีทีมงานคุณภาพอีกทั้ง
                ยังได้รับคำชมเชยจากลูกค้าตลอด 20 ปีเกี่ยวกับความปลอดภัยในความยุติธรรม ทั้งเรื่องของการฝากเงิน หรือถอนเงิน ขั้นตอนไม่มีความยุ่งยากหรือซับซ้อนแต่อย่างใด
                แน่นอนว่านอกจากระยะเวลาที่เป็นตัวบ่งบอกถึงความน่าเชื่อถือ เราก็ไม่หยุดพัฒนา และพร้อมจะแก้ไขปัญหาแม้ว่าจะเป็นเรื่องเล็กๆก็ตาม 
                อย่างที่ทำให้เราเป็นเว็บไซต์ที่มีชื่อติดหูอย่างเช่นทุกวันนี้คือการติดต่อสอบถาม เพราะเราคำนึงถึงเรื่องของความเร็วในการประสานงานของลูกค้า 1 วินาที
                มีค่าอย่างยิ่งในสิ่งนี้เราเข้าใจเป็นอย่างดี</h1>
              </div>

            </div>

            <div className="flex flex-col items-start gap-5 pb-10">
              <div className="flex bg-gradient-to-l from-[#B27310] via-[#F0D077] to-[#FAC54C] ">
                <div className=" font-bold text-3xl w-[350px] py-3 text-center">มือใหม่หัดเล่น ยากไหม</div>
              </div>
              <div className="bg-transparent px-5 py-3 gap-5  rounded-xl">
                <h1 className='text-white text-[16px] indent-8'>จริงอยู่ที่การพนันออนไลน์นั้นเกิดมาได้หลายปีแล้ว แต่สำหรับมือใหม่หัดเล่น ต้องบอกว่าเราก็มีข้อแนะนำ
                  เช่นเดียวกัน โดยหากท่าต้องการจะทราบ หรืออยากรู้ในหัวข้อไหนสามารถกดตรงเมนูด้านบนของเว็บได้เลย เพราะเราจะบอกวิธีการใช้งาน 
                  และการเล่นไว้อย่างละเอียด ทุกๆหัวข้อมีรูปภาพประกอบง่ายต่อการใช้งาน ทำให้แม้ว่าจะเป็นมือใหม่ แต่ก็ไม่ยากเกินไปสำหรับการเริ่มต้น</h1>
                  <h1 className='text-white text-[16px] indent-8'>นอกจากนี้หากอยากสอบถามแบบเรียลไทม์ตัวต่อตัวกับทีมงานของเรา สามารถทำได้โดยวิธีแชทสอบถาม
                  ทั้งนี้เรามีทีมงานคอยดูแล และตอบคำถามของท่านตลอด 24 ชั่วโมง ไม่ว่าจะสอบถามทั้งการเล่น หรือวิธีการใช้งานที่ท่านสงสัย 
                  ก็สามารถติดต่อให้ทางเราดูแลท่านเพื่อแก้ปํญหาที่ได้เจอ</h1>
                  
              </div>
            </div>

          </div>
        </div>
      </Modal>
    </div>
  )
}

export default Tips