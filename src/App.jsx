import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Sidebar from "./components/Sidebar";
import Articles from "./components/Articles";

const App = () => {
  return (
    <div className="bg-[#FAFAFA] text-[#0D0D0D] font-sans lg: px-100 mt-5 md:">
      <Navbar />
      <div className=" mx-auto  mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className=" md:col-span-2">
            <HeroSection />
          </div>
          <Sidebar />
        </div>
            <Articles />
      </div>
    </div>
  );
};

export default App;