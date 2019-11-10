const fakeTest = () => 1 + 1;

describe("App", () => {
  it("should be pass", () => {
    expect(fakeTest()).toBe(2);
  });
});
