import styles from './looking-glass.module.scss';
import { useEffect, useState } from "react";

function runOnScroll() {
  const heightOfWindow = window.innerHeight,
    contentScrolled = window.pageYOffset,
    bodyHeight = document.body.offsetHeight;
  let scrolled = 0;
  if (bodyHeight - contentScrolled <= heightOfWindow) {
    return scrolled = 100;
  }
  else {
    const total = bodyHeight - heightOfWindow,
      got = contentScrolled,
      percent = parseInt((got / total) * 100);
      scrolled = percent;
    return scrolled;
  }
}

export default function LookingGlass() {
  const [percentageX, setPercentageX] = useState(500);
  // const [percentageY, setPercentageY] = useState(50);
  let running = false;
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      if (!running) {
        running = true;
        const scrolled = runOnScroll();
        const diff = 500 - scrolled * 5;
        setPercentageX(diff);
        // setPercentageY(30);
        running = false;
      }
    });
  }
  return (
    <div
      className={`${styles.troughTheLookingGlass} bottom-80 md:bottom-1/2 lg:bottom-20`}
      style={{
        // transform: `translateY(${percentageY}%) translateX(${percentageX}%)`,
        transform: `translateX(${percentageX}%)`,
      }}
    ></div>
  );
}
