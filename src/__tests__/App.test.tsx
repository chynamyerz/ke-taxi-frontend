import { MockedProvider } from "@apollo/react-testing";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";
import { MemoryRouter } from "react-router";
import App from "../App";

describe("App", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(
      <MockedProvider>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </MockedProvider>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
