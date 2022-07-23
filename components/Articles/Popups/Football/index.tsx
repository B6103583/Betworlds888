import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import Image from "next/image";
import img from "@../../../public/image/articles/art8.png";

function Football() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="flex flex-col sm:gap-1 shadow-lg min-h-full border-[2px] border-[#FAC54C] rounded-xl bg-black  justify-center items-center lg:py-4">
      <div className="flex p-1">
        <Image src={img} alt="LogoImage" />
      </div>
      <div className="flex flex-col pt-5 ">
        <h1 onClick={() => setVisible(true)} className="text-center text-sm sm:text-xl lg:text-xl font-semibold text-[#FAC54C] cursor-pointer hover:text-white hover:underline">แทงบอลออนไลน์</h1>
      </div>
      <Modal
        title="แทงบอลออนไลน์"
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
                <h1 className='text-white text-[16px] indent-8'>แทงบอล พนันบอล ในยุคไทยแลนด์ 4.0 ก้าวเข้าสู่ยุคที่ในตอนนี้ที่โลกอินเตอร์เน็ตได้เข้ามามีส่วนอย่างยิ่ง
                ในชีวิตประจำวัน วงการพนันฟุตบอล ก็ดูเหมือนเป็นเรื่องที่ง่ายมากขึ้นกว่าเมื่อก่อน พวกเราสามารถ พนันบอล หรือแทงบอลออนไลน์ได้จากโทรศัพท์มือถือ 
                ทางคอมพิวเตอร์ของเราเองหรือร้านอินเตอร์เน็ต</h1>
            </div>
            <div className="bg-transparent px-5 py-3 gap-5 border-[2px] border-[#FAC54C] rounded-xl">
                <h1 className='text-white text-[16px] indent-8'>เว็บไซต์ Betworlds888 ได้เก็บรวบรวมพนันออนไลน์ต่างๆ ทุกอย่างเอาไว้ ไม่เพียงแค่เฉพาะการแทงแค่นั้น 
                ยังรวมถึงการพนันออนไลน์ต่าง ได้แก่ แทงหวยออนไลน์ มวย ไก่ชน และก็กีฬาอื่นๆอีกเยอะ ยืนยันว่าท่านต้องถูกใจอย่างแน่นอน</h1>
                <h1 className='text-white text-[16px] indent-8'>ยิ่งไปกว่านี้เว็บไซต์ของเรา ยังนำสมัย ไม่ผ่านผู้แทน ทำให้คุณสามารถรับบันเทิงใจได้เลย 
                ถ้าเกิดลงทะเบียนกับเว็บไซต์ Betworlds888 เงินของท่านจะไม่หาย หรือโดนโกง มั่นใจได้ร้อยเปอร์เซ็นต์</h1>
            </div>

            {/* Section 1 */}

            <div className="flex flex-col w-full gap-5">
              <div className="flex bg-gradient-to-l from-[#B27310] via-[#F0D077] to-[#FAC54C] ">
                <div className="mx-auto font-bold text-2xl sm:text-3xl py-3 text-center">เว็บไซต์ แทงบอลออนไลน์ Betworlds888</div>
              </div>
              <div className="bg-transparent px-5 py-3 gap-5 border-[2px] border-[#FAC54C] rounded-xl">
                <h1 className='text-white text-[16px] indent-8'>เพิ่มความสบายรวดเร็วทันใจสำหรับในการติดต่อ ทั้งยังขอคำแนะนำทั้งหมดทุกอย่าง หรือจะเป็นการ ฝาก ถอน
                 ท่านสามารถพอใจได้ด้วยบริการที่เร็วทันใจ เนื่องจากพวกเรามีช่องทางการติดต่อที่นาที่ Line@ ซึ่งท่านสามารถเข้ามาขอคำแนะนำในหัวข้อต่างๆได้ตลอดทั้งวัน 
                 นอกนั้นยังมีจุดเด่นอีกเยอะมาก ซึ่งพวกเราจะจัดประเภทให้ฟังกันเป็นข้อๆ ดังต่อไปนี้ แทงบอลชุด ท่านสามารถแทงบอลชุด ได้ตั้งแต่สองกลุ่มขึ้นไป 
                 รวมทั้งในทุกการแทงพวกเรายังมีส่วนลดให้อีกเป็นจำนวนมาก ไม่ว่าจะได้หรือเสียก็ตาม</h1>
              </div>
            </div>

            {/* Section 2 */}
            <div className="flex flex-col w-full gap-5">
              <div className="flex bg-gradient-to-l from-[#B27310] via-[#F0D077] to-[#FAC54C] ">
                <div className="mx-auto font-bold text-2xl sm:text-3xl py-3 text-center">เว็บแทงบอล Betworlds888 เป็นเว็บพนันดี</div>
              </div>
              <div className="bg-transparent px-5 py-3 gap-5 border-[2px] border-[#FAC54C] rounded-xl">
                <h1 className='text-white text-[16px] indent-8'>1. Betworlds888 เร็ว ท่านสามารถฝาก ถอน ได้สบาย รวดเร็วทันใจ เพียงแค่ 5-10 วินาทีเพียงแค่นั้นกับทางแชท Live ได้ทางหน้าเว็บไซต์ ตลอด 1 วัน แล้วก็สุดคุ้มด้วยการไม่คิดค่าธรรมเนียมต่างๆสำหรับการฝาก ถอน</h1>
                <h1 className='text-white text-[16px] indent-8'>2. ใช้งานง่าย การใช้ระบบทันสมัย รองรับภาษาไทย ภาษาอังกฤษ ภาษาเขมร ทำให้เล่นพนันบอลแบบไม่มีสะดุด และก็การเกมพันในกีฬา หรือเกมทุกประเภท มีระบบระเบียบรองรับเป็นภาษาไทย เข้าใจง่าย มือใหม่ก็สามารถเล่นได้ในทันที</h1>
                <h1 className='text-white text-[16px] indent-8'>3. รองรับมือถือ แท็ปเล็ต ทุกระบบไม่จำเป็นที่จะต้องมาวิตกกังวลสำหรับผู้ที่ไม่มีคอมพิวเตอร์ เนื่องจากท่านสามารถเล่นเกมผ่านทางโทรคำศัพท์ที่เป็นสมาร์ทโฟนได้อย่างไม่มีสะดุด</h1>
                <h1 className='text-white text-[16px] indent-8'>4. ฝากถอนได้ตลอด 24 ชั่วโมง ทำรายการถอนเร็ว ทำเป็นตลอด 1 วัน และไม่มีค่าธรรมเนียมการถอน</h1>
                <h1 className='text-white text-[16px] indent-8'>5. ท่านสามารถแทงบอลชุดกับ Betworlds888 ได้ตั้งแต่สองกลุ่มขึ้นไป รวมทั้งในทุกการแทงพวกเรา</h1>
              </div>
            </div>

            

            {/* Section 3 */}
            <div className="flex flex-col w-full gap-5">
              <div className="flex bg-gradient-to-l from-[#B27310] via-[#F0D077] to-[#FAC54C] ">
                <div className="mx-auto font-bold text-2xl sm:text-3xl py-3 text-center">เว็บชัวร์จริง</div>
              </div>
              <div className="bg-transparent px-5 py-3 gap-5  rounded-xl">
                <h1 className='text-white text-[16px] indent-8'>ให้คุณมั่นอกมั่นใจได้เลยว่าพวกเรามีเงินทุนมากมายที่หมุนเวียนต่อวัน ทำให้การถอนเงินของท่านไม่มีสะดุด ไม่ว่าจะถอนเท่าไรก็ตาม</h1>
              </div>
            </div>

            <div className="flex flex-col w-full gap-5 pb-10">
              <div className="flex bg-gradient-to-l from-[#B27310] via-[#F0D077] to-[#FAC54C] ">
                <div className="mx-auto font-bold text-2xl sm:text-3xl py-3 text-center">สรุป เว็บพนันดีที่สุด Betworlds888</div>
              </div>
              <div className="bg-transparent px-5 py-3 gap-5 border-[2px] border-[#FAC54C] rounded-xl">
                <h1 className='text-white text-[16px] indent-8'>ทาง Betworlds888 เรามีทีมงานคุณภาพ และมีออฟฟิต ที่อยู่ : เพื่อตอบสนองความต้องการของนักเสี่ยงโชคทุกท่าน “แทงบอลออนไลน์” และเรามีบริการ Call Center ตลอด 24 ชั่วโมง</h1>
                <h1 className='text-white text-[16px] indent-8'>เพื่อรองรับการสมัครหรือสอบถามข้อมูล ที่สำคัญคือมีช่องทางการติดต่ออื่นๆ อีกมากมาย ทั้ง Line, Line@, Facebook, Livechat, IG, Gmail ทางเรามีการพัฒนาเพิ่มช่องทางการติดต่อให้ทันสมัยอยู่ตลอดเวลา เพื่อป้องกันการที่สมาชิกของเรามีทางเลือกหลากหลายเพื่อความสะดวกของลูกค้าทุกคน</h1>
              </div>
            </div>

            

          </div>
        </div>
      </Modal>
    </div>
  )
}

export default Football