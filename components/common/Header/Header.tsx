import { getCurrentUser } from "api/user";
import LoginModal from "components/login/LoginModal/LoginModal";
import RegisterModal from "components/register/RegisterModal/RegisterModal";
import { useAppDispatch, useAppSelector } from "hooks";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import { logoutAuth } from "store/auth/reducer";
import Button from "../Button";

const links = [
  { label: "Why XDA", to: "/why-xda" },
  { label: "Solution", to: "/solution" },
  { label: "Docs", to: "/documentation" },
  { label: "Pricing", to: "/pricing" },
  { label: "Graph", to: "/graph" },
  { label: "Dashboard", to: "/dashboard", protected: true },
];

const Header: FC = () => {
  const router = useRouter();
  const authState = useAppSelector((state) => state.AuthReducer);
  const usersState = useAppSelector((state) => state.UsersReducer);
  const dispatch = useAppDispatch();
  const [isHeaderOpen, setIsHeaderOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const logout = () => dispatch(logoutAuth());

  useEffect(() => {
    const fetchCurrentUser = async () => {
      const userID = localStorage.getItem("userId");
      userID && (await dispatch(getCurrentUser(userID)));
    };

    fetchCurrentUser();
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (isHeaderOpen && window.innerWidth >= 1024) {
        setIsHeaderOpen(false);
      }
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [isHeaderOpen]);

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
        className="overflow-hidden fixed z-50 w-full top-0 flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.95))`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
        }}
      >
        <div className="py-4 lg:py-8 container w-full flex justify-between items-center">
          <div className="hover:cursor-pointer">
            <Link href="/" passHref>
              <span className="font-bold text-4xl font-poppins">XDA</span>
            </Link>
          </div>
          <button
            onClick={() => setIsHeaderOpen(!isHeaderOpen)}
            aria-label="menu"
            className="xl:hidden relative w-8 h-6 z-[60]"
          >
            <span
              className={`absolute left-0 transform w-full h-[2px]  transition-transform
              ${
                isHeaderOpen
                  ? "rotate-45 translate-y-0 bg-blue-primary"
                  : "translate-y-1 bg-blue-primary"
              }`}
            />
            <span
              className={`absolute left-0 transform w-full h-[2px] bg-blue-primary transition-transform
              ${
                isHeaderOpen
                  ? "-rotate-45 translate-y-0 bg-blue-primary"
                  : "-translate-y-1 bg-blue-primary"
              }`}
            />
          </button>
          <div
            className={`fixed inset-0 bg-[#000] transform transition-transform xl:transition-none duration-300 overflow-y-auto overscroll-y-contain xl:overflow-y-visible pt-20 p-4 xl:p-0 xl:relative xl:bg-transparent z-50
            ${
              isHeaderOpen
                ? "translate-x-0"
                : "-translate-x-full xl:translate-x-0"
            }`}
          >
            <div className="m-auto flex flex-col xl:flex-row justify-center items-center">
              <ul className="flex flex-col xl:flex-row justify-center items-center space-y-6 xl:space-y-0 xl:space-x-8">
                {links.map((link, index) => {
                  if (link.protected && !authState.isLoggedIn) return null;
                  return (
                    <li key={`Link_${index}`}>
                      <Link href={link.to} passHref>
                        <a
                          className={`relative text-center
                      ${
                        router.pathname === link.to
                          ? "font-bold before:absolute before:w-full before:h-px before:bg-white before:-bottom-1"
                          : ""
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
                <Button onClick={logout} className="md:ml-10 mt-24 md:mt-0">
                  Logout
                </Button>
              ) : (
                <Button href="/login" className="md:ml-10 mt-24 md:mt-0">
                  Login
                </Button>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
