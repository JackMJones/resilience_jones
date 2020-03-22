/*** IMPORTS ***/
// Module imports
import React, { Component, Fragment } from "react"
import { Link } from "react-router-dom"
import Icon from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/fontawesome-free-solid"

// Page wrapper
import Page from "./Page"

// Logo image
import logo from "../../img/logo.svg"
/*** [end of imports] ***/

export default class Home extends Component {
  render() {

    const subheader = (
      <div className="subheader-home">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="WAGL" />
          </Link>
        </div>
        <div className="subheader-line">Global Community, Local Mutual Aid</div>
      </div>
    )

    const footer = (
      <Fragment>
        <div className="button-label">Post a request</div>
        <Link to="/requester" className="btn footer-btn request-btn">
          Get Help
        </Link>
      </Fragment>
    )

    return (
      <Page className="home-page" subheader={subheader} >
        <div className="home-buttons">
          <Link to="/donor" className="btn home-btn round-btn donate-btn">
            <span>View Jobs</span>
          </Link>
          <Link to="/feed/doer" className="btn home-btn round-btn do-btn">
            <span>Request Help</span>
          </Link>
        </div>
        <Link to="/about" className="about-link">
            About
        </Link>

      </Page>
    )
  }
}
