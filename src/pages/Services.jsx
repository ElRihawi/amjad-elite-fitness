const services = [
  {
    title: 'Personal Training',
    body: 'One-on-one coaching based on your goals. We help you improve your form and track your progress.',
    bullets: ['Customized programming', 'Form correction and analysis', 'Nutritional guidance'],
  },
  {
    title: 'Powerlifting Prep',
    body: 'Training plans for people who want to compete in powerlifting and improve their main lifts.',
    bullets: ['Meet day strategy', 'Peaking blocks', 'Attempt selection'],
  },
  {
    title: 'Hypertrophy Camp',
    body: 'Programs focused on building muscle with proper training and recovery.',
    bullets: ['Science-based volume', 'Progressive overload', 'Recovery protocols'],
  },
  {
    title: 'Open Gym Access',
    body: 'For the independent lifter who just needs the right tools. Train freely with full access to all equipment.',
    bullets: ['24/7 Access options', 'Competition racks', 'Dedicated lifting platforms'],
  },
];

export default function Services() {
  return (
    <main>
      <section className="page-header">
        <div className="container text-center">
          <h1 className="page-title-compact">Our Services</h1>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="grid grid-2">
            {services.map((s) => (
              <div key={s.title} className="card">
                <h3>{s.title}</h3>
                <p>{s.body}</p>
                <ul className="feature-list">
                  {s.bullets.map((b) => (
                    <li key={b}>
                      <span>❯</span> {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
