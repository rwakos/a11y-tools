export default function InputLabelPage() {
  return (
    <>
      <h1> Missing labels for inputs in form</h1>
      <form>
        <label htmlFor="phone">
          Phone: <input type="number" name="phone" className="p-1" />
        </label>

        <button type="submit" name="button" className="p-1">
          Submit
        </button>
      </form>
    </>
  );
}
