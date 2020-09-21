import React from 'react';
import { connect } from 'react-redux';

const TestRedux = ({counter, dispatch}) => {

 const increment = () => dispatch({ type: 'INCREMENT' });
 const decrement = () => dispatch({ type: 'DECREMENT' });
  
 return (
  <>
    <h1 data-testid="counter">{ counter }</h1>
    <button data-testid="button-up"   onClick={increment}>Up</button>
    <button data-testid="button-down" onClick={decrement}>Down</button>
    {/* <button data-testid="button-down" onClick={() => dispatch({ type: 'DECREMENT' })}>Down</button> */}
  </>
  );
};
  
export default connect(state => ({ counter: state.count }))(TestRedux);

/**
 * minimal react-redux:
 * instead of building a mapStateToProps() and mapDispatchToProps() separately
 * we skip the mapStateToProps() and stuff its logic directly into connect(). And
 * we skip the mapDispatchToProps() and just use the dispatch() by Redux default
 * to dispatch actions to the store reducer
 *  */ 
