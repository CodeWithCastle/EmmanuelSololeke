import { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './Header.module.css'
import escLogo from '../../assets/img/esc_logo.png'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const timeoutRef = useRef(null)
  const location = useLocation()

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setDropdownOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false)
    }, 180)
  }

  const closeMenu = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setMenuOpen(false)
    setDropdownOpen(false)
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const isAboutActive =
    location.pathname === '/about' ||
    location.pathname === '/about/partners' ||
    location.pathname === '/about/resource'

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        {/* Brand Logo */}
        <Link to="/" onClick={closeMenu} className={styles.logoLink} aria-label="Emmanuel Sololeke Consulting">
          <img src={escLogo} alt="ESC Logo" className={styles.headerLogo} />
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav} aria-label="Primary navigation">
          <Link
            to="/"
            className={`${styles.navLink} ${location.pathname === '/' ? styles.navLinkActive : ''}`}
          >
            Home
          </Link>

          {/* About Dropdown */}
          <div
            className={styles.dropdownWrapper}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              to="/about"
              className={`${styles.navLink} ${isAboutActive ? styles.navLinkActive : ''}`}
            >
              About Us
              <svg className={styles.chevronIcon} viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </Link>

            {dropdownOpen && (
              <div className={styles.dropdownMenu}>
                <Link to="/about" className={styles.dropdownItem} onClick={closeMenu}>
                  Company Overview
                </Link>
                <Link to="/about/partners" className={styles.dropdownItem} onClick={closeMenu}>
                  Our Partners
                </Link>
                <Link to="/about/resource" className={styles.dropdownItem} onClick={closeMenu}>
                  Resource Team
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/services"
            className={`${styles.navLink} ${location.pathname === '/services' ? styles.navLinkActive : ''}`}
          >
            Services
          </Link>

          <Link
            to="/properties"
            className={`${styles.navLink} ${location.pathname === '/properties' ? styles.navLinkActive : ''}`}
          >
            Properties
          </Link>

          <Link
            to="/insights"
            className={`${styles.navLink} ${location.pathname === '/insights' ? styles.navLinkActive : ''}`}
          >
            Insights
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className={styles.headerCta}>
          <a href="#contactus" className="action-btn">
            Contact Us
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className={`${styles.menuToggle} ${menuOpen ? styles.menuToggleActive : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`${styles.mobileDrawer} ${menuOpen ? styles.mobileDrawerOpen : ''}`}>
        <nav className={styles.mobileNav}>
          <Link
            to="/"
            className={`${styles.mobileNavLink} ${location.pathname === '/' ? styles.mobileNavActive : ''}`}
            onClick={closeMenu}
          >
            Home
          </Link>

          <div className={styles.mobileDropdown}>
            <Link
              to="/about"
              className={`${styles.mobileNavLink} ${isAboutActive ? styles.mobileNavActive : ''}`}
              onClick={closeMenu}
            >
              About Us
            </Link>
            <div className={styles.mobileSublinks}>
              <Link to="/about/partners" className={styles.mobileSublink} onClick={closeMenu}>
                Partners
              </Link>
              <Link to="/about/resource" className={styles.mobileSublink} onClick={closeMenu}>
                Resource Team
              </Link>
            </div>
          </div>

          <Link
            to="/services"
            className={`${styles.mobileNavLink} ${location.pathname === '/services' ? styles.mobileNavActive : ''}`}
            onClick={closeMenu}
          >
            Services
          </Link>

          <Link
            to="/properties"
            className={`${styles.mobileNavLink} ${location.pathname === '/properties' ? styles.mobileNavActive : ''}`}
            onClick={closeMenu}
          >
            Properties
          </Link>

          <Link
            to="/insights"
            className={`${styles.mobileNavLink} ${location.pathname === '/insights' ? styles.mobileNavActive : ''}`}
            onClick={closeMenu}
          >
            Insights
          </Link>

          <div className={styles.mobileCta}>
            <a href="#contactus" className="action-btn" onClick={closeMenu} style={{ width: '100%' }}>
              Contact Us
            </a>
          </div>
        </nav>
      </div>

      {/* Mobile Backdrop */}
      {menuOpen && (
        <div className={styles.backdrop} onClick={closeMenu} aria-hidden="true" />
      )}
    </header>
  )
}

export default Header