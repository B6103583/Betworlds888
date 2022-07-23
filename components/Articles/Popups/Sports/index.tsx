import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import Image from "next/image";
import img from "@../../../public/image/articles/art10.png";
import ball from "@../../../public/image/articles/sports/ball.png";
import bas from "@../../../public/image/articles/sports/bas.png";
import boxing from "@../../../public/image/articles/sports/boxing.png";
import badmin from "@../../../public/image/articles/sports/badmin.png";
import hand from "@../../../public/image/articles/sports/hand.png";
import hokies from "@../../../public/image/articles/sports/hokies.png";
import tabletennis from "@../../../public/image/articles/sports/table-tennis.png";
import volleybal from "@../../../public/image/articles/sports/volleybal.png";

interface CardProps {
  title: string;
  desc: string;
  img: any;
}

function Sports() {
  const [visible, setVisible] = useState(false);
  const Card = ({ title, desc, img }: CardProps) => {
    return (
      <div className='flex-col'>
        <div className='text-white text-center sm:text-left text-2xl md:text-3xl font-semibold p-5'>{title}</div>

        <div className='flex flex-col md:flex-row gap-5 justify-between'>
          <Image src={img} alt="LogoImage" />
          <div className='md:w-3/5 '>
            <div className="bg-transparent px-5 py-3 gap-5 border-[2px] border-[#FAC54C] rounded-xl">
              <h1 className='text-white text-[16px] '>{desc}</h1>
            </div>
          </div>
        </div>

    </div>
    )
}
  return (
    <div className="flex flex-col sm:gap-1 shadow-lg min-h-full border-[2px] border-[#FAC54C] rounded-xl bg-black  justify-center items-center lg:py-4">
      <div className="flex p-1">
        <Image src={img} alt="LogoImage" />
      </div>
      <div className="flex flex-col pt-5 ">
        <h1 onClick={() => setVisible(true)} className="text-center text-sm sm:text-xl lg:text-xl font-semibold text-[#FAC54C] cursor-pointer hover:text-white hover:underline">พนันกีฬามีอะไรบ้าง</h1>
      </div>
      <Modal
        title="พนันกีฬามีอะไรบ้าง"
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
                <h1 className='text-white text-[16px] indent-8'>สำหรับปัจจุบันเกมพนันกีฬาเริ่มได้รับความนิยมอย่างสูงเนื่องจากสามารถเล่นผ่านระบบออนไลน์ได้อย่างง่ายดาย
                และสะดวกรวดเร็ว แน่นอนว่าทางเว็บ Betworlds888 นั้นก็มีบริการให้เลือกเดิมพันอยู่หลากหลายชนิดกีฬาด้วยกัน<br/></h1>
                <h1 className='text-white text-[16px] indent-8'>โดยแต่ละกีฬานั้นก็ได้รับเสียงตอบรับที่ดีไม่ได้แตกต่างกันเท่าไหร่ อย่างไรก็ตามเชื่อว่ายังมีนักพนันหลายคน
                ที่ยังสงสัยว่ากีฬาอะไรบ้างที่สามารถจะเดิมพันผ่านเว็บไซต์ของเราได้วันนี้เรามีคำตอบมาให้ผู้อ่านทุกคนได้ทราบกัน ถ้าพร้อมแล้วไปดูกันเลย! ปลอดภัย มั่นคง 
                รักษาความลับสมาชิกในระดับสูงสุด</h1>
            </div>

            {/* พนันกีฬาที่ได้รับความนิยม */}

            <div className="flex flex-col w-full gap-5">
              <div className="flex bg-gradient-to-l from-[#B27310] via-[#F0D077] to-[#FAC54C] ">
                <div className="mx-auto font-bold text-2xl sm:text-3xl py-3 text-center">พนันกีฬาที่ได้รับความนิยม</div>
              </div>
              
              <div className="bg-transparent px-5 py-3 gap-5 border-[2px] border-[#FAC54C] rounded-xl">
                <h1 className='text-white text-[16px] indent-8'>นักพนันหลายคนคงเป็นกังวลไม่น้อยว่ากีฬาที่มีอยู่นั้นพวกเขาจะสามารถทำกำไรและสนุกไปกับมันได้หรือป่าว
                 ซึ่งส่วนนี้เราขอยืนยันว่าในเว็บไซต์ของเรานั้นจะต้องมีกีฬาที่ท่านชื่อชอบอยู่แน่นอนอย่างย้อยสักหนึ่งชนิด</h1>
              </div>

              <Card img={ball} title="แทงบอลออนไลน์" 
              desc="ฟุตบอล คือ หนึ่งในกีฬาเดิมพันที่ได้รับความนิยมมากที่สุดเกมหนึ่ง เนื่องจากเป็นกีฬาที่คนส่วนใหญ่ชอบดูการแข่งขันถ่ายทอดสดอยู่แล้ว ประกอบกับกติกาที่เข้าใจง่าย
              และการเดิมพันที่ไม่ยุ่งยากทำให้นักพนันหน้าใหม่ส่วนใหญ่มักเลือกกีฬาชนิดนี้เป็นอันดับแรกในการเริ่มต้น"/>

              <Card img={bas} title="บาสเก็ตบอลออนไลน์" 
              desc="กีฬาบาสเก็ตบอล นั่นถือเป็นหนึ่งในกีฬาหมาชนอีกชนิดหนึ่งไม่แพ้ฟุตบอลและเป็นที่สนใจของเหล่านักพนัน เนื่องจากเป็นกีฬาที่สนุกรวดเร็วและทำแต้มกันตลอดเวลา เพราะฉะนั้นหากคนที่ชอบความตื่นเต้น เร้าใจ ไม่ควรพลาดเด็ดขาดต้น"/>

              <Card img={boxing} title="แทงมวยออนไลน์" 
              desc="มวยถือเป็นกีฬาเก่าแก่ที่สามารถดึงดูดแฟน ๆ หลายล้านคนเข้ามานั่งชมได้ แต่เราขอแนะนำสำหรับนักพนันมือสมัครเล่นควรศึกษาให้ดี เพราะนี่คือกีฬาที่มีการพลิกล็อกเกิดขึ้นได้บ่อยที่สุดชนิดหนึ่ง"/>

              <Card img={badmin} title="แบดมินตันออนไลน์" 
              desc="กีฬาที่ใช้ไม้ตีลูกขนไก่ เอ่ยแค่นี้ก็คงทำให้ใครหลายคนรู้แล้วว่านี่คือกีฬาอะไรเพราะปัจจุบันกีฬาชนิดนี้เริ่มเป็นที่สนใจอย่างมากในประเทศไทย และมีการถ่ายทอดสดให้ได้รับชมบ่อยครั้ง แบดมินตันถือว่าเป็นเกมที่มีกติกาไม่ยุ่งยากและเกมจบเร็วใช้เวลาส่วนใหญ่ไม่ถึง 1 ชั่วโมงทำให้ไม่ต้องเสียเวลาลุ้นนานเหมือนเกมกีฬาอื่นๆ ด้วยเหตุจึงเหมาะอย่างมากสำหรับคนไม่ค่อยมีเวลา"/>

              <Card img={hand} title="แฮนด์บอลออนไลน์" 
              desc="สำหรับกีฬาชนิดนี้ในประเทศไทยอาจจะดูไม่เป็นที่นิยมมากนักแต่ถ้านับทั่วโลกแฮนต์บอลถือว่าไม่น้อยหน้ากีฬาชนิดอื่นเลย รูปแบบการเล่นก็ไม่ได้แตกต่างจากฟุตบอลเท่าไหร่เพียงแค่เปลี่ยนจากการใช้เท้ามาเป็นใช้มือเท่านั้นเอง"/>

              <Card img={hokies} title="ฮ็อกกี้ออนไลน์" 
              desc="ฮอกกี้น้ำแข็ง ชื่อก็บอกอยู่แล้วว่าเป็นการแข่งขันกีฬาที่เล่นกันบนน้ำแข็ง นับเป็นการแข่งขันที่สนุกตื่นเต้นน่าเร้าใจกีฬาหนึ่งเลย ในนระหว่างการแข่งขันมักมีการปะทะกันที่ดุดัน ทำให้เป็นที่ชื่นชอบอย่างมากสำหรับผู้ชาย"/>

              <Card img={tabletennis} title="เทเบิ้ลเทนนิสออนไลน์" 
              desc="นี่จัดเป็นหนึ่งในกีฬาที่คนไทยส่วนใหญ่รู้จักกันดีเพราะสามารถหาเล่นได้ง่ายสะดวกและเหมาะกับทุกเพศทุกวัย ปิงปองหรือเทเบิลเทนนิสเป็นเกมกีฬาที่เล่นกันเพียง 2 คนโดยมีโต๊ะขนาดเล็กเป็นอุปกรณ์ช่วยในการแข่งขันทำให้เป็นอีกหนึ่งกีฬาที่เข้าใจง่ายและเหมาะสำหรับเริ่มต้นเดิมพัน"/>

              <Card img={volleybal} title="วอลเลย์บอลออนไลน์" 
              desc="กีฬาวอลเลย์บอลเป็นกีฬาที่เรารู้จักมักคุ้นเป็นอย่างดี รวมไปถึงกฎกติกาการเล่นเนื่องจากประเทศไทยเราจัดอยู่ในระดับท็อปของโลก โดยการแข่งขันจะแบ่งออกเป็นเซต 1 เกมจะมีทั้งหมด 5 เซต โดยวัดผลจากทีมไหนได้คะแนนถึง 25 คะแนนก่อนจะเป็นผู้ชนะ ซึ่งหากทีมไหนได้ครบ 3 เซตก่อนชนะไปในแมตช์นั้น"/>

            </div>

            {/* สรุปการเดิมพันกีฬาดีอย่างไร */}

            <div className="flex flex-col w-full gap-5 pb-10">
              <div className="flex bg-gradient-to-l from-[#B27310] via-[#F0D077] to-[#FAC54C] ">
                <div className="mx-auto font-bold text-2xl sm:text-3xl py-3 text-center">สรุปการเดิมพันกีฬาดีอย่างไร</div>
              </div>
              <div className="bg-transparent sm:px-5 py-3 gap-5 rounded-xl">
                <h1 className='text-white text-[16px] indent-8'>หวังเป็นอย่างยิ่งว่านักพนันทุกท่านจะสามารถหาเกมกีฬาเดิมพันที่ชื่นชอบและเข้ากับตัวเองได้มากที่สุด เพื่อที่คุณจะได้รู้สึกสนุกไปกับมันและสามารถที่จะทำกำไรจากมันได้แน่นอนว่าการเดิมพันกีฬานั้นหากศึกษาให้ดีจะพบว่าสามารถเล่นได้ง่ายกว่าการพนันชนิดอื่นพอสมควรแถมยังป้องกันการโกงได้อีกด้วย เนื่องจากผลสกอร์แต่ละชนิดกีฬานั้นสามารถตรวจสอบได้ตลอดเวลาทั่วโลก</h1>
              </div>
            </div>

          </div>

        </div>
      </Modal>
    </div>
  )
}

export default Sports