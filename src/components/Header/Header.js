import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <Nav>
      <Logo src='/images/logo.svg' />
      <NavMenu>
        <a href="/#">
          <img src='/images/home-icon.svg' alt='Icon'/>
          <span>HOME</span>
        </a>
        <a href="/#">
          <img src='/images/search-icon.svg' alt='Icon'/>
          <span>SEARCH</span>
        </a>
        <a href="/#">
          <img src='/images/watchlist-icon.svg' alt='Icon'/>
          <span>WATCHLIST</span>
        </a>
        <a href="/#">
          <img src='/images/original-icon.svg' alt='Icon'/>
          <span>ORIGINALS</span>
        </a>
        <a href="/#">
          <img src='/images/movie-icon.svg' alt='Icon'/>
          <span>MOVIES</span>
        </a>
        <a href="/#">
          <img src='/images/series-icon.svg' alt='Icon'/>
          <span>SERIES</span>
        </a>
      </NavMenu>
      <UserImg src='/images/movie-icon.svg' alt='Icon'/>
    </Nav>
  )
}

export default Header

const Nav = styled.div`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 30px;
  `

const Logo = styled.img`
  width: 80px;
`

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
      height: 20px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.5px;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform: scaleX(0);
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
`

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`