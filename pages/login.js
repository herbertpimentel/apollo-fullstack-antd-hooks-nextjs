import React, { Fragment } from "react";
import Link from "next/link";
import { Card, Form, Button, Input, Icon, Divider } from "antd";

import logo from "../assets/logo.png";

import  FormField from "../components/forms/FormField";


const LoginPage = props => {

  const loading = false;

  const formLoginSubmitHandler = (values) => {

  };

  return (
    <div>
      <div>
        <Card>
          <div style={{ textAlign: "center", padding: "20px" }}>
            <img
              src={logo}
              alt="Logo do Super Simples"
              width="120px"
              height="120px"
            />
          </div>

          <FormLogin onSubmit={formLoginSubmitHandler} submiting={loading} />

          <div style={{ paddingTop: "20px", textAlign: "center" }}>
            <Link to="/ajuda-entrar">Problemas para entrar ?</Link>
          </div>

          <Fragment>
            <Divider>ou</Divider>
            <Link to="/criar-conta">
              <Button size="large" style={{ width: "100%" }}>
                Criar conta
              </Button>
            </Link>
          </Fragment>
        </Card>
      </div>
    </div>
  );
};

const styles = {
  pageStyle: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  formLoginStyle: {
    padding: "30px",
    width: "450px"
  }
};

const FormLogin = Form.create()(
  class extends React.Component {
    onSubmitLogin = e => {
      e.preventDefault();

      this.props.form.validateFields(async (err, values) => {
        if (!err) {
          this.props.onSubmit(values);
        }
      });
    };

    render() {
      return (
        <Form onSubmit={this.onSubmitLogin}>
          <FormField
            name="email"
            form={this.props.form}
            rules={[
              { required: true, message: "Digite o email de acesso" },
              { type: "email", message: "Digite um email válido" }
            ]}
            component={
              <Input
                size="large"
                type="email"
                placeholder="Email"
                prefix={
                  <Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />
                }
              />
            }
          />
          <FormField
            name="senha"
            form={this.props.form}
            rules={[{ required: true, message: "Digite a senha de usuário" }]}
            component={
              <Input
                size="large"
                type="password"
                placeholder="Senha"
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)"  }} />
                }
              />
            }
          />

          <Button
            size="large"
            type="primary"
            htmlType="submit"
            style={{ width: "100%" }}
            loading={this.props.submiting}
          >
            Entrar
          </Button>
        </Form>
      );
    }
  }
);

export default LoginPage;
