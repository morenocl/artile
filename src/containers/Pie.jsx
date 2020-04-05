import React from 'react'

import PieScreen from '../components/Pie'

import { contacto } from '../res/Datos'

const Pie = () => {
  return (
    <PieScreen data={contacto} />
  )
}

export default Pie;
