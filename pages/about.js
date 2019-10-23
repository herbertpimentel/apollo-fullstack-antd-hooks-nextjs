import Link from 'next/link'
import Layout from '../components/Layout';

export default () => (
  <Layout>

  <div className="minha-rola">
    This is a static page goto 
    <Link href='/'>
      <a>dynamic</a>
    </Link>
    page.
  </div>
  </Layout>
)
