import { FC, SetStateAction, useEffect } from 'react'

import thankYouIcon from '../assets/icon-thank-you.svg'

interface Props {
  setStep: SetStateAction<any>
}

const Summary: FC<Props> = ({ setStep }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      setStep(1)
    }, 3000)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className='px-6 py-[79px] sm:p-0 flex flex-col justify-center items-center'>
      <img
        src={thankYouIcon}
        alt=''
        className='w-14 h-14 sm:w-20 sm:h-20 mb-6 sm:mb-8'
      />
      <h2 className='mb-[9px] sm:mb-[14px] text-denim font-bold text-[24px] sm:text-[32px] leading-[27.6px] sm:leading-[36.7px]'>
        Thank you!
      </h2>
      <p className='text-center text-grey leading-[25px]'>
        Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.
      </p>
    </div>
  )
}

export default Summary
