import { NextPage } from 'next';
import Layout from '../components/common/Layout/Layout';
import BarData from './Charts/Bar/bar';
import ChartsDoughnut from './Charts/Doughnut/doughnut';

const Graph: NextPage = () => {
  return (
    <Layout>
      <div className='container display'>
        <BarData/>;
        <ChartsDoughnut/>
      </div>
    </Layout>
  );
};

export default Graph;
