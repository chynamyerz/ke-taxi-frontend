import * as React from "react";
import { MemoryRouter } from "react-router-dom";
import App from "../App";

describe("App", () => {
  it("should be defined", () => {
    expect(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    ).toBeDefined();
  });
});
