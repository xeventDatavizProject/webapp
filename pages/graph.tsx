import CheckListType from 'components/graph/checkbox';
import Donuts from 'components/graph/Donuts';
import { FC } from 'react';
import Layout from '../components/common/Layout/Layout';

const GraphPage: FC = () => {
  return (
    <Layout>
      <Donuts />
      <div className='pt-[15vh]'>
        <CheckListType select={true} show={true} deleted={true} update={true} alter={true} insert={true} />
      </div>
    </Layout>
  );
};
export default GraphPage;


