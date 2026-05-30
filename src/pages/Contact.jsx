import { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus('Please fill in name, email, and message.');
      return;
    }
    setStatus(
      'Message recorded locally (demo). For a real inquiry, email info@amjadelite.com or call +961 81 682 971.'
    );
    setName('');
    setEmail('');
    setMessage('');
  }

  return (
    <main>
      <section className="page-header">
        <div className="container text-center">
          <h1 className="page-title-compact">Get In Touch</h1>
          <p className="page-subtitle">Ready to start? Send us a message or drop by.</p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="contact-layout">
            <div className="contact-form">
              <h2 className="form-title">Send a Message</h2>
              <form onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label htmlFor="contact-name">Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    className="form-control"
                    autoComplete="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email">Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    className="form-control"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    className="form-control"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="I'm interested in personal training..."
                  />
                </div>
                {status ? <p className="form-status">{status}</p> : null}
                <button type="submit" className="btn btn-primary btn-full">
                  Send Message
                </button>
              </form>
            </div>

            <div className="contact-info">
              <div className="info-card">
                <h4>Address</h4>
                <p>
                  Hamra Street
                  <br />
                  Beirut, Lebanon
                </p>
              </div>
              <div className="info-card">
                <h4>Contact</h4>
                <p>
                  Email: info@amjadelite.com
                  <br />
                  Phone: +961 81 682 971
                </p>
              </div>
              <div className="info-card">
                <h4>Hours</h4>
                <p>
                  Mon - Fri: 5AM – 11PM
                  <br />
                  Sat: 7AM – 9PM
                  <br />
                  Sun: 8AM – 8PM
                </p>
              </div>
              <div className="facility-card">
                <h4>Visit the Gym</h4>
                <p>
                  Explore our training zones, recovery area, and elite equipment before joining.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
