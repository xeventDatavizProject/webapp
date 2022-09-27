import { FC, ReactNode } from 'react';
import Image from 'next/image';



type LayoutProps = {
  children: ReactNode;
};

const bgImage = '/assets/images/bg.png';

const Card: FC<LayoutProps> = ({ children }) => {
  return (
    <div className='w-full px-4 flex-1'>
            <div className='flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 h-2/4'>
              <Image
                priority
                src='/assets/images/DataAndSettings_Monochromatic.png'
                className=''
                height={144}
                width={144}
                alt='Data And Settings'
              />
            </div>
            <p className='flex flex-col h-4/6'>
              <span className='mx-auto'>Visualiser les requêtes les plus fréquentes</span>
            </p>
          </div>
  );
};

export default Card;
