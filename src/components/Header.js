import React from "react";

function Header() {
  return (
    <>
      <header className="header mx-0">
        <nav
          className="navbar px-3 py-3 has-background-grey-light"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-brand mx-3 flex-center">
            {/* change color */}
            <h1 className="has-text-black-bis  is-size-5 ">COMMUNITY FORUM</h1>
          </div>

          <div id="navbarBasicExample" className="navbar-menu flex-center">
            <div className="navbar-item input-box">
              <input placeholder="Search Questions" className="py-2" />
            </div>

            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-info">
                  <strong>Sign up</strong>
                </a>
                <a className="button is-light">Log in</a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
