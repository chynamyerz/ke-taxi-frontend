// tslint:disable-next-line:no-implicit-dependencies
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";
import App from "../App";

describe("App", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<App />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
