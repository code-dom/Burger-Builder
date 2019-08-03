import React, { Component } from "react";
import { connect } from "react-redux";

export class Com3 extends Component {
  render() {
    return (
      <div>
        {this.props.show ? (
          <h1>
            hello from comp3 and now the value of flag in the state store is
            true
          </h1>
        ) : (
          <h1>
            hello from comp3 and now the value of flag in the state store is
            false
          </h1>
        )}
      </div>
    );
  }
}

const mapPropsToState = state => {
  return {
    show: state.flag
  };
};

export default connect(mapPropsToState)(Com3);
