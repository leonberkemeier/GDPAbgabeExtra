import { useEffect, useRef } from "react";
import Typed from "typed.js";

function TypingEffect() {
  const el = useRef(null);

  useEffect(() => {
    const typingEffect = new Typed(el.current, {
      strings: ["Willkommen auf dem Investment Hub!"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1500,
      loop: true,
    });

    return () => typingEffect.destroy(); // Verhindert Memory Leaks
  }, []);

  return <span className="multiText" ref={el}></span>;
}

export default TypingEffect;
