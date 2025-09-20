"use client"
import React from 'react'
import Link from 'next/link'

export default function Header(){
  return (
    <>
      <header className="header header-custom header-fixed inner-header relative">
        <div className="container">
          <nav className="navbar navbar-expand-lg header-nav">
            <div className="navbar-header">
              <a id="mobile_btn" href="#">
                <span className="bar-icon">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </a>
              <Link href="/" className="navbar-brand logo">
                <img src="/theme/assets/img/logo-1.png" className="img-fluid" alt="Logo" />
              </Link>
            </div>
            <div className="header-menu">
              <div className="main-menu-wrapper">
                <div className="menu-header">
                  <Link href="/" className="menu-logo">
                    <img src="/theme/assets/img/logo-1.png" className="img-fluid" alt="Logo" />
                  </Link>
                  <a id="menu_close" className="menu-close" href="#">
                    <i className="fas fa-times"></i>
                  </a>
                </div>
                <ul className="main-nav">
                  <li className="has-submenu megamenu active">
                    <a href="#">Home <i className="fas fa-chevron-down"></i></a>
                  </li>
                  <li className="has-submenu">
                    <a href="/search">Photographers <i className="fas fa-chevron-down"></i></a>
                  </li>
				  <li className="has-submenu">
                    <a href="/gallery">Galleries <i className="fas fa-chevron-down"></i></a>
                  </li>
                  
                  <li className="has-submenu">
                    <a href="#">Blog <i className="fas fa-chevron-down"></i></a>
                  </li>
				  <li className="has-submenu">
                    <a href="#">Contact Us <i className="fas fa-chevron-down"></i></a>
                  </li>
                </ul>
              </div>
              <ul className="nav header-navbar-rht">
                <li className="searchbar">
                  <a href="#"><i className="feather-search"></i></a>
                </li>
                <li>
                  <Link href="/auth/login" className="btn btn-md btn-primary-gradient d-inline-flex align-items-center rounded-pill"><i className="isax isax-lock-1 me-1"></i>Sign Up</Link>
                </li>
                <li>
                  <Link href="/auth/register" className="btn btn-md btn-dark d-inline-flex align-items-center rounded-pill"><i className="isax isax-user-tick me-1"></i>Register</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}
