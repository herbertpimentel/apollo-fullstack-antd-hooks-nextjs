import { withApollo } from '../apollo/client'
import UserList from '../components/UserList'
import { DatePicker } from 'antd'
import Layout from '../components/Layout'

const Index = props => {
  return (
    <Layout>
      <DatePicker />
     <UserList />
    </Layout>
  )
}

export default withApollo(Index)
