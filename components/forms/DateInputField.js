import moment from "moment";

import React, { Component } from "react";
import { DatePicker } from "antd";

import FormField from "./FormField";
import { getValue } from "../../js/util";

class DateInputField extends Component {
  render() {
    const rawFieldValue = getValue(this.props.data, this.props.name);

    const fieldValue = rawFieldValue
      ? moment(rawFieldValue, "YYYY-MM-DD")
      : null;

    return (
      <FormField
        {...Object.assign({}, this.props, { initialValue: fieldValue })}
        component={
          <DatePicker
            style={{ width: "100%" }}
            placeholder={this.props.placeholder}
            format="DD/MM/YYYY"
          />
        }
      />
    );
  }
}

export default DateInputField;
