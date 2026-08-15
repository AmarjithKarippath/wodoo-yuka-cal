"use client";

import { useEffect, useRef } from "react";

export function PhoneMockup() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    const play = () => {
      video.play().catch(() => {
        /* Autoplay can be blocked until the next user gesture. */
      });
    };
    play();
    video.addEventListener("canplay", play);
    return () => video.removeEventListener("canplay", play);
  }, []);

  return (
    <div className="phone-bezel">
      <div className="phone-screen">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          src="/videos/final.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label="Wodoo app preview"
        />
      </div>
    </div>
  );
}
