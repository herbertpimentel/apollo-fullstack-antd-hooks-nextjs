import React from "react";
import { Switch } from "antd";

import FormField from "./FormField";

import { getValue } from "../../js/util";

const SwitchInputField = props => {
  
  const valueOfField = getValue(props.data, props.name);

  return (
    <FormField
      {...props}
      component={
        <Switch
          defaultChecked={valueOfField}
          onChange={val =>
            props.form.setFieldsValue({ [props.name]: val })
          }
        />
      }
    />
  );
}

export default SwitchInputField;
