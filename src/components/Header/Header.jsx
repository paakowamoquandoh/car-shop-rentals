import React, { useRef } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { faUser, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row, Col } from "reactstrap";
import "../../styles/header.css";
import logo from "../../assets/media/logo.jpeg";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/rental",
    display: "Rent",
  },
  {
    path: "/cars",
    display: "Buy",
  },

  {
    path: "/blogs",
    display: "About Us",
  },
  {
    path: "/contact",
    display: "Contact Us",
  },
];

const Header = () => {
  const menuRef = useRef(null);
  const { client, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch({ type: "LOGOUT" });
    localStorage.removeItem("client");
    navigate("/");
  };

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  return (
    <header className="header">
      {/* ============ header top ============ */}
      <div className="header__top">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="header__top__left">
                <span>Need Help?</span>
                <span className="header__top__help">
                  <i class="ri-phone-fill"></i> +233 240 234 587
                </span>
              </div>
            </Col>

            <Col lg="6" md="6" sm="6">
              {client ? (
                 <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                    <Link
                      to="/login"
                      className=" d-flex align-items-center gap-1"
                    >
                      <FontAwesomeIcon icon={faUser} />
                      {client.clientname}
                    </Link>

                    <Link
                      to="/register"
                      className=" d-flex align-items-center gap-1"
                    >
                      <FontAwesomeIcon onClick={handleClick} icon={faSignOut} />
                    </Link>
                  </div>
        

              ) : (
                
                  <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                    <Link
                      to="/login"
                      className=" d-flex align-items-center gap-1"
                    >
                      <i class="ri-login-circle-line"></i> Login
                    </Link>

                    <Link
                      to="/register"
                      className=" d-flex align-items-center gap-1"
                    >
                      <i class="ri-user-line"></i> Register
                    </Link>
                  </div>
              )}
            </Col>
          </Row>
        </Container>
      </div>

      {/* =============== header middle =========== */}
      <div className="header__middle">
        <Container>
          <Row>
            <Col lg="4" md="3" sm="4">
              <div className="logo">
                <h1>
                  <Link to="/home" className=" d-flex align-items-center gap-2">
                    {/* <i class="ri-car-line"></i> */}
                    <span className="brandLogo">
                      <img src={logo} alt="" />
                    </span>
                  </Link>
                </h1>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location align-items-center">
                <span>
                  <i class="ri-earth-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>Accra &Tema</h4>
                </div>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location align-items-center">
                <span>
                  <i class="ri-time-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>24Hours</h4>
                </div>
              </div>
            </Col>

            <Col
              lg="2"
              md="3"
              sm="0"
              className=" d-flex align-items-center justify-content-end "
            >
              <button className="header__btn btn">
                <Link to="/contact">
                  <i class="ri-phone-line"></i> Request a call
                </Link>
              </button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* ========== main navigation =========== */}

      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu">
              <i class="ri-menu-line" onClick={toggleMenu}></i>
            </span>

            <span className="brandLogoMobile">
              <img src={logo} alt="" />
            </span>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                <span className="brandLogoMobile">
                  <img src={logo} alt="" />
                </span>
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
                <div className="mobileMenu">
                  <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                    <Link
                      to="/login"
                      className=" d-flex align-items-center gap-1"
                    >
                      <i class="ri-login-circle-line"></i> Login
                    </Link>

                    <Link
                      to="/register"
                      className=" d-flex align-items-center gap-1"
                    >
                      <i class="ri-user-line"></i> Register
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
