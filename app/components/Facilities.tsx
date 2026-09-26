"use client";
import { useState } from "react";

const TABS = [
  { id: "pool", label: "Infinity Pool", title: "Infinity Pool", text: "Dive into our stunning infinity pool overlooking the ocean. The perfect spot to watch the sunset with a cocktail in hand.", img: "/assets/version-2/image(8).jpg" },
  { id: "spa", label: "Spa & Wellness", title: "Spa & Wellness", text: "Relax and unwind with our signature massage treatments using organic local ingredients.", img: "/assets/version-2/image(9).jpg" },
  { id: "gym", label: "Fitness Center", title: "Fitness Center", text: "Stay active during your vacation in our state-of-the-art gym equipped with the latest machines.", img: "/assets/version-2/image(10).jpg" },
];

export default function Facilities() {
  const [active, setActive] = useState("pool");
  const current = TABS.find(t => t.id === active)!;

  return (
    <section id="facilities" className="ombara-facilities">
      <div className="ombara-facilities-img">
        <img src="/assets/version-2/image(7).jpg" alt="Facilities" />
      </div>
      <div className="ombara-facilities-content">
        <span className="accent-text">Immerse</span>
        <h2 className="section-title mb-8">World-Class Amenities</h2>

        <ul className="ombara-tabs-nav">
          {TABS.map(t => (
            <li
              key={t.id}
              className={t.id === active ? "active" : ""}
              onClick={() => setActive(t.id)}
            >
              {t.label}
            </li>
          ))}
        </ul>

        <div className="ombara-tab-pane">
          <h3 className="font-serif-ombara">{current.title}</h3>
          <p>{current.text}</p>
          <img src={current.img} alt={current.title} />
        </div>
      </div>
    </section>
  );
}