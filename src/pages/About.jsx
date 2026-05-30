import { Link } from 'react-router-dom';

export default function About() {
  return (
    <main>
      <section className="page-header">
        <div className="container text-center">
          <h1 className="page-title-compact">About Us</h1>
          <p className="page-subtitle page-subtitle-narrow">
            Strength-focused training on Hamra Street, Beirut.
          </p>
        </div>
      </section>

      <section>
        <div className="container about-body">
          <p>
            Amjad Elite Fitness is built for people who want structured coaching, honest feedback,
            and a gym that takes lifting seriously. We are not a generic commercial floor: the space
            is set up for strength work, smart progression, and training that respects recovery as
            much as intensity.
          </p>
          <p>
            Whether you are preparing for a meet, building muscle with intent, or rebuilding after an
            injury, our coaches work from clear programming principles—not trends. You will find the
            same equipment standards and atmosphere highlighted on our home page: disciplined
            coaching, serious racks and bars, and a focused room where people train with purpose.
          </p>
          <p className="about-cta">
            <Link to="/services" className="btn btn-primary">
              View services
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Contact
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
