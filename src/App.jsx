import { Navbar, HeroSection, Body } from "./components";

function App() {
  return (
    <>
      <Navbar />
      <div className="md:pt-[6rem]">
        <HeroSection />
        <Body />
      </div>
    </>
  );
}

export default App;
