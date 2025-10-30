export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="min-h-screen bg-[#f5f0eb] text-[#3c2a21]">
      {/* Custom Hero Section just for About page */}
      {/* <div className="relative bg-[url('https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg')] bg-cover bg-center h-64 flex items-center justify-center">
        <div className="bg-black/50 absolute inset-0" />
        <h1 className="relative text-5xl font-bold text-white z-10">About Us</h1>
        
      </div> */}

      {/* Page Content */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        {children}
      </div>
    </section>
  );
}
