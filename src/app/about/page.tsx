import React from 'react';
import { GraduationCap, Car, Heart, Leaf } from 'lucide-react';
import styles from './page.module.css';

export default function AboutPage() {
  const teamMembers = [
    { 
      name: 'Justin Campos', 
      role: 'Full Stack Developer',
      image: '/images/team/justin.jpg'
    },
    { 
      name: 'Jayda Decker', 
      role: 'UI/UX Designer',
      image: '/images/team/jayda.jpg'
    },
    { 
      name: 'Karina Park', 
      role: 'Backend Developer',
      image: '/images/team/karina.jpg'
    },
    { 
      name: 'Lyon Singleton', 
      role: 'Full Stack Developer',
      image: '/images/team/lyon.jpg'
    },
    { 
      name: 'Baishen Wang', 
      role: 'Frontend Developer',
      image: '/images/team/baishen.png'
    },
  ];

  return (
    <div className={styles.pageContainer}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.heroTitle}>About UH Manoa Ride Share</h1>
          <p className={styles.heroText}>
            Building a sustainable and connected campus community through shared transportation
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Mission</h2>
          <p className={styles.missionText}>
            UH Manoa Ride Share was created by students, for students, to address the challenges
            of campus commuting while promoting sustainability and community building.
          </p>
          
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <GraduationCap className={styles.valueIcon} />
              <h3>Student-Focused</h3>
              <p>Designed specifically for UH Manoa students' needs</p>
            </div>
            <div className={styles.valueCard}>
              <Car className={styles.valueIcon} />
              <h3>Accessible</h3>
              <p>Making campus commuting easier and more affordable</p>
            </div>
            <div className={styles.valueCard}>
              <Heart className={styles.valueIcon} />
              <h3>Community</h3>
              <p>Building connections between fellow students</p>
            </div>
            <div className={styles.valueCard}>
              <Leaf className={styles.valueIcon} />
              <h3>Sustainable</h3>
              <p>Reducing our campus carbon footprint</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Meet Our Team</h2>
          <div className={styles.teamGrid}>
            {teamMembers.map((member) => (
              <div key={member.name} className={styles.teamCard}>
                <div className={styles.teamMemberImage}>
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    className={styles.avatar}
                  />
                </div>
                <h3 className={styles.teamMemberName}>{member.name}</h3>
                <p className={styles.teamMemberRole}>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Status */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Project Status</h2>
          <div className={styles.statusContent}>
            <p>
              This project is currently in active development. Our team is working on:
            </p>
            <ul className={styles.statusList}>
              <li>Setting up the development infrastructure</li>
              <li>Finalizing design mockups</li>
              <li>Planning the implementation timeline</li>
              <li>Building our core features</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}