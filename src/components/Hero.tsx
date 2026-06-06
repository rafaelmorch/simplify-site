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

        video.load();

        const playPromise = video.play();

        if (playPromise !== undefined) {
          playPromise.catch(() => {});
        }
      });
    };

    playVideos();

    const timer1 = setTimeout(playVideos, 300);
    const timer2 = setTimeout(playVideos, 1000);
    const timer3 = setTimeout(playVideos, 2000);

    window.addEventListener("pageshow", playVideos);
    document.addEventListener("visibilitychange", playVideos);
    document.addEventListener("touchstart", playVideos, { once: true });
    document.addEventListener("click", playVideos, { once: true });

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      window.removeEventListener("pageshow", playVideos);
      document.removeEventListener("visibilitychange", playVideos);
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
        src="/videos/hero-desktop.mp4"
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
      />

      <video
        ref={mobileVideoRef}
        src="/videos/hero-mobile.mp4"
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
      />

      <ServicesCarousel />
    </section>
  );
}
