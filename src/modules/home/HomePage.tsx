import React from "react";
import Header from "../../shared/widgets/header/Header";
import Footer from "../../shared/widgets/footer/Footer";
import Banner from "./features/Banner";
const HomePage = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <section>
          <Banner />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default HomePage;
