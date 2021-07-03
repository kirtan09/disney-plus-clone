import React, { useEffect } from 'react';
import styled from 'styled-components';
import {
  selectUserName,
  selectUserPhoto,
  setSignOut,
  setUserLogin,
} from '../../features/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { auth, provider } from '../../firebase';
import { useHistory, withRouter } from 'react-router-dom';

function Header() {
  const history = useHistory();
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(
          setUserLogin({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
        history.push('/');
      }
    });
  }, [dispatch, history]);

  const signIn = () => {
    auth.signInWithPopup(provider).then((result) => {
      let user = result.user;
      dispatch(
        setUserLogin({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        })
      );
      history.push('/');
    });
  };

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(setSignOut());
    });
    history.push('/login');
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
            <a href="/#">
              <img src="/images/home-icon.svg" alt="Icon" />
              <span>HOME</span>
            </a>
            <a href="/#">
              <img src="/images/search-icon.svg" alt="Icon" />
              <span>SEARCH</span>
            </a>
            <a href="/#">
              <img src="/images/watchlist-icon.svg" alt="Icon" />
              <span>WATCHLIST</span>
            </a>
            <a href="/#">
              <img src="/images/original-icon.svg" alt="Icon" />
              <span>ORIGINALS</span>
            </a>
            <a href="/#">
              <img src="/images/movie-icon.svg" alt="Icon" />
              <span>MOVIES</span>
            </a>
            <a href="/#">
              <img src="/images/series-icon.svg" alt="Icon" />
              <span>SERIES</span>
            </a>
          </NavMenu>
          <LoginContainer>
            <UserImg onClick={signOut} src={userPhoto} alt="Icon" />
          </LoginContainer>
        </>
      )}
    </Nav>
  );
}

export default withRouter(Header);

const Nav = styled.div`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 30px;
  overflow: hidden;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;

  @media only screen and (max-width: 880px) {
    display: none;
  }

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    color: inherit;
    text-decoration: inherit;

    img {
      height: 20px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.5px;
      position: relative;

      &:after {
        content: '';
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform: scaleX(0);
        transform-origin: left;
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
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`;

const Login = styled.div`
  border: 1px solid #f9f9f9;
  padding: 8px 16px;
  border-radius: 4px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0.6);
  transition: all 0.25s ease 0s;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

const LoginContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;
