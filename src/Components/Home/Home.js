import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import BodyComponent from "./BodyComponent";

function Home() {
  return (
    <div>
      <Navbar />
      <BodyComponent />
      <Footer />
    </div>
  );
}

export default Home;
