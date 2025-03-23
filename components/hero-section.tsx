import { FunctionComponent } from "react";

const HeroSection: FunctionComponent = () => {
  return (
    <section className="relative w-full h-[650px] overflow-hidden">
      <div className="absolute inset-0 z-10 bg-neutral-base opacity-30"></div>
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/video/hero-section-video.mp4" type="video/mp4" />
      </video>
      <div className="c-container z-20 absolute inset-0 flex flex-col justify-center text-white text-center px-4">
        <h1 className="font-anton text-[5vw]">
          Capturing Moments, Creating Art
        </h1>
        <p className="text-body-big-bold">
          Explore the world through my lens, where every frame tells a unique
          story.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
