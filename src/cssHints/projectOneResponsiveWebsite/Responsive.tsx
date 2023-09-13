import "./style.css";

export const Responsive = () => {
  return (
    <body>
      <header className="header">
        <nav className="nav-bar">
          <a className="a" href="#home">
            {" "}
            <i className="i"></i> <span className="span">home</span>
          </a>
          <a className="a" href="#about">
            {" "}
            <i className="i"></i> <span className="span">about</span>
          </a>
          <a className="a" href="#gallery">
            {" "}
            <i className="i"></i>{" "}
            <span className="span">gallery</span>
          </a>
          <a className="a" href="#projects">
            {" "}
            <i className="i"></i>{" "}
            <span className="span">projects</span>
          </a>
          <a className="a" href="#contact">
            {" "}
            <i className="i"></i>{" "}
            <span className="span">contact</span>
          </a>
        </nav>
      </header>
      <div className="container">
        <section id="home" className="main-section">
          home page
        </section>
        <section id="about" className="main-section">
          about page
        </section>
        <section id="gallery" className="main-section">
          gallery page
        </section>
        <section id="projects" className="main-section">
          projects page
        </section>
        <section id="contact" className="main-section">
          contact page
        </section>
      </div>
    </body>
  );
};
