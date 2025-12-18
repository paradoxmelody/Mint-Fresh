import React, { useEffect, useState } from "react";

interface Drawing {
  id: number;
  title: string;
  imageUrl: string;
}

const drawings: Drawing[] = [
  { id: 1, title: "Lost Cat", imageUrl: "/catie.png" },
  { id: 2, title: "Jurrasic", imageUrl: "/drawing12 (1).jpeg" },
  { id: 3, title: "Forest Path", imageUrl: "/drawing12 (2).jpeg" },
  { id: 4, title: "Levi", imageUrl: "/drawing12 (12).jpeg" },
  { id: 5, title: "spins", imageUrl: "/drawing12 (10).jpeg"},
  { id: 6, title: "Monster", imageUrl: "/drawing12 (11).jpeg"},
  { id: 7, title: "Kakashi Sensei", imageUrl: "/drawing12 (6).jpeg"},
  { id: 8, title: "Huey Freeman", imageUrl: "/Untitled3_20241202232827.png"},
  { id: 9, title: "Riley", imageUrl: "/huey.png"},
  { id: 10, title: "Man on Mars", imageUrl: "/man on mars.png"},

];

const DrawingsGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Remove navbar and footer ONLY
  useEffect(() => {
    const nav = document.querySelector('nav');
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    
    if (nav) nav.style.display = 'none';
    if (header) header.style.display = 'none';
    if (footer) footer.style.display = 'none';
    
    return () => {
      if (nav) nav.style.display = '';
      if (header) header.style.display = '';
      if (footer) footer.style.display = '';
    };
  }, []);

  return (
    <>
      <div className="min-h-screen text-white px-6 py-12" style={{ background: 'transparent' }}>
        {/* Back Button */}
        <a
          href="/portal"
          className="fixed top-6 left-6 z-50 group flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-105"
        >
          <svg
            className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="font-medium">Back to Portal</span>
        </a>

        {/* Page Header */}
        <header className="text-center mb-12 fade-in mt-8">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            My Drawings
          </h1>
          <p className="mt-3 text-gray-300 max-w-xl mx-auto">
            A collection of drawings I've done so far. Click on any image to view it in
            full size. Merci amigo
          </p>
        </header>

        {/* Gallery Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {drawings.map((drawing, index) => (
            <div
              key={drawing.id}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 slide-up cursor-pointer"
              style={{ animationDelay: `${index * 0.15}s` }}
              onClick={() => setSelectedImage(drawing.imageUrl)}
            >
              <img
                src={drawing.imageUrl}
                alt={drawing.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="text-lg font-semibold">{drawing.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white text-4xl hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <img
            src={selectedImage}
            alt="Full size"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Inline CSS for animations */}
      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes slideUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        .slide-up {
          animation: slideUp 0.8s ease-out forwards;
        }
        
        /* Keep particles canvas visible in background */
        canvas.particles-js-canvas-el,
        canvas[class*="particles"],
        canvas[id*="particles"] {
          display: block !important;
          visibility: visible !important;
          opacity: 1 !important;
          position: fixed !important;
          top: 0 !important;
          left: 0 !important;
          width: 100% !important;
          height: 100% !important;
          z-index: 0 !important;
          pointer-events: none !important;
        }
        
        /* Ensure this component is above particles with transparent background */
        .min-h-screen {
          position: relative;
          z-index: 1;
          background: transparent !important;
        }
        
        /* Remove any black backgrounds that might cover particles */
        body, #root, #root > div {
          background: transparent !important;
        }
        
        /* Fix image loading */
        img[alt] {
          background: rgba(255, 255, 255, 0.05);
        }
      `}</style>
    </>
  );
};

export default DrawingsGallery;