import _ from "lodash";
import React, { Component } from "react";
import { AutoComplete, Input, Icon } from "antd";
import { getValue } from "../../js/util";

class AutoCompletarInput extends Component {
  state = { consultando: false, dataSource: [] };

  buscarOpcoes = value => {
    this.setState({ consultando: true });
    // this.context
    //   .buscarValoresAutoCompletar(this.props.tabela, this.props.campo, value)
    //   .then(values => this.setState({ consultando: false, dataSource: values }))
    //   .catch(err => this.setState({ consultando: false }));
  };

  render() {
    const fieldValue = getValue(this.props.data, this.props.name);

    return (
      <AutoComplete
        style={{ width: "100%" }}
        defaultValue={fieldValue}
        dataSource={_.map(this.state.dataSource, item => (
          <AutoComplete.Option
            key={item[this.props.campo]}
            text={item[this.props.campo]}
          >
            {item[this.props.campo]}
          </AutoComplete.Option>
        ))}
        onSearch={_.debounce(value => {
          // isso atualiza o bind o com o valor digitado
          this.props.form.setFieldsValue({
            [this.props.name]: value
          });

          this.buscarOpcoes(value);
        }, 400)}
        onSelect={selectedValue =>
          this.props.form.setFieldsValue({ [this.props.name]: selectedValue })
        }
      >
        <Input
          autoComplete="off"
          type="text"
          style={{ width: "100%" }}
          placeholder={this.props.placeholder}
          suffix={
            <span>
              {this.state.consultando ? (
                <Icon style={{ opacity: 0.4 }} type="loading" />
              ) : (
                <Icon
                  style={{ opacity: 0.4, cursor: "pointer" }}
                  onClick={() => this.buscarOpcoes("")}
                  type="thunderbolt"
                />
              )}
            </span>
          }
        />
      </AutoComplete>
    );
  }
}

// AutoCompletarInput.contextType = SessaoContext;

export default AutoCompletarInput;
