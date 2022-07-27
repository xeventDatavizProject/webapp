import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import { FC, useState } from 'react';
import PerformanceCircle from '../common/PerformanceCircle/PerformanceCircle';
import styles from './PerformancesGrid.module.scss';

const PerformanceGrid: FC = () => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.4,
      },
    },
  };

  return (
    <>
      <motion.div className='m-1 h-fit p-4' variants={container} animate='visible' initial='hidden'>
        <AnimateSharedLayout>
          <motion.ul layout className='flex flex-col space-y-10'>
            {[1, 2, 3, 4].map((circle, index) => {
              return <Item key={circle} />;
            })}
          </motion.ul>
        </AnimateSharedLayout>
      </motion.div>
    </>
  );
};

function Item() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  const itemVariant = {
    hidden: { x: 20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <motion.li className='flex flex-col space-y-8 items-center' variants={itemVariant} layout onClick={toggleOpen}>
      <motion.div layout>
        {
          <div className='flex justify-center items-center flex-row space-x-8'>
            <p
              className={`transition-colors ${
                isOpen ? 'text-center text-blue-300 lg:text-left text-lg xl:text-xl' : 'text-center lg:text-left text-lg xl:text-xl'
              }`}
            >
              <span className='block'>High risk</span>
              <span className='block text-opacity-50 font-thin text-xs'>2.222 customers</span>
            </p>
            <div className={`${styles.roundedLogoWrapper}`}>
              <PerformanceCircle alt='Logo' src='/assets/images/bg.png' bgColor='#e3e7ec' />
            </div>
          </div>
        }
      </motion.div>
      <AnimatePresence>{isOpen && <Content />}</AnimatePresence>
    </motion.li>
  );
}

function Content() {
  return (
    <motion.div layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <h1>Hi there</h1>
      <ul>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
        <li>Four</li>
        <li>Five</li>
      </ul>
    </motion.div>
  );
}

export default PerformanceGrid;
