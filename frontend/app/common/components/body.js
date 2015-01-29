// IMPORTS =========================================================================================
let React = require("react");
let Router = require("react-router");
let {Link, RouteHandler} = Router;
let Reflux = require("reflux");

// EXPORTS =========================================================================================
module.exports = React.createClass({
  render() {
    return (
      <div>
        <header>
          <nav className="navbar navbar-default">
            <div className="container">
              <div className="navbar-header">
                <a className="navbar-brand" href="#">Dashboard</a>
              </div>
              <ul className="nav navbar-nav">
                <li><Link to="home">Home</Link></li>
                <li><Link to="robots-index">Robots</Link></li>
                <li><Link to="about">About</Link></li>
              </ul>
            </div>
          </nav>
        </header>

        <main className="container">
          <RouteHandler/>
        </main>
      </div>
    );
  }
});