import { FC, ReactNode } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

type LayoutProps = {
  children: ReactNode;
};

const bgImage = "/assets/images/bg.png";

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div
      className=""
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.95)), url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
      }}
    >
      <Header />
      <main className="pt-[124px] pb-24 min-h-screen">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
