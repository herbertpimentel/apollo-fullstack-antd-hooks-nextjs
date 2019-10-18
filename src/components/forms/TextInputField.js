import React, { Component } from "react";
import { Input } from "antd";

import FormField from "./FormField";

class TextInputField extends Component {
  render() {
    return (
      <FormField
        {...this.props}
        component={
          <Input
            type="text"
            placeholder={this.props.placeholder}
            {...this.props}
          />
        }
      />
    );
  }
}
export default TextInputField;
