import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="d-flex justify-content-center aic p-5 border-top">
          <a className="m-2" title="facebook" href="https://facebook.com">
            <img
              src={facebook}
              alt="Facebook"
              style={{ width: "1.5em", height: "1.5em" }}
            />
          </a>
          <a className="m-2" title="twitter" href="https://twitter.com">
            <img
              className=""
              src={twitter}
              alt="Twitter"
              style={{ width: "1.5em", height: "1.5em" }}
            />
          </a>
          <a className="m-2" title="instagram" href="https://instagram.com">
            <img
              src={instagram}
              alt="Instagram"
              style={{ width: "1.5em", height: "1.5em" }}
            />
          </a>
          <a className="m-2" title="vimeo" href="https://vimeo.com">
            <img
              src={vimeo}
              alt="Vimeo"
              style={{ width: "1.5em", height: "1.5em" }}
            />
          </a>
      </footer>
    );
  }
}

export default Footer
