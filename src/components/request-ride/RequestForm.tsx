'use client';

import React, { useState } from 'react';
import styles from './RequestForm.module.css';

export default function RequestForm() {
  const [formData, setFormData] = useState({
    pickup: '',
    dropoff: '',
    date: '',
    time: '',
    seats: '1',
    notes: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - you'll need to implement this
    console.log('Form submitted:', formData);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="pickup">Pickup Location</label>
        <input
          type="text"
          id="pickup"
          name="pickup"
          value={formData.pickup}
          onChange={handleChange}
          placeholder="Enter pickup location"
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="dropoff">Dropoff Location</label>
        <input
          type="text"
          id="dropoff"
          name="dropoff"
          value={formData.dropoff}
          onChange={handleChange}
          placeholder="Enter dropoff location"
          required
        />
      </div>

      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="time">Time</label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="seats">Number of Seats</label>
        <select
          id="seats"
          name="seats"
          value={formData.seats}
          onChange={handleChange}
          required
        >
          <option value="1">1 seat</option>
          <option value="2">2 seats</option>
          <option value="3">3 seats</option>
          <option value="4">4 seats</option>
        </select>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="notes">Additional Notes</label>
        <textarea
          id="notes"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          placeholder="Any special requirements or preferences?"
          rows={4}
        />
      </div>

      <button type="submit" className={styles.submitButton}>
        Submit Request
      </button>
    </form>
  );
}