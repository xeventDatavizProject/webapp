import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="container h-[5vh]">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:flex-[2]">
          <p className="mb-4">
            HETIC_MT5 © {new Date().getFullYear()} Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
