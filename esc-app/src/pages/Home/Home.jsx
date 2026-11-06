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
        <div className="overlay"></div>
        <div className={`content ${styles.landingContent}`}>
          <h1 className={styles.landingTitle}>
            Welcome to Our Estate Surveying Website
          </h1>
          <p className={styles.landingDetail}>
            Here you can find information about our services, properties, and more.
          </p>
          <Link to="/services" className={styles.landingBtn}>
            <button className="action-btn">See all services</button>
          </Link>
        </div>
      </section>

      {/* 2. About Snippet */}
      <section className={styles.aboutUs} id="about_us">
        <div className={`content ${styles.aboutFlex}`}>
          <div
            className={styles.aboutImg}
            style={{ backgroundImage: `url(${aboutUsImg})` }}
            aria-label="Emmanuel Sololeke Consulting team discussion"
          ></div>
          <div className={styles.aboutContent}>
            <h2 className={styles.aboutTitle}>About Us</h2>
            <p className={styles.aboutDetail}>
              With nearly a decade attributable to the knowledge base, experience,
              and work ethics of our dedicated and qualified personnel, Emmanuel
              Sololeke Consulting is a firm of Estate Surveyors &amp; Valuers
              registered in Nigeria in accordance with the rules and regulations of
              the Nigerian Institution of Estate Surveyors and Valuers (NIESV), and
              the Estate Surveyors and Valuers Registration Board of Nigeria (ESVARBON).
            </p>
            <Link to="/about">
              <button className="no-button">Learn more about us &rarr;</button>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Services Preview */}
      <section className={styles.services} id="services">
        <div className={`content ${styles.servicesContent}`}>
          <div className={styles.sectionHead}>
            <h2 className={styles.sectionTitle}>Unique expertise and offerings</h2>
            <div className={styles.sectionHeadDetail}>
              <p className={styles.sectionDetail}>
                Our services are need-structured and targeted in a way that provides
                immense benefits to you.
              </p>
              <Link to="/services">
                <button className="no-button">See All Services &rarr;</button>
              </Link>
            </div>
          </div>

          <div className={styles.serviceCards}>
            <div className={`card ${styles.serviceCard}`}>
              <div className={styles.cardContent}>
                <img
                  src={assetValuationIcon}
                  alt="Asset Valuation"
                  className={styles.cardIcon}
                />
                <div className={styles.cardBox}>
                  <h3 className={styles.cardTitle}>Asset Valuation &amp; Advisory</h3>
                  <p className={styles.cardDetail}>
                    Our real estate Advisory and Survey services will help you
                    maximise the value of your real estate holdings, whilst making
                    important business decisions with confidence.
                  </p>
                  <Link to="/services">
                    <button className={styles.cardButton}>learn more</button>
                  </Link>
                </div>
              </div>
            </div>

            <div className={`card ${styles.serviceCard}`}>
              <div className={styles.cardContent}>
                <img
                  src={facilitiesMngtIcon}
                  alt="Facilities Management"
                  className={styles.cardIcon}
                />
                <div className={styles.cardBox}>
                  <h3 className={styles.cardTitle}>Facilities Management</h3>
                  <p className={styles.cardDetail}>
                    Our services help you manage and optimise your real estate
                    properties, and equip you to best evaluate important real
                    estate-related business questions.
                  </p>
                  <Link to="/services">
                    <button className={styles.cardButton}>learn more</button>
                  </Link>
                </div>
              </div>
            </div>

            <div className={`card ${styles.serviceCard}`}>
              <div className={styles.cardContent}>
                <img
                  src={financeAuditIcon}
                  alt="Financial & Asset Audit"
                  className={styles.cardIcon}
                />
                <div className={styles.cardBox}>
                  <h3 className={styles.cardTitle}>Financial &amp; Asset Audit</h3>
                  <p className={styles.cardDetail}>
                    We make the provision of timely, accurate, and invaluable
                    financial information our top priority, so you and your
                    organisation can take informed business decisions always.
                  </p>
                  <Link to="/services">
                    <button className={styles.cardButton}>learn more</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Annual / Creating Value */}
      <section className={styles.annual} id="annual">
        <div className={`content ${styles.annualContainer}`}>
          <div className={styles.annualBox}>
            <h2 className={styles.annualTitle}>Creating Value</h2>
            <p className={styles.annualDetail}>
              Driven by knowledge, expertise, and research-led decision making,
              we aim to create long-term value for all our stakeholders.
            </p>
          </div>
          <div className={styles.annualImgWrapper}>
            <img
              src={newsletterImg}
              alt="Emmanuel Sololeke Annual Report"
              className={styles.annualImg}
            />
          </div>
        </div>
      </section>

      {/* 5. Ideal Properties */}
      <section className={styles.ideal} id="ideal">
        <div className={`content ${styles.idealContent}`}>
          <div className={styles.sectionHead}>
            <h2 className={styles.sectionTitle}>Discover your ideal properties</h2>
            <div className={styles.sectionHeadDetail}>
              <p className={styles.sectionDetail}>
                Our comprehensive listings offer a wealth of options to suit your
                unique preferences and requirements. With our commitment to quality
                and attention to detail, you can trust that each property has been
                thoroughly vetted to ensure a seamless and satisfying experience.
              </p>
            </div>
          </div>

          <div className={styles.idealCards}>
            <div className={`card ${styles.idealCard}`}>
              <div className={styles.cardContent}>
                <img
                  src={investIcon}
                  alt="Investment Portfolios"
                  className={styles.cardIcon}
                />
                <div className={styles.cardBox}>
                  <h3 className={styles.cardTitle}>Investment Portfolios</h3>
                  <p className={styles.cardDetail}>
                    Our comprehensive listings offer a wealth of options to suit your
                    unique preferences and requirements. With our commitment to quality
                    and attention to detail, you can trust that each property has been
                    thoroughly vetted.
                  </p>
                  <Link to="/properties?type=sale">
                    <button className={styles.cardButton}>explore portfolio</button>
                  </Link>
                </div>
              </div>
            </div>

            <div className={`card ${styles.idealCard} ${styles.idealCardWhite}`}>
              <div className={styles.cardContent}>
                <img
                  src={leasingIcon}
                  alt="Lease Properties"
                  className={styles.cardIcon}
                />
                <div className={styles.cardBox}>
                  <h3 className={styles.cardTitle}>Explore Lease Properties</h3>
                  <p className={styles.cardDetail}>
                    Our services help you manage and optimise your real estate
                    properties, and equip you to best evaluate important real
                    estate-related business questions.
                  </p>
                  <Link to="/properties?type=lease">
                    <button className={styles.cardButton}>view properties</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home