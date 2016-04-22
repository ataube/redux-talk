/* eslint-disable react/prefer-es6-class */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { incrementBy, asyncIncrement, decrement } from '../actions';

const App = React.createClass({

  propTypes: {
    incrementBy: PropTypes.func.isRequired,
    asyncIncrement: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    counter: PropTypes.number,
  },

  getInitialState() {
    return { inputValue: 1 };
  },

  onInputChange(e) {
    this.setState({ inputValue: e.value });
  },

  onIncrementByClick() {
    const value = parseFloat(this.refs.input.value);
    this.props.incrementBy(!isNaN(value) ? value : 1);
  },

  onIncrementAsyncClick() {
    this.props.asyncIncrement();
  },

  onDecrementClick() {
    this.props.decrement();
  },

  render() {
    const { counter } = this.props;
    const { inputValue } = this.state;
    return (
      <div>
        <div>
          <input ref="input" type="text" defaultValue={inputValue} onChange={this.onInputChange} />
          <button onClick={this.onIncrementByClick}>Increment By</button>
          <button onClick={this.onDecrementClick}>Decrement</button>
          <button onClick={this.onIncrementAsyncClick}>Async Increment</button>
        </div>
        <h1>{counter}</h1>
      </div>
    );
  },
});

const select = (state) => ({ counter: state.counter });
const actions = { incrementBy, asyncIncrement, decrement };

export default connect(select, actions)(App);
