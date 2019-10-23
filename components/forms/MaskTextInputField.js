import React, { Component } from "react";
import { Input } from "antd";

import MaskedInput from "react-text-mask";

import FormField from "./FormField";

class MaskTextInputField extends Component {
  render() {
    return (
      <FormField
        {...this.props}
        component={
          <MaskedInput
            mask={this.props.mask}
            placeholder={this.props.placeholder}
            render={(ref, props) => (
              <Input
                type="text"
                innerRef={ref}
                placeholder={props.placeholder}
                {...props}
              />
            )}
          />
        }
      />
    );
  }
}
export default MaskTextInputField;
