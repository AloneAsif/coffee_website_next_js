import VideoBackground from "./components/video";
// import Navbar from "./components/navbar";

import Testinomials from "./components/testinomial";
import Cards_section from "./coffee/page";
import ServicesSection from "./components/services_sec";
// import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="bg-[#f5f0eb]">
      
      <VideoBackground />
      <Cards_section/>
      <ServicesSection/>
      <Testinomials/>
      
    </main>
  );
}
