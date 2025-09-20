import React from 'react'

// Booking component no longer depends on react-router-dom.
// Accepts `id` as a prop when rendered inside Next pages.
export default function Booking({ id }){
  return (
    <div>
      <h2>Book Photographer #{id ?? '—'}</h2>
      <form>
        <label>Choose date
          <input type="date" name="date" />
        </label>
        <label>Choose package
          <select name="package">
            <option>Basic</option>
            <option>Premium</option>
          </select>
        </label>
        <button type="submit">Request booking</button>
      </form>
    </div>
  )
}
