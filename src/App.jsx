import Navbar from "./Components/Navbar/Navbar";
import HeroSection from "./Components/HeroSection/HeroSection";
import SplashCursor from "./Components/TextStyles/SplashCursor";
import Connect from "./Components/Contact/Connect";

function App() {
  return (
    <div
      className="relative min-h-screen "
      style={{ backgroundColor: "var(--bg-color)", color: "var(--text-color)" }}
    >
      {/* Grid Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--grid-color) 1px, transparent 1px),
            linear-gradient(to bottom, var(--grid-color) 1px, transparent 1px)
          `,
          backgroundSize: "30px 30px",
          maskImage: `
            linear-gradient(to bottom, rgba(0,0,0,1) 1%, rgba(0,0,0,0) 100%),
            linear-gradient(to right, rgba(0,0,0,1) 1%, rgba(0,0,0,0) 100%)
          `,
          WebkitMaskImage: `
            linear-gradient(to bottom, rgba(0,0,0,1) 0.5%, rgba(0,0,0,0) 100%),
            linear-gradient(to right, rgba(0,0,0,1) 1.5%, rgba(0,0,0,0) 100%)
          `,
          maskComposite: "intersect",
          WebkitMaskComposite: "destination-in",
        }}
      ></div>
<main
  className="relative min-h-screen z-10 flex justify-center 
             p-2 sm:p-4 md:p-6 lg:p-8 xl:p-10"
>
  <div className="w-full max-w-2xl">
    <SplashCursor />

    {/* Navbar */}
    <div>
      <Navbar />
    </div>

    {/* Hero */}
    <div className="mt-10 sm:mt-16 md:mt-20">
      <HeroSection />
    </div>

    {/* <Connect /> */}
  </div>
</main>

    </div>
  );
}

export default App;
