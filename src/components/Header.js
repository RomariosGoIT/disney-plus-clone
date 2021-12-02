import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      <NavMenu>
        <a href="/#">
          <img alt="home-icon" src="/images/home-icon.svg" />
          <span>Home</span>
        </a>
        <a href="/#">
          <img alt="home-icon" src="/images/search-icon.svg" />
          <span>Search</span>
        </a>
        <a href="/#">
          <img alt="home-icon" src="/images/watchlist-icon.svg" />
          <span>Watchlist</span>
        </a>
        <a href="/#">
          <img alt="home-icon" src="/images/original-icon.svg" />
          <span>Originals</span>
        </a>
        <a href="/#">
          <img alt="home-icon" src="/images/movie-icon.svg" />
          <span>Movies</span>
        </a>
        <a href="/#">
          <img alt="home-icon" src="/images/series-icon.svg" />
          <span>Series</span>
        </a>
      </NavMenu>
      <UserImg src="https://lh3.googleusercontent.com/ogw/ADea4I7zzZwBPoP_YJGMFvpfkwn4kMzsMbwd_FYMJwuGgg=s32-c-mo" />
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  height: 70px;
  background-color: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      height: 20px;
    }

    span {
      text-transform: uppercase;
      font-size: 13px;
      letter-spacing: 1.42px;
    }
  }
`;

const UserImg = styled.img`
  width: 48px;
  hight: 48px;
  border-radius: 50%;
`;
