import { ChangeEvent, FC, SetStateAction, useEffect, useState } from 'react'

import { AddonsType, dataType } from '../App'
import checkmark from '../assets/icon-checkmark.svg'

interface Props {
  setState: SetStateAction<any>
  state: dataType
}

const Addons: FC<Props> = ({ setState, state }) => {
  const handleChange = (e: ChangeEvent) => {
    const { name } = e.target as HTMLInputElement

    setState((prev: any) => {
      const addons = prev.addons.map((el: AddonsType) => (
        name === el.name ? { ...el, isChecked: !el.isChecked } : el
      ))
      return { ...prev, addons }
    })
  }

  return (
    <div className='flex flex-col gap-3 sm:gap-4'>
      {state.addons.map(el => (
        <label
          key={el.id}
          htmlFor={el.id}
          className={`flex items-center gap-4 sm:gap-6 border-[1px] border-lightGrey rounded-sm px-3 py-4 ${el.isChecked && 'border-purple bg-veryLightGrey'} hover:border-purple transition-colors ease-linear duration-200 cursor-pointer`}
        >
          <input
            id={el.id}
            type='checkbox'
            name={el.name}
            checked={el.isChecked}
            onChange={handleChange}
            className='appearance-none'
          />
          <img
            src={checkmark}
            alt='checkmark'
            className={`w-5 h-5 p-[3px] rounded-[4px] ${el.isChecked ? 'bg-purple border-purple' : 'bg-white'} border-[1px] border-lightGrey`}
          />
          <div>
            {el.name}
            <span className='block text-[12px] leading-5 text-grey'>{el.description}</span>
          </div>
          <div className='ml-auto text-[12px] leading-5 text-purple'>
            {state.isMonthly ? (
              `+$${el.addedAmount}/mo`
            ) : (
              `+$${el.addedAmount * 10}/yr`
            )}
          </div>
        </label>
      ))}
    </div>
  )
}

export default Addons