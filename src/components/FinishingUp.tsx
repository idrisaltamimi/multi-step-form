import { FC, SetStateAction } from 'react'

import { dataType } from '../App'

interface Props {
  setStep: SetStateAction<any>
  state: dataType
}

const FinishingUp: FC<Props> = ({ setStep, state }) => {
  const totalAddons = state.addons.reduce((acc, curr) => acc + (curr.isChecked ? curr.addedAmount : 0), 0)

  return (
    <>
      <div className='bg-veryLightGrey rounded-sm p-4'>
        <div className='flex items-center'>
          <div className='font-regular text-[14px] leading-4'>
            {state.plan} ({state.isMonthly ? 'Monthly' : 'Yearly'})
            <button
              onClick={() => setStep(2)}
              className='block underline text-[14px] leading-5 text-grey cursor-pointer font-light mt-[3px]'
            >
              Change
            </button>
          </div>
          <p className='ml-auto font-bold text-[14px] leading-5'>
            {state.isMonthly ? `$${state.planPrice}/mo` : `$${state.planPrice * 10}/yr`}
          </p>
        </div>

        {totalAddons > 0 && <hr className='my-3 border-grey' />}

        <div className='flex flex-col gap-3'>
          {state.addons.map(({ id, name, addedAmount, isChecked }) => (
            <>
              {isChecked && <div key={id} className='flex items-center text-[14px] leading-5 text-grey'>
                {name}
                <span className='ml-auto text-denim'>
                  {state.isMonthly ? `+$${addedAmount}/mo` : `+$${addedAmount * 10}/yr`}
                </span>
              </div>}
            </>
          ))}
        </div>

      </div>
      <div className='p-4 flex items-center text-grey text-[14px] leading-20'>
        Total (per {state.isMonthly ? 'month' : 'year'})
        <span className='ml-auto text-[16px] font-bold text-purple'>
          {state.isMonthly ? `+$${totalAddons + state.planPrice}/mo` : `+$${(totalAddons + state.planPrice) * 10}/yr`}
        </span>
      </div>
    </>
  )
}

export default FinishingUp
