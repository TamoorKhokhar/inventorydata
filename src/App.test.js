import App from "./App";
import React from "react";
import { shallow } from "enzyme";

// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test("app is working correctly", () => {
  const component = shallow(<App />);
  const childComponent = component.find("Header").exists();
  expect(childComponent).toBe(true);
});
test("LandingPage is working correctly", () => {
  const component = shallow(<App />);
  const childComponent = component.find("LandingPage").exists();
  expect(childComponent).toBe(true);
});
test("SelectedStoresProduct is working correctly", () => {
  const component = shallow(<App />);
  const childComponent = component.find("SelectedStoresProduct").exists();
  expect(childComponent).toBe(true);
});
