import { getCurrentUser } from 'api/user';
import LoginModal from 'components/login/LoginModal/LoginModal';
import RegisterModal from 'components/register/RegisterModal/RegisterModal';
import { useAppDispatch, useAppSelector } from 'hooks';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import { logoutAuth } from 'store/auth/reducer';
import Button from '../Button';

const links = [
  { label: 'Why XDA', to: '/why-xda' },
  { label: 'Solution', to: '/solution' },
  { label: 'Docs', to: '/documentation' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Graph', to: '/graph' },
  { label: 'Dashboard', to: '/dashboard', protected: true },
];

const Header: FC = () => {
  const router = useRouter();
  const authState = useAppSelector(state => state.AuthReducer);
  const usersState = useAppSelector(state => state.UsersReducer);
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const logout = () => dispatch(logoutAuth());

  useEffect(() => {
    const fetchCurrentUser = async () => {
      const userID = localStorage.getItem('userId');
      userID && (await dispatch(getCurrentUser(userID)));
    };

    fetchCurrentUser();
  }, []);

  return (
    <>
      <LoginModal
        show={showLoginModal}
        onClickForgot={() => {
          setShowLoginModal(false);
          setShowForgotModal(true);
        }}
        onClose={() => setShowLoginModal(false)}
      />
      <RegisterModal
        show={showRegisterModal}
        onClickConnect={() => {
          setShowRegisterModal(false);
          setShowLoginModal(true);
        }}
        onClose={() => setShowRegisterModal(false)}
      />
      <header
        className='overflow-hidden fixed z-50 w-full top-0 flex items-center justify-center overflow-hidden'
        style={{
          // backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.55))`,
          // backgroundRepeat: 'no-repeat',
          backgroundSize: '100%',
        }}
      >
        <div className='py-4 lg:py-8 container w-full flex justify-between items-center'>
          <div className='hover:cursor-pointer'>
            <Link href='/' passHref>
              <span className='font-bold text-4xl font-poppins'>XDA</span>
            </Link>
          </div>
          <div
            className={`fixed xl:static left-full bg-blackish-primary transform transition-transform xl:transition-none duration-300 overflow-y-auto overscroll-y-contain xl:overflow-y-visible p-4 xl:p-0 xl:bg-transparent z-50
            `}
          >
            {/* ${isOpen ? 'translate-x-0' : '-translate-x-full xl:translate-x-0'}  */}
            <div className='m-auto flex flex-col xl:flex-row justify-center items-center'>
              <ul className='flex flex-col xl:flex-row justify-center items-center space-y-6 xl:space-y-0 xl:space-x-8'>
                {links.map((link, index) => {
                  if (link.protected && !authState.isLoggedIn) return null;
                  return (
                    <li key={`Link_${index}`}>
                      <Link href={link.to} passHref>
                        <a
                          className={`relative text-center
                      ${router.pathname === link.to
                              ? 'font-bold before:absolute before:w-full before:h-px before:bg-white before:-bottom-1'
                              : ''
                            }`}
                        >
                          {link.label}
                        </a>
                      </Link>
                    </li>
                  );
                })}
              </ul>
              {authState.isLoggedIn ? (
                <Button onClick={logout} className='ml-10'>
                  Logout
                </Button>
              ) : (
                <Button href='/login' className='ml-10'>
                  Login
                </Button>
              )}
              {/* <div className='mt-20 xl:mt-0 xl:flex-1 flex justify-end items-center space-x-4'>
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
                      setShowRegisterModal(true);
                      setIsOpen(false);
                    }}
                  >
                    Register
                  </Button>
                </>
              </div> */}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
