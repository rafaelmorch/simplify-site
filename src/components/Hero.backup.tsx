"use client";

import ServicesCarousel from "./ServicesCarousel";

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#000",
      }}
    >
      {/* Desktop Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="hero-video-desktop"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          top: 0,
          left: 0,
        }}
      >
        <source src="/videos/hero-desktop.mp4" type="video/mp4" />
      </video>

      {/* Mobile Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="hero-video-mobile"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          top: 0,
          left: 0,
        }}
      >
        <source src="/videos/hero-mobile.mp4" type="video/mp4" />
      </video>

      <ServicesCarousel />
    </section>
  );
}
