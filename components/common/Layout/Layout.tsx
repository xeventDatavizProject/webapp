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
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.95)), url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
      }}
    >
      <Header />
      <main className="pt-[124px] min-h-[95vh]">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
