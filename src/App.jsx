import React, { useState, useEffect } from "react";
import { Navigation } from "./components/Common/navigation";
import { Header } from "./components/Home/header";
import { CommunityPreview } from "./components/Home/community-preview";
import { Features } from "./components/Home/features";
import { About } from "./components/Home/about";
import { Services } from "./components/Home/services";
import { Contact } from "./components/Home/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <CommunityPreview />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
