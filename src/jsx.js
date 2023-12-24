import React from "react";

const jsx = () => {
  const element = <div id="root">Hello Word</div>;
  const elementR = React.createElement("div", { id: "root" }, "Hello Word");
  const element2 = (
    <div>
      <span>Hello</span> <span>World!</span>
    </div>
  );

  const element2R = React.createElement("div", {
    children: [
      React.createElement("span", null, "Hello"),
      " ",
      React.createElement("span", null, "World"),
    ],
  });
  return (
    // return thì bắt buộc chỉ có duy nhất một phần tử bọc ngoài
    <div>
      <div className="heading" id="heading">
        Heading
      </div>
      <div className="heading2">Heading2</div>
    </div>
  );
};

export default jsx;
