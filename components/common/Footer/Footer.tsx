import { FC } from 'react';

const links = [
  { to: '/terms', label: 'Termes et Conditions' },
  { to: '/privacy', label: 'Politiques de Confidentialité' },
];

const Footer: FC = () => {
  return (
    <footer className='container py-8'>
      <div className='flex flex-col md:flex-row items-center justify-between'>
        <div className='md:flex-[2]'>
          <p className='mb-4'>La compagnie © {new Date().getFullYear()} Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
