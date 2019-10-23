import _ from "lodash";
import React, { Component } from "react";
import { Select } from "antd";

import FormField from "./FormField";
import { getValue } from "../../js/util";

class DropdownInputField extends Component {
  render() {
    // tem suporte a executar uma callback quando um item é selecionado
    const onChangeCallbackForm =
      this.props.onChangeValueCallback || (value => null);

    const { list, textPropName, valuePropName } = this.props;

    return (
      <FormField
        {...this.props}
        component={
          <Select
            showSearch={true}
            filterOption={(input, option) =>
              option.props.children
                .toLowerCase()
                .indexOf(input.toLowerCase()) >= 0
            }
            style={{ width: "100%" }}
            defaultValue={getValue(this.props.data, this.props.name)}
            onChange={value => {
              this.props.form.setFieldsValue({ [this.props.name]: value });
              onChangeCallbackForm(value);
            }}
            {...this.props}
          >
            {_.map(list, item => {
              return (
                <Select.Option
                  key={item[valuePropName]}
                  value={item[valuePropName]}
                >
                  {item[textPropName]}
                </Select.Option>
              );
            })}
          </Select>
        }
      />
    );
  }
}

export default DropdownInputField;
