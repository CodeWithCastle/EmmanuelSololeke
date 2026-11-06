import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './Header.module.css'
import escLogo from '../../assets/img/esc_logo.png'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const location = useLocation()

  const closeMenu = () => {
    setMenuOpen(false)
    setDropdownOpen(false)
  }

  const isAboutActive =
    location.pathname === '/about' ||
    location.pathname === '/about/partners' ||
    location.pathname === '/about/resource'

  return (
    <header className={styles.header}>
      <div className="content">
        <h1 className={styles.headerTitle}>Emmanuel Sololeke Consulting</h1>

        <div className={styles.navbarContainer}>
          <Link to="/" onClick={closeMenu} aria-label="Emmanuel Sololeke Consulting Home">
            <img src={escLogo} alt="ESC Logo" className={styles.headerLogo} />
          </Link>

          {/* Hamburger */}
          <button
            className={`${styles.menuToggle} ${menuOpen ? styles.menuOpen : ''}`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
          >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </button>

          {/* Nav block */}
          <div className={`${styles.navbarBlock} ${menuOpen ? styles.navbarBlockOpen : ''}`}>
            <nav className={styles.navbar}>
              {/* Home — current page = span */}
              {location.pathname === '/' ? (
                <span className={`${styles.navLink} ${styles.navLinkActive}`} onClick={closeMenu}>home</span>
              ) : (
                <Link to="/" className={styles.navLink} onClick={closeMenu}>home</Link>
              )}

              {/* About dropdown */}
              <div
                className={`${styles.dropdown} ${isAboutActive ? styles.navLinkActive : ''}`}
                onMouseEnter={() => !menuOpen && setDropdownOpen(true)}
                onMouseLeave={() => !menuOpen && setDropdownOpen(false)}
              >
                {isAboutActive ? (
                  <span className={`${styles.navLink} ${styles.navLinkActive}`}>about us</span>
                ) : (
                  <span
                    className={styles.navLink}
                    onClick={() => menuOpen && setDropdownOpen((prev) => !prev)}
                  >
                    about us
                  </span>
                )}

                <div className={`${styles.dropdownList} ${dropdownOpen || (!menuOpen && undefined) ? styles.dropdownListOpen : ''}`}
                     style={menuOpen ? { display: dropdownOpen ? 'block' : 'none' } : undefined}
                >
                  <div className={styles.dropdownOverlay}></div>
                  <Link to="/about/partners" className={styles.dropdownItem} onClick={closeMenu}>
                    partners
                  </Link>
                  <Link to="/about/resource" className={styles.dropdownItem} onClick={closeMenu}>
                    resource teams
                  </Link>
                </div>
              </div>

              {/* Services */}
              {location.pathname === '/services' ? (
                <span className={`${styles.navLink} ${styles.navLinkActive}`} onClick={closeMenu}>services</span>
              ) : (
                <Link to="/services" className={styles.navLink} onClick={closeMenu}>services</Link>
              )}

              {/* Properties */}
              {location.pathname === '/properties' ? (
                <span className={`${styles.navLink} ${styles.navLinkActive}`} onClick={closeMenu}>properties</span>
              ) : (
                <Link to="/properties" className={styles.navLink} onClick={closeMenu}>properties</Link>
              )}
            </nav>

            <nav className={styles.navbarExtras}>
              {location.pathname === '/insights' ? (
                <span className={`${styles.navLink} ${styles.navLinkActive}`} onClick={closeMenu}>insights</span>
              ) : (
                <Link to="/insights" className={styles.navLink} onClick={closeMenu}>insights</Link>
              )}
              <a href="#contactus" className={`${styles.navLink} ${styles.contactBtn} action-btn`} onClick={closeMenu}>
                contact us
              </a>
            </nav>
          </div>
        </div>

        {/* Overlay backdrop on mobile menu */}
        {menuOpen && (
          <div className={styles.mobileBackdrop} onClick={closeMenu} aria-hidden="true" />
        )}
      </div>
    </header>
  )
}

export default Header
