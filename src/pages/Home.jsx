import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-content">
          <h1>No Excuses,Just Results</h1>
          <p>
            Premium coaching, serious strength, and an elite environment. Push past your limits.
          </p>
          <Link to="/contact" className="btn btn-primary">
            Start Training
          </Link>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Why Elite Fitness?</h2>
          <div className="grid grid-3">
            <div className="card">
              <i className="card-icon fa-solid fa-dumbbell" aria-hidden />
              <h3>Disciplined Coaching</h3>
              <p>
                Our trainers don&apos;t just count reps; they analyze biomechanics and craft custom
                programs.
              </p>
            </div>
            <div className="card">
              <i className="card-icon fa-solid fa-bars-progress" aria-hidden />
              <h3>Serious Equipment</h3>
              <p>
                Calibrated plates, specialized bars, and competition-grade racks for raw strength.
              </p>
            </div>
            <div className="card">
              <i className="card-icon fa-solid fa-star" aria-hidden />
              <h3>Premium Atmosphere</h3>
              <p>
                A focused, intense environment free from distractions. Train with the dedicated.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
