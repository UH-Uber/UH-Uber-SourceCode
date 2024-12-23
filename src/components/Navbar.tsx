'use client';

import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ChevronDown, User } from 'lucide-react';
import { Role } from '@prisma/client';
import styles from './Navbar.module.css';

const NavBar: React.FC = () => {
  const { data: session } = useSession();
  const currentUser = session?.user?.email;
  // Update the type casting to match your session user type
  const userRole = session?.user?.role as Role | undefined;
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.navContent}>
          <Link href="/" className={styles.logo}>
            UH Ride Share
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            className={styles.mobileMenuBtn}
            onClick={toggleMenu}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Navigation Links - Desktop */}
          <div className={`${styles.navLinks} ${isOpen ? styles.show : ''}`}>
            <Link
              href="/about"
              className={pathName === '/about' ? styles.active : ''}
            >
              About Us
            </Link>
            <Link
              href="/how-it-works"
              className={pathName === '/how-it-works' ? styles.active : ''}
            >
              How It Works
            </Link>
            <Link
              href="/safety"
              className={pathName === '/safety' ? styles.active : ''}
            >
              Safety
            </Link>
            <Link
              href="/contact"
              className={pathName === '/contact' ? styles.active : ''}
            >
              Contact
            </Link>

            {/* Profile Link - Only shown to logged in users */}
            {session && (
              <Link
                href="/profile"
                className={`${styles.profileLink} ${pathName === '/profile' ? styles.active : ''}`}
              >
                <User size={18} />
                <span>Profile</span>
              </Link>
            )}

            {/* Admin Link - Only shown to admin users */}
            {currentUser && userRole === 'ADMIN' && (
              <Link
                href="/admin"
                className={pathName === '/admin' ? styles.active : ''}
              >
                Admin
              </Link>
            )}
          </div>

          {/* Auth Buttons/Dropdown */}
          <div className={styles.authContainer}>
            {session ? (
              <div className={styles.userDropdown}>
                <button
                  type="button"
                  className={styles.dropdownButton}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {currentUser}
                  <ChevronDown size={16} />
                </button>
                <div className={styles.dropdownContent}>
                  <Link href="/profile" className={styles.dropdownItem}>
                    Profile
                  </Link>
                  <Link
                    href="/auth/change-password"
                    className={styles.dropdownItem}
                  >
                    Change Password
                  </Link>
                  <Link
                    href="/api/auth/signout"
                    className={styles.dropdownItem}
                  >
                    Sign Out
                  </Link>
                </div>
              </div>
            ) : (
              <div className={styles.authButtons}>
                <Link href="/auth/signin" className={styles.signInBtn}>
                  Sign In
                </Link>
                <Link href="/auth/signup" className={styles.signUpBtn}>
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
