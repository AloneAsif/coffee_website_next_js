"use client";

export default function VideoBackground() {
  return (
    <>
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="200260-912384743_small.mp4" type="video/mp4" />
      </video>

      {/* Overlay (optional, for dark effect) */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/45"></div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="lg:text-9xl md:text-7xl text-6xl font-black">COFFEE</h1>
        {/* <button className="text-lg mt-4 bg-orange-600 text-white px-10 py-2 rounded-md">button</button> */}
        {/* <p className="text-lg mt-4 z-50 relative">s</p> */}
        <p className="text-lg mt-4 z-50 relative top-50 ">Brewed with passion, served with love ☕</p>
      </div>


      
    </div>

    </>



);
}