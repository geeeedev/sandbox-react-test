import React from "react";
import { render, cleanup } from "@testing-library/react";
import TestElements from "./components/TestElements";
import '@testing-library/jest-dom/extend-expect'; 


afterEach(cleanup);

it("counter should equal to 0", () => {
    const { getByTestId } = render(<TestElements />);
    expect(getByTestId('counter')).toHaveTextContent(0);
}); // end it();

it('btn UP should be enabled', () =>{
    const { getByTestId } = render(<TestElements />);
    expect(getByTestId('button-up')).not.toHaveAttribute('disabled');
    expect(getByTestId('button-up')).not.toBeDisabled();

}); // end it();

it('btn DOWN should be disabled', () =>{
    const { getByTestId } = render(<TestElements />);
    expect(getByTestId('button-down')).toHaveAttribute('disabled');
    expect(getByTestId('button-down')).toBeDisabled();

}); // end it();