import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import TestEvents from "./components/TestEvents";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

//Test if increment/decrement events work correctly when click event is fired

it("Test Increment Counter", () => {
  const { getByTestId } = render(<TestEvents />);
  fireEvent.click(getByTestId("button-up"));
  expect(getByTestId("counter")).toHaveTextContent('1');
});

it("Test Decrement Counter", ()=>{
  const { getByTestId} = render(<TestEvents />);
  fireEvent.click(getByTestId('button-down'));
  expect(getByTestId('counter')).toHaveTextContent('-1');
})
