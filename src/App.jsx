import Navbar from "./Components/Navbar/Navbar";
import HeroSection from "./Components/HeroSection/HeroSection";
import SplashCursor from "./Components/TextStyles/SplashCursor";
import Connect from "./Components/Contact/Connect";
function App() {
  return (
    <div
      className="relative min-h-screen px-20 py-5 "
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

      <main className="relative min-h-screen z-10 flex justify-center">
        <div className="w-full max-w-4xl px-4">
          <SplashCursor />
          <Navbar />
          <HeroSection />
          {/* <Connect /> */}
        </div>
      </main>
    </div>
  );
}

export default App;
