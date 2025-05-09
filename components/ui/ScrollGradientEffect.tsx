"use client";

import { useEffect, useRef, useState } from "react";

export const BackgroundGradientAnimation: React.FC<{
  gradientBackgroundStart?: string;
  gradientBackgroundEnd?: string;
  firstColor?: string;
  secondColor?: string;
  thirdColor?: string;
  fourthColor?: string;
  fifthColor?: string;
  pointerColor?: string;
  size?: string;
  blendingValue?: string;
  children?: React.ReactNode;
  interactive?: boolean;
  containerClassName?: string;
}> = ({
  gradientBackgroundStart = "rgb(108, 0, 162)",
  gradientBackgroundEnd = "rgb(0, 17, 82)",
  firstColor = "18, 113, 255",
  secondColor = "221, 74, 255",
  thirdColor = "100, 220, 255",
  fourthColor = "200, 50, 50",
  fifthColor = "180, 180, 50",
  pointerColor = "140, 100, 255",
  size = "80%",
  blendingValue = "hard-light",
  children,
  interactive = true,
  containerClassName = "",
}) => {
  const interactiveRef = useRef<HTMLDivElement>(null);
  const layer1Ref = useRef<HTMLDivElement>(null);
  const layer2Ref = useRef<HTMLDivElement>(null);
  const layer3Ref = useRef<HTMLDivElement>(null);
  const layer4Ref = useRef<HTMLDivElement>(null);
  const layer5Ref = useRef<HTMLDivElement>(null);
  const [curX, setCurX] = useState(0);
  const [curY, setCurY] = useState(0);
  const [tgX, setTgX] = useState(0);
  const [tgY, setTgY] = useState(0);

  // initialize CSS variables
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--gradient-background-start", gradientBackgroundStart);
    root.style.setProperty("--gradient-background-end", gradientBackgroundEnd);
    root.style.setProperty("--first-color", firstColor);
    root.style.setProperty("--second-color", secondColor);
    root.style.setProperty("--third-color", thirdColor);
    root.style.setProperty("--fourth-color", fourthColor);
    root.style.setProperty("--fifth-color", fifthColor);
    root.style.setProperty("--pointer-color", pointerColor);
    root.style.setProperty("--size", size);
    root.style.setProperty("--blending-value", blendingValue);
  }, [
    gradientBackgroundStart,
    gradientBackgroundEnd,
    firstColor,
    secondColor,
    thirdColor,
    fourthColor,
    fifthColor,
    pointerColor,
    size,
    blendingValue,
  ]);

  // smooth pointer blob movement
  useEffect(() => {
    let animationFrame: number;

    const animate = () => {
      setCurX(x => x + (tgX - x) / 20);
      setCurY(y => y + (tgY - y) / 20);
      animationFrame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, [tgX, tgY]);

  // update interactive blob transform on state change
  useEffect(() => {
    if (interactiveRef.current) {
      interactiveRef.current.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
    }
  }, [curX, curY]);

  // const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
  //   if (interactiveRef.current) {
  //     const rect = interactiveRef.current.getBoundingClientRect();
  //     setTgX(e.clientX - rect.left);
  //     setTgY(e.clientY - rect.top);
  //   }
  // };

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
  }, []);

  // random autonomous movement for layers
  useEffect(() => {
    const layers = [
      layer1Ref.current,
      layer2Ref.current,
      layer3Ref.current,
      layer4Ref.current,
      layer5Ref.current,
    ].filter(Boolean) as HTMLDivElement[];

    const positions = layers.map(() => ({ x: 0, y: 0 }));
    const velocities = layers.map(() => ({
      x: (Math.random() - 0.5) * 2, // px per frame
      y: (Math.random() - 0.5) * 2,
    }));

    let rafId: number;
    const animate = () => {
      layers.forEach((el, i) => {
        const pos = positions[i];
        const vel = velocities[i];
        pos.x += vel.x;
        pos.y += vel.y;
        // bounce off viewport edges
        const halfW = window.innerWidth / 2;
        const halfH = window.innerHeight / 2;
        if (pos.x > halfW || pos.x < -halfW) vel.x *= -1;
        if (pos.y > halfH || pos.y < -halfH) vel.y *= -1;
        el.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
      });
      rafId = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <>
      <div
        className={`absolute inset-0 overflow-hidden bg-[linear-gradient(40deg,var(--gradient-background-start),var(--gradient-background-end))] ${containerClassName}`}
      >
        {/* SVG filter definitions */}
        <svg className="hidden">
          <defs>
            <filter id="blurMe">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>

        {/* children content */}
        {children}

        {/* gradient layers */}
        <div className={isSafari ? "gradients-container safari" : "gradients-container"}>
          <div ref={layer1Ref} className="layer layer1"></div>
          <div ref={layer2Ref} className="layer layer2"></div>
          <div ref={layer3Ref} className="layer layer3"></div>
          <div ref={layer4Ref} className="layer layer4"></div>
          <div ref={layer5Ref} className="layer layer5"></div>

          {/* interactive blob */}
          {interactive && (
            <div
              ref={interactiveRef}
              // onMouseMove={handleMouseMove}
              className="interactive-blob"
            ></div>
          )}
        </div>
      </div>

      {/* all necessary CSS in one place */}
      <style jsx global>{`
        :root {
          --gradient-background-start: ${gradientBackgroundStart};
          --gradient-background-end: ${gradientBackgroundEnd};
          --first-color: ${firstColor};
          --second-color: ${secondColor};
          --third-color: ${thirdColor};
          --fourth-color: ${fourthColor};
          --fifth-color: ${fifthColor};
          --pointer-color: ${pointerColor};
          --size: ${size};
          --blending-value: ${blendingValue};
        }
        .gradients-container {
          position: absolute;
          inset: 0;
          filter: url(#blurMe) blur(40px);
        }
        .gradients-container.safari {
          filter: blur(40px);
        }
        .layer {
          position: absolute;
          width: var(--size);
          height: var(--size);
          top: calc(50% - var(--size) / 2);
          left: calc(50% - var(--size) / 2);
          background-repeat: no-repeat;
          mix-blend-mode: var(--blending-value);
          opacity: 1;
        }
        .layer1 {
          background-image: radial-gradient(circle at center, var(--first-color) 0%, var(--first-color) 50%);
        }
        .layer2 {
          background-image: radial-gradient(circle at center, rgba(var(--second-color), 0.8) 0%, rgba(var(--second-color), 0) 50%);
        }
        .layer3 {
          background-image: radial-gradient(circle at center, rgba(var(--third-color), 0.8) 0%, rgba(var(--third-color), 0) 50%);
        }
        .layer4 {
          background-image: radial-gradient(circle at center, rgba(var(--fourth-color), 0.8) 0%, rgba(var(--fourth-color), 0) 50%);
          opacity: 0.7;
        }
        .layer5 {
          background-image: radial-gradient(circle at center, rgba(var(--fifth-color), 0.8) 0%, rgba(var(--fifth-color), 0) 50%);
        }
        .interactive-blob {
          position: absolute;
          inset: -50%;
          background-image: radial-gradient(circle at center, rgba(var(--pointer-color), 0.8) 0%, rgba(var(--pointer-color), 0) 50%);
          mix-blend-mode: var(--blending-value);
          opacity: 0.7;
        }

        /* keyframes */
        @keyframes first {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(50px, -50px) scale(1.2); }
        }
        @keyframes second {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-50px, 50px) scale(1.1); }
        }
        @keyframes third {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(50px, 50px) scale(0.9); }
        }
        @keyframes fourth {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-50px, -50px) scale(1.15); }
        }
        @keyframes fifth {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(100px, -100px) scale(1.05); }
        }
      `}</style>
    </>
  );
};

export default BackgroundGradientAnimation;