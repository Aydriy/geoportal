import React from "react";
import Header from "./blocks/Header";
import OpenData from "./blocks/OpenData";
import Lorem from "./blocks/Lorem";
import LoremTabs from "./blocks/LoremTabs";
import ContactForm from "./blocks/ContactForm";
import Footer from "./blocks/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <OpenData />
        <Lorem />
        <LoremTabs />
      </main>
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
