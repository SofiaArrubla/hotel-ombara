const ITEMS = [
  { img: "/assets/version-2/image(4).jpg", title: "Harmony", text: "Discover profound tranquility within our meticulously crafted interiors." },
  { img: "/assets/version-2/image(5).jpg", title: "Vitality", text: "Restore your inner balance with our holistic spa and wellness offerings." },
  { img: "/assets/version-2/image(6).jpg", title: "Gastronomy", text: "Savor world-class gastronomy prepared by renowned culinary artisans." },
];

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <span className="accent-text">Discover</span>
          <h2 className="section-title">A New Standard</h2>
          <p className="section-subtitle">Where architectural brilliance harmonizes with nature</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {ITEMS.map((item, i) => (
            <div key={item.title} className={`ombara-about-item reveal delay-${i + 1}`}>
              <div className="ombara-about-img-wrap">
                <img src={item.img} alt={item.title} className="ombara-about-img" />
              </div>
              <h3 className="ombara-about-title font-serif-ombara">{item.title}</h3>
              <p className="ombara-about-text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}