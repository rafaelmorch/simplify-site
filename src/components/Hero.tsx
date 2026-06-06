"use client";

import { useEffect, useRef } from "react";
import ServicesCarousel from "./ServicesCarousel";

export default function Hero() {
  const desktopVideoRef = useRef<HTMLVideoElement | null>(null);
  const mobileVideoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const playVideos = () => {
      const videos = [desktopVideoRef.current, mobileVideoRef.current];

      videos.forEach((video) => {
        if (!video) return;

        video.muted = true;
        video.defaultMuted = true;
        video.playsInline = true;
        video.setAttribute("muted", "");
        video.setAttribute("playsinline", "");
        video.setAttribute("webkit-playsinline", "");

        const playPromise = video.play();

        if (playPromise !== undefined) {
          playPromise.catch(() => {});
        }
      });
    };

    playVideos();

    const timer1 = setTimeout(playVideos, 400);
    const timer2 = setTimeout(playVideos, 1200);

    document.addEventListener("touchstart", playVideos, { once: true });
    document.addEventListener("click", playVideos, { once: true });

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      document.removeEventListener("touchstart", playVideos);
      document.removeEventListener("click", playVideos);
    };
  }, []);

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
      <video
        ref={desktopVideoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
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

      <video
        ref={mobileVideoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
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
