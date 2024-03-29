import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

// import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {
  function logout(): any {
    localStorage.removeItem('@finances/authenticated');
  }

  return (
    <Container size={size}>
      <header>
        {/* <img src={Logo} alt="GoFinances" /> */}
        <nav>
          <Link to="/import">Importar</Link>
        </nav>
        <nav>
          <Link onClick={logout} to="/">
            LogOut
          </Link>
          {/* <Link to="/" /> */}
        </nav>
      </header>
    </Container>
  );
};

export default Header;
