import { Link } from 'react-router-dom'
import styles from './Home.module.css'
import homeBgd from '../../assets/img/bgd/home_bgd.jpg'
import aboutUsImg from '../../assets/img/section_img/aboutus.jpg'
import newsletterImg from '../../assets/img/section_img/newsletter_img.jpg'
import assetValuationIcon from '../../assets/icons/asset_valuation.png'
import facilitiesMngtIcon from '../../assets/icons/facilities_mngt.png'
import financeAuditIcon from '../../assets/icons/finance_audit.png'
import investIcon from '../../assets/icons/invest.png'
import leasingIcon from '../../assets/icons/leasing.png'

function Home() {
  return (
    <div className={styles.home}>
      {/* 1. Hero Landing */}
      <section
        className={styles.landing}
        id="home"
        style={{ backgroundImage: `url(${homeBgd})` }}
      >
        <div className={styles.heroOverlay}></div>
        <div className={`content ${styles.landingContent}`}>
          <span className={styles.heroBadge}>Chartered Estate Surveyors &amp; Valuers</span>
          <h1 className={styles.landingTitle}>
            Integrity, Precision, &amp; Long-Term Real Estate Value
          </h1>
          <p className={styles.landingDetail}>
            Providing certified asset valuations, dedicated facility management, and
            strategic property advisory services across Nigeria for nearly a decade.
          </p>
          <div className={styles.heroButtonGroup}>
            <Link to="/services">
              <button className="action-btn">Explore Our Services</button>
            </Link>
            <Link to="/properties">
              <button className={styles.secondaryBtn}>Browse Listings</button>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. About Snippet */}
      <section className={styles.aboutUs} id="about_us">
        <div className={`content ${styles.aboutFlex}`}>
          <div className={styles.aboutImgWrapper}>
            <img
              src={aboutUsImg}
              alt="Emmanuel Sololeke Consulting team"
              className={styles.aboutImg}
            />
          </div>
          <div className={styles.aboutContent}>
            <span className={styles.kicker}>About Our Firm</span>
            <h2 className={styles.sectionHeading}>
              Tested Professionalism in Estate Surveying &amp; Valuation
            </h2>
            <p className={styles.aboutDetail}>
              With nearly a decade attributable to the knowledge base, experience,
              and disciplined work ethics of our qualified surveyors, Emmanuel
              Sololeke Consulting is registered in accordance with the Nigerian
              Institution of Estate Surveyors and Valuers (NIESV) and the Estate
              Surveyors and Valuers Registration Board of Nigeria (ESVARBON).
            </p>
            <p className={styles.aboutDetail}>
              We advise financial institutions, corporate bodies, government
              agencies, and private investors on high-stakes property decisions
              with confidence and statutory compliance.
            </p>
            <div className={styles.aboutAction}>
              <Link to="/about">
                <button className="no-button">Learn more about us &rarr;</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Services Preview */}
      <section className={styles.services} id="services">
        <div className="content">
          <div className={styles.sectionHeaderCentered}>
            <span className={styles.kicker}>Core Offerings</span>
            <h2 className={styles.sectionHeading}>Unique Expertise &amp; Targeted Solutions</h2>
            <p className={styles.sectionSubhead}>
              Our services are structured to optimize asset performance, safeguard
              capital, and empower confident decision-making.
            </p>
          </div>

          <div className={styles.serviceCards}>
            {/* Card 1 */}
            <div className={`card ${styles.serviceCard}`}>
              <div className={styles.iconContainer}>
                <img
                  src={assetValuationIcon}
                  alt="Asset Valuation"
                  className={styles.cardIcon}
                />
              </div>
              <h3 className={styles.cardTitle}>Asset Valuation &amp; Advisory</h3>
              <p className={styles.cardDetail}>
                Professional valuations for plants, machinery, land, and corporate
                holdings for mortgage security, taxation, balance sheets, and acquisitions.
              </p>
              <Link to="/services" className={styles.cardLink}>
                Learn more &rarr;
              </Link>
            </div>

            {/* Card 2 */}
            <div className={`card ${styles.serviceCard}`}>
              <div className={styles.iconContainer}>
                <img
                  src={facilitiesMngtIcon}
                  alt="Facilities Management"
                  className={styles.cardIcon}
                />
              </div>
              <h3 className={styles.cardTitle}>Facilities Management</h3>
              <p className={styles.cardDetail}>
                End-to-end management preserving property life cycles, maintaining
                tenant satisfaction, and ensuring preventive physical infrastructure care.
              </p>
              <Link to="/services" className={styles.cardLink}>
                Learn more &rarr;
              </Link>
            </div>

            {/* Card 3 */}
            <div className={`card ${styles.serviceCard}`}>
              <div className={styles.iconContainer}>
                <img
                  src={financeAuditIcon}
                  alt="Financial & Asset Audit"
                  className={styles.cardIcon}
                />
              </div>
              <h3 className={styles.cardTitle}>Financial &amp; Asset Audit</h3>
              <p className={styles.cardDetail}>
                Accurate physical verification and financial valuation audits equipping
                organizations with verified portfolio intelligence for strategic planning.
              </p>
              <Link to="/services" className={styles.cardLink}>
                Learn more &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Annual / Creating Value Section */}
      <section className={styles.annual} id="annual">
        <div className={`content ${styles.annualContainer}`}>
          <div className={styles.annualBox}>
            <span className={styles.annualKicker}>Research &amp; Value Creation</span>
            <h2 className={styles.annualTitle}>
              Driven by Knowledge, Discipline, &amp; Research-Led Decision Making
            </h2>
            <p className={styles.annualDetail}>
              In volatile economic landscapes, real estate decisions must be anchored
              in market evidence. We continuously compile and publish comprehensive
              property data banks to create sustainable, long-term value for all stakeholders.
            </p>
            <div className={styles.annualCta}>
              <Link to="/insights?cat=annual_report">
                <button className="action-btn">Access Real Estate Reports</button>
              </Link>
            </div>
          </div>
          <div className={styles.annualImgWrapper}>
            <img
              src={newsletterImg}
              alt="Emmanuel Sololeke Consulting Real Estate Publication"
              className={styles.annualImg}
            />
          </div>
        </div>
      </section>

      {/* 5. Ideal Properties */}
      <section className={styles.ideal} id="ideal">
        <div className="content">
          <div className={styles.sectionHeaderCentered}>
            <span className={styles.kicker}>Property Opportunities</span>
            <h2 className={styles.sectionHeading}>Discover Your Ideal Real Estate Investment</h2>
            <p className={styles.sectionSubhead}>
              Our vetted listings offer verified options tailored to institutional,
              commercial, and private residential requirements.
            </p>
          </div>

          <div className={styles.idealCards}>
            <div className={`card ${styles.idealCard}`}>
              <div className={styles.idealIconBox}>
                <img src={investIcon} alt="Investment Portfolios" className={styles.idealIcon} />
              </div>
              <div className={styles.idealContentBox}>
                <h3 className={styles.idealTitle}>Investment Portfolios</h3>
                <p className={styles.idealDetail}>
                  High-yield prime land and commercial assets vetted for title
                  authenticity and strong capital appreciation in growing economic centers.
                </p>
                <Link to="/properties?type=sale">
                  <button className="action-btn">Explore Portfolios For Sale &rarr;</button>
                </Link>
              </div>
            </div>

            <div className={`card ${styles.idealCard}`}>
              <div className={styles.idealIconBox}>
                <img src={leasingIcon} alt="Lease Properties" className={styles.idealIcon} />
              </div>
              <div className={styles.idealContentBox}>
                <h3 className={styles.idealTitle}>Explore Lease Properties</h3>
                <p className={styles.idealDetail}>
                  Modern commercial office complexes and residential apartments in
                  prime Jos, Abuja, and Lagos business corridors ready for occupancy.
                </p>
                <Link to="/properties?type=lease">
                  <button className="action-btn">View Lease Listings &rarr;</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home