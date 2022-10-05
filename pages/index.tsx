import type { NextPage } from 'next';
import Image from 'next/image';
import Button from 'components/common/Button';
import Layout from 'components/common/Layout/Layout';
import { Title, Paragraph } from 'components/common/Typography';
import MonitorImg from 'public/assets/images/monitor.png';
import PerformanceImg from 'public/assets/images/performance-review.png';

const Home: NextPage = () => {
  return (
    <Layout>
      <div className='container'>
        <section className='my-20 md:mb-40 text-center'>
          <Title size='lg' className='mb-2'>
            Xevent DataViz Application
          </Title>
          <Title as='h2' size='subtitle'>
            Survey your DB performance using our open-source plate-form
          </Title>
          <div className='mt-14 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4'>
            <Button>Get started</Button>
            <Button variant='light'>Try the live demo</Button>
          </div>
        </section>
        <section className='grid grid-cols-2 gap-8 items-center'>
          <div className='mx-auto'>
            <Image src={MonitorImg} alt='monitor image' layout='fixed' />
          </div>
          <div>
            <Title as='h3' size='sm' className='mb-4'>
              Simple and easy monitoring of your performances
            </Title>
            <Paragraph>
              Le lorem ipsum est, en pour calibrer Le lorem ipsum est, en imprimerie, une suite de s sans signification utilisée à titre
              provisoire pour calibrer Le lorem ipsum Le lorem ipsum est, en pour calibrer Le lorem ipsum est, en imprimerie, une suite de s
              sans signification utilisée à titre provisoire pour calibrer Le lorem ipsum
            </Paragraph>
          </div>
        </section>
        <section className='grid grid-cols-2 gap-8 mt-20 items-center'>
          <div>
            <Title as='h3' size='sm' className='mb-4'>
              Prevent errors
            </Title>
            <Paragraph>
              Le lorem ipsum est, en pour calibrer Le lorem ipsum est, en imprimerie, une suite de s sans signification utilisée à titre
              provisoire pour calibrer Le lorem ipsum Le lorem ipsum est, en pour calibrer Le lorem ipsum est, en imprimerie, une suite de s
              sans signification utilisée à titre provisoire pour calibrer Le lorem ipsum
            </Paragraph>
          </div>
          <div className='mx-auto'>
            <Image src={PerformanceImg} alt='performance image' layout='fixed' />
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
