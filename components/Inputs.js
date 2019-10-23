import React from "react";
import { Checkbox } from "antd";

import FormField from "./forms/FormField";

export { default as HiddenInputField } from "./forms/HiddenInputField";
export { default as TextInputField } from "./forms/TextInputField";
export { default as TextAreaInputField } from "./forms/TextAreaInputField";
export { default as TreeSelectInputField } from "./forms/TreeSelectInputField";
export { default as DateInputField } from "./forms/DateInputField";
export { default as CurrencyInputField } from "./forms/CurrencyInputField";
export { default as DropdownInputField } from "./forms/DropdownInputField";
export {
  default as AutoCompletarInputField
} from "./forms/AutoCompletarInputField";
export { default as SearchInputField } from "./forms/SearchInputField";
export { default as SwitchInputField } from "./forms/SwitchInputField";
export { default as ColorInputField } from "./forms/ColorInputField";
export { default as RadioInputField } from "./forms/RadioInputField";

export const CheckBoxInputField = props => {
  return (
    <FormField
      {...props}
      valuePropName="checked"
      component={<Checkbox>{props.text}</Checkbox>}
    />
  );
};
