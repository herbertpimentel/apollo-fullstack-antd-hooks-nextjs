import React, { Component } from "react";
import { Input } from "antd";

import FormField from "./FormField";

class TextAreaInputField extends Component {
  render() {
    return (
      <FormField
        {...this.props}
        component={
          <Input.TextArea
            style={{ width: "100%" }}
            placeholder={this.props.placeholder}
            rows={4}
            autosize={{ minRows: 4, maxRows: 10 }}
            {...this.props}
          />
        }
      />
    );
  }
}
export default TextAreaInputField;
