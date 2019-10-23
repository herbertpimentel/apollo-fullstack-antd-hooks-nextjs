import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { Form, Tooltip, Icon } from "antd";

const FormField = props => {
  const { getFieldDecorator, getFieldError } = props.form;

  const fieldName = props.name;

  // identifica se há erro para o campo
  const formFieldError = getFieldError(fieldName);

  const valueOfField = _.get(props.data, fieldName);
  // console.log("fieldName", fieldName, "valueOfField", valueOfField);

  return (
    <Form.Item
      validateStatus={formFieldError ? "error" : ""}
      label={
        props.label && (
          <span>
            <span>{props.label}</span>
            {props.hint && (
              <Tooltip title={props.hint}>
                <Icon type="question-circle-o" style={{ marginLeft: "4px" }} />
              </Tooltip>
            )}
          </span>
        )
      }
    >
      {getFieldDecorator(fieldName, {
        initialValue: valueOfField,
        ...props
      })(props.component)}
    </Form.Item>
  );
};

FormField.propTypes = {
  form: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
  data: PropTypes.any
};

export default FormField;
