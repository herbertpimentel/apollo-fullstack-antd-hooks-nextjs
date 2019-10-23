import React, { Component } from "react";
import SketchPicker from "react-color";
import { Popover } from "antd";
import FormField from "./FormField";
import { getValue } from "../../js/util";

class ColorInputField extends Component {
  state = { cor: null };

  componentDidMount() {
    this.setState({ cor: getValue(this.props.data, this.props.name) });
  }

  handleChange = color => {
    this.props.form.setFieldsValue({ [this.props.name]: color.hex });
    this.setState({ cor: color.hex });
  };

  render() {
    const valueOfField = this.state.cor;

    return (
      <FormField
        {...this.props}
        component={
          <Popover
            trigger={["click"]}
            placement={this.props.placement}
            content={
              <SketchPicker color={valueOfField} onChange={this.handleChange} />
            }
            title="Escolha uma cor"
          >
            <div
              style={{
                border: "1px solid rgb(217, 217, 217)",
                padding: "2px",
                width: "40px",
                height: "40px"
              }}
            >
              <div
                style={{
                  height: "34px",
                  width: "34px",
                  backgroundColor: valueOfField
                }}
              />
            </div>
          </Popover>
        }
      />
    );
  }
}
export default ColorInputField;
