import React, { useState } from 'react';
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { useUser } from '@auth0/nextjs-auth0';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import PageLink from './PageLink';
import AnchorLink from './AnchorLink';
import Link from 'next/link';

const pages = [
  { auth: false, href: '/', text: 'Home' },
  { auth: true, href: '/add', text: 'Agregar producto' },
  { auth: false, href: '/list', text: 'Productos' },
  { auth: true, href: '/list-categories', text: 'Categorias' },
  { auth: true, href: '/categoria/add', text: 'Agregar categoria' },
  { auth: true, href: '/shoppingHistory', text: 'Historial de compras' }
];

const userLinks = [
  { href: '/profile', text: 'Profile', icon: 'user' },
  { href: '/api/auth/logout', text: 'Log out', icon: 'power-off' }
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isLoading } = useUser();
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="nav-container" data-testid="navbar">
      <Navbar color="light" light expand="md">
        <Container>
          {/* <NavbarBrand> */}
          <Link href={'/'} passHref>
            <a>
              <img
                src={
                  'https://media.discordapp.net/attachments/770475826147360809/966920110809968650/techtoriano.png'
                }
                style={{ maxHeight: '80px' }}
              />
            </a>
          </Link>
          {/* </NavbarBrand> */}
          <NavbarToggler onClick={toggle} data-testid="navbar-toggle" />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar data-testid="navbar-items">
              {pages.map(({ href, text, auth }) => {
                if (auth && !user) return null;
                return (
                  <NavItem key={href}>
                    <PageLink
                      href={href}
                      className="nav-link"
                      testId="navbar-home">
                      {text}
                    </PageLink>
                  </NavItem>
                );
              })}
              <NavItem>
                <PageLink href="/shoppingCart" className="nav-link">
                  <ShoppingCartIcon />
                  Ir al carrito
                </PageLink>
              </NavItem>
            </Nav>
            <Nav className="d-none d-md-block" navbar>
              {!isLoading && !user && (
                <NavItem id="qsLoginBtn">
                  <AnchorLink
                    href="/api/auth/login"
                    className="btn btn-primary btn-margin"
                    tabIndex={0}
                    testId="navbar-login-desktop">
                    Log in
                  </AnchorLink>
                </NavItem>
              )}
              {user && (
                <UncontrolledDropdown
                  nav
                  inNavbar
                  data-testid="navbar-menu-desktop">
                  <DropdownToggle nav caret id="profileDropDown">
                    <img
                      src={user.picture}
                      alt="Profile"
                      className="nav-user-profile rounded-circle"
                      width="50"
                      height="50"
                      decode="async"
                      data-testid="navbar-picture-desktop"
                    />
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header data-testid="navbar-user-desktop">
                      {user.name}
                    </DropdownItem>
                    <DropdownItem className="dropdown-profile" tag="span">
                      <PageLink
                        href="/profile"
                        icon="user"
                        testId="navbar-profile-desktop">
                        Profile
                      </PageLink>
                    </DropdownItem>
                    <DropdownItem id="qsLogoutBtn">
                      <AnchorLink
                        href="/api/auth/logout"
                        icon="power-off"
                        testId="navbar-logout-desktop">
                        Log out
                      </AnchorLink>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              )}
            </Nav>
            {!isLoading && !user && (
              <Nav className="d-md-none" navbar>
                <AnchorLink
                  href="/api/auth/login"
                  className="btn btn-primary btn-block"
                  tabIndex={0}
                  testId="navbar-login-mobile">
                  Log in
                </AnchorLink>
              </Nav>
            )}
            {user && (
              <Nav
                id="nav-mobile"
                className="d-md-none justify-content-between"
                navbar
                data-testid="navbar-menu-mobile">
                <NavItem>
                  <span className="user-info">
                    <img
                      src={user.picture}
                      alt="Profile"
                      className="nav-user-profile d-inline-block rounded-circle mr-3"
                      width="50"
                      height="50"
                      decode="async"
                      data-testid="navbar-picture-mobile"
                    />
                    <h6
                      className="d-inline-block"
                      data-testid="navbar-user-mobile">
                      {user.name}
                    </h6>
                  </span>
                </NavItem>
                <NavItem>
                  <PageLink
                    href="/profile"
                    icon="user"
                    testId="navbar-profile-mobile">
                    Profile
                  </PageLink>
                </NavItem>
                <NavItem id="qsLogoutBtn">
                  <AnchorLink
                    href="/api/auth/logout"
                    className="btn btn-link p-0"
                    icon="power-off"
                    testId="navbar-logout-mobile">
                    Log out
                  </AnchorLink>
                </NavItem>
              </Nav>
            )}
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
