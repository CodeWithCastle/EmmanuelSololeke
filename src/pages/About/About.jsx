import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import SectionHero from '../../components/ui/SectionHero.jsx'
import styles from './About.module.css'
import aboutBgd from '../../assets/img/bgd/aboutus_bgd.avif'

function About() {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [hash])

  return (
    <div className={styles.aboutPage}>
      {/* Hero */}
      <SectionHero
        backgroundImage={aboutBgd}
        title="About Emmanuel Sololeke Consulting"
        id="aboutus-hero"
      />

      {/* 1. Introduction & Why Choose Us */}
      <section className={styles.overviewSection} id="whyus">
        <div className="content">
          <div className={styles.introBlock}>
            <span className={styles.kicker}>Who We Are</span>
            <h2 className={styles.sectionHeading}>
              A Chartered Real Estate Advisory Built on Integrity &amp; Precision
            </h2>
            <p className={styles.introLead}>
              Emmanuel Sololeke Consulting is a chartered firm of Estate Surveyors and
              Valuers with offices in Jos (Plateau State), Abuja (FCT), Lagos (Lagos State),
              and Gombe (Gombe State). We are recognized and registered as a practicing
              firm by the Estate Surveyors and Valuers Registration Board of Nigeria (ESVARBON)
              and affiliated with the Nigerian Institution of Estate Surveyors and Valuers (NIESV).
            </p>
          </div>

          <div className={styles.whyGrid}>
            <div className={styles.whyFeatureCard}>
              <span className={styles.whyFeatureKicker}>WHY CHOOSE US</span>
              <h3 className={styles.whyFeatureTitle}>Setting Benchmark Standards</h3>
              <p className={styles.whyFeatureDesc}>
                Our multi-disciplinary team brings rigorous analytical methods,
                nationwide market intelligence, and tested regulatory adherence to
                every engagement.
              </p>
            </div>

            <div className={`card ${styles.whyCard}`}>
              <div className={styles.whyCardNumber}>01</div>
              <h4 className={styles.whyCardTitle}>Customer Satisfaction Focused</h4>
              <p className={styles.whyCardText}>
                Over the past 8+ years, we have built trusted relationships with our
                clients. Client feedback directly informs our processes and continual
                refinements.
              </p>
            </div>

            <div className={`card ${styles.whyCard}`}>
              <div className={styles.whyCardNumber}>02</div>
              <h4 className={styles.whyCardTitle}>Top-Notch Customer Care</h4>
              <p className={styles.whyCardText}>
                We pride ourselves on transparent communication, prompt turnaround on
                technical valuation reports, and dedicated account management.
              </p>
            </div>

            <div className={`card ${styles.whyCard}`}>
              <div className={styles.whyCardNumber}>03</div>
              <h4 className={styles.whyCardTitle}>Continuous Service Improvement</h4>
              <p className={styles.whyCardText}>
                We regularly conduct structured quality assurance reviews and staff
                training programs to uphold modern valuation methods and statutory standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Mission & Vision */}
      <section className={styles.missionSection}>
        <div className="content">
          <div className={styles.missionVisionGrid}>
            <div className={`card ${styles.mvCard}`} id="mission">
              <span className={styles.mvTag}>Our Mission</span>
              <h3 className={styles.mvTitle}>Delivering World-Class Valuation &amp; Estate Solutions</h3>
              <p className={styles.mvText}>
                To be the first choice for real estate clients and stakeholders by
                delivering world-class services, abiding by professional and globally
                acceptable standards in practice, and building a legacy estate
                surveying and valuation firm.
              </p>
            </div>

            <div className={`card ${styles.mvCard}`} id="vision">
              <span className={styles.mvTag}>Our Vision</span>
              <h3 className={styles.mvTitle}>The Benchmark Firm in Africa</h3>
              <p className={styles.mvText}>
                To be the leading and most trusted estate surveying and valuation
                firm across Nigeria and the wider African continent, recognized for
                uncompromising integrity, precision, and research-led insight.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Corporate Profile */}
      <section className={styles.profileSection} id="profile">
        <div className="content">
          <div className={styles.profileContainer}>
            <span className={styles.kicker}>Our Journey &amp; Credentials</span>
            <h2 className={styles.sectionHeading}>Corporate Profile</h2>
            <div className={styles.profileBody}>
              <p>
                Founded in 2017, Emmanuel Sololeke Consulting has grown from a regional
                consultancy into a full-service real estate firm with four strategic offices
                nationwide. Our scope of practice includes Asset Valuation, Estate Agency,
                Real Estate Investment Advisory, Project Management, Facilities Management,
                Feasibility and Viability Studies, Building Surveying, and Real Estate Data Services.
              </p>
              <p>
                With nearly a decade of experience, we have undertaken valuation and property
                advisory engagements for federal and state government parastatals, leading
                commercial banks, industrial conglomerates, and private property investors.
                We continue to invest in certified human capital and digital property
                intelligence to maximize value for all stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Join Us CTA */}
      <section className={styles.joinUsSection}>
        <div className="content">
          <div className={styles.joinUsCard}>
            <span className={styles.joinUsKicker}>Career Opportunities</span>
            <h2 className={styles.joinUsTitle}>Want to Be a Part of Our Dynamic Team?</h2>
            <p className={styles.joinUsDesc}>
              We are constantly seeking dedicated surveyors, research analysts, and
              client relationship managers who share our dedication to professional excellence.
            </p>
            <a href="#contactus">
              <button className="action-btn">Apply / Join Our Team</button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About