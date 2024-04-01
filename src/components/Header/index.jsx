import React from "react";
import { Link } from "react-router-dom/dist/umd/react-router-dom.development";

import Logo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';

import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.styles';

const Header = () => {
 return <Wrapper>
          <Content>
            <Link to='/'>
              <LogoImg src={Logo} alt='logo' />
            </Link>
            <TMDBLogoImg src={TMDBLogo} alt='tmdb-logo' />
          </Content>
        </Wrapper>
};

export default Header;
