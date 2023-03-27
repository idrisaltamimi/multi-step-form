import { FormEvent, useState } from 'react'

import PersonalInfo from './components/PersonalInfo'
import SelectPlan from './components/SelectPlan'
import Addons from './components/Addons'
import Sidebar from './components/Sidebar'
import FinishingUp from './components/FinishingUp'
import Summary from './components/Summary'
import { checkboxData, stepDetails } from './data'

export interface AddonsType {
  id: string
  name: string
  addedAmount: number
  description: string
  isChecked: boolean
}

export interface dataType {
  name: string
  email: string
  phoneNumber: string
  plan: string
  planPrice: number
  isMonthly: boolean
  addons: AddonsType[]
}

const initialData = {
  name: '',
  email: '',
  phoneNumber: '',
  plan: '',
  planPrice: 0,
  isMonthly: true,
  addons: checkboxData,
}

const App = () => {
  const [step, setStep] = useState(1)
  const [data, setData] = useState(initialData)

  const next = () => setStep(prev => prev + 1)
  const prev = () => setStep(prev => prev - 1)

  const steps = [
    <PersonalInfo state={data} setState={setData} />,
    <SelectPlan state={data} setState={setData} />,
    <Addons state={data} setState={setData} />,
    <FinishingUp state={data} setStep={setStep} />,
    <Summary setStep={setStep} />
  ]

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (step !== steps.length - 1) return next()
    console.log('form was submitted successfully')
    next()
    setData(initialData)
  }

  return (
    <div className='max-w-[940px] w-full sm:h-[600px] sm:bg-white rounded-sm flex flex-col sm:flex-row items-center h-full'>
      <Sidebar step={step} />

      <form onSubmit={handleSubmit} className={`flex flex-col justify-between z-10 mt-[99px] sm:mt-0 sm:mx-4 md:mx-10 lg:mx-[100px] sm:pt-14 sm:pb-8 w-full h-full sm:max-w-[450px] sm:shadow-[0_25px_40px_-20px_rgba(0, 0, 0, 0.1)] ${steps.length === step && 'sm:pt-[181px]'}`}>
        <div className={`bg-white rounded-sm px-6 py-8 sm:p-0 mx-4 sm:m-0 shadow-[0_25px_40px_-20px_rgba(0, 0, 0, 0.1)] sm:shadow-none`}>
          {step !== steps.length && (
            <div className='mb-[22px] sm:mb-10'>
              <h1 className='font-bold text-[32px] leading-9 text-denim'>{stepDetails[step - 1].title}</h1>
              <p className='text-grey leading-[25px] mt-[9px] sm:mt-[11px]'>{stepDetails[step - 1].description}</p>
            </div>
          )}
          {steps[step - 1]}
        </div>
        {steps.length !== step && <div className='flex justify-between p-4 sm:p-0 sm:mt-auto bg-white'>
          <button
            type='button'
            onClick={prev}
            disabled={step === 1}
            className='disabled:opacity-0 disabled:pointer-events-none h-12 text-grey bg-transparent font-regular rounded-sm hover:text-denim transition-colors ease-linear'
          >
            Go Back
          </button>
          <button
            type='submit'
            className={`${steps.length - 1 === step ? 'bg-purple hover:bg-[#928CFF]' : 'bg-denim hover:bg-[#164A8A]'} text-white font-regular rounded-sm h-12 w-[123px] transition-colors ease-linear`}
          >
            {steps.length - 1 === step ? 'Confirm' : 'Next Step'}
          </button>
        </div>}
      </form>
    </div>
  )
}

export default App