import React from "react";
import Nav from "./Nav";
import SwiperHeader from "./SwiperHeader";

export default function Header() {
  return (
    <header>
      <Nav />
      <div className="container">
        <SwiperHeader />
      </div>
    </header>
  );
}
