"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface CounterConfig {
  element: React.RefObject<HTMLDivElement>;
  end: number;
  suffix: string;
}

export default function StatsCounter() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const studentRef = useRef<HTMLDivElement>(null);
  const universityRef = useRef<HTMLDivElement>(null);
  const countryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const counters: CounterConfig[] = [
      { element: studentRef, end: 10000, suffix: "+" },
      { element: universityRef, end: 100, suffix: "+" },
      { element: countryRef, end: 5, suffix: "+" },
    ];

    counters.forEach((counter) => {
      if (!counter.element.current) return;

      gsap.to(counter.element.current, {
        innerText: counter.end,
        duration: 2,
        ease: "power1.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
        snap: { innerText: 1 },
        onUpdate: function () {
          if (counter.element.current) {
            counter.element.current.innerText =
              Math.floor(
                Number(
                  (this.targets()[0] as HTMLDivElement).innerText.replace(
                    /[^0-9]/g,
                    ""
                  )
                )
              ) + counter.suffix;
          }
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#35B354] text-white py-20 md:py-24 px-4"
      aria-label="Our achievements"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-8 lg:gap-12">
          {/* Students Counter */}
          <div className="text-center px-4 py-6 rounded-lg bg-white/10 backdrop-blur-sm w-full max-w-xs">
            <div
              ref={studentRef}
              className="text-5xl sm:text-6xl md:text-7xl font-bold mb-3"
            >
              0+
            </div>
            <div className="text-xl md:text-2xl font-medium">Students</div>
          </div>

          {/* Universities Counter */}
          <div className="text-center px-4 py-6 rounded-lg bg-white/10 backdrop-blur-sm w-full max-w-xs">
            <div
              ref={universityRef}
              className="text-5xl sm:text-6xl md:text-7xl font-bold mb-3"
            >
              0+
            </div>
            <div className="text-xl md:text-2xl font-medium">Universities</div>
          </div>

          {/* Countries Counter */}
          <div className="text-center px-4 py-6 rounded-lg bg-white/10 backdrop-blur-sm w-full max-w-xs">
            <div
              ref={countryRef}
              className="text-5xl sm:text-6xl md:text-7xl font-bold mb-3"
            >
              0+
            </div>
            <div className="text-xl md:text-2xl font-medium">Countries</div>
          </div>
        </div>
      </div>
    </section>
  );
}
