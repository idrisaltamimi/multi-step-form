import { ChangeEvent, FC, useState } from "react"

interface Props {
  label: string
  id: string
  pattern: string
  placeholder: string
  value: string
  type: string
  required?: boolean
  onChange: (e: ChangeEvent) => void
}

const TextField: FC<Props> = (props) => {
  const { label, onChange, ...attr } = props
  const [blur, setBlur] = useState(false)
  const handleBlur = () => setBlur(true)

  return (
    <div className='relative mt-6 first:mt-0'>
      <label className='block mb-2 text-[14px] leading-4 text-denim'>{label}</label>
      <input
        {...attr}
        name={props.id}
        onBlur={handleBlur}
        onChange={onChange}
        className={`px-4 w-full h-12 outline-none border-solid border-[1px] border-borderColor rounded-sm font-regular hover:border-purple placeholder:text-grey placeholder:font-regular ${blur ? 'invalid:border-red invalid:hover:border-red' : ''} transition-all ease-linear textfield`}
      />
      {blur && <span
        className={`absolute right-0 top-0 text-red text-[14px] font-bold hidden`}
      >
        This field is required
      </span>}
    </div>
  )
}

export default TextField
