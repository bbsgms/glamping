import React, { Component } from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import {FaAlignRight} from 'react-icons/fa'

export default class Navbar extends Component {
    state = {
      isOpen: false
    };
    handleToggle = () => {
      this.setState({ isOpen: !this.state.isOpen });
    };
    render() {
      return (
        <nav classname="navbar">
          <div className="nav-center">
            <div className="nav-header">
              <Link to="/">
                <img src={logo} alt="Glamping" />
              </Link>
              <button
                type="button"
                className="nav-btn"
                onClick={this.handleToggle}
              >
                <FaAlignRight className="nav-icon" />
              </button>
            </div>
            <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
            <li>
              <Link to="/">Главная</Link>
            </li>
            <li>
              <Link to="/domiki">Домики</Link>
            </li>
            <li>
              <Link to="/contact">Связаться с нами</Link>
            </li>
        
          </ul>

          </div>
        </nav>
      );
    }
  }

  