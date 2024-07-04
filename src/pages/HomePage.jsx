export default function HomePage() {
  return (
    <div>
      <div className="h1"> Accessibility workshop </div>
      <p> With this demo we are going to tackle the top failures from 2024</p>
      <ul>
        <li>Low contrast text</li>
        <li>Missing alternative text for images</li>
        <li>Missing form input labels</li>
        <li>Empty links</li>
        <li>Empty buttons</li>
        <li>Missing document language</li>
      </ul>
      <button />

      <img
        src="/static/images/background-construction.jpg"
        height={"250px"}
        width={"250px"}
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
