import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MainBanner from "@/components/MainBanner";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import About from "@/components/About";

const Home = () => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Esta es la página de inicio de mi aplicación web."
        />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Header />
        <MainBanner />
        <div className="separator-main">
          <div className="separator" />
        </div>

        <section id="services">
          <Services />
        </section>
        <div className="separator-main">
          <div className="separator" />
        </div>
        <section id="about">
          <About />
        </section>
        <div className="separator-main">
          <div className="separator" />
        </div>
        <section id="contact">
          <Contact/>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Home;
