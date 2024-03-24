import React from "react";
import Header from "../../shared/widgets/header/header"
import Footer from "../../shared/widgets/footer/Footer";
import Banner from "./features/Banner";
import Branding from "./elements/Branding";

const HomePage = () => {
  return (
    <div>
      <Header />
      <main>
        <section>
          <Banner />
          <Branding />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
