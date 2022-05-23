import { FormattedDate, FormattedMessage, FormattedNumber } from "react-intl";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header--content">
          <span>
            <FormattedMessage id="general.my-app" />
          </span>
        </div>
      </header>
      <main className="App-main">
        <section>
          <h1>
            <FormattedMessage id="section1.title" />
          </h1>
          <p>
            <FormattedMessage id="section1.description" />
          </p>
          <p>
            <FormattedMessage id="general.post-date" />:{" "}
            <FormattedDate
              value={new Date()}
              year="numeric"
              month="long"
              day="2-digit"
            />
          </p>
          <p>
            <FormattedMessage id="general.post-date" />:{" "}
            <FormattedDate
              value={new Date()}
              year="numeric"
              month="numeric"
              day="numeric"
            />
          </p>
        </section>
        <section>
          <h1>
            <FormattedMessage id="section2.title" />
          </h1>
          <p>
            <FormattedMessage id="section2.description" />
          </p>
          <p>
            <FormattedMessage id="general.product-value" />:{" "}
            {/* eslint-disable-next-line react/style-prop-object */}
            <FormattedNumber value={59.9} style="currency" currency="BRL" />
          </p>
        </section>
        <section>
          <h1>
            <FormattedMessage id="section3.title" />
          </h1>
          <p>
            <FormattedMessage id="section3.description" />
          </p>
          <p>
            <FormattedMessage id="general.product-value" />:{" "}
            {/* eslint-disable-next-line react/style-prop-object */}
            <FormattedNumber value={19.9} style="currency" currency="USD" />
          </p>
          <p>
            <FormattedMessage id="general.product-value" />:{" "}
            {/* eslint-disable-next-line react/style-prop-object */}
            <FormattedNumber value={19.9} style="currency" currency="EUR" />
          </p>
        </section>
      </main>
      <footer className="App-footer">
        <div className="App-footer--content">
          <div className="footer--content---links">
            <ul>
              <li>
                <a href=".">
                  <FormattedMessage id="footer.about-us" />
                </a>
              </li>
              <li>
                <a href=".">
                  <FormattedMessage id="footer.products" />
                </a>
              </li>
              <li>
                <a href=".">
                  <FormattedMessage id="footer.values" />
                </a>
              </li>
            </ul>
          </div>
          <p className="footer-copywriter">
            <FormattedMessage id="footer.copywriter" />
          </p>
          <span>
            <FormattedMessage id="general.my-app" />
          </span>
        </div>
      </footer>
    </div>
  );
}

export default App;
