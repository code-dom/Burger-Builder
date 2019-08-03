import React, { Component } from "react";
import Component2 from "./Component2";
import Comp3 from './Comp3'
import { connect } from "react-redux";

export class Component1 extends Component {
  render() {
    return (
      <div style={{ marginTop: "100px" }}>
        <h1>Component1</h1>
        <button type="button" onClick={this.props.buttonClickHandler}>
          Click Me!
        </button>
        {this.props.show ? <Component2 showComp3 = {this.props.show}/> : null}
        <Comp3/>
      </div>
    );
  }
}

const mapPropsToState = state => {
  return {
    show: state.flag
  };
};
const mapDispatchToState = dispatch => {
  return {
    buttonClickHandler: () => dispatch({ type: "SHOWNEXTCOMPONENT" })
  };
};

export default connect(
  mapPropsToState,
  mapDispatchToState
)(Component1);
