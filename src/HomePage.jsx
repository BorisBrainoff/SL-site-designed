import React from "react";

export default function HomePage() {
  return (
    <div className="relative h-screen overflow-hidden bg-black text-white font-[\'Cormorant Garamond\']">
      {/* Hero Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pt-40 md:pt-52 z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Stationary Light Cosmology
        </h1>
        <div className="flex gap-4 flex-wrap justify-center">
          <a
            href="https://www.wolframcloud.com/obj/substitutematerials/Published/SL%20cosmocalc%20web%202.nb"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200"
          >
            Calculator
          </a>
          <a
            href="https://www.overleaf.com/read/nnzgyzvtbsbq#3c5778"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200"
          >
            Read the Paper
          </a>
        </div>
      </div>

      {/* Side-by-Side Videos */}
      <div className="absolute bottom-0 w-full bg-black py-12 px-4 z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
          <div className="w-full max-w-md aspect-video">
            <iframe
              className="w-full h-full rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/1-HeLKZ-154"
              title="1 Minute Explainer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="w-full max-w-md aspect-video">
            <iframe
              className="w-full h-full rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/NND0gmNSrxE"
              title="Record Analogy"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
}
