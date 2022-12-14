import React from 'react'
import './Header.css'


const Header = () => {
  const date=new Date()
  const year=date.getFullYear()
  const month=date.toLocaleString('en-us', {  month: 'long' })
  const monthName=month.slice(0,3).toUpperCase()
  const day=date.getDate()
  let dayName=date.toLocaleString('en-us', {  weekday: 'long' })

  return (
    <div className="header">
      <div className="start">
        <h1>{day}</h1>
      <div className="inside"><span className="month">{monthName}</span><span>{year}</span></div>
      </div>
      <div className="end">{dayName}</div>
    </div>
  )
}

export default Header