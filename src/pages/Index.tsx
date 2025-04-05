import ApiCollection from "../components/ApiCollection";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar></Navbar>
      <Hero />
      <ApiCollection></ApiCollection>
    </div>
  );
};

export default Index;
