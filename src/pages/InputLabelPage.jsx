export default function InputLabelPage() {
  return (
    <>
      <h1> Missing labels for inputs in form</h1>
      <form>
        Phone: <input type="number" name="phone" className="p-1" />
        <button type="submit" name="button" className="p-1">
          Submit
        </button>
      </form>
    </>
  );
}
