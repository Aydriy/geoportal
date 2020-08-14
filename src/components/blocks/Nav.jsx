import React from "react";
import { Link } from "react-scroll";
import { Tel, Clock, Mail, Point } from "./SvgComponents.jsx";

class Nav extends React.Component {
  state = {
    scrolled: false,
  };

  componentDidMount() {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY < 450;
      if (isTop !== true) {
        this.setState({ scrolled: true });
      } else {
        this.setState({ scrolled: false });
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll");
  }

  render() {
    const NavLink = (props) => {
      return (
        <li
          className={
            this.state.scrolled ? "nav-item nav-item-scrolled" : "nav-item"
          }
        >
          <div className="nav-contacts d-flex align-items-center justify-content-lg-end justify-content-center">
            <span className="nav-desctiption">
              <div className="nav-svg">{props.svg}</div>
              <span className="lato-normal">{props.description}</span>
            </span>
          </div>
          <Link
            className="nav-link mr-4 "
            activeClass="active"
            to={props.to}
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            data-toggle="collapse"
            data-target=".navbar-collapse.show"
          >
            <span className="d-flex justify-content-center align-items-center nav-name lato-bold">
              {props.name}
            </span>
          </Link>
        </li>
      );
    };

    return (
      <nav
        className={
          this.state.scrolled
            ? "navbar navbar-expand-lg navbar-light bg-white fixed-top navbar-blue"
            : "navbar navbar-expand-lg navbar-dark bg-transparent position-absolute"
        }
      >
        <div className="container">
          <div
            className={
              this.state.scrolled
                ? "navbar-brand navbar-logo-container-scrolled "
                : "navbar-brand navbar-logo-container"
            }
          >
            <svg
              className="navbar-logo"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25 0C11.193 0 0 11.193 0 25C0 38.807 11.193 50 25 50C38.807 50 50 38.807 50 25C49.9845 11.1995 38.8005 0.0154623 25 0ZM46.6215 33.7581L39.5117 34.9849C40.3255 32.0003 40.765 28.9262 40.8199 25.8333H48.3126C48.2186 28.5539 47.6461 31.2366 46.6215 33.7581ZM1.68742 25.8333H9.18009C9.23503 28.9262 9.67448 32.0003 10.4883 34.9849L3.3785 33.7581C2.35392 31.2366 1.78141 28.5539 1.68742 25.8333ZM3.3785 16.2419L10.4883 15.0151C9.67448 17.9997 9.23503 21.0738 9.18009 24.1667H1.68742C1.78141 21.4461 2.35392 18.7634 3.3785 16.2419ZM25.8333 13.3801C28.8277 13.4184 31.8148 13.691 34.7668 14.196L37.7083 14.7034C38.6121 17.7787 39.0983 20.9615 39.1541 24.1667H25.8333V13.3801ZM35.0509 12.5533C32.0052 12.0329 28.9229 11.7517 25.8333 11.7135V1.71346C30.6108 2.17244 34.7607 6.54663 37.1126 12.9126L35.0509 12.5533ZM24.1667 11.7135C21.0771 11.7517 17.9956 12.0329 14.95 12.5533L12.8874 12.9102C15.2393 6.54256 19.3892 2.16675 24.1667 1.7098V11.7135ZM15.234 14.196C18.1856 13.691 21.1723 13.4184 24.1667 13.3801V24.1667H10.8459C10.9017 20.9615 11.3879 17.7787 12.2917 14.7034L15.234 14.196ZM10.8459 25.8333H24.1667V36.6199C21.1723 36.5816 18.1852 36.309 15.2332 35.804L12.2917 35.2966C11.3879 32.2213 10.9017 29.0385 10.8459 25.8333ZM14.9491 37.4467C17.9948 37.9679 21.0767 38.2503 24.1667 38.291V48.291C19.3892 47.8316 15.2393 43.4574 12.8874 37.0915L14.9491 37.4467ZM25.8333 38.291C28.9229 38.2503 32.0044 37.9679 35.05 37.4467L37.1126 37.0898C34.7607 43.4574 30.6108 47.8333 25.8333 48.2902V38.291ZM34.766 35.804C31.8144 36.309 28.8277 36.5816 25.8333 36.6199V25.8333H39.1541C39.0983 29.0385 38.6121 32.2213 37.7083 35.2966L34.766 35.804ZM40.8199 24.1667C40.765 21.0738 40.3255 17.9997 39.5117 15.0151L46.6215 16.2419C47.6461 18.7634 48.2186 21.4461 48.3126 24.1667H40.8199ZM45.7784 14.4051L38.9632 13.2292C37.738 9.23218 35.446 5.64494 32.3332 2.854C38.1539 4.79655 42.981 8.94328 45.7784 14.4051ZM17.6668 2.854C14.554 5.64494 12.262 9.23218 11.0368 13.2292L4.2216 14.4051C7.01904 8.94328 11.8461 4.79655 17.6668 2.854ZM4.2216 35.5949L11.0368 36.7708C12.262 40.7678 14.554 44.3551 17.6668 47.146C11.8461 45.2034 7.01904 41.0567 4.2216 35.5949ZM32.3332 47.146C35.446 44.3551 37.738 40.7678 38.9632 36.7708L45.7784 35.5949C42.981 41.0567 38.1539 45.2034 32.3332 47.146Z"
                fill="white"
              />
            </svg>
            <p className="open-sans-bold">Geoportal</p>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto px-3 d-flex align-items-center">
              <NavLink
                name="ГОЛОВНА"
                to="target"
                svg={<Tel />}
                description="8 (066) 222-33-44"
              />
              <NavLink
                name="ПОСЛУГИ"
                to="target"
                svg={<Clock />}
                description="Пн-Пт 9:00-18:00"
              />
              <NavLink
                name="Про КОМПАНІЮ"
                to="target"
                svg={<Mail />}
                description="order@test.ua"
              />
              <NavLink
                name="КОНТАКТИ"
                to="target"
                svg={<Point />}
                description="Київ"
              />
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
