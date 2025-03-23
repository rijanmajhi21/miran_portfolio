import React, { FunctionComponent } from "react";

const HeroSection: FunctionComponent = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/video/hero-section-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40 text-white text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold">
          Capturing Moments, Creating Art
        </h1>
        <p className="text-lg md:text-xl mt-4 max-w-2xl">
          Explore the world through my lens, where every frame tells a unique
          story.
        </p>
        <a
          href="#portfolio"
          className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold rounded-lg transition"
        >
          View Portfolio
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
