import React, { Component } from "react";

import AutoCompletarInput from "./AutoCompletarInput";

import FormField from "./FormField";

class AutoCompletarTextInputField extends Component {
  render() {
    return (
      <FormField
        {...this.props}
        component={<AutoCompletarInput {...this.props} />}
      />
    );
  }
}
export default AutoCompletarTextInputField;
