import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }
  isActive = (url) => {
    if (typeof window !== "undefined") {
      return (
        window.location.pathname == url ||
        window.location.pathname == url + "/"
      );
    }
    return false
  }
  
  render() {
    const links = [
      {
        url: "/projects",
        text: "Projects",
        className: this.isActive("/projects")
          ? "nav-link "
          : "nav-link text-secondary"
      },
      {
        url: "/about",
        text: "About us",
        className: this.isActive("/about")
          ? "nav-link "
          : "nav-link text-secondary"
      },
      {
        url: "/contact",
        text: "Contact",
        className: this.isActive("/contact")
          ? "nav-link "
          : "nav-link text-secondary"
      }
    ];
    
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex flex-column">
        <a
          className="navbar-brand p-3 romix-logo"
          style={{ fontSize: "2rem" }}
          href="/"
        >
          Romix
        </a>
        <div className="d-flex flex-row justify-content-center w-100">
          {links.map(link => (
            <Link key={link.text} className={link.className} to={link.url}>
              {link.text}
            </Link>
          ))}
        </div>
      </nav>
    );
  }
}

export default Navbar
