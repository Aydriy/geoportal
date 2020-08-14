import React from "react";

export default function OpenData() {
  let CardOrderData = [
    {
      title: "Агропромисловий розвиток",
      description: "Ви оформлюєте заявку на с",
    },
    {
      title: "Культура",
      description: "Доставка здійснюється Н",
    },
    {
      title: "Туризм",
      description: "Ми гарантуємо якість наших",
    },
    {
      title: "Спорт та фізична культура",
      description: "Ви оформлюєте заявку на ",
    },
    {
      title: "Охорона здоров’я",
      description: "Доставка здійснюється ",
    },
    {
      title: "Екологія",
      description: "Ми гарантуємо ",
    },
  ];

  const CardOrder = CardOrderData.map((el, index) => {
    return (
      <div key={index} className="card mx-auto mb-4">
        <div className="card-body  text-center pb-5">
          <h5 className="card-text lato-normal">{el.title}</h5>
        </div>
      </div>
    );
  });

  return (
    <div className="cards">
      <div className="container">
        <div className="cards-title">
          <h2 className="lato-normal">Набори даних</h2>
          <h5 className="open-sans-normal">Відкриті дані</h5>
        </div>
        <div className="cards-container">{CardOrder}</div>
      </div>
    </div>
  );
}
