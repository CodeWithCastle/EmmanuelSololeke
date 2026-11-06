import SectionHero from '../../components/ui/SectionHero.jsx'
import styles from '../About/About.module.css'
import aboutBgd from '../../assets/img/bgd/aboutus_bgd.avif'
import userIcon from '../../assets/icons/user.png'

const resourceTeam = [
  {
    name: 'Mrs. Abigail Jatau',
    role: 'Operations & Resource Coordinator',
    info: 'Leads internal workflow coordination, human resource management, and administrative services.',
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
    info: 'A dedicated team of fifty-five certified surveyors delivering continuous market assessments and technical reports.',
    img: userIcon,
  },
]

function ResourceTeam() {
  return (
    <div className={styles.aboutPage}>
      <SectionHero
        backgroundImage={aboutBgd}
        title="about us | resource team"
        id="resource-hero"
      />

      <section className={styles.personnels}>
        <div className="content">
          <div className={styles.personnelHead}>
            <h3 className={styles.sectionTopic}>Resource Team</h3>
            <p className={styles.personnelIntro}>
              Our key partners are backed by a dynamic team of over 55 qualified
              estate surveyors, technical analysts, and dedicated support staff
              stationed across our offices in Jos, Abuja, Lagos, and Gombe.
            </p>
          </div>

          <div className={styles.personnelList}>
            {resourceTeam.map((member, idx) => (
              <div key={idx} className={`card ${styles.personnelItem}`}>
                <div className={styles.personnelImgWrapper}>
                  <img
                    src={member.img}
                    alt={member.name}
                    className={styles.personnelImg}
                  />
                </div>
                <div className={styles.personnelContent}>
                  <div className={styles.personnelInfo}>
                    <strong style={{ display: 'block', marginBottom: '4px', color: '#fff' }}>
                      {member.role}
                    </strong>
                    {member.info}
                  </div>
                  <h4 className={styles.personnelName}>{member.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.joinus}>
        <div className="content">
          <h3 className={styles.sectionTopic}>Want to join our resource team?</h3>
          <p className={styles.joinusText}>
            We are always on the lookout for bright minds, certified surveyors,
            and passionate property analysts. Join our team and build a lasting career.
          </p>
          <a href="#contactus">
            <button className="action-btn">apply today</button>
          </a>
        </div>
      </section>
    </div>
  )
}

export default ResourceTeam