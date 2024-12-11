'use client';

import React, { useState } from 'react';
import { Search, X } from 'lucide-react';
import styles from './SearchFilters.module.css';

export default function SearchFilters() {
  const [filters, setFilters] = useState({
    pickup: '',
    dropoff: '',
    date: '',
    time: '',
    seats: '1',
    maxPrice: '',
    recurringOnly: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const newValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;

    setFilters(prev => ({
      ...prev,
      [name]: newValue,
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
      recurringOnly: false,
    });
  };

  return (
    <form className={styles.filtersWrapper}>
      <div className={styles.filterHeader}>
        <h2>Search Filters</h2>
        <button type="button" onClick={handleReset} className={styles.resetButton}>
          <X size={16} />
          Reset
        </button>
      </div>

      <div className={styles.filterGroup}>
        <label htmlFor="pickup">
          Pickup Location
          <input
            type="text"
            id="pickup"
            name="pickup"
            value={filters.pickup}
            onChange={handleChange}
            placeholder="Enter pickup location"
          />
        </label>
      </div>

      <div className={styles.filterGroup}>
        <label htmlFor="dropoff">
          Dropoff Location
          <input
            type="text"
            id="dropoff"
            name="dropoff"
            value={filters.dropoff}
            onChange={handleChange}
            placeholder="Enter dropoff location"
          />
        </label>
      </div>

      <div className={styles.filterRow}>
        <div className={styles.filterGroup}>
          <label htmlFor="date">
            Date
            <input
              type="date"
              id="date"
              name="date"
              value={filters.date}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className={styles.filterGroup}>
          <label htmlFor="time">
            Time
            <input
              type="time"
              id="time"
              name="time"
              value={filters.time}
              onChange={handleChange}
            />
          </label>
        </div>
      </div>

      <div className={styles.filterRow}>
        <div className={styles.filterGroup}>
          <label htmlFor="seats">
            Seats Needed
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
          </label>
        </div>

        <div className={styles.filterGroup}>
          <label htmlFor="maxPrice">
            Max Price ($)
            <input
              type="number"
              id="maxPrice"
              name="maxPrice"
              value={filters.maxPrice}
              onChange={handleChange}
              min="0"
              placeholder="Any"
            />
          </label>
        </div>
      </div>

      <div className={styles.filterGroup}>
        <label htmlFor="recurringOnly" className={styles.checkboxLabel}>
          <input
            type="checkbox"
            id="recurringOnly"
            name="recurringOnly"
            checked={filters.recurringOnly}
            onChange={handleChange}
          />
          Show recurring rides only
        </label>
      </div>

      <button type="submit" className={styles.searchButton}>
        <Search size={20} />
        Search Rides
      </button>
    </form>
  );
}
