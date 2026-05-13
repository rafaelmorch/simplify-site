"use client";

import { useEffect, useRef, useState } from "react";

export default function TypingTitle({ text }: { text: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [displayText, setDisplayText] = useState("");
  const isVisibleRef = useRef(false);

  useEffect(() => {
    let typingTimer: ReturnType<typeof setInterval> | null = null;
    let restartTimer: ReturnType<typeof setTimeout> | null = null;

    const startTyping = () => {
      if (!isVisibleRef.current) return;

      if (typingTimer) clearInterval(typingTimer);
      if (restartTimer) clearTimeout(restartTimer);

      let index = 0;
      setDisplayText("");

      typingTimer = setInterval(() => {
        index += 1;
        setDisplayText(text.slice(0, index));

        if (index >= text.length) {
          if (typingTimer) clearInterval(typingTimer);

          restartTimer = setTimeout(() => {
            startTyping();
          }, 3000);
        }
      }, 35);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisibleRef.current = entry.isIntersecting;

          if (entry.isIntersecting) {
            startTyping();
          } else {
            if (typingTimer) clearInterval(typingTimer);
            if (restartTimer) clearTimeout(restartTimer);
          }
        });
      },
      { threshold: 0.35 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      observer.disconnect();
      if (typingTimer) clearInterval(typingTimer);
      if (restartTimer) clearTimeout(restartTimer);
    };
  }, [text]);

  return (
    <span
      ref={ref}
      style={{
        display: "block",
        width: "100%",
        maxWidth: "100%",
        whiteSpace: "normal",
        overflowWrap: "normal",
        wordBreak: "normal",
      }}
    >
      {displayText}
      <span className="typing-cursor-orange">|</span>
    </span>
  );
}
