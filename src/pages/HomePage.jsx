export default function HomePage() {
  return (
    <div>
      <h1> Accessibility workshop </h1>
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
      <div className="d-grid">
        <button className="btn btn-primary btn-">Not empty Button</button>
      </div>

      <div className="container text-center mt-3">
        <div className="row">
          <div className="col">
            <a
              href="https://www.freepik.com/"
              target="_blank"
              alt="Freepik logo. This url will open on a new window"
            >
              <img
                className="img-thumbnail"
                src="/static/images/background-construction.jpg"
                height={"200px"}
                width={"200px"}
                alt="Background of something under construction"
              />
            </a>
          </div>
          <div className="col">
            <p className="fs-6 text-start">
              Image designed by Freepik. <br />
              Note: by clicking on the image, you will be redirected to an new
              page
            </p>
          </div>
        </div>
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
