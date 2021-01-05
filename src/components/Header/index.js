import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import {useMenus} from '../../context/MenuProvider'


const StyledContainer = styled.div`
  background: #b9db0c;
  color: #fff;
  position: sticky;
  top: 0;
  z-index: 1;

  h2 {
    padding: 0.5rem;
  }

  .menu-item {
    display: inline-block;
    padding: 1.2rem 1.3rem;
    text-transform: uppercase;
    color: #000;
    cursor: pointer;
    text-decoration: none;
  }
  .menu-item.active {
    color: #fff;
    background: #99bb0c;
  }
  .menu-item:hover {
    color: #fff;
  }

  .menu-item.apply {
    padding: 0.2rem 1.2rem;
    color: #fff;
    border-radius: 15px;
    background: #55b1e9;
    margin-left: 0.5rem;
  }
  .menu-item.apply:hover {
    background: #1b96c9;
    box-shadow: 0px 1px 5px 0px #888;
  }
  .menu-toggle {
    display: none;
    position: absolute;
    right: 0;
    background: transparent;
    font-size: 3rem;
    line-height: 0;
    padding: 0 0.5rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    cursor: pointer;
  }
  .menu-toggle.closed {
    background: #333;
    padding: 0.5rem;
  }
  .menu-toggle svg {
    stroke-width: 40px;
  }
  .menu-toggle p {
    font-size: 1rem;
  }
  .menu-toggle svg.open {
    stroke-width: 0px;
  }
  .drop-menu {
    display: none;
    flex-direction: column;
    background: #333;
  }
  .drop-menu-item {
    padding: 1.2rem 2rem;
    border-bottom: 1px solid #555;
    text-transform: uppercase;
    cursor: pointer;
    text-decoration: none;
    color: #fff;
  }
  .drop-menu-item.apply {
    background: #55b1e9;
    text-align: center;
    border: none;
  }
  .drop-menu-item.apply:hover {
    background: #1b96c9;
  }
  .drop-menu-item:hover,
  .drop-menu-item.active {
    background: #555;
  }

  @media screen and (max-width: 1200px) {
    .menu-item {
      padding: 1.2rem 1rem;
    }
  }
  @media screen and (max-width: 992px) {
    .menu-wraper {
      display: none;
    }
    .menu-toggle {
      display: flex;
    }
    .drop-menu {
      display: flex;
    }
  }
`;

function Header() {
  const {showDropMenu,handleClickMenu,onClickApply,currentMenus,setShowDropMenu} = useMenus();

  return (
    <StyledContainer>
      <Container className="flex-between">
        <h2>YOURLOGO</h2>
        <div className="menu-wraper">
          {currentMenus.map((menu, index) => {
            return (
              <Link
                onClick={handleClickMenu}
                key={index}
                to={menu.link}
                className={menu.active ? "menu-item active" : "menu-item"}
              >
                {menu.name}
              </Link>
            );
          })}

          <Link onClick={onClickApply} to="/apply" className="menu-item apply">
            apply now
          </Link>
        </div>
        <div
          onClick={() => setShowDropMenu(!showDropMenu)}
          className={!showDropMenu ? "menu-toggle" : "menu-toggle closed"}
        >
          {showDropMenu ? (
            <IoMdClose />
          ) : (
            <>
              <GiHamburgerMenu className="open" />
              <p>MENU</p>
            </>
          )}
        </div>
      </Container>
      {showDropMenu && (
        <div className="drop-menu">
          {currentMenus.map((menu, index) => {
            return (
              <Link
                onClick={handleClickMenu}
                key={index}
                to={menu.link}
                className={
                  menu.active ? "drop-menu-item active" : "drop-menu-item"
                }
              >
                {menu.name}
              </Link>
            );
          })}
          <Link
            onClick={onClickApply}
            to="/apply"
            className="drop-menu-item apply"
          >
            apply now
          </Link>
        </div>
      )}
    </StyledContainer>
  );
}

export default Header;
