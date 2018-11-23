import React from "react";
import ReactDOM from "react-dom";
import App from "../App";

it("renders without crashing", () => {
    const div = document.createElement("div");
    const actual = ReactDOM.render(<App/>, div);
    expect(div).toMatchSnapshot();
    ReactDOM.unmountComponentAtNode(div);
});
