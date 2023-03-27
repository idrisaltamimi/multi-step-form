import { ChangeEvent, FC, SetStateAction } from 'react'

import { dataType } from '../App'
import { radioOptions } from '../data'

interface Props {
  setState: SetStateAction<any>
  state: dataType
}

const SelectPlan: FC<Props> = ({ state, setState }) => {
  const handleChange = (e: ChangeEvent, price: number) => {
    const target = e.target as HTMLInputElement
    setState((prev: any) => ({ ...prev, plan: target.value, planPrice: price }))
  }

  return (
    <div>
      <div className='flex flex-col sm:flex-row sm:justify-between gap-3 sm:gap-[18px]'>
        {radioOptions.map((el) => (
          <label
            key={el.id}
            htmlFor={el.id}
            className={`relative pt-[14px] pl-4 pb-[18px] sm:pt-5 sm:pl-4 sm:pb-4 sm:w-full sm:h-40 ${state.plan === el.name && 'bg-veryLightGrey border-purple'} flex sm:flex-col gap-[14px] sm:gap-[39px] border-[1px] border-lightGrey rounded-sm cursor-pointer hover:border-purple transition-colors ease-linear`}
          >
            <input
              id={el.id}
              name={'select-plan'}
              type='radio'
              required
              value={el.name}
              checked={state.plan === el.name}
              onChange={(e: ChangeEvent) => handleChange(e, el.price)}
              className={'absolute opacity-0'}
            />
            <img src={el.img} alt={el.name} className='w-10' />
            <div className='text-denim leading-[18px] font-regular'>
              {el.name}
              <span className='block text-[14px] leading-4 text-grey mt-[7px] font-light'>
                {state.isMonthly ? (
                  `$${el.price}/mo`
                ) : (
                  `$${el.price * 10}/yr`
                )}
              </span>
            </div>
          </label>
        ))}
      </div>

      <button
        onClick={() => setState((prev: any) => ({ ...prev, isMonthly: !prev.isMonthly }))}
        type='button'
        className='w-full h-12 bg-veryLightGrey rounded-sm mt-6 sm:mt-8 flex items-center justify-center gap-6 text-[14px] font-regular text-denim'
      >
        <span>Monthly</span>
        <div className={`relative w-[38px] h-5 rounded-[100px] bg-denim p-1 before:absolute before:w-3 before:h-3 before:bg-white before:rounded-full before:left-1 before:transition-transform before:ease-in-out ${!state.isMonthly && 'before:translate-x-[18px]'}`} />
        <span>Yearly</span>
      </button>
    </div>
  )
}

export default SelectPlan

