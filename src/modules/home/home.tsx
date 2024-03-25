import React from "react";
import Header from "../../shared/widgets/header/header"
import Footer from "../../shared/widgets/footer/Footer";
import Banner from "./features/Banner";
import Branding from "./elements/Branding";
import Benefits from "./elements/benefits";
import FeaturesHighLights from "./elements/featuresHighLights";
import Pricing from "./elements/pricing";

const HomePage = () => {
  return (
    <div>
      <Header />
      <main>
        <section>
          <Banner />
          <Branding />
          <Benefits />
          <FeaturesHighLights />
          <Pricing />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
