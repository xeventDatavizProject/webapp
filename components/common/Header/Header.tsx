import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import Button from '../Button/Button';


const links = [
  { label: 'Why XDA', to: '/why-xda' },
  { label: 'Solution', to: '/solution' },
  { label: 'Docs', to: '/documentation' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'graph', to: '/graph' },

];

const Header: FC = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  return (
    <>
      <header
        className='py-6 overflow-hidden fixed z-50 w-full top-0 bg-blackish-primary h-20 flex items-center justify-center'
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.55))`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100%',
        }}
      >
        <div className='container w-full flex justify-between items-center'>
          <div className='flex-1 flex items-center hover:cursor-pointer'>
            <Link href='/' passHref>
              <span className='font-bold text-3xl -tracking-[0.12em]'>XDA</span>
            </Link>
          </div>
          <div
            className={`fixed inset-0 bg-blackish-primary transform transition-transform xl:transition-none duration-300 overflow-y-auto overscroll-y-contain xl:overflow-y-visible pt-20 p-4 xl:p-0 xl:relative xl:bg-transparent xl:flex-[2] z-50
            ${isOpen ? 'translate-x-0' : '-translate-x-full xl:translate-x-0'}`}
          >
            <div className='m-auto flex flex-col xl:flex-row justify-center items-center'>
              <ul className='xl:flex-1 flex flex-col xl:flex-row justify-center items-center space-y-6 xl:space-y-0 xl:space-x-8'>
                {links.map((link, index) => (
                  <li key={`Link_${index}`}>
                    <Link href={link.to} passHref>
                      <a
                        className={`relative text-center text-sm
                      ${
                        router.pathname === link.to
                          ? 'font-bold before:absolute before:w-full before:h-px before:bg-white before:-bottom-1'
                          : ''
                      }`}
                      >
                        {link.label}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className='mt-20 xl:mt-0 xl:flex-1 flex justify-end items-center space-x-4'>
                <>
                  <Button.Outline
                    onClick={() => {
                      setShowLoginModal(true);
                      setIsOpen(false);
                    }}
                  >
                    Login
                  </Button.Outline>
                  <Button
                    onClick={() => {
                      setShowLoginModal(true);
                      setIsOpen(false);
                    }}
                  >
                    Register
                  </Button>
                </>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
