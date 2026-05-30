const trainers = [
  {
    name: 'Karim Haddad',
    role: 'Head Strength Coach',
    bio: 'Powerlifter focused on building strength and improving lifting technique.',
    image: '/images/karim-haddad.jpg',
  },
  {
    name: 'Maya Khoury',
    role: 'Hypertrophy Specialist',
    bio: 'Focuses on muscle growth and nutrition for competition prep.',
    image: '/images/maya-khoury.jpg',
  },
  {
    name: 'Dr. Jad Nasser',
    role: 'Mobility & Rehab',
    bio: 'Sports physical therapist helping athletes recover from injuries and build bulletproof joints.',
    image: '/images/dr-jad-nasser.jpg',
  },
];

export default function Trainers() {
  return (
    <main>
      <section className="page-header">
        <div className="container text-center">
          <h1 className="page-title-compact">Elite Coaches</h1>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="grid grid-3">
            {trainers.map((t) => (
              <article key={t.name} className="trainer-card">
                <div className="trainer-img">
                  <img src={t.image} alt={t.name} loading="lazy" />
                </div>
                <div className="trainer-info">
                  <div className="trainer-role">{t.role}</div>
                  <h3>{t.name}</h3>
                  <p className="trainer-bio">{t.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
