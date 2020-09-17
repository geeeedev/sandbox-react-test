import React from 'react';
import { render, cleanup, fireEvent, waitForElement, getByTestId } from '@testing-library/react';
import TestAsync from './components/TestAsync';
import "@testing-library/jest-dom/extend-expect";


afterEach(cleanup);

it('Test Increment Counter after 0.5 sec', async() => {                 //async()
    const { getByTestId , getByText } = render(<TestAsync />);
    fireEvent.click(getByTestId('button-up'));
    // expect(getByTestId('counter')).toHaveTextContent('1');
    const delayedCounter = await waitForElement(()=>getByText('1'))   //await()
    expect(delayedCounter).toHaveTextContent('1');
});