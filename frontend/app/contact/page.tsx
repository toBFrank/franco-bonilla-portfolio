"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();

    try {
      console.log(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form,
        {publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!}
      )
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form,
        {publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!}
      );
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <div 
      className={`bg-fixed bg-center bg-cover bg-no-repeat px-4 py-12`}
      style={{ backgroundImage: `url('${basePath}/images/mountains_2_portrait.jpg')` }}
    >
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
            <a href="mailto:bonilla.franco484@gmail.com" className="contact-link">
              bonilla.franco484@gmail.com
            </a>
          </div>
          <div className="contact-sidebar-section">
            <p className="contact-sidebar-label">Socials</p>
            <ul className="contact-socials">
              {[
                { label: "GitHub", href: "https://github.com/toBFrank" },
                { label: "LinkedIn", href: "https://linkedin.com/in/tobfrank" },
                { label: "Instagram", href: "https://instagram.com/tobfrankwu/" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noopener noreferrer" className="contact-link">
                    {label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
