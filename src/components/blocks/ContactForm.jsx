import React from "react";
import { Link } from "react-scroll";
import { Tel, Clock, Mail, Point } from "./SvgComponents.jsx";

export default function LoremTabs() {
  const NavContacts = (props) => {
    return (
      <li className="nav-item-contacts">
        <div className="nav-contacts ">
          <section className="nav-desctiption-contacts d-flex align-items-center">
            <div className="nav-svg">{props.svg}</div>
            <span>{props.description}</span>
          </section>
        </div>
      </li>
    );
  };

  return (
    <div className="contact">
      <div className="container">
        <div className="contact-container">
          <div className="contact-header text-center">
            <h2 className="open-sans-normal">Зв’язатися з нами</h2>
            <h5 className="lato-normal">
              У вас залишились питання? Напишіть нам.
            </h5>
          </div>
          <div className="contact-form-container d-flex">
            <div className="form-contacts">
              <ul className="navbar-nav-contacts ">
                <NavContacts svg={<Point />} description="Київ" />
                <NavContacts svg={<Clock />} description="Пн-Пт 9:00-18:00" />
                <NavContacts svg={<Tel />} description="+044 222-33-44" />
                <NavContacts svg={<Mail />} description="order@test.ua" />
              </ul>
            </div>
            <div className="form">
              <form className="needs-validation" noValidate>
                <div className="form-row">
                  <div className="col-md-6 mb-3">
                    <label
                      htmlFor="validationTooltip01"
                      className="lato-normal"
                    >
                      Ім`я
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="validationTooltip01"
                      placeholder="Іван"
                      required
                    />
                    <div className="valid-tooltip" className="lato-normal">
                      Looks good!
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label
                      htmlFor="validationTooltip02"
                      className="lato-normal"
                    >
                      Прізвище
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="validationTooltip02"
                      placeholder="Іванов "
                      required
                    />
                    <div className="valid-tooltip" className="lato-normal">
                      Looks good!
                    </div>
                  </div>
                </div>
                <div className="form-col">
                  <div className="form-group">
                    <label htmlFor="validationTooltip03">
                      Контактний телефон
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="form-control"
                      id="validationTooltip03"
                      required
                      placeholder="380111111111"
                    />
                    <div className="invalid-tooltip">
                      Please provide a valid telephone.
                    </div>
                  </div>
                  <div className="form-group text-area">
                    <label htmlFor="exampleFormControlTextarea1">
                      Ваше повідомлення
                    </label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                    ></textarea>
                  </div>
                </div>
                <button
                  className="contact-button btn btn-primary"
                  type="submit"
                >
                  <span>Надіслати</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
