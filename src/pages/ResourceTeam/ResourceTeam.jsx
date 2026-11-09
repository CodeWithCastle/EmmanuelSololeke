import SectionHero from '../../components/ui/SectionHero.jsx'
import styles from './ResourceTeam.module.css'
import aboutBgd from '../../assets/img/bgd/aboutus_bgd.avif'
import userIcon from '../../assets/icons/user.png'

const resourceTeam = [
  {
    name: 'Mrs. Abigail Jatau',
    role: 'Operations & Resource Coordinator',
    info: 'Leads internal workflow coordination, human resource management, and administrative services across our branches.',
    img: userIcon,
  },
  {
    name: 'Mr. Domshak Dawesh',
    role: 'Technical Surveyor & Field Analyst',
    info: 'Coordinates field survey teams, property data gathering, and boundary verifications.',
    img: userIcon,
  },
  {
    name: 'Miss. Blessing Oyero',
    role: 'Client Engagement Specialist',
    info: 'Manages tenant relationships, property showings, and client onboarding.',
    img: userIcon,
  },
  {
    name: 'Technical Advisory Unit',
    role: 'Valuation & Research Associates',
    info: 'A dedicated team of certified surveyors delivering continuous market assessments and technical reports.',
    img: userIcon,
  },
]

function ResourceTeam() {
  return (
    <div className={styles.resourcePage}>
      <SectionHero
        backgroundImage={aboutBgd}
        title="Our Resource Team"
        id="resource-hero"
      />

      <section className={styles.resourceSection}>
        <div className="content">
          <div className={styles.headerBlock}>
            <span className={styles.kicker}>Support &amp; Operations</span>
            <h2 className={styles.heading}>Resource Team</h2>
            <p className={styles.leadText}>
              Our key partners are backed by a dynamic team of qualified
              estate surveyors, technical analysts, and dedicated support staff
              stationed across our offices in Jos, Abuja, Lagos, and Gombe.
            </p>
          </div>

          <div className={styles.resourceGrid}>
            {resourceTeam.map((member, idx) => (
              <div key={idx} className={`card ${styles.resourceCard}`}>
                <div className={styles.photoWrapper}>
                  <img
                    src={member.img}
                    alt={member.name}
                    className={styles.photo}
                  />
                </div>
                <div className={styles.details}>
                  <h3 className={styles.name}>{member.name}</h3>
                  <span className={styles.roleBadge}>{member.role}</span>
                  <p className={styles.bio}>{member.info}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.joinSection}>
        <div className="content">
          <div className={styles.joinCard}>
            <h2 className={styles.joinTitle}>Want to Join Our Resource Team?</h2>
            <p className={styles.joinText}>
              We are always on the lookout for bright minds, certified surveyors,
              and passionate property analysts. Join our team and build a lasting career.
            </p>
            <a href="#contactus">
              <button className="action-btn">Apply Today</button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ResourceTeam