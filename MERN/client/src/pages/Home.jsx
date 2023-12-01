export const Home = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>welcome to React app</p>
              <h1>welcome again to React app</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus, delectus, voluptates, illum reiciendis sunt
                excepturi consequatur optio fugit cupiditate et quisquam odio
                mollitia!
              </p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn">connect now</button>
                </a>
                <a href="/services">
                  <button className="btn secondary-btn">learn more</button>
                </a>
              </div>
            </div>
            <div className="hero-image">
              <img
                src="images/home.png"
                alt="coding together"
                width="450"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>

      <section className="section-analytics">
        <div className="container grid grid-four-cols">
          <div className="div1">
            <h2>50+</h2>
            <p>Registered Companies</p>
          </div>
          <div className="div1">
            <h2>100,00+</h2>
            <p>Happy Clients</p>
          </div>
          <div className="div1">
            <h2>500+</h2>
            <p>Well known Devlopers</p>
          </div>
          <div className="div1">
            <h2>24/7</h2>
            <p>Service</p>
          </div>
        </div>
      </section>

      <section className="section-hero">
        <div className="container grid grid-two-cols">
          <div className="hero-image">
            <img
              src="images/design.png"
              alt="coding together"
              width="450"
              height="500"
            />
          </div>
          <div className="hero-content">
            <p>we are here to help you</p>
            <h1>we are here to help you</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus, delectus, voluptates, illum reiciendis sunt excepturi
              consequatur optio fugit cupiditate et quisquam odio mollitia!
            </p>
            <div className="btn btn-group">
              <a href="/services">
                <button className="btn secondary-btn">learn more</button>
              </a>
              <a href="/contact">
                <button className="btn">connect now</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
