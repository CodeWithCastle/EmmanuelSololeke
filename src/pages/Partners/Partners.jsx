import SectionHero from '../../components/ui/SectionHero.jsx'
import styles from './Partners.module.css'
import aboutBgd from '../../assets/img/bgd/aboutus_bgd.avif'
import emmanuelImg from '../../assets/img/team/emmanuel_adeleke.jpg'
import userIcon from '../../assets/icons/user.png'

const partnersList = [
  {
    name: 'Mr. Emmanuel Adeleke',
    title: 'Managing Partner / Lead Consultant',
    info: 'Oversees strategic management, major institutional valuation portfolios, and regulatory compliance across all branch operations.',
    img: emmanuelImg,
  },
  {
    name: 'Mr. Olukunle Olaniyan',
    title: 'Partner - Valuation & Project Advisory',
    info: 'Co-leads nationwide commercial valuations, asset profiling, and technical assessment committees.',
    img: userIcon,
  },
  {
    name: 'Mr. Auwal Musa',
    title: 'Partner - Agency & Northern Operations',
    info: 'Heads operations across Jos, Gombe, and northern territories specializing in real estate investment appraisals.',
    img: userIcon,
  },
]

function Partners() {
  return (
    <div className={styles.partnersPage}>
      <SectionHero
        backgroundImage={aboutBgd}
        title="Meet Our Partners"
        id="partners-hero"
      />

      <section className={styles.partnersSection}>
        <div className="content">
          <div className={styles.headerBlock}>
            <span className={styles.kicker}>Leadership</span>
            <h2 className={styles.heading}>Our Partners</h2>
            <p className={styles.leadText}>
              Our firm is spearheaded by accomplished Partners with extensive
              distinction in estate surveying, valuation, and asset advisory.
              Together, they combine decades of leadership registered with NIESV
              and ESVARBON to deliver exceptional outcomes.
            </p>
          </div>

          <div className={styles.partnersGrid}>
            {partnersList.map((partner, idx) => (
              <div key={idx} className={`card ${styles.partnerCard}`}>
                <div className={styles.photoWrapper}>
                  <img
                    src={partner.img}
                    alt={partner.name}
                    className={styles.photo}
                  />
                </div>
                <div className={styles.details}>
                  <h3 className={styles.name}>{partner.name}</h3>
                  <span className={styles.titleBadge}>{partner.title}</span>
                  <p className={styles.bio}>{partner.info}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.joinSection}>
        <div className="content">
          <div className={styles.joinCard}>
            <h2 className={styles.joinTitle}>Partner With Us</h2>
            <p className={styles.joinText}>
              We welcome corporate alliances, institutional co-advisory, and strategic
              partnerships nationwide. Reach out to collaborate on high-impact real estate
              engagements.
            </p>
            <a href="#contactus">
              <button className="action-btn">Contact Our Partners</button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Partners