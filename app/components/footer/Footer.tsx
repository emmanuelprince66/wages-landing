"use client"
import React from 'react'
import { useStateContext } from '@/app/util/StateContext'

const Footer = () => {
  const { state } = useStateContext();

  return (
    <>
      {!state && (
        <div>Footer</div>
      )}
    </>
  )
}

export default Footer