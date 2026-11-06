import { Link } from 'react-router-dom'
import SectionHero from '../../components/ui/SectionHero.jsx'
import styles from './Services.module.css'
import servicesBgd from '../../assets/img/bgd/services_bgd.avif'

function Services() {
  return (
    <div className={styles.servicesPage}>
      {/* Hero */}
      <SectionHero
        backgroundImage={servicesBgd}
        title="our services"
        id="services-hero"
      />

      {/* 1. Estate Agency */}
      <section className={styles.serviceSection}>
        <div className={`content ${styles.serviceContent}`}>
          <div className={styles.serviceHeader}>
            <span className={styles.serviceTag}>01</span>
            <h2 className={styles.serviceTitle}>Estate Agency</h2>
          </div>
          <p className={styles.serviceDesc}>
            The Estate Agency arm of the firm consists of two specialized
            sub-departments — Lettings and Sales. The Lettings Unit assists
            prospective tenants in sourcing and leasing all kinds of properties,
            as well as helping landlords secure verified, high-quality tenants.
            The Sales Unit assists individuals, organizations, and corporate bodies
            in the disposal or acquisition of residential and commercial properties.
          </p>
          <div className={styles.serviceAction}>
            <Link to="/properties">
              <button className="action-btn">View our properties &rarr;</button>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Asset Valuation & Advisory Services */}
      <section className={`${styles.serviceSection} ${styles.serviceAlt}`}>
        <div className={`content ${styles.serviceContent}`}>
          <div className={styles.serviceHeader}>
            <span className={styles.serviceTag}>02</span>
            <h2 className={styles.serviceTitle}>Asset Valuation &amp; Advisory Services</h2>
          </div>
          <p className={styles.serviceDesc}>
            Regardless of your sales or investment choices, you need professional
            judgment you can trust behind your decisions. Our certified valuation
            and advisory services cover plant, machinery, land, commercial
            developments, and residential assets for mortgage, taxation, balance
            sheet, insurance, and acquisition purposes.
          </p>
          <div className={styles.serviceAction}>
            <a href="#contactus">
              <button className="action-btn">Request a valuation &rarr;</button>
            </a>
          </div>
        </div>
      </section>

      {/* 3. Management Services */}
      <section className={styles.serviceSection}>
        <div className={`content ${styles.serviceContent}`}>
          <div className={styles.serviceHeader}>
            <span className={styles.serviceTag}>03</span>
            <h2 className={styles.serviceTitle}>Property &amp; Facility Management</h2>
          </div>
          <p className={styles.serviceDesc}>
            We provide a comprehensive array of property, project, and facility
            management services for clients embarking on new developments or seeking
            to optimize their existing portfolios. From tenant relationship
            management and maintenance oversight to financial accountability, we
            preserve and maximize real estate capital value.
          </p>
          <div className={styles.serviceAction}>
            <Link to="/insights">
              <button className="action-btn">Learn more &rarr;</button>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Financial & Asset Audit Services */}
      <section className={`${styles.serviceSection} ${styles.serviceAlt}`}>
        <div className={`content ${styles.serviceContent}`}>
          <div className={styles.serviceHeader}>
            <span className={styles.serviceTag}>04</span>
            <h2 className={styles.serviceTitle}>Financial &amp; Asset Audit Services</h2>
          </div>
          <p className={styles.serviceDesc}>
            Information remains the most vital asset in this century. At Emmanuel
            Sololeke Consulting, we make the provision of timely, accurate, and
            invaluable property audit information our top priority, ensuring you
            and your organization can make informed, data-driven decisions always.
          </p>
          <div className={styles.serviceAction}>
            <Link to="/insights">
              <button className="action-btn">Read our insights &rarr;</button>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Why Choose Us */}
      <section className={styles.serviceSection}>
        <div className={`content ${styles.serviceContent}`}>
          <div className={styles.serviceHeader}>
            <span className={styles.serviceTag}>05</span>
            <h2 className={styles.serviceTitle}>Why Choose Emmanuel Sololeke Consulting</h2>
          </div>
          <p className={styles.serviceDesc}>
            There are many reasons why you should choose us as your real estate
            partner. Our certified practitioners, expansive four-state office
            network, rigorous research methodologies, and client-centric processes
            are just a few.
          </p>
          <div className={styles.serviceAction}>
            <Link to="/about">
              <button className="action-btn">Explore our firm &rarr;</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services