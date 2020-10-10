import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  function handleLogout()  {
    localStorage.clear();
    props.updateisLoggedIn(false);
  }
  return (
    <>
      <header className="header mx-0 ">
        <nav
          className="navbar px-3 py-3 has-background-grey-light"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-brand mx-3 flex-center">
            <Link className="has-text-black-bis  is-size-5" to="/">
              COMMUNITY FORUM
            </Link>
          </div>

          <div id="navbarBasicExample" className="navbar-menu flex-center">
            {props.updateisLoggedIn && !props.isLoggedIn ?   (
              <div className="navbar-item">
                <div className="buttons">
                  <Link className="button is-info" to="/register">
                    Sign Up
                  </Link>
                  <Link className="button is-light" to="/login">
                    Login
                  </Link>
                </div>
              </div>
            ) : (
              <>
                <div className="navbar-item input-box ">
                  <input placeholder="Search Questions" className="py-2" />
                </div>
                <div className="navbar-item">
                  <div className="buttons">
                    <Link
                      className="button is-info"
                      onClick={() => handleLogout()}
                      to="/"
                    >
                      Log Out
                    </Link>
                  </div>
                </div>
              </>
            )}
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
