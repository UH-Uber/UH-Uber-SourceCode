'use client';

import React, { useState } from 'react';
import styles from './SearchFilters.module.css';
import { Search, X } from 'lucide-react';

export default function SearchFilters() {
  const [filters, setFilters] = useState({
    pickup: '',
    dropoff: '',
    date: '',
    time: '',
    seats: '1',
    maxPrice: '',
    recurringOnly: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const newValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    
    setFilters(prev => ({
      ...prev,
      [name]: newValue
    }));
  };

  const handleReset = () => {
    setFilters({
      pickup: '',
      dropoff: '',
      date: '',
      time: '',
      seats: '1',
      maxPrice: '',
      recurringOnly: false
    });
  };

  return (
    <div className={styles.filtersWrapper}>
      <div className={styles.filterHeader}>
        <h2>Search Filters</h2>
        <button onClick={handleReset} className={styles.resetButton}>
          <X size={16} />
          Reset
        </button>
      </div>

      <div className={styles.filterGroup}>
        <label htmlFor="pickup">Pickup Location</label>
        <input
          type="text"
          id="pickup"
          name="pickup"
          value={filters.pickup}
          onChange={handleChange}
          placeholder="Enter pickup location"
        />
      </div>

      <div className={styles.filterGroup}>
        <label htmlFor="dropoff">Dropoff Location</label>
        <input
          type="text"
          id="dropoff"
          name="dropoff"
          value={filters.dropoff}
          onChange={handleChange}
          placeholder="Enter dropoff location"
        />
      </div>

      <div className={styles.filterRow}>
        <div className={styles.filterGroup}>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={filters.date}
            onChange={handleChange}
          />
        </div>

        <div className={styles.filterGroup}>
          <label htmlFor="time">Time</label>
          <input
            type="time"
            id="time"
            name="time"
            value={filters.time}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className={styles.filterRow}>
        <div className={styles.filterGroup}>
          <label htmlFor="seats">Seats Needed</label>
          <select
            id="seats"
            name="seats"
            value={filters.seats}
            onChange={handleChange}
          >
            <option value="1">1 seat</option>
            <option value="2">2 seats</option>
            <option value="3">3 seats</option>
            <option value="4">4 seats</option>
          </select>
        </div>

        <div className={styles.filterGroup}>
          <label htmlFor="maxPrice">Max Price ($)</label>
          <input
            type="number"
            id="maxPrice"
            name="maxPrice"
            value={filters.maxPrice}
            onChange={handleChange}
            min="0"
            placeholder="Any"
          />
        </div>
      </div>

      <div className={styles.filterGroup}>
        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            name="recurringOnly"
            checked={filters.recurringOnly}
            onChange={handleChange}
          />
          Show recurring rides only
        </label>
      </div>

      <button className={styles.searchButton}>
        <Search size={20} />
        Search Rides
      </button>
    </div>
  );
}