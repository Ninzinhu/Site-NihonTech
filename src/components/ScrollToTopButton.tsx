import { useEffect } from "react";

export default function ScrollToTopButton() {
  useEffect(() => {
    const btn = document.getElementById("scrollToTop");
    const handleScroll = () => {
      if (btn) {
        if (window.scrollY > 300) {
          btn.style.display = "block";
        } else {
          btn.style.display = "none";
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      id="scrollToTop"
      className="scrollToTop mbr-arrow-up"
      style={{
        display: "none",
        position: "fixed",
        right: 20,
        bottom: 20,
        zIndex: 9999,
      }}
      onClick={scrollToTop}>
      <a href="#top" style={{ cursor: "pointer" }}>
        <span className="mbr-iconfont mobi-mbri-arrow-up mobi-mbri"></span>
      </a>
    </div>
  );
}
