import React from "react";
import building from "../../sass/Blocks/Lorem/building.jpg";

export default function OpenData() {
  let CardOrderData = [
    {
      img: [building],
      number: "90",
      text: "Об’єктів",
    },
    {
      img: [building],
      number: "90",
      text: "Проєктів",
    },
    {
      img: [building],
      number: "90",
      text: "Ділянок",
    },
    {
      img: [building],
      number: "90",
      text: "Конструкцій",
    },
  ];

  const CardOrder = CardOrderData.map((el, index) => {
    return (
      <div key={index} className="lorem-card mb-4">
        <div className="lorem-card-body">
          <img className="lorem-building" src={el.img} alt="" />
          <div className="card-body-description">
            <h2 className="lorem-card-number lato-normal">{el.number}</h2>
            <h5 className="lorem-card-text lato-normal">{el.text}</h5>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="lorem mr-3 ml-3">
      <div className="container d-flex flex-xl-row flex-column ">
        <div className="lorem-container-description mx-auto">
          <div className="lorem-title">
            <h2 className="lato-normal">Про нас</h2>
            <h5 className="open-sans-normal">
              Lorem <br />
              <span>Lorem Ipsum</span>
            </h5>
          </div>
          <div className="lorem-description mb-5">
            <p className="lato-normal">
              Lorem Ipsum - це текст-"риба", що використовується в друкарстві та
              дизайні. Lorem Ipsum є, фактично, стандартною "рибою" аж з XVI
              сторіччя, коли невідомий друкар взяв шрифтову гранку та склав на
              ній підбірку зразків шрифтів. "Риба" не тільки успішно пережила
              п'ять століть, але й прижилася в електронному верстуванні,
              залишаючись по суті незмінною. Вона популяризувалась в 60-их роках
              минулого сторіччя завдяки виданню зразків шрифтів Letraset.
            </p>
          </div>
        </div>
        <div className="lorem-cards-container">{CardOrder}</div>
      </div>
    </div>
  );
}
