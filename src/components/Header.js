import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { auth, provider } from '../firebase';
import { selectUserName, setUserLogin, setSignOut } from '../features/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';

function Header() {
  const dispatch = useDispatch();
  // const userName = true;
  // const userPhoto = useSelector(selectUserPhoto);
  const navigate = useNavigate();
  const userName = useSelector(selectUserName);
  console.log(auth);

  // useEffect(() => {
  //   auth.onAuthStateChanged(async user => {
  //     if (user) {
  //       console.log(user);
  //       dispatch(
  //         setUserLogin({
  //           name: user.displayName,
  //           email: user.email,
  //           photo: user.photoURL,
  //         }),
  //         navigate('/'),
  //       );
  //     } else {
  //       console.log('ERROR');
  //     }
  //   }, []);
  // });

  const signIn = () => {
    auth.signInWithPopup(provider).then(res => {
      let user = res.user;
      dispatch(
        setUserLogin({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        }),
      );
      navigate('/');
    });
  };

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(setSignOut);
      navigate('/login');
    });
  };

  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      {!userName ? (
        <LoginContainer>
          <Login onClick={signIn}>Login</Login>
        </LoginContainer>
      ) : (
        <>
          <NavMenu>
            <a href="/">
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
          <UserImg
            onClick={signOut}
            src="https://lh3.googleusercontent.com/ogw/ADea4I7zzZwBPoP_YJGMFvpfkwn4kMzsMbwd_FYMJwuGgg=s32-c-mo"
          />
        </>
      )}
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
  overflow-x: hidden;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 20px;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      height: 20px;
    }

    span {
      position: relative;
      text-transform: uppercase;
      font-size: 13px;
      letter-spacing: 1.42px;

      &:after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        height: 2px;
        background-color: #fff;
        opacity: 0;
        transform: scaleX(0);
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
    }
    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const UserImg = styled.img`
  width: 48px;
  hight: 48px;
  border-radius: 50%;
  cursor: pointer;
`;

const Login = styled.div`
  cursor: pointer;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  padding: 9px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  background-color: rgba(0, 0, 0, 0.6);
  transition: all 0.5s ease 0s;
  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

const LoginContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;
