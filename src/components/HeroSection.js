import React from "react";

function Hero() {
  return (
    <>
      <section className="hero is-info">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Community</h1>
            <h1 className="title">Forum</h1>
          </div>
        </div>
      </section>
      <section className="hero ">
        <div className="hero-body">
          <div className="container ">
            <section className="section">
              <div className="columns">
                <div className="column is-8 is-offset-2">
                  <div className="content is-medium">
                    <h1 className="title">Community Forum</h1>
                    <p>
                      This is a starter template for creating a beautiful,
                      customizable blog with minimal effort. You’ll only have to
                      change a few settings and you’re ready to go. As with all
                      Jigsaw sites, configuration settings can be found in
                      config
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
