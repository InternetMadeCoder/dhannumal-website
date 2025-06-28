"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    // todo: send form data to backend or email service
  }

  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      {submitted ? (
        <div className="p-4 bg-green-100 dark:bg-green-900 rounded">
          Thank you for reaching out! We&apos;ll get back to you soon.
        </div>
      ) : (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            className="border rounded px-3 py-2 bg-transparent"
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            className="border rounded px-3 py-2 bg-transparent"
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            className="border rounded px-3 py-2 bg-transparent"
            name="message"
            placeholder="Message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded font-semibold hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  );
}
