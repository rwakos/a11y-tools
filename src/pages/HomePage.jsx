export default function HomePage() {
  return (
    <div>
      <div className="h1"> Accessibility workshop </div>
      <p> With this demo we are going to tackle the top failures from 2024</p>
      <ul>
        <li>Low contrast text</li>
        <li>Missing alternative text for images</li>
        <li>Missing form input labels</li>
      </ul>
      <h2>Also on this page</h2>
      <ul>
        <li>Empty link</li>
        <li>Empty button</li>
        <li>Missing document language</li>
      </ul>
      <button />

      <img
        className="img-thumbnail"
        src="/static/images/background-construction.jpg"
        height={"200px"}
        width={"200px"}
      />
      <a></a>

      <div>
        <a href="https://www.freepik.com/" target="_blank">
          designed by Freepik
        </a>
      </div>
    </div>
  );
}
