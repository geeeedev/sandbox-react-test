import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { initialState, reducer } from './store/reducer';
import TestRedux from './components/TestRedux';
import "@testing-library/jest-dom/extend-expect";

const renderWithRedux = (
    component, 
    { initialState, store = createStore(reducer, initialState) } = {}) => {
        return {
            ...render(<Provider store={store}>{component}</Provider>),
            store,
        }
    }
    
afterEach(cleanup);

it('Checks initial state is equal to 0', () => {
    const { getByTestId } = renderWithRedux(<TestRedux />);
    expect(getByTestId('counter')).toHaveTextContent('0');
})
