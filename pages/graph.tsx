import { NextPage } from 'next';
import Layout from '../components/common/Layout/Layout';
import BarData from './Charts/Bar/bar';

const Graph: NextPage = () => {
  return (
    <Layout>
      <div className='container'>
        <BarData/>;
      </div>
    </Layout>
  );
};

export default Graph;
