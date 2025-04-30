import Image from "next/image";
import Navbar from "./components/Navbar";
import TheWorld from "./components/TheWorld";
import OurSport from "./components/OurSport";
import FindYourRace from "./components/FindYourRace";
import About from "./components/About";
import Hyrox from "./components/Hyrox";
import Footer from "./components/Footer";
import Form from "./components/Form";

export default function Home() {
  return (
  <div className=" w-full bg-black h-screen">
   <Navbar />
   <TheWorld />
   <OurSport />
   <FindYourRace />
   <About />
   <Form />
   <Hyrox />
   <Footer />
  </div>
  );
}
