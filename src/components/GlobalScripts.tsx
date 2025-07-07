"use client";
import Script from "next/script";
import { useEffect } from "react";

export default function GlobalScripts() {
  useEffect(() => {
    // Bloquear clique direito
    const handleContextMenu = (e: MouseEvent) => e.preventDefault();
    window.addEventListener("contextmenu", handleContextMenu);

    // Bloquear F12, Ctrl+Shift+I, Ctrl+U, Ctrl+Shift+C, Ctrl+Shift+J
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && ["I", "C", "J"].includes(e.key)) ||
        (e.ctrlKey && e.key === "U")
      ) {
        e.preventDefault();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("contextmenu", handleContextMenu);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      {/* Scripts Mobirise e outros JS antigos */}
      <Script src="/scripts/jquery.min.js" />
      <Script src="/scripts/bootstrap.bunde.min.js" />
      <Script src="/scripts/embla.min.js" />
      <Script src="/scripts/emblascript.js" />
      <Script src="/scripts/formoid.min.js" />
      <Script src="/scripts/jarallax.js" />
      <Script src="/scripts/main.js" />
      <Script src="/scripts/mbr-switch-arrow.js" />
      <Script src="/scripts/mbrtabs.js" />
      <Script src="/scripts/navbar-dropdown.js" />
      <Script src="/scripts/scrollgalery.js" />
      <Script src="/scripts/smooth-scroll.js" />
      <Script src="/scripts/theme.js" />
      <Script src="/scripts/vimeoplayer.js" />
      <Script src="/scripts/ytplayer.js" />
    </>
  );
}
