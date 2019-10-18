import { DatePicker } from "antd";

import { withApollo } from "../src/apollo/client";
import UserList from "../src/components/UserList";
import Layout from "../src/components/Layout";

const Index = props => {
  return (
    <Layout>
      <DatePicker />
      <UserList />
    </Layout>
  );
};

export default withApollo(Index);
