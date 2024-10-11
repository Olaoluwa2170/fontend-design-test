import { Navbar, HeroSection, Body, Footer } from "./components";

function App() {
  return (
    <>
      <Navbar />
      <div className="lg:pt-[6rem]">
        <HeroSection />
        <Body />
        <Footer />
      </div>
    </>
  );
}

export default App;
