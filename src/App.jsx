import { BrowserRouter } from "react-router-dom";
import "./App.css";

import {
  About,
  Reservation,
  Flavors,
  Footer,
  Hero,
  Menu,
  Navbar,
  Features,
  SpecialDish,
  Event,
} from "./components";

function App() {
  return (
    <BrowserRouter>
      <div className="">
        <div className=" relative ">
          <Navbar />
          <Hero />
        </div>
        <Flavors />
        <About />
        <SpecialDish />
        <Menu />
        <Reservation />
        <Features />
        <Event />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
