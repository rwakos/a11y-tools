export default function HomePage() {
  return (
    <div>
      <h1> Accessibility workshop </h1>
      <p> With this demo we are going to tackle the top failures from 2024</p>
      <ul>
        <li>Low contrast text</li>
        <li>Missing alternative text for images</li>
        <li>Missing form input labels</li>
        <li>Empty links</li>
        <li>Empty buttons</li>
        <li>Missing document language</li>
      </ul>
      <button>Button</button>

      <img
        src="/static/images/background-construction.jpg"
        height={"250px"}
        width={"250px"}
        alt="Background of something under construction"
      />
      <a></a>

      <div>
        <a href="https://www.freepik.com/" target="_blank">
          designed by Freepik, if you click here it will take to an external
          page
        </a>
      </div>
    </div>
  );
}

/*
https://theadminbar.com/accessibility-weekly/opening-links-in-new-tabs-or-not/
3.2 Predictable, a top-level category that says you need to make Web pages appear and operate in 
predictable ways, or…
The AAA success criterion, 
3.2.5 Change on Request. This success criterion requires that context changes are 
initiated only by a user request or a mechanism is available to turn off such changes. New browser tabs or windows are considered context changes.
*/
