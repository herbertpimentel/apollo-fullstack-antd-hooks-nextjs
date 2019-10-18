import React, { Component } from "react";
import { Input } from "antd";

import FormField from "./FormField";

class HiddenInputField extends Component {
  render() {
    return (
      <div style={{ display: "none" }}>
        <FormField
          {...this.props}
          component={<Input type="hidden" {...this.props} />}
        />
      </div>
    );
  }
}
export default HiddenInputField;
