import { InputNumber } from "antd";
import React, { Component } from "react";

import FormField from "./FormField";
import { getValue } from "../../js/util";

class CurrencyInputField extends Component {
  render() {
    const rawFieldValue = getValue(this.props.data, this.props.name);

    const fieldValue = rawFieldValue ? parseFloat(rawFieldValue) : null;

    return (
      <FormField
        {...Object.assign({}, this.props, { initialValue: fieldValue })}
        component={
          <InputNumber
            style={{ width: "100%" }}
            decimalSeparator=","
            precision={2}
          />
        }
      />
    );
  }
}

export default CurrencyInputField;
