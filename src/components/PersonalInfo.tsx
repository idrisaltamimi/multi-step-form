import { ChangeEvent, FC, SetStateAction } from 'react'
import { dataType } from '../App'

import TextField from './TextField'

interface Props {
  setState: SetStateAction<any>
  state: dataType
}

const PersonalInfo: FC<Props> = ({
  setState,
  state,
}) => {
  const handleChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement
    setState((prev: any) => ({ ...prev, [target.id]: target.value }))
  }

  return (
    <>
      <div>
        <TextField
          label='Name'
          id='name'
          type='text'
          placeholder='e.g. Stephen King'
          pattern='^[a-zA-Z0-9]{3,20}$'
          value={state.name}
          required
          onChange={handleChange}
        />
        <TextField
          label='Email Address'
          id='email'
          type='email'
          placeholder='e.g. stephenking@lorem.com'
          pattern='^[^\s@]+@[^\s@]+\.[^\s@]+$'
          value={state.email}
          required
          onChange={handleChange}
        />
        <TextField
          label='Phone Number'
          id='phoneNumber'
          type='text'
          placeholder='e.g. +1 234 567 890'
          pattern={'^[0-9+]+$'}
          value={state.phoneNumber}
          required
          onChange={handleChange}
        />
      </div>
    </>
  )
}

export default PersonalInfo
