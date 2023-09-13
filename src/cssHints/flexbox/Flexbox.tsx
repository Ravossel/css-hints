import "./style.css";

export const Flexbox = () => {
  return (
    <body>
      <h2 className="h2">Flexbox Demo</h2>
      <div className="flex-container">
        <div className="flex-item" id="flex-item-1">
          Box 1
        </div>
        <div className="flex-item" id="flex-item-2">
          Box 2
        </div>
        <div className="flex-item" id="flex-item-3">
          Box 3
        </div>
      </div>
    </body>
  );
};
