export default function Hero() {
  return (
    <section id="home" className="ombara-hero">
      <div className="ombara-hero-bg" />
      <div className="ombara-hero-overlay" />

      <div className="ombara-hero-content">
        <h1 className="ombara-hero-title font-serif-ombara reveal is-visible">
          OMBARA
        </h1>
        <p className="ombara-hero-sub reveal is-visible delay-2">
          Immerse yourself in unparalleled coastal luxury.<br />
          A sanctuary where modern elegance meets the soothing rhythm of the sea.
        </p>
        <div className="ombara-hero-badges reveal is-visible delay-3">
          <span>Bespoke Luxury</span>
          <span>Oceanfront Living</span>
          <span>Tranquil Retreat</span>
        </div>
      </div>

      <div className="ombara-hero-bottom">
        <span className="ombara-hero-slide-title">The Arrival</span>
        <div className="ombara-hero-nav">
          <span>PREV</span>
          <span className="ombara-hero-indicator">01 / 03</span>
          <span>NEXT</span>
        </div>
      </div>
    </section>
  );
}