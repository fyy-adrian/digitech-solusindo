"use client";
import Nav from "@/components/Nav"
import Home from "@/app/landingpage/Home/"
import About from "@/app/landingpage/About/"
import Service from "@/app/landingpage/Service/"
import Pricing from "@/app/landingpage/Pricing/"
import Portofolio from "@/app/landingpage/Portofolio"
import Contact from "@/app/landingpage/Contact";
import Footer from "@/components/Footer";
import axios from 'axios';
import { useEffect, useState } from 'react';

const App = () => {
  const [hero, setHero] = useState([]);
  const [data, setData] = useState([]);
  
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/landingpage');
        setHero(response.data.heroes[0])
        setData(response.data)
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
      }
    })();
  }, []);

  return (
    <div className="">
      <Nav />
      <Home hero={hero} />
      <About />
      <Service />
      <Pricing prices={data.prices} />
      <Portofolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
