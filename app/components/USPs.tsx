const USPS = [
  { icon: "🏛", text: "Exclusive Freehold\nSeafront Address" },
  { icon: "🏖", text: "Private Access to\nPristine Beachfront" },
  { icon: "🌊", text: "Panoramic Ocean\nView Experience" },
  { icon: "🧘", text: "Resort-Style Wellness\n& Leisure Facilities" },
  { icon: "📐", text: "Thoughtfully Designed\nFlexible Layouts" },
  { icon: "🛍", text: "Retail Conveniences\nWithin Reach" },
  { icon: "🛋", text: "Move-In Ready\nFully Furnished Homes" },
  { icon: "🔑", text: "Smart Dual-Key\nInvestment Concept" },
  { icon: "🌿", text: "Sustainable Living with\nGreenRE Certification" },
];

export default function USPs() {
  return (
    <section id="usps" className="section-padding ombara-usp-bg">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <span className="accent-text">Exclusive Features</span>
          <h2 className="section-title">Redefining Coastal Excellence</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {USPS.map((u, i) => (
            <div key={i} className={`ombara-usp-item reveal delay-${(i % 4) + 1}`}>
              <span className="ombara-usp-icon">{u.icon}</span>
              <p className="ombara-usp-text">{u.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}