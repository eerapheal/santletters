import React from "react";
import Header from "@/src/shared/widgets/header/header";
import Footer from "@/src/shared/widgets/footer/Footer";
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
