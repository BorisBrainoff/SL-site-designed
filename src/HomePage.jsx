
import React from "react";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="relative w-full min-h-screen font-serif bg-black text-white">
      {/* Hero Video Section */}
      <section className="relative w-full h-screen overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/stationary-light-landing-page.m4v" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50" />

        {/* Overlay Navigation */}
        <nav className="absolute top-0 left-0 w-full z-50 bg-black bg-opacity-60 backdrop-blur text-white flex justify-between px-4 py-3 text-sm">
          <div className="font-bold font-serif">SL Cosmology</div>
          <div className="flex space-x-3">
            <a href="#calculator" className="hover:underline">Calculator</a>
            <a href="#videos" className="hover:underline">Videos</a>
            <a href="#paper" className="hover:underline">Paper</a>
          </div>
        </nav>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pt-40 md:pt-52">
          <h1 className="text-3xl md:text-5xl font-serif font-bold mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Stationary Light Cosmology
          </h1>
        </div>
      </section>

      {/* Feature Sections */}
      <section id="calculator" className="px-4 py-12 bg-transparent text-white text-sm">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-serif font-semibold mb-4">Calculator</h2>
          <p className="mb-3">Try the Stationary Light redshift and age calculator.</p>
          <Button asChild>
            <a href="https://www.wolframcloud.com/obj/substitutematerials/Published/SL%20cosmocalc%20web%202.nb" target="_blank" rel="noopener noreferrer">
              Open Calculator
            </a>
          </Button>
        </div>
      </section>

      <section id="videos" className="px-4 py-12 bg-gray-900 text-white text-sm">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-serif font-semibold mb-4">Explainer Videos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <iframe className="aspect-video w-full" src="https://www.youtube.com/embed/1-HeLKZ-154" title="1-Minute Explainer" allowFullScreen />
            <iframe className="aspect-video w-full" src="https://www.youtube.com/embed/NND0gmNSrxE" title="Record Analogy" allowFullScreen />
          </div>
        </div>
      </section>

      <section id="paper" className="px-4 py-12 bg-black text-white text-sm">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-serif font-semibold mb-4">Read the Paper</h2>
          <p className="mb-3">
            Dive into the full technical breakdown of Stationary Light Cosmology.
          </p>
          <Button asChild>
            <a href="https://www.overleaf.com/read/nnzgyzvtbsbq#3c5778" target="_blank" rel="noopener noreferrer">
              Read on Overleaf
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-white px-4 py-8 text-xs">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h4 className="font-semibold mb-1">About</h4>
            <p>
              Stationary Light Cosmology reimagines cosmic time and distance through pure geometry.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Quick Links</h4>
            <ul className="space-y-1">
              <li><a href="#calculator" className="hover:underline">Calculator</a></li>
              <li><a href="#videos" className="hover:underline">Videos</a></li>
              <li><a href="#paper" className="hover:underline">Paper</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Contact</h4>
            <p>Email: stationarylightcosmology@gmail.com</p>
            <p className="mt-1">© {new Date().getFullYear()} SL Cosmology. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
