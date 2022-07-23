import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import Image from "next/image";
import img from "@../../../public/image/articles/art9.png";
import redyell from "@../../../public/image/articles/allbets/red-yellow.png";
import beans from "@../../../public/image/articles/allbets/beans.png";
import many from "@../../../public/image/articles/allbets/many.png";
import hilo from "@../../../public/image/articles/allbets/hilo.png";
import pok from "@../../../public/image/articles/allbets/pokrt.png";
import tiger from "@../../../public/image/articles/allbets/dragon-tiger.png";

function Allbets() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="flex flex-col sm:gap-1 shadow-lg min-h-full border-[2px] border-[#FAC54C] rounded-xl bg-black  justify-center items-center lg:py-4">
      <div className="flex p-1">
        <Image src={img} alt="LogoImage" />
      </div>
      <div className="flex flex-col pt-5 ">
        <h1 onClick={() => setVisible(true)} className="text-center text-sm sm:text-xl lg:text-xl font-semibold text-[#FAC54C] cursor-pointer hover:text-white hover:underline">รวมพนันออนไลน์</h1>
      </div>
      <Modal
        title="รวมพนันออนไลน์"
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

          {/* Games */}
            {/* Red-Yellow */}
            <div className="flex flex-col items-start gap-5 ">
              <div className="flex bg-gradient-to-l from-[#B27310] via-[#F0D077] to-[#FAC54C] ">
                <div className="mx-auto font-bold text-2xl sm:text-3xl py-3 text-center">เกมส์เสื้อแดง-ลาย-เสื้อเหลือง</div>
              </div>
              <div className="bg-transparent px-5 py-3 gap-5 border-[2px] border-[#FAC54C] rounded-xl">
                <h1 className='text-white text-[16px] indent-8'>สำหรับเกมส์ยอดนิยมที่มีจำนวนผู้เล่นมากที่สุดของ Betworlds888 นั้นคือเกมส์ เสื้อแดง-เสื้อเหลือง, กำถั่ว, ไฮโล และ ป๊อกเด้ง ซึ่งเป็นเกมส์ที่เล่นง่ายและผู้เล่นมักคุ้นเคยกันดี</h1>
              </div>

              <div className='flex flex-col md:flex-row gap-5 justify-between'>
                <div className='md:w-2/5 '>
                  <div className="bg-transparent px-5 py-3 gap-5 border-[2px] border-[#FAC54C] rounded-xl">
                    <h1 className='text-white text-[16px] indent-8'>การออกผลรางวัลเกมส์นี้ อัตราส่วนในการออก เสื้อสองสี มีโอกาสออกเยอะมากสุด เหมือนการโยนเหรียญ 2 เหรียญ ที่ออกหัวและก้อยพร้อมกัน การที่มีโอกาสในการออกผลเยอะที่สุด</h1>
                  </div>
                </div>
                <Image src={redyell} alt="LogoImage" />
              </div>

              <div className="bg-transparent px-5 py-3 gap-5 border-[2px] border-[#FAC54C] rounded-xl">
                <h1 className='text-white text-[16px] indent-8'>ใช่ว่าจะมีอัตราการจ่ายจะเท่ากันหมด เพราะถ้าหากเลือก เสื้อสองสี หากเลือกถูกก็จะได้ @ 0.95 แต่หากเลือกเสื้อสีแดง หรือ เลือกเสื้อสีเหลือง หากเลือกถูกก็จะได้ @ 2.00 เลยทีเดียว แต่ถ้าหากเลือกผิดไม่ว่าจะเป็นเสื้อสองสี หรือ เสื้อสีแดง หรือ เลือกเสื้อสีเหลือง ก็จะเสียอยู่ที่ @ 1.00</h1>
              </div>
            </div>

            {/* Bean */}
            <div className="flex flex-col items-start gap-5 ">
              <div className="flex bg-gradient-to-l from-[#B27310] via-[#F0D077] to-[#FAC54C] ">
                <div className=" font-bold text-2xl sm:text-3xl w-fit p-3 text-center">เกมส์กำถั่ว</div>
              </div>
              <div className="bg-transparent px-5 py-3 gap-5 border-[2px] border-[#FAC54C] rounded-xl">
                <h1 className='text-white text-[16px] indent-8'>เกมส์กำถั่วใน Betworlds888 นั้นเป็นอีกเกมส์ที่ได้รับความนิยม โดยให้ทายผลที่ออกมาว่าจะออกเลขไหนระหว่าง 4 เลข คือ 1 2 3 และ 4 ซึ่งเกมส์กำถั่วนี้จะทายผลมากสุด 3 ตัวใน 1 ตา การเล่นกำถั่วขั้นต่ำเพียง 20 บาท</h1>
              </div>

              <div className='flex flex-col md:flexrow gap-5 justify-between'>
                <div className='md:w-2/5 '>
                  <div className="bg-transparent px-5 py-3 gap-5 border-[2px] border-[#FAC54C] rounded-xl">
                    <h1 className='text-white text-[16px]'>โดยเกมส์กำถั่วมีอัตราการจ่ายดังนี้<br/>
                    - ทายผลออก 1-2 ตัว อัตราการจ่ายอยู่ที่ 0.95<br/>
                    - ทายผลออก 3 ตัว อัตราการจ่ายอยู่ที่ 0.31 **ท่านสามารถดูสถิติย้อนหลังได้ด้านล่างของเกมส์</h1>
                  </div>
                </div>
                <Image src={beans} alt="LogoImage" />
              </div>
            </div>

            {/* Many */}
            <div className="flex flex-col items-start gap-5 ">
              <div className="flex bg-gradient-to-l from-[#B27310] via-[#F0D077] to-[#FAC54C] ">
                <div className=" font-bold text-2xl sm:text-3xl w-fit p-3 text-center">น้ำเต้าปูปลา</div>
              </div>
              <div className="bg-transparent px-5 py-3 gap-5 border-[2px] border-[#FAC54C] rounded-xl">
                <h1 className='text-white text-[16px] indent-8'>ถือเป็นเกมส์ที่อยู่คู่คนไทยมาอย่างยาวนาน เป็นการทายว่าผลรางวัลที่จะออกมามีตัวอะไร น้ำเต้าปุปลา ในการเปิดให้เดิมพันในเว็บ Betworlds888 ที่นี้จะมีให้ทายทั้งหมด 6 ตัว แต่ละตัวก็จะมี ปู ปลา น้ำเต้า เสือ ไก่ และกุ้ง</h1>
                <h1 className='text-white text-[16px] indent-8'>ในการออกผลรางวัลแต่ละครั้งก็จะออกผลมา 3 ตัว ต่อครั้ง ใน 3 ตัวที่ออกผลมาอาจจะมีตัวซ้ำก็เป็นได้ ยกตัวอย่างเช่น อาจจะออกผลมาเป็น ปลา ปลา กุ้ง หรือ ปลา ปลา ปลา</h1>
                <h1 className='text-white text-[16px] indent-8'>ในการเลือกทายผลแต่ละครั้งท่านสามารถเลือกได้ตั้งแต่ 1 - 2 ตัวเลยทีเดียว บางครั้งออกผลมาไม่ซ้ำเลยก็อาจเป็นไปได้ ขึ้นอยู่ระบบการออกผลด้วยคอมพิวเตอร์ เรามาดูอัตราการถูกรางวัลว่ามีอะไรบ้าง</h1>
              </div>

              <div className='flex flex-col md:flex-row gap-5 justify-between'>
                <div className='md:w-3/5 '>
                  <div className="bg-transparent px-5 py-3 gap-5 border-[2px] border-[#FAC54C] rounded-xl">
                    <h1 className='text-white text-[16px]'>- ถ้าหากท่านเลือกมา 1 ตัว และรางวัลที่ออกมา 3 ตัวมี 1 ตัวที่ท่านเลือกท่านก็จะได้รางวัลอยู่ที่ @ 1.00<br/>
                    - ถ้าหากท่านเลือกมา 1 ตัว รางวัลที่ออก 2 ตัวที่ท่านได้เลือกไว้ ท่านก็จะได้อัตราการถูกรางวัลอีกเท่านึงเป็น @ 2.00<br/>
                    - และหากท่านเลือก 2 ตัว ไม่เหมือนกัน และการออกรางวัลออกมา 2 ใน 3 ตัวที่เลือกไว้ท่านก็จะได้อัตราการถูกรางวัลอยู่ที่ @ 5.00 เลยทีเดียว ถือว่าเลือกแบบนี้อัตรการถูกน้อยที่สุด แต่ก็ได้อัตรารางวัลสูงเลยทีเดียว<br/>
                    - ถ้าท่านเลือกไม่ถูกเลย หมายถึงรางวัลไม่ออกมาจากที่ท่านเลือกไว้ ท่านก็เสียอัตราอยู่ที่ @ 1.00</h1>
                  </div>
                </div>
                <Image src={many} alt="LogoImage" />
              </div>
            </div>

            {/* Hi-Lo */}
            <div className="flex flex-col items-start gap-5 ">
              <div className="flex bg-gradient-to-l from-[#B27310] via-[#F0D077] to-[#FAC54C] ">
                <div className=" font-bold text-2xl sm:text-3xl w-fit p-3 text-center">เกมส์ไฮโล</div>
              </div>
              <div className="bg-transparent px-5 py-3 gap-5 border-[2px] border-[#FAC54C] rounded-xl">
                <h1 className='text-white text-[16px] indent-8'>เกมส์ไฮโลใน Betworlds888 จะใช้ลูกเต๋าไฮโล 3 ลูกในการออกผลมาซึ่งผู้เล่นสามารถเล่นทายผลลูกเต๋าที่ออกมาได้ถึง 3 ลูกว่าจะออกมาเลขอะไรบ้างหรือผู้เล่นจะทายผลออกมาแค่ลูกเดียวก็ได้ แต่อัตราการจ่ายก็ต่างออกไปซึ่งการออกผลเกมส์ไฮโลและอัตราการจ่ายดังนี้</h1>
              </div>
              <div className='mx-auto'><Image src={hilo} alt="LogoImage"/></div>

              <div className='flex flex-col md:flex-row gap-5 justify-between'>
                <div className='md:w-1/2'>
                  <div className="bg-transparent px-5 py-3 gap-5 border-[2px] border-[#FAC54C] rounded-xl">
                    <h1 className='text-white text-[16px]'>- ทายเลขไฮโล 1 ลูกและผลลูกเต๋าออกมาเลขที่เราทายเหมือนกันหมด มีอัตราการจ่ายที่ 3.0<br/>
                    - ทายเลขไฮโล 1 ลูกและผลลูกเต๋าออกมาเลขที่เราทาย 2 ลูก มีอัตราการจ่ายที่ 2.0<br/>
                    - ทายเลขไฮโล 1 ลูกและผลลูกเต๋าออกมาเลขที่เราทาย 1 ลูก มีอัตราการจ่ายที่ 1.0<br/>
                    - ทายไฮโลแต้มสูง คือผลลูกเต๋าทั้ง 3 ลูก บวกรวมกัน เกิน 11 แต้ม มีอัตราการจ่ายที่ 1.0<br/>
                    - ทายไฮโลแต้มสูงและทายเลข 6 หรือ 5 ด้วย มีอัตราการจ่ายที่ 2.0<br/>
                    - ทายไฮโลแต้มสูงและทายเลข 4 ด้วย มีอัตราการจ่ายที่ 3.0<br/>
                    - ทายไฮโลแต้มสูงและทายเลข 3 ด้วย มีอัตราการจ่ายที่ 4.0<br/>
                    - ทายไฮโลแต้มสูงและทายเลข 2 ด้วย มีอัตราการจ่ายที่ 5.0<br/>
                    - ทายไฮโลแต้มสูงและทายเลข 1 ด้วย มีอัตราการจ่ายที่ 6.0</h1>
                  </div>
                </div>
                <div className='md:w-1/2'>
                  <div className="bg-transparent px-5 py-3 gap-5 border-[2px] border-[#FAC54C] rounded-xl">
                    <h1 className='text-white text-[16px]'>- ทายไฮโลแต้มต่ำ คือผลลูกเต๋าทั้ง 3 ลูก บวกรวมกัน ต่ำกว่า 11 แต้ม มีอัตราการจ่ายที่ 1.0<br/>
                    - ทายไฮโลแต้มต่ำและทายเลข 1 หรือ 2 ด้วย มีอัตราการจ่ายที่ 2.0<br/>
                    - ทายไฮโลแต้มต่ำและทายเลข 3 ด้วย มีอัตราการจ่ายที่ 3.0<br/>
                    - ทายไฮโลแต้มต่ำและทายเลข 4 ด้วย มีอัตราการจ่ายที่ 4.0<br/>
                    - ทายไฮโลแต้มต่ำและทายเลข 5 ด้วย มีอัตราการจ่ายที่ 5.0<br/>
                    - ทายไฮโลแต้มต่ำและทายเลข 6 ด้วย มีอัตราการจ่ายที่ 6.0<br/>
                    - ทายเลขไฮโล 2 ลูก หรือ 3 ลูก มีอัตราการจ่ายที่ 5.0<br/>
                    - ทายไฮโล 6 ต่ำ หรือ ทายไฮโล 1 สูง มีอัตราการจ่ายที่ 6.0</h1>
                  </div>
                </div>
                
              </div>
            </div>

            {/* Pok-rt */}
            <div className="flex flex-col items-start gap-5 ">
              <div className="flex bg-gradient-to-l from-[#B27310] via-[#F0D077] to-[#FAC54C] ">
                <div className=" font-bold text-2xl sm:text-3xl w-fit p-3 text-center">เกมส์ป๊อกเด้ง</div>
              </div>
              <div className="bg-transparent px-5 py-3 gap-5 border-[2px] border-[#FAC54C] rounded-xl">
                <h1 className='text-white text-[16px] indent-8'>เกมส์ป๊อกเด้ง เป็นอีกหนึ่งเกมส์ยอดนิยมของคนไทยที่ ทำเงินได้อย่างรวดเร็ว โดยวิธีเล่นรอบแลกจะแจกไพ่ให้มือละ 2 ใบ และสูงสุดที่ 3 ใบ (กรณีไพ่ในมือแต้มน้อย) ซึ่งเกมส์ป๊อกเด้งใน Betworlds888 นั้นจะกำหนดให้มีทั้งหมด 6 มือ โดยให้เราเลือกมือที่ 1-6 โดยจะวัดกับไพ่เจ้ามือ</h1>
              </div>

              <div className='flex flex-col md:flex-row gap-5 justify-between'>
                <div className='md:w-3/5 '>
                  <div className="bg-transparent px-5 py-3 gap-5 border-[2px] border-[#FAC54C] rounded-xl">
                    <h1 className='text-white text-[16px] indent-8'>เริ่มแรกหากไพ่ในมือ 2 ใบบวกกันได้ 8 หรือ 9 แต้ม ที่เขาเรียกว่า “ป๊อก” หรือหากไพ่มีดอกเดียวกันและแต้มรวมกันเท่ากับ 8 หรือ 9 ที่เขาเรียกว่า “ป๊อกเด้ง” คือถือว่าเป็นแต้มที่สูงในการเปิด 2 ใบแรกจะเปิดไพ่ก่อนใครและเป็นผู้ชนะ โดยจะคิดไพ่ในมือ 2 ใบ (กรณีนี้ วัดไพ่กับเจ้ามือ) หากไพ่ป๊อกเด้ง ใน เปิดไพ่ 3 ใบ และมืออื่นไม่ไ้ด้ป๊อก ถือไพ่ 2 ใบ เกมส์จะคิดไพ่สูงสุดและอัตราการจ่ายเรียงดังนี้</h1>
                  </div>
                </div>
                <Image src={pok} alt="LogoImage" />
              </div>

              <div className="bg-transparent px-5 py-3 gap-5 border-[2px] border-[#FAC54C] rounded-xl">
                <h1 className='text-white text-[16px] indent-8'>- ไพ่ตอง หมายถึง ไพ่ที่ได้ตัวเดียวกัน 3 ใบ เช่น AAA, 222 ถือว่าเป็นไพ่ที่สูงสุดจะคิดอัตราการจ่ายที่ 5.0 เท่า<br/>
                - ไพ่สเตจฟัจ หมายถึง ไพ่ที่เรียงกัน 3 ใบตั้งแต่ A23 โดยจะคิดเรียงจนถึง 3 ใบ QKA และมีไพ่ดอกเดียวกัน อัตราการจ่ายที่ 5.0 เท่า<br/>
                - ไพ่สเตจ หมายถึง ไพ่ที่เรียงกัน 3 ใบตั้งแต่ A23 โดยจะคิดเรียงจนถึง 3 ใบ QKA อัตราการจ่ายที่ 4.0 เท่า<br/>
                - ไพ่เซียน หมายถึง ไพ่ที่มีขอบทั้ง 3 ใบ คือ มีไพ่ดังนี้ J Q K และไม่สนใจว่าจะดอกเดียวกันหรือไม่ ซึ่งอัตราการจ่ายที่ 3.0 เท่า<br/>
                - ไพ่แต้มสูง หมายถึง ไพ่ 2 ใบ หรือ 3 ใบที่รวมกันสูงสุด โดยไพ่สุงสุดมีแต้มสูงสุดอยู่ที่ 9 แต้มและน้อยสุดอยู่ที่ 0 แต้ม</h1>
              </div>
            </div>

            {/* tiger-dragon */}
            <div className="flex flex-col items-start gap-5 ">
              <div className="flex bg-gradient-to-l from-[#B27310] via-[#F0D077] to-[#FAC54C] ">
                <div className=" font-bold text-2xl sm:text-3xl w-fit p-3 text-center">เกมส์เสือ-มังกร</div>
              </div>
              <div className="bg-transparent px-5 py-3 gap-5 border-[2px] border-[#FAC54C] rounded-xl">
                <h1 className='text-white text-[16px] indent-8'> เป็นอีกเกมส์นึงที่เล่นง่าย และเป็นเกมส์ที่ติดยอดฮิต อีกเกมส์นึง หลักการง่ายๆ คือให้เราเลือกระหว่าง ดราก้อน ไทเกอร์ ( Dragon Tiger ) หรือ เลือกว่าเสมอ ( TIE )</h1>
              </div>

              <div className='flex flex-col md:flex-row gap-5 justify-between'>
                <div className='md:w-3/5 '>
                  <div className="bg-transparent px-5 py-3 gap-5 border-[2px] border-[#FAC54C] rounded-xl">
                    <h1 className='text-white text-[16px] indent-8'>อัตราการจ่ายของ ดราก้อน ไทเกอร์<br/>
                    - หากเลือก ดราก้อน ไทเกอร์ และถูก ท่านจะได้อัตราอยู่ที่ @ 1.00 หากแต้มเท่ากันเราจะวัดผลที่ดอกไพ่<br/>
                    - หากเลือก เสมอ TIE และถูก ท่านจะได้อัตราอยู่ที่ @ 12.00<br/>
                    - หากเลือก เสมอ TIE และถูก และไพ่ออกมาเป็น K K ท่านจะได้อัตราอยู่ที่ @ 220.00 ถือว่ามากเลยเดียว<br/>
                    - หากท่านเลือก เสมอ TIE และถูก และไพ่ออกมาเป็น 8 8 ท่านจะได้อัตราอยู่ที่ @110.00</h1>
                  </div>
                </div>
                <Image src={tiger} alt="LogoImage" />
              </div>
            </div>

            {/* Section 1 */}

            <div className="flex flex-col w-full gap-5 pb-10">
              <div className="flex bg-gradient-to-l from-[#B27310] via-[#F0D077] to-[#FAC54C] ">
                <div className="mx-auto font-bold text-2xl sm:text-3xl py-3 text-center">แทงบอล คือ</div>
              </div>
              <div className="bg-transparent px-5 py-3 gap-5 border-[2px] border-[#FAC54C] rounded-xl">
                <h1 className='text-white text-[16px] indent-8'>ทั้งหมดนี้ คุณลูกค้าจะได้รับความเพลิดเพลินบันเทิงสนุกสนานครบวงจร จบในเว็บเดียว และคุณจะได้รับบริการอย่างเป็นมืออาชีพตลอด 24 ชั่วโมง เพราะเราคือเว็บการพนันออนไลน์ดีที่สุด 2022</h1>
              </div>
            </div>
          
          
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default Allbets