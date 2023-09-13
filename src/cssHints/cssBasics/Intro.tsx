import "./style.css";

export const Intro = () => {
  return (
    <body>
      <h3
        style={{
          color: "brown",
          backgroundColor: "aquamarine",
          border: "1px solid green",
        }}
      >
        Welcome to CSS!
      </h3>
      <p
        className="p"
        style={{ color: "palevioletred", backgroundColor: "grey" }}
      >
        You will learn CSS from zero!
      </p>
      <p className="p">I'm another P tag</p>
      <p className="p">I'm another P tag</p>
      <div className="div">I'm a Div tag</div>
    </body>
  );
};
