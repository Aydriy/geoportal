import React from "react";
import building from "../../sass/Blocks/LoremTabs/building.png";

export default function LoremTabs() {
  return (
    <div className="tabs">
      <div className="container">
        <div className="tabs-container">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <a
                className="nav-link active"
                id="pills-home-tab"
                data-toggle="pill"
                href="#pills-home"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                Lorem Ipsum 1
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                id="pills-profile-tab"
                data-toggle="pill"
                href="#pills-profile"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                Lorem Ipsum 2
              </a>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <h2 className="text-center open-sans-normal">Lorem Ipsum 1</h2>
              <div className="tabs-img-description">
                <img src={building} alt="" />
                <p className="lato-normal">
                  Lorem Ipsum - це текст-"риба", що використовується в
                  друкарстві та дизайні. Lorem Ipsum є, фактично, стандартною
                  "рибою" аж з XVI сторіччя, коли невідомий друкар взяв шрифтову
                  гранку та склав на ній підбірку зразків шрифтів. "Риба" не
                  тільки успішно пережила п'ять століть, але й прижилася в
                  електронному верстуванні, залишаючись по суті незмінною. Вона
                  популяризувалась в 60-их роках минулого сторіччя завдяки
                  виданню зразків шрифтів Letraset.
                </p>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <h2 className="text-center open-sans-normal">Lorem Ipsum 2</h2>
              <div className="tabs-img-description">
                <img src={building} alt="" />
                <p className="lato-normal">
                  Lorem Ipsum - це текст-"риба", що використовується в
                  друкарстві та дизайні. Lorem Ipsum є, фактично, стандартною
                  "рибою" аж з XVI сторіччя, коли невідомий друкар взяв шрифтову
                  гранку та склав на ній підбірку зразків шрифтів. "Риба" не
                  тільки успішно пережила п'ять століть, але й прижилася в
                  електронному верстуванні, залишаючись по суті незмінною. Вона
                  популяризувалась в 60-их роках минулого сторіччя завдяки
                  виданню зразків шрифтів Letraset.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
