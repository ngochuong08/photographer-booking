export default function BookingPage({ params }){
  const { id } = params
  return (
    <div>
      <h2>Book Photographer #{id}</h2>
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
