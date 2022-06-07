import React from 'react'
import WeekPicker from './WeekPicker'

export default function Bookings() {
  return (
    <main className="bookings-page">
      <p>Bookings!</p>
      <WeekPicker date={new Date()}/>
    </main>
  )
}
