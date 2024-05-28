'use client'
import { Toaster } from 'react-hot-toast'

import React from 'react'

const Providers = ({children}) => {
  return (
    <>
    <Toaster />
    {children}
    
    </>
  )
}

export default Providers