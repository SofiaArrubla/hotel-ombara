const CARDS = [
  { img: "/assets/version-2/image(13).jpg", kicker: "01 / Arrival", title: "Coastal Horizon", text: "A first impression shaped by open skies, quiet water, and soft architectural lines." },
  { img: "/assets/version-2/image(14).jpg", kicker: "02 / Leisure", title: "Resort Light", text: "Sun-washed amenities and framed ocean views create an effortless rhythm throughout the day." },
  { img: "/assets/version-2/image(15).jpg", kicker: "03 / Stay", title: "Private Calm", text: "Refined materials, warm textures, and generous space bring a more intimate residential feel." },
  { img: "/assets/version-2/image(16).jpg", kicker: "04 / Restore", title: "Wellness Mood", text: "The journey closes with spaces that feel slow, grounded, and deeply restorative." },
];

export default function Gallery() {
  return (
    <section id="gallery" className="section-padding">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-16 max-w-xl">
          <span className="accent-text">Gallery</span>
          <h2 className="section-title">A Glimpse into Ombara</h2>
          <p className="section-subtitle">
            A seamless journey through refined spaces, coastal architecture, and thoughtfully crafted details.
          </p>
        </div>

        <div className="ombara-gallery-track">
          {CARDS.map((c, i) => (
            <article key={c.title} className={`ombara-gallery-card reveal delay-${i + 1}`}>
              <div className="ombara-gallery-media">
                <img src={c.img} alt={c.title} />
              </div>
              <div className="ombara-gallery-body">
                <span className="ombara-gallery-kicker">{c.kicker}</span>
                <h3 className="font-serif-ombara">{c.title}</h3>
                <p>{c.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}