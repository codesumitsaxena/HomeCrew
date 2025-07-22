import React, { useState } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { addDays, isWeekend } from "date-fns"

function ServiceDate() {
  const [selectedDate, setSelectedDate] = useState(null)
  const today = new Date()
  const disabledDates = [
    today,
    addDays(today, 14),
    addDays(today, 23)
  ]

  const isDisabled = (date) => {
    const isManualBlock = disabledDates.some(
      (d) => d.toDateString() === date.toDateString()
    )
    return isWeekend(date) || isManualBlock
  }

  return (
    <div className="border p-3 rounded shadow-sm">
      <h5 className="mb-3 text-center">📅 Select a date</h5>

      <DatePicker
        inline
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        minDate={today}
        filterDate={(date) => !isDisabled(date)}
        calendarClassName="w-100"
      />

      <div className="text-center mt-3">
        <button className="btn btn-primary w-100">
          Book Now
        </button>
      </div>
    </div>
  )
}


export default ServiceDate;
