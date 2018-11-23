import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import {Provider} from "unstated";

it("renders without crashing", () => {
    const div = document.createElement("div");
    const actual = ReactDOM.render(<Provider><App/></Provider>, div);
    expect(div).toMatchSnapshot();
    ReactDOM.unmountComponentAtNode(div);
});
