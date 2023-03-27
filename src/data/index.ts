import arcade from '../assets/icon-arcade.svg'
import advanced from '../assets/icon-advanced.svg'
import pro from '../assets/icon-pro.svg'

export const stepDetails = [
  {
    id: 1,
    title: 'Personal info',
    description: 'Please provide your name, email address, and phone number.',
    step: 'YOUR INFO',
  },
  {
    id: 2,
    title: 'Select your plan',
    description: 'You have the option of monthly or yearly billing.',
    step: 'SELECT PLAN',
  },
  {
    id: 3,
    title: 'Pick add-ons',
    description: 'Add-ons help enhance your gaming experience.',
    step: 'ADD-ONS',
  },
  {
    id: 4,
    title: 'Finishing up',
    description: 'Double-check everything looks OK before confirming.',
    step: 'SUMMARY',
  },
]

export const radioOptions = [
  {
    id: 'arcade',
    img: arcade,
    name: 'Arcade',
    price: 9
  },
  {
    id: 'advanced',
    img: advanced,
    name: 'Advanced',
    price: 12
  },
  {
    id: 'pro',
    img: pro,
    name: 'Pro',
    price: 15
  },
]

export const checkboxData = [
  {
    id: '1',
    name: 'Online service',
    description: 'Access to multiplayer games',
    addedAmount: 1,
    isChecked: false
  },
  {
    id: '2',
    name: 'Larger storage',
    description: 'Extra 1TB of cloud save',
    addedAmount: 2,
    isChecked: false
  },
  {
    id: '3',
    name: 'Customizable profile',
    description: 'Custom theme on your profile',
    addedAmount: 2,
    isChecked: false
  },
]