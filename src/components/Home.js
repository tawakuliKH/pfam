import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";           // ← This is the SECTION component
import Values from "./Values";         // ← This is the SECTION component  
import Story from "./Story";           // ← This is the SECTION component
import Issues from "./Issues";
import Contact from "./Contact";       // ← This is the SECTION component
import Donate from "./Donate";         // ← This is the SECTION component
import Footer from "./Footer";
import { useAnimation } from "../hooks/useAnimation";
import { useSeo } from '../hooks/useSeo';
import { useTranslation } from "react-i18next";

const Home = () => {
  useAnimation();
  const { i18n } = useTranslation();
  const currentLang = i18n?.language || 'en';

  const seoConfig = {
    en: {
      title: "Progressive Forces of Afghanistan Movement (PFA) - Official Website",
      description: "Welcome to the official Progressive Forces of Afghanistan Movement (PFA). Leading progressive change, social justice, and democratic values in Afghanistan."
    },
    fa: {
      title: "جنبش نیروهای مترقی افغانستان - وبسایت رسمی",
      description: "به وبسایت رسمی جنبش نیروهای مترقی افغانستان خوش آمدید. پیشرو در تغییرات مترقی، عدالت اجتماعی و ارزش‌های دموکراتیک در افغانستان."
    },
    de: {
      title: "Progressive Kräfte Afghanistans Bewegung - Offizielle Website",
      description: "Willkommen auf der offiziellen Website der Progressive Kräfte Afghanistans Bewegung. Führend in progressivem Wandel, sozialer Gerechtigkeit und demokratischen Werten in Afghanistan."
    }
  };

  useSeo({
    title: seoConfig[currentLang]?.title || seoConfig.en.title,
    description: seoConfig[currentLang]?.description || seoConfig.en.description,
    lang: currentLang
  });

  useEffect(() => {
    // Remove existing schema
    document.querySelectorAll('script[type="application/ld+json"]').forEach(script => {
      if (script.textContent.includes('Organization')) {
        script.remove();
      }
    });

    const schema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Progressive Forces of Afghanistan Movement",
      "alternateName": ["PFA Movement", "جنبش نیروهای مترقی افغانستان", "Progressive Kräfte Afghanistans"],
      "url": "https://pfa-movement.org",
      "logo": "https://pfa-movement.org/logo.png",
      "image": "https://pfa-movement.org/logo.png",
      "description": "Progressive Forces of Afghanistan Movement - Leading progressive change and social justice in Afghanistan",
      "foundingDate": "2022",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Haupstraße 126",
        "addressLocality": "Westoverledingen",
        "postalCode": "26810",
        "addressCountry": "DE"
      },
      "email": "mawloda.tawana@pfa-movement.org",
      "telephone": "+49-1573-1629920",
      "sameAs": [
        "https://www.linkedin.com/in/progressive-forces-of-afghanistan-movement"
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
  }, []);

  return (
    <div className="home-page">
      {/* REMOVED the duplicate script tag */}
      <Navbar />
      <main role="main">
        <Hero />
        <About />     {/* ← This is the SECTION component */}
        <Values />    {/* ← This is the SECTION component */}
        <Story />     {/* ← This is the SECTION component */}
        <Issues />
        <Contact />   {/* ← This is the SECTION component */}
        <Donate />    {/* ← This is the SECTION component */}
      </main>
      <Footer />
    </div>
  );
};

export default Home;