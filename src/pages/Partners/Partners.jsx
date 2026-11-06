import SectionHero from '../../components/ui/SectionHero.jsx'
import styles from '../About/About.module.css'
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
    <div className={styles.aboutPage}>
      <SectionHero
        backgroundImage={aboutBgd}
        title="about us | meet our partners"
        id="partners-hero"
      />

      <section className={styles.personnels}>
        <div className="content">
          <div className={styles.personnelHead}>
            <h3 className={styles.sectionTopic}>Our Partners</h3>
            <p className={styles.personnelIntro}>
              Our firm is spearheaded by accomplished Partners with extensive
              distinction in estate surveying, valuation, and asset advisory.
              Together, they combine decades of leadership registered with NIESV
              and ESVARBON to deliver exceptional outcomes.
            </p>
          </div>

          <div className={styles.personnelList}>
            {partnersList.map((partner, idx) => (
              <div key={idx} className={`card ${styles.personnelItem}`}>
                <div className={styles.personnelImgWrapper}>
                  <img
                    src={partner.img}
                    alt={partner.name}
                    className={styles.personnelImg}
                  />
                </div>
                <div className={styles.personnelContent}>
                  <div className={styles.personnelInfo}>
                    <strong style={{ display: 'block', marginBottom: '4px', color: '#fff' }}>
                      {partner.title}
                    </strong>
                    {partner.info}
                  </div>
                  <h4 className={styles.personnelName}>{partner.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.joinus}>
        <div className="content">
          <h3 className={styles.sectionTopic}>Partner with us</h3>
          <p className={styles.joinusText}>
            We welcome corporate alliances, institutional co-advisory, and strategic
            partnerships nationwide. Reach out to collaborate on high-impact real estate
            engagements.
          </p>
          <a href="#contactus">
            <button className="action-btn">contact our partners</button>
          </a>
        </div>
      </section>
    </div>
  )
}

export default Partners