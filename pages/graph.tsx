import Donuts from 'components/graph/LogChart';
import { FC } from 'react';
import Layout from '../components/common/Layout/Layout';

const GraphPage: FC = () => {
  return (
    <Layout>
      <div className='container'>
        <Donuts/>
      </div>
    </Layout>
  );
};
export default GraphPage;
