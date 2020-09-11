import React from "react";
import { render, cleanup } from "@testing-library/react";
import App from "./App";

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

afterEach(cleanup);

// save the snapshot of a given component to compare code changes
// when code has changed, test case will fail and shows discrepancies
// press 'u' to update snapshot to PASS the test again
it("should takeeee a snapshot", () => {
  const { asFragment } = render(<App />);
  expect(asFragment(<App />)).toMatchSnapshot();
}); // end it();

