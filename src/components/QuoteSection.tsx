import React, { useEffect, useRef } from 'react';

const quotes = [
  "Believe you can and you're halfway there.",
  "Push yourself, because no one else is going to do it for you.",
  "Don’t watch the clock; do what it does. Keep going.",
  "Success doesn’t just find you. You have to go out and get it.",
  "Great things never come from comfort zones."
];

export default function QuoteSection() {
  // ✅ Type-safe array of refs
  const quoteRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
        }
      });
    }, { threshold: 0.5 });

    quoteRefs.current.forEach((el) => el && observer.observe(el));

    return () => {
      quoteRefs.current.forEach((el) => el && observer.unobserve(el));
    };
  }, []);

  return (
    <div className="mt-8 space-y-4">
      {quotes.map((quote, index) => (
        <div
          key={index}
          ref={(el: HTMLDivElement | null) => {
            quoteRefs.current[index] = el;
          }}
          className="transition-all duration-700 ease-in-out opacity-0 translate-y-6 bg-white p-4 rounded-xl shadow"
        >
          <p className="text-center italic">“{quote}”</p>
        </div>
      ))}
    </div>
  );
}
