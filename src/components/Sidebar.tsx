import React, { FC } from 'react'

import sidebarDesktop from '../assets/bg-sidebar-desktop.svg'
import sidebarMobile from '../assets/bg-sidebar-mobile.svg'
import { stepDetails } from '../data'

interface Props {
  step: number
}

const Sidebar: FC<Props> = ({ step }) => {
  return (
    <div className='sm:relative sm:ml-4 sm:my-4'>
      <picture className='absolute sm:static top-0 left-0 right-0 object-cover'>
        <source srcSet={sidebarDesktop} media='(min-width: 640px)' />
        <img src={sidebarMobile} alt='sidebar background' />
      </picture>
      <ul className='absolute top-0 left-[50%] sm:left-0 translate-x-[-50%] sm:translate-x-0 flex sm:flex-col justify-center items-center sm:items-start gap-4 sm:gap-8 w-full pt-8 sm:pt-10 sm:pl-8'>
        {stepDetails.map((el) => (
          <li key={el.id} className='flex items-center gap-4' >
            <div className={`list-none  h-[33px] text-[14px] w-[33px] font-bold grid place-items-center rounded-full border-[1px] ${(el.id === step || step === 5 && el.id === 4) ? 'border-skyBlue bg-skyBlue text-denim' : 'border-white text-white'}`}>
              {el.id}
            </div>
            <div className='hidden sm:inline-block text-[14px] font-bold leading-4 text-white tracking-[1px]'>
              <span className='block text-lightBlue text-[12px] leading-[13px] font-light mb-1'>
                STEP {el.id}
              </span>
              {el.step}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
