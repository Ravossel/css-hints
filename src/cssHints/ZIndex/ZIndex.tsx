import "./style.css";

export const ZIndex = () => {
  return (
    <body>
      <video width={1280} height={720} controls>
        <source src="https://www.youtube.com/live/ovbigVxmTQU?si=8z4BMxzcEPU2WBrA" />
      </video>
      <div className="item" id="item1"></div>
      <div className="item" id="item2"></div>
      <div className="item" id="item3"></div>
      <div className="item" id="item4"></div>
    </body>
  );
};
