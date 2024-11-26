import React from 'react';
import { Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react';
import styles from './page.module.css';

export default function ContactPage() {
  const faqs = [
    {
      question: "How quickly will I receive a response?",
      answer: "We aim to respond to all inquiries within 24 hours during business days."
    },
    {
      question: "What if I need immediate assistance?",
      answer: "For urgent matters, please contact Campus Security at (808) 956-6911."
    },
    {
      question: "Can I report an issue with a ride?",
      answer: "Yes, use our contact form and select 'Report an Issue' from the subject dropdown."
    }
  ];

  return (
    <div className={styles.pageContainer}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.heroTitle}>Contact Us</h1>
          <p className={styles.heroText}>
            Have questions or need assistance? We're here to help!
          </p>
        </div>
      </section>

      <div className={styles.mainContent}>
        <div className={styles.container}>
          <div className={styles.contentGrid}>
            {/* Contact Information */}
            <div className={styles.contactInfo}>
              <h2 className={styles.sectionTitle}>Get in Touch</h2>
              
              <div className={styles.infoCard}>
                <Mail className={styles.infoIcon} />
                <div>
                  <h3>Email</h3>
                  <a href="mailto:lyonws@hawaii.edu">lyonws@hawaii.edu</a>
                </div>
              </div>

              <div className={styles.infoCard}>
                <MapPin className={styles.infoIcon} />
                <div>
                  <h3>Location</h3>
                  <p>Department of Information and Computer Sciences<br />
                     University of Hawaii at Manoa<br />
                     Honolulu, HI 96822</p>
                </div>
              </div>

              <div className={styles.infoCard}>
                <Clock className={styles.infoIcon} />
                <div>
                  <h3>Support Hours</h3>
                  <p>Monday - Friday<br />
                     9:00 AM - 5:00 PM HST</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={styles.contactForm}>
              <h2 className={styles.sectionTitle}>Send us a Message</h2>
              <form className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="subject">Subject</label>
                  <select id="subject" name="subject" required>
                    <option value="">Select a Subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="feedback">Feedback</option>
                    <option value="report">Report an Issue</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>

                <button type="submit" className={styles.submitButton}>
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* FAQs Section */}
          <section className={styles.faqSection}>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
            <div className={styles.faqGrid}>
              {faqs.map((faq, index) => (
                <div key={index} className={styles.faqCard}>
                  <MessageSquare className={styles.faqIcon} />
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}