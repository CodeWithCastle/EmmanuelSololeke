import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Footer.module.css'
import escLogo from '../../assets/img/esc_logo.png'
import locationIcon from '../../assets/icons/location.png'
import mailIcon from '../../assets/icons/mail.png'
import phoneIcon from '../../assets/icons/phone.png'

const currentYear = new Date().getFullYear()

function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Valuation & Advisory',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'Valuation & Advisory',
        message: '',
      })
    }, 4000)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <footer className={styles.footer}>
      {/* 1. Contact Us Section */}
      <section className={styles.contactSection} id="contactus">
        <div className="content">
          <div className={styles.contactCard}>
            <div className={styles.contactHeader}>
              <span className={styles.contactSubtitle}>Get in Touch</span>
              <h2 className={styles.contactTitle}>Let&apos;s Discuss Your Real Estate Needs</h2>
              <p className={styles.contactLead}>
                Whether you require professional asset valuation, facility management,
                or property acquisition advisory, our chartered surveyors are ready to assist.
              </p>
            </div>

            {submitted ? (
              <div className={styles.successMessage}>
                <div className={styles.successIcon}>✓</div>
                <h3>Thank You for Reaching Out!</h3>
                <p>We have received your message. A senior consultant will respond promptly.</p>
              </div>
            ) : (
              <form className={styles.contactForm} onSubmit={handleSubmit}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.label}>Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Dr. Aliyu Bello"
                      className={styles.input}
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.label}>Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@organization.com"
                      className={styles.input}
                      required
                    />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="phone" className={styles.label}>Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+234 800 000 0000"
                      className={styles.input}
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="service" className={styles.label}>Service of Interest</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={styles.select}
                    >
                      <option value="Valuation & Advisory">Asset Valuation &amp; Advisory</option>
                      <option value="Facilities Management">Facilities &amp; Property Management</option>
                      <option value="Financial & Asset Audit">Financial &amp; Asset Audit</option>
                      <option value="Estate Agency (Sales & Lettings)">Estate Agency (Sales &amp; Lettings)</option>
                      <option value="Feasibility & Viability Studies">Feasibility &amp; Viability Studies</option>
                    </select>
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.label}>Brief Project Details</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your property, location, or advisory requirements..."
                    className={styles.textarea}
                    required
                  ></textarea>
                </div>

                <div className={styles.formActions}>
                  <button type="submit" className="action-btn">
                    Send Consultation Request
                  </button>
                  <a
                    href="https://wa.me/2348036097688"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.whatsappBtn}
                    aria-label="Chat with Emmanuel Sololeke Consulting on WhatsApp"
                  >
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                    Chat on WhatsApp (+234 803 609 7688)
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 2. Main Footer Navigation & Directory */}
      <div className={styles.mainFooter}>
        <div className="content">
          <div className={styles.footerGrid}>
            {/* Company Bio */}
            <div className={styles.bioCol}>
              <Link to="/" className={styles.footerLogoLink}>
                <img src={escLogo} alt="Emmanuel Sololeke Consulting" className={styles.footerLogo} />
              </Link>
              <p className={styles.bioText}>
                Firm of Estate Surveyors &amp; Valuers registered in Nigeria in accordance with
                rules of NIESV and ESVARBON. Delivering tested professionalism, asset valuation,
                and real estate intelligence for nearly a decade.
              </p>
              <div className={styles.affiliationBadges}>
                <span>NIESV Registered</span>
                <span>ESVARBON Certified</span>
              </div>
            </div>

            {/* Links Columns */}
            <div className={styles.linkCol}>
              <h4 className={styles.colTitle}>About Us</h4>
              <ul className={styles.linkList}>
                <li><Link to="/about#mission">Our Mission</Link></li>
                <li><Link to="/about#vision">Our Vision</Link></li>
                <li><Link to="/about#profile">Corporate Profile</Link></li>
                <li><Link to="/about/partners">Our Partners</Link></li>
                <li><Link to="/about/resource">Resource Team</Link></li>
              </ul>
            </div>

            <div className={styles.linkCol}>
              <h4 className={styles.colTitle}>Services</h4>
              <ul className={styles.linkList}>
                <li><Link to="/services">Asset Valuation &amp; Advisory</Link></li>
                <li><Link to="/services">Facilities Management</Link></li>
                <li><Link to="/services">Financial &amp; Asset Audit</Link></li>
                <li><Link to="/services">Estate Agency &amp; Lettings</Link></li>
                <li><Link to="/services">Project Feasibility Studies</Link></li>
              </ul>
            </div>

            <div className={styles.linkCol}>
              <h4 className={styles.colTitle}>Properties</h4>
              <ul className={styles.linkList}>
                <li><Link to="/properties?type=sale">Properties For Sale</Link></li>
                <li><Link to="/properties?type=lease">Properties For Lease</Link></li>
                <li><Link to="/properties?iloc=plateau">Plateau Listings</Link></li>
                <li><Link to="/properties?deny_iloc=plateau">Abuja &amp; Lagos Properties</Link></li>
              </ul>
            </div>

            <div className={styles.linkCol}>
              <h4 className={styles.colTitle}>Data Bank</h4>
              <ul className={styles.linkList}>
                <li><Link to="/insights?cat=news">News &amp; Publications</Link></li>
                <li><Link to="/insights?cat=annual_report">Annual Property Report</Link></li>
                <li><Link to="/insights?cat=bank">Real Estate Data Bank</Link></li>
                <li><Link to="/insights?cat=articles">Industry Articles</Link></li>
              </ul>
            </div>
          </div>

          {/* 3. Office Locations */}
          <div className={styles.officeSection}>
            <h4 className={styles.officeHeading}>Our Office Network</h4>
            <div className={styles.officeGrid}>
              <div className={styles.officeCard}>
                <span className={styles.officeName}>Head Office (Jos)</span>
                <div className={styles.officeDetail}>
                  <img src={locationIcon} alt="" className={styles.officeIcon} />
                  <span>Suite 1 Behind MIVA Open University, 3 Beach Road Jos Plateau State</span>
                </div>
                <div className={styles.officeDetail}>
                  <img src={mailIcon} alt="" className={styles.officeIcon} />
                  <a href="mailto:sololeke@yahoo.com">sololeke@yahoo.com</a>
                </div>
                <div className={styles.officeDetail}>
                  <img src={phoneIcon} alt="" className={styles.officeIcon} />
                  <a href="tel:+2348036097688">+234 803 609 7688</a>
                </div>
              </div>

              <div className={styles.officeCard}>
                <span className={styles.officeName}>Lagos Office</span>
                <div className={styles.officeDetail}>
                  <img src={locationIcon} alt="" className={styles.officeIcon} />
                  <span>5 Oladejo Street, off Olusosun Bus Stop, Kudirat Abiola Rd, Oregun, Lagos</span>
                </div>
                <div className={styles.officeDetail}>
                  <img src={phoneIcon} alt="" className={styles.officeIcon} />
                  <a href="tel:+2348093949347">+234 809 394 9347</a>
                </div>
              </div>

              <div className={styles.officeCard}>
                <span className={styles.officeName}>Abuja Office</span>
                <div className={styles.officeDetail}>
                  <img src={locationIcon} alt="" className={styles.officeIcon} />
                  <span>Suite B41, Danziya Plaza, Opp. NNPC Mega Station, Central Business District, Abuja</span>
                </div>
                <div className={styles.officeDetail}>
                  <img src={phoneIcon} alt="" className={styles.officeIcon} />
                  <a href="tel:+2348136273359">08136273359</a>
                </div>
              </div>

              <div className={styles.officeCard}>
                <span className={styles.officeName}>Gombe Office</span>
                <div className={styles.officeDetail}>
                  <img src={locationIcon} alt="" className={styles.officeIcon} />
                  <span>Suite 4, Jubilee Complex, Behind Jubilee Hotel, Biu Road, Gombe State</span>
                </div>
                <div className={styles.officeDetail}>
                  <img src={phoneIcon} alt="" className={styles.officeIcon} />
                  <a href="tel:+2348036097688">+234 803 609 7688</a>
                </div>
              </div>
            </div>
          </div>

          {/* 4. Bottom Copyright */}
          <div className={styles.bottomBar}>
            <p className={styles.copyrightText}>
              &copy; {currentYear} Emmanuel Sololeke Consulting. All rights reserved.
            </p>
            <p className={styles.regulatoryText}>
              Chartered Estate Surveyors &amp; Valuers | Registered with NIESV &amp; ESVARBON
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer