import React, { Component } from "react";
import { Input } from "antd";

import FormField from "./FormField";

class SearchInputField extends Component {
  render() {
    return (
      <FormField
        {...this.props}
        component={
          <Input.Search
            style={{ flex: 1 }}
            placeholder={this.props.placeholder}
            onChange={value =>
              this.props.form.setFieldsValue({
                [this.props.name]: value.target.value
              })
            }
          />
        }
      />
    );
  }
}

export default SearchInputField;
