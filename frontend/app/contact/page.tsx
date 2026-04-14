"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    // TODO: wire up form submission
    alert("Form submitted (placeholder)");
  };

  return (
    <div className="page-wrapper">
      <h1 className="page-title">Contact</h1>

      <div className="contact-layout">
        <div className="contact-form">
          <div className="contact-field">
            <label className="contact-label" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="contact-input"
            />
          </div>

          <div className="contact-field">
            <label className="contact-label" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="your@email.com"
              value={form.email}
              onChange={handleChange}
              className="contact-input"
            />
          </div>

          <div className="contact-field">
            <label className="contact-label" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Your message..."
              value={form.message}
              onChange={handleChange}
              className="contact-textarea"
            />
          </div>

          <button onClick={handleSubmit} className="btn-wide">
            Send Message →
          </button>
        </div>

        <div className="contact-sidebar">
          <div className="contact-sidebar-section">
            <p className="contact-sidebar-label">Email</p>
            <a href="mailto:you@example.com" className="contact-link">
              you@example.com
            </a>
          </div>
          <div className="contact-sidebar-section">
            <p className="contact-sidebar-label">Socials</p>
            <ul className="contact-socials">
              {[
                { label: "GitHub", href: "#" },
                { label: "LinkedIn", href: "#" },
                { label: "Twitter / X", href: "#" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="contact-link">
                    {label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
