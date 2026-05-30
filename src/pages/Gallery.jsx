const items = [
  { src: '/images/power-racks.jpg', label: 'Power Racks', alt: 'Power racks in the gym' },
  { src: '/images/cardio-zone.jpg', label: 'Cardio Zone', alt: 'Cardio training area' },
  { src: '/images/free-weights.jpg', label: 'Free Weights', alt: 'Free weights area' },
  { src: '/images/turf-area.jpg', label: 'Turf Area', alt: 'Turf training area' },
  { src: '/images/machines.jpg', label: 'Machines', alt: 'Strength machines' },
  { src: '/images/recovery.jpg', label: 'Recovery', alt: 'Recovery area' },
];

export default function Gallery() {
  return (
    <main>
      <section className="page-header">
        <div className="container text-center">
          <h1 className="page-title-compact">Our Facility</h1>
          <p className="page-subtitle page-subtitle-narrow">
            Premium equipment, specialized zones, and a focused atmosphere.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="gallery-grid">
            {items.map((item) => (
              <div key={item.src} className="gallery-item">
                <img src={item.src} alt={item.alt} loading="lazy" />
                <div className="gallery-overlay">
                  <h3>{item.label}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
