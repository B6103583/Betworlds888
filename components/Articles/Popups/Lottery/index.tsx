import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import Image from "next/image";
import img from "@../../../public/image/articles/art11.png";
import lotto from "@../../../public/image/articles/lottery/lotto.png";
import th from "@../../../public/image/articles/lottery/th-looto.png";
import laos from "@../../../public/image/articles/lottery/laos-lotto.png";
import malay from "@../../../public/image/articles/lottery/malay-lotto.png";
import hanoi from "@../../../public/image/articles/lottery/hanoi-lotto.png";
import yege from "@../../../public/image/articles/lottery/yege-lotto.png";
import trade from "@../../../public/image/articles/lottery/trade.png";
import step1 from "@../../../public/image/articles/lottery/step1.png";
import step2 from "@../../../public/image/articles/lottery/step2.png";

interface CardProps {
  title: string;
  desc: string;
  img: any;
}

function Lottery() {
  const [visible, setVisible] = useState(false);
  const Card = ({ title, desc, img }: CardProps) => {
    return (
      <div className='flex-col '>
        <div className='text-white text-3xl font-semibold p-5'>{title}</div>

        <div className='flex justify-between'>
          <Image src={img} alt="LogoImage" />
          <div className='w-3/5 '>
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
      <div className="flex ">
        <Image src={img} alt="LogoImage" />
      </div>
      <div className="flex flex-col pt-5 ">
        <h1 onClick={() => setVisible(true)} className="text-center text-sm sm:text-xl lg:text-xl font-semibold text-[#FAC54C] cursor-pointer hover:text-white hover:underline">พนันหวยมีอะไรบ้าง</h1>
      </div>
      <Modal
        title="พนันหวยมีอะไรบ้าง"
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
                <h1 className='text-white text-[16px] indent-8'>ในปัจจุบันนักพนันส่วนใหญ่เริ่มหันมาให้ความสนใจในการเดิมพันหวยกันมากขึ้น ดูส่วนหนึ่งก็เพราะรูปแบบการ
                เล่นที่เข้าใจง่ายเหมาะกับทุกเพศทุกวัยและไม่ต้องคอยติดตามสถานการณ์หรือเช็กสถิติให้ยุ่งยากเหมือนกับการเดิมพันชนิดอื่นๆ<br/></h1>
                <h1 className='text-white text-[16px] indent-8'>โดยแต่ละกีฬานั้นก็ได้รับเสียงตอบรับที่ดีไม่ได้แตกต่างกันเท่าไหร่ อย่างไรก็ตามเชื่อว่ายังมีนักพนันหลายคน
                ที่ยังสงสัยว่ากีฬาอะไรบ้างที่สามารถจะเดิมพันผ่านเว็บไซต์ของเราได้วันนี้เรามีคำตอบมาให้ผู้อ่านทุกคนได้ทราบกัน ถ้าพร้อมแล้วไปดูกันเลย! ปลอดภัย มั่นคง รักษาความลับ
                สมาชิกในระดับสูงสุด</h1>
            </div>

            {/* พนันหวยที่ได้รับความนิยม */}

            <div className="flex flex-col w-full gap-5">
              <div className="flex bg-gradient-to-l from-[#B27310] via-[#F0D077] to-[#FAC54C] ">
                <div className="mx-auto font-bold text-3xl py-3">พนันหวยที่ได้รับความนิยม</div>
              </div>
              
              <div className="bg-transparent px-5 py-3 gap-5 border-[2px] border-[#FAC54C] rounded-xl">
                <h1 className='text-white text-[16px] indent-8'>เชื่อว่าคอหวยหลายท่านคงยังสงสัยอยู่พอสมควรว่าทางเว็บ Betworlds888 นั้นมีบริการหวยอะไรบ้างและหวยไหนที่ได้รับความนิยมในปัจจุบันและมีโอกาสทำกำไรได้สูง</h1>
              </div>
              <div className='text-white text-center text-3xl'>วันนี้เราจึงทำการรวบรวมการเดิมพันหวยมาให้เลือกทั้งหมด 7 ชนิดด้วยกันเพื่อให้นักพนันได้เลือกสรร ให้ตรงตามความต้งการของตัวเองมากที่สุด</div>

              <Card img={lotto} title="ล็อตเตอรี่ออนไลน์" 
              desc="คือการซื้อล็อตเตอรี่รูปแบบใหม่ที่ไม่ต้องไปซื้อตามร้านค้าเหมือนเดิมโดยนักพนันสามารถเลือกเลขที่ชอบได้ตามต้องการเป็นจำนวน 6 หลักและรอลุ้นตรวจผลรางวัลได้เหมือนล็อตเตอรี่ทั่วไปได้เลย"/>

              <Card img={th} title="หวยไทย" 
              desc="หวยรัฐบาล หวยไทย หรือที่เรียกกันอย่างติดปากว่าหวยใต้ดินจัดเป็นหนึ่งในหวยที่ได้รับความนิยมอย่างมาก ด้วยรูปแบบการเล่นที่ง่ายมีเปอเซ็นต์การถูกที่สูง แถมยังจ่ายหนัก ทำให้คอหวยหันมาให้ความสนใจเป็นพิเศษ โดยสามารถเลือกแทงได้หลากหลายรูปแบบทั้ง 3 ตัวบน 3 ตัวโต๊ด บน 2 ตัว ล่าง 2 ตัว ก็มีให้เลือกทั้งหมด"/>

              <Card img={laos} title="หวยลาว" 
              desc="หรือชื่อเป็นทางการว่า สลากพัฒนา จัดเป็นการแทงหวยออนไลน์ใต้ดินชนิดหนึ่งที่ต้องเล่นผ่านระบบออนไลน์เท่านั้นเนื่องจากในไทยไม่มีจำหน่ายหวยชนิดนี้ โดยนิยมใช้สัตว์เป็นตัวแทนเลขรางวัลที่ออกซึ่งจะมีให้เลือกเล่นทั้ง 3 ตัวตรง 3 ตัวโต๊ด 2บนล่าง และวิ่งบนล่าง เหมือนกับหวยไทย"/>

              <Card img={malay} title="หวยมาเลย์" 
              desc="สำหรับหวยมาเลย์ที่เรียกกันว่า “Magnum” จะออกเป็นประจำทุกวัน พุธ เสาร์ อาทิตย์ ออกโดยประเทศมาเลเซียมีวิธีการเล่นคล้าย ๆ กับหวยไทยการทายผลจะเป็นการทายตัวเลข 4 ตัว มีรางวัลทั้งหมด 23 รางวัลแบ่งเป็นรางวัล 1,2,3 อย่างละ 1 รางวัล และรางวัลที่ 4 กับ 5 อีกอย่างละ 10 รางวัล"/>

              <Card img={hanoi} title="หวยฮานอย" 
              desc="เป็นที่รู้กันดีว่าเป็นหวยจากทางฝั่งเวียดนามโดยช่วงหลังได้รับความนิยมเพิ่มขึ้นอย่างมากเนื่องจากสามารถเล่นได้ทุกวันซึ่งรูปแบบการแทงก็คล้ายๆกับการแทงหวยไทยซึ่งจะเอารางวัลพิเศษมาใช้ในการออกผล 3 ตัวบน 3 ตัวบนโต๊ด และ 2 ตัวบน ส่วน 2 ตัวล่างจะใช้จากรางวัลที่หนึ่งแทน"/>

              <Card img={yege} title="หวยยี่กี" 
              desc="หรืออีกชื่อคือหวยปิงปอง เป็นหวยที่ให้นักพนันสามารถเข้ามามีส่วนร่วมในการออกผลรางวัลได้ด้วยการใส่ตัวเลขเข้าไป 5 หลักโดยสามารถส่งได้หลายครั้งจนกว่าจะหมดเวลารอบหวยนั้นๆแล้วนำตัวเลขของผู้เล่นหมายเลข 16 มาลบจำนวนรวม จากนั้นก็จะได้ผลการออกรางวัลของรอบดังกล่าว"/>

              <Card img={trade} title="หวยหุ้น" 
              desc="เป็นหวยที่อิงตามค่าของ SET และ SET50 เป็นหลักโดยจะนำดัชนีตัวเลขแต่ละรอบมากำหนดในการออกผลรางวัล(แบ่งเป็น 2 รอบคือรอบเช้าและรอบบ่าย) การออกรางวัล 3 ตัวบนจะใช้ทศนิยมตัวสุดท้ายของ SET50 เป็นหลักร้อย และทศนิยมของ SET เป็นหลักสิบและหน่วย และนำจุดทศนิยมของ ค่าเปลี่ยนแปลงมาออกรางวัล 2 ตัวล่าง"/>

            </div>

            {/* ขั้นตอนการเลือกเล่นเดิมพันหวย */}

            <div className="flex flex-col w-full gap-5 pb-10">
              <div className="flex bg-gradient-to-l from-[#B27310] via-[#F0D077] to-[#FAC54C] ">
                <div className="mx-auto font-bold text-3xl py-3">ขั้นตอนการเลือกเล่นเดิมพันหวย</div>
              </div>
              
              <div className="flex flex-col items-start gap-5 py-8">
                <div className="flex bg-gradient-to-l from-[#B27310] via-[#F0D077] to-[#FAC54C] ">
                  <div className=" font-bold text-3xl w-fit p-3 text-center">วิธีแทงหวยออนไลน์</div>
                </div>
              </div>

                <Image src={step1} alt="LogoImage" />

                <div className='text-white text-center text-2xl '>หลังจากเข้าสู่ระบบของเว็บ Betworlds888 แล้ว ให้คลิกที่ปุ่ม -หวย- และกดเลือก -หวยไทย-</div>
                
                <Image src={step2} alt="LogoImage" />
                <div className="bg-transparent px-5 py-3 gap-5 border-[2px] border-[#FAC54C] rounded-xl">
                  <h1 className='text-white text-[16px]'>จากภาพ<br/>
                  1. หลังกดแทง(หวยลาว)ให้เลือก -กดเลขเอง-<br/>
                  2. กดเลือก รูปแบบที่จะเล่นเเทง ( เช่นสองตัวล่าง ตามภาพ ) หากต้องการให้กลับตัวเลข -กดกลับตัวเลขด้วย- จะกลับให้อัตโนมัติ<br/>
                  3. ระบุตัวเลข ที่ต้องการจะเล่น<br/>
                  4. แล้วกด -OK- ตามภาพ ( หลังจาก OK แล้วยังเลือกเลขอื่นๆได้เช่นกัน)<br/>
                  5. กดระบุยอดที่ต้องการเดิมพัน<br/>
                  6. ตรวจสอบเลขที่เดิมพัน เลขไหนไม่ต้องการ -กดกากบาท- ได้เพื่อลบตัวเลขนั้นออก<br/>
                  7. หลังจากการตรวจสอบเเล้วกด -เดิมพัน- เพื่อยืนยันการแทงอีกครั้ง</h1>
                </div>
              
            </div>

            {/* สรุปการเดิมพันหวยดีอย่างไร */}

            <div className="flex flex-col w-full gap-5 pb-10">
              <div className="flex bg-gradient-to-l from-[#B27310] via-[#F0D077] to-[#FAC54C] ">
                <div className="mx-auto font-bold text-3xl py-3">สรุปการเดิมพันหวยดีอย่างไร</div>
              </div>
              <div className="bg-transparent px-5 py-3 gap-5 rounded-xl border-[2px] border-[#FAC54C]">
                <h1 className='text-white text-[16px] indent-8'>ในอดีตการเดิมพันหวยถือว่าเป็นหนึ่งในการเดิมพันที่ได้รับผลตอบแทนสูงเมื่อเทียบกับจำนวนเงินที่ลงแต่ก็แลกมาด้วยโอกาสที่ยากกว่าเกมพนันชนิดอื่นๆ ทำให้ไม่ค่อยได้รับความนิยมเท่าไหร่นักอย่างไรก็ตามในปัจจุบันการแทงหวยถูกพัฒนาและแก้ไขไปจากเดิมอย่างมากทั้งรูปแบบการเล่น การแจกรางวัล และตัวเลือกในการเดิมพันซึ่งมีให้เลือกมากมายทำให้ในตอนนี้เป็นหนึ่งในการเดิมพันที่ได้รับความนิยมอย่างสูง ประกอบกับไม่ต้องใช้ความรู้ความสามารถอะไรมากมายแถมไม่ต้องเสียเวลาศึกษาเยอะ และรู้ผลลัพธ์ได้อย่างรวดเร็วการแทงหวยออนไลน์จึงกลายเป็นหนึ่งในตัวเลือกที่น่าสนใจอย่างมากในเวลานี้</h1>
              </div>
            </div>

          </div>

        </div>
      </Modal>
    </div>
  )
}

export default Lottery