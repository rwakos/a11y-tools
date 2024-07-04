export default function AltImagePage() {
  return (
    <>
      <h1> Missing Alt Image</h1>

      <div>
        <img
          src="/static/images/product-full-view.jpg"
          height={"225px"}
          width={"300px"}
          alt="Red car for sale"
        />
      </div>
      <div className="mt-2">
        <img src="/static/images/thumb-1.webp" className="ms-2" alt="" />
        <img src="/static/images/thumb-2.webp" className="ms-2" alt="" />
      </div>
    </>
  );
}
