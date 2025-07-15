import clsx from "clsx";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";
import Button from "./Button";
import ReactDetails from "./ReactDetails";

const navItems = ["Nexus", "Vault", "Prologue", "About", "Contact"];

const NavBar = () => {
  // State for toggling audio and visual indicator
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);

  // Refs for audio and navigation container
  const audioElementRef = useRef(null);
  const navContainerRef = useRef(null);

  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Modal state for ReactDetails
  const [showReactDetails, setShowReactDetails] = useState(false);

  // Toggle audio and visual indicator
  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };

  // Manage audio playback
  useEffect(() => {
    if (isAudioPlaying) {
      audioElementRef.current.play();
    } else {
      audioElementRef.current.pause();
    }
  }, [isAudioPlaying]);

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  return (
    <>
      <div
        ref={navContainerRef}
        className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
      >
        <header className="absolute top-1/2 w-full -translate-y-1/2">
          <nav className="flex size-full items-center justify-between p-4">
            {/* Logo and Product button */}
            <div className="flex items-center gap-7">
              <img src="/img/logo.png" alt="logo" className="w-10" />
            </div>

            {/* Navigation Links and Audio Button */}
            <div className="flex h-full items-center">
              <div className="hidden md:block">
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href={`#${item.toLowerCase()}`}
                    className="nav-hover-btn"
                  >
                    {item}
                  </a>
                ))}
                {/* Nav Item for React Details */}
                <button
                  className="nav-hover-btn ml-6"
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                  onClick={() => setShowReactDetails(true)}
                >
                  React Details
                </button>
              </div>

              <button
                onClick={toggleAudioIndicator}
                className="ml-10 flex items-center space-x-0.5"
              >
                <audio
                  ref={audioElementRef}
                  className="hidden"
                  src="/audio/loop.mp3"
                  loop
                />
                {[1, 2, 3, 4].map((bar) => (
                  <div
                    key={bar}
                    className={clsx("indicator-line", {
                      active: isIndicatorActive,
                    })}
                    style={{
                      animationDelay: `${bar * 0.1}s`,
                    }}
                  />
                ))}
              </button>
            </div>
          </nav>
        </header>
      </div>

      {/* Neon Modal for React Details */}
      {showReactDetails && (
        <div
          className="fixed z-[100] inset-0 flex items-center justify-center"
          style={{
            background:
              "radial-gradient(circle at 60% 40%, #00e6f680 0%, #ff00de80 100%)",
            backdropFilter: "blur(4px)",
          }}
        >
          <div
            className="relative rounded-xl shadow-2xl max-w-3xl w-[96vw] max-h-[96vh] overflow-auto p-10"
            style={{
              background: "linear-gradient(135deg,#e0fffc 0%,#ffe0fc 100%)",
              color: "#111",
              border: "3px solid #39ff14",
              boxShadow:
                "0 0 20px #39ff14, 0 0 30px #00e6f6, 0 0 40px #ff00de, 0 0 60px #39ff14",
            }}
          >
            {/* Cross Icon */}
            <button
              className="absolute top-3 right-3 text-3xl"
              onClick={() => setShowReactDetails(false)}
              aria-label="Close"
              style={{
                color: "#111",
                background: "rgba(255,255,255,0.4)",
                border: "2px solid #39ff14",
                borderRadius: "50%",
                boxShadow:
                  "0 0 12px #00e6f6, 0 0 22px #ff00de",
                cursor: "pointer",
                lineHeight: 1,
                padding: "0.10em 0.22em",
                transition: "background 0.2s, color 0.2s",
              }}
              onMouseOver={e => {
                e.currentTarget.style.background = "#ff00de";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseOut={e => {
                e.currentTarget.style.background = "rgba(255,255,255,0.4)";
                e.currentTarget.style.color = "#111";
              }}
            >
              <IoMdClose />
            </button>
            <ReactDetails />
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;