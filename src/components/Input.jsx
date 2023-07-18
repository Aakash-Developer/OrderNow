import React from 'react'

export default function Input({type, name,changeHandler,lable}) {
  const eventData =(e)=>{changeHandler(e)}
  return (
    <div className="form-floating mb-3">
    <input type={type} name={name} className="form-control shadow-none"  onChange={eventData} />
    <label htmlFor="floatingInput">{lable}</label>
  </div>
  )
}
