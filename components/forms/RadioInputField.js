import _ from "lodash";
import React, { Component, Fragment } from "react";
import { Radio } from "antd";

import FormField from "./FormField";

class RadioInputField extends Component {
  render() {
    const ChildComponent = this.props.component;

    return (
      <FormField
        {...this.props}
        component={
          <Radio.Group>
            {_.map(this.props.list, item => {
              return (
                <Radio
                  value={
                    this.props.valueFieldName
                      ? item[this.props.valueFieldName]
                      : item
                  }
                  key={
                    this.props.valueFieldName
                      ? item[this.props.valueFieldName]
                      : item
                  }
                  style={this.props.radioStyle}
                >
                  <Fragment>
                    {this.props.component && <ChildComponent {...item} />}

                    {this.props.textFieldName && (
                      <span>{item[this.props.textFieldName]}</span>
                    )}
                  </Fragment>
                </Radio>
              );
            })}
          </Radio.Group>
        }
      />
    );
  }
}
export default RadioInputField;
