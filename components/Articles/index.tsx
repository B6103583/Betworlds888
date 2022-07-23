import React from 'react'
import Allbets from './Popups/Allbets'
import Ball12 from './Popups/Ball12'
import Football from './Popups/Football'
import History from './Popups/History'
import Invert from './Popups/Invert'
import Lang from './Popups/Lang'
import Lottery from './Popups/Lottery'
import Lotto from './Popups/Lotto'
import Password from './Popups/Password'
import Questions from './Popups/Questions'
import Sports from './Popups/Sports'
import Tips from './Popups/Tips'


function Articles() {
  return (
    <div className="w-3/4 mx-auto bg-transparent min-h-full">
        <div className='flex flex-col'>
            <div className='flex bg-gradient-to-l from-[#B27310] via-[#F0D077] to-[#FAC54C]'>
                <div className="mx-auto font-bold text-2xl sm:text-3xl py-3 text-center">บทความ</div>
            </div>
            
            <div className='grid grid-cols-2 gap-5 bg-black bg-opacity-50 p-10 justify-center '>
              <Invert/>
              <Lang/>
              <History/>
              <Lotto/>
              <Password/>
              <Questions/>
              <Tips/>
              <Football/>
              <Allbets/>
              <Sports/>
              <Lottery/>
              <Ball12/>
            </div>

        </div>
    </div>
  )
}

export default Articles