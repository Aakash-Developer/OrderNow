import React from 'react'

export default function Button({type,className,clickHandler,lable}) {
  return (
    <button type={type} className={`btn ${className}`} onClick={clickHandler}>{lable}</button>
  )
}
