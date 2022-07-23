import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import Image from "next/image";
import img from "@../../../public/image/articles/art12.png";
import ball from "@../../../public/image/articles/ball12/ball.png";
import rate from "@../../../public/image/articles/ball12/rate.png";

interface CardProps {
  title: string;
  desc: string;
}

function Ball12() {
  const [visible, setVisible] = useState(false);
  const Card = ({ title, desc }: CardProps) => {
    return (
      <div className='flex-col '>
        <div className='text-white text-3xl font-semibold p-5'>{title}</div>

       <div className="bg-transparent px-5 py-3 gap-5 border-[2px] border-[#FAC54C] rounded-xl">
          <h1 className='text-white text-[16px] indent-8'>{desc}</h1>
        </div>

    </div>
    )
}
  return (
    <div className="flex flex-col sm:gap-1 shadow-lg min-h-full border-[2px] border-[#FAC54C] rounded-xl bg-black  justify-center items-center lg:py-4">
      <div className="flex ">
        <Image src={img} alt="LogoImage" />
      </div>
      <div className="flex flex-col pt-5 ">
        <h1 onClick={() => setVisible(true)} className="text-center text-sm sm:text-xl lg:text-xl font-semibold text-[#FAC54C] cursor-pointer hover:text-white hover:underline">บอลเต็งคืออะไร</h1>
      </div>
      <Modal
        title="บอลเต็งคืออะไร"
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
                <h1 className='text-white text-[16px] indent-8'>บอลเต็ง คือการแทงบอลเพียง 1 รายการเท่านั้นต่อ 1 บิล โดยมีวิธีการแทงและกติกาที่เรียบง่าย 
                ไม่ต้องทำความเข้าใจอะไรให้ซับซ้อน เหมาะสำหรับนักพนันหน้าใหม่ที่อยากจะทดลองเล่น โดยมีราคาอัตราต่อรองเป็นตัวกำหนดผลลัพธ์ออกมาว่าทีมไหนจะเป็นฝ่ายชนะ 
                ซึ่งการเล่นพนันบอลออนไลน์ในแบบบอลเต็งนั้นจะมีเปอร์เซ็นต์ชนะและทำกำไรได้สูงถึง 70 เปอร์เซ็นต์ส่วนหนึ่งเพราะรูปแบบการเล่นง่ายและหากทำความเข้าใจเทคนิคการเล่น
                สักหน่อยโอกาสที่จะชนะ</h1>
                <h1 className='text-white text-[16px] indent-8'>นักพนันหน้าใหม่หรือผู้ที่อยากทดลองเล่นหลายคนอาจจะยังสับสนกับการแทงบอลเต็งอยู่บ้าง ดังนั้นวันนี้เรา
                จึงทำการจัดทำบทความเริ่มต้นรายละเอียดต่างๆในการแทงบอลเต็งขึ้นมาเพื่อให้นักพนันได้รับความสะดวกสบายที่สุดจะมีอะไรบ้างไปเรียนรู้พร้อมกันเลย!</h1>
            </div>

            {/* กติกาการเล่นบอลเต็ง */}

            <div className="flex flex-col w-full gap-8">
              <div className="flex bg-gradient-to-l from-[#B27310] via-[#F0D077] to-[#FAC54C] ">
                <div className="mx-auto font-bold text-3xl py-3">กติกาการเล่นบอลเต็ง</div>
              </div>
              <div className="bg-transparent px-5 py-3 gap-5 border-[2px] border-[#FAC54C] rounded-xl">
                <h1 className='text-white text-[16px] indent-8'>การพนันบอลเต็งนั้นในปัจจุบันจะยึดตามผลสกอร์ที่จบลงในเวลา 90 นาที โดยรวมช่วงทดเวลาบาดเจ็บเข้า
                ไปด้วย หรือหากมีการแบ่งเล่นระหว่างครึ่งแรกกับครึ่งหลังก็จะนับเพียงครึ่งละ 45 นาทีเท่านั้นไม่นำผลทั้งสองรอบมารวมกัน ขณะที่หากมีการต่อเวลาพิเศษ โกลเด้นโกล 
                หรือการยิงจุดโทษ รวมถึงผลการแข่งขันเปลี่ยนในภายหลังจะไม่นำมานับทั้งหมด</h1>
              </div>
              <div className="bg-transparent px-5 py-3 gap-5 border-[2px] border-[#FAC54C] rounded-xl">
                <h1 className='text-white text-[16px] indent-8'>กรณีฉุกเฉิน เช่นมีการเลื่อนเวลาแข็งช้าลงไปเล็กน้อยหรือมีการเปลี่ยนสนามกะทันหัน การวางเดิมพันทั้งหมด
                จะยังมีผลปกติ แต่เปลี่ยนจากสนามแข่งของเจ้าบ้านเป็นทีมเยือน หรือจากสนามของทีมเยือนเป็นแข่งที่สนามของเจ้าบ้าน การวางเดิมพันทั้งหมดจะถือว่าเป็นโมฆะทันที</h1>
              </div>
              <Image src={ball} alt="LogoImage" />

              <div className="flex flex-col items-start gap-5 ">
              <div className="flex bg-gradient-to-l from-[#B27310] via-[#F0D077] to-[#FAC54C] ">
                <div className=" font-bold text-3xl w-fit p-3 text-center">หมายเหตุ</div>
              </div>
              <div className="bg-transparent px-5 py-3 gap-5 border-[2px] border-[#FAC54C] rounded-xl">
                <h1 className='text-white text-[16px] indent-8'>หากเกมการแข่งขันถูกเลื่อนไปเป็นวันอื่นให้ถือว่าเป็นโมฆะ เช่นเดียวกับแมตช์การแข่งขันที่ถูกยกเลิก โดยยังเตะไม่ครบ 90 นาที ให้ถือว่าผลการแข่งขันเป็นโมฆะเหมือนกัน</h1>
                <h1 className='text-white text-[16px] indent-8'>นอกจากนี้หากมีข้อผิดพลาดเกิดขึ้นบนเว็บไซต์เช่นชื่อทีมไม่ถูกต้องหรือมีการสลับตำแหน่งกันระหว่างเจ้าบ้านและทีมเยือนก็ให้ถือผลเป็นโมฆะเช่นเดียวกัน</h1>
              </div>
            </div>
            </div>

            {/* เทคนิคการทำกำไรจากบอลเต็ง 1 */}
            <div className="flex flex-col w-full gap-8">
              <div className="flex bg-gradient-to-l from-[#B27310] via-[#F0D077] to-[#FAC54C] ">
                <div className="mx-auto font-bold text-3xl py-3">เทคนิคการทำกำไรจากบอลเต็ง</div>
              </div>
              <div className="bg-transparent px-5 py-3 gap-5 border-[2px] border-[#FAC54C] rounded-xl">
                <h1 className='text-white text-[16px] indent-8'>หากคุณเป็นนักพนันหน้าใหม่และกำลังต้องการคำแนะนำในการแทงบอลเต็งยังไงให้ได้กำไร วันนี้ทางเว็บไซต์
                 Beworlds888 ของเราจะมาเผยเคล็ดลับกันทีละขั้นตอนเพื่อนำคุณไปสู่ปลายทางนั้นเอง</h1>
              </div>

              <Card title="1. ค้นหาสิ่งที่ดีที่สุด" 
              desc="สิ่งนี้ใช้กับการเดิมพันทุกรูปแบบโดยเฉพาะการเดิมพันฟุตบอล การหาอัตราต่อรองที่ดีที่สุด แม้อาจจะไม่ใช่แนวโน้มที่จะทำให้คุณชนะในการเดิมพันฟุตบอล 
              แต่มันจะทำให้คุณมีโอกาสได้รับชัยชนะและประสบความสำเร็จมากที่สุด มันง่ายมากที่จะหาอัตราต่อรองที่ดีที่สุดสำหรับการเดิมพันฟุตบอลของคุณยิ่งสมัครสมาชิกกับเว็บไซต์ 
              Beworlds888 คุณก็จะได้รับการเสนอราคาที่ดีที่สุดและสูงที่สุดแม้ว่าคุณอาจรู้สึกว่ามันไม่ได้แตกต่างมากนักแต่หากคุณเล่นหลายๆครั้งคุณจะพบผลลัพธ์ที่น่าตกใจ"/>

              <Card title="2. เดิมพันฟุตบอลในลีกที่รู้จัก" 
              desc="การเริ่มต้นที่ดีที่สุดในการเดิมพันฟุตบอลคือการเดิมพันโดยใช้ลีกที่คุณรู้จักและมีความรู้ดีที่สุดหรือว่าได้รับความนิยมอย่างมาก เช่น พรีเมียร์ลีก อังกฤษ,ลาลีก้า สเปน ,
              บุนเดสลีก้า เยอรมัน หรือ กัลโช่ เซเรีย อา อิตาลี เป็นต้น ซึ่งการทำแบบนี้นั้นจะช่วยคุณได้เป็นอย่างมากในการวางเดิมพัน เพราะส่วนใหญ่ลีกเหล่านี้จะมีอัตราการเดิมพันที่
              หลากหลายและสามารถติดตามการถ่ายทอดสดได้ง่ายทำให้เราฝึกฝนเก็บประสบการณ์การวิเคราะห์ได้อย่างดี"/>

              <Card title="3. การวิเคราะห์เกมก่อนเดิมพัน" 
              desc="ก่อนจะเดิมพันอะไรลงไปเราควรที่จะวิเคราะห์อย่างละเอียดถี่ถ้วนซะก่อน เหตุผลหลักที่ต้องทำแบบนี้ก็เพราะว่าหากคุณไม่ทำการวิเคราะห์ไว้ก่อนคุณก็จะไม่ได้เรียนรู้วิธีชนะ
              การเดิมพันฟุตบอลในแบบฉบับที่คุณถนัด หากแต่พึ่งพาอาศัยโชคเท่านั้นซึ่งไม่เป็นผลดีในอนาคต และหากเกิดเดิมพันแพ้ขึ้นมาคุณจะได้พบข้อผิดพลาดและจะได้ทำการแก้ไขใน
              ครั้งต่อๆไปนั่นเอง"/>

              <Card title="4. เจ้าบ้านมักได้เปรียบกว่าเสมอ" 
              desc="อย่างที่รู้กันว่าในลีกของแต่ละประเทศการเป็นเจ้าบ้านนั้นมักจะทำให้แต่ละทีมเล่นดีขึ้นเป็นพิเศษกว่าการเป็นทีมเยือนก็เพราะว่าพวกเขามีความคุ้นเคยกับสนามมากกว่า 
              ไม่จำเป็นต้องเดินทางไกลลดความเหนื่อยล้าลงและได้รับเสียงเชียร์จากแฟนบอล"/>

              <Card title="5. หยุดเดิมพันทีมรัก" 
              desc="นี่ถือเป็นสิ่งสำคัญอย่างมากอีกอย่างนักพนันหลายคนมักจะมาตกม้าตายในข้อนี้เพราะพยายามที่จะเล่นทีมรักของตัวเองมากเกินไปโดยไม่ได้ดูปัจจัยอื่นๆเลย ยกตัวอย่างเช่น
               หากคุณเป็นแฟนแมนเชสเตอร์ยูไนเต็ดแต่ทว่าสถิติทุกอย่างและการวิเคราะห์ของคุณชี้ไปที่การให้แมนเชสเตอร์ ซิตี้เป็นผู้ชนะแมนเชสเตอร์ซิตี้ในเกมดังกล่าว 
               คุณก็ยังที่จะเลือกแทงทางแมนฯ ยูไนเต็ดอยู่ดี ซึ่งนั่นอาจจะทำให้คุณประสบความล้มเหลวได้ในไม่ช้า โดยแม้ว่าทีมที่มาเยือนจะเป็นทีมใหญ่หรือฟอร์มกำลังมาแรงก็ไม่ต้องกังวล
               มากเรตราคาที่ออกมามักจะเอื้อไปทางเจ้าบ้านอยู่แล้วซึ่งสถิติบ่งชี้ออกมาว่าการเล่นเจ้าบ้านจะมีอัตราการทำกำไรอยู่ที่สูงถึง 65 เปอเซ็นต์กันเลยทีเดียว"/>

            </div>

            {/* เทคนิคการทำกำไรจากบอลเต็ง 2 */}
            <div className="flex flex-col w-full gap-5 pb-10">
              <div className="flex bg-gradient-to-l from-[#B27310] via-[#F0D077] to-[#FAC54C] ">
                <div className="mx-auto font-bold text-3xl py-3">เทคนิคการทำกำไรจากบอลเต็ง</div>
              </div>
              <Image src={rate} alt="LogoImage" />
            </div>

            

          </div>
        </div>
      </Modal>
    </div>
  )
}

export default Ball12