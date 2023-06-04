import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <Link className="logo" id="logo" to="/">
          Capture
        </Link>
      </h1>
      <ul>
        <li>
          <Link className="link" to="/AboutUs">
            About Us
          </Link>
        </li>
        <li>
          <Link className="link" to="/OurWork">
            Our Work
          </Link>
        </li>
        <li>
          <Link className="link" to="/ContactUs">
            Contact Us
          </Link>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  h1 {
    .logo {
      text-decoration: none;
      color: white;
      font-size: 1.8rem;
      font-family: "Lobster", cursive;
      font-weight: lighter;
      &:hover {
        color: #23d997;
      }
    }
  }

  .link {
    color: white;
    text-decoration: none;
    font-size: 1rem;
    font-weight: lighter;
    &:hover {
      color: #23d997;
    }
  }
  ul {
    display: flex;
    list-style: none;
  }

  li {
    padding-left: 2.5rem;
    position: relative;
  }
`;

export default Nav;
