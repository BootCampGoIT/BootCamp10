import React, { Component } from "react";
import axios from "axios";

const withState = (baseURL) => (WrappedComponent) => {
  return class WithHigherOrderComponent extends Component {
    state = {
      message: "Hello hoc!",
      newTutor: {},
    };
    componentDidMount() {
      axios
        .get(`${baseURL}${this.props.tutor.id}.json`)
        .then((response) => this.setState({ newTutor: response.data }));
    }
    render() {
      return <WrappedComponent {...this.props} {...this.state} />;
    }
  };
};

export default withState;
