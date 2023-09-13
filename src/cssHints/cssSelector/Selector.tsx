import "./style.css";

export const Selector = () => {
  return (
    <body>
      <h2 className="h2">CSS Selectors</h2>
      <nav className="nav">This is our Website navigation!!</nav>
      <p className="p">Paragraph One</p>
      <p className="p">Paragraph Another</p>
      <p className="p bg-orange" id="para-two">
        Paragraph Two
      </p>
      <p className="p text-purple">Paragraph Three</p>
      <div className="div">
        <p className="text-purple bg-orange p">Paragraph Four</p>
      </div>
      <footer className="footer">This is Website footer!</footer>
    </body>
  );
};
