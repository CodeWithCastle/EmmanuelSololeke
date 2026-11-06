import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import SectionHero from '../../components/ui/SectionHero.jsx'
import styles from './About.module.css'
import aboutBgd from '../../assets/img/bgd/aboutus_bgd.avif'
import emmanuelImg from '../../assets/img/team/emmanuel_adeleke.jpg'
import userIcon from '../../assets/icons/user.png'

const personnelData = [
  {
    name: 'Mr. Emmanuel Adeleke',
    info: 'Principal Consultant with deep expertise across real estate valuation, portfolio management, and strategic advisory services.',
    img: emmanuelImg,
  },
  {
    name: 'Mr. Olukunle Olaniyan',
    info: 'Senior Estate Surveyor specializing in property valuation, feasibility appraisal, and client asset development.',
    img: userIcon,
  },
  {
    name: 'Mr. Auwal Musa',
    info: 'Experienced surveyor driving agency sales, asset auditing, and commercial facility management.',
    img: userIcon,
  },
  {
    name: 'Mrs. Abigail Jatau',
    info: 'Head of Administrative and Operations Support, ensuring client relations and organizational excellence.',
    img: userIcon,
  },
  {
    name: 'Mr. Domshak Dawesh',
    info: 'Valuation specialist and project manager dedicated to comprehensive building surveys and regional appraisals.',
    img: userIcon,
  },
  {
    name: 'Miss. Blessing Oyero',
    info: 'Estate consultant and leasing coordinator managing property listings and client engagement portfolios.',
    img: userIcon,
  },
]

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
      {/* Mini Hero */}
      <SectionHero
        backgroundImage={aboutBgd}
        title="about us"
        id="aboutus-hero"
      />

      {/* Why Us Section */}
      <section className={styles.whyus} id="whyus">
        <div className="content">
          <div className={styles.whyText}>
            <p>
              We are a chartered firm of Estate Surveyors and Valuers with offices
              in Jos (Plateau State), Gombe (Gombe State), Abuja, and Lagos (Lagos
              State). We are locally and internationally affiliated with the
              Nigerian Institution of Estate Surveyors and Valuers (NIESV),
              International Valuation Standards Council (IVSC), and South African
              Institute of Valuers (SAIV). We are a competent and formidable team
              of sound, talented professionals with a wide range of cognate experience
              within our professional service line. We have had the privilege to
              coordinate and participate in major projects including Valuation for
              all purposes, Feasibility/Viability Appraisal, Project Management,
              Facility/Property Management, Real Estate Development, and Estate
              Agency. We are recognized and registered as a practicing firm by the
              regulatory board — Estate Surveyors and Valuers Registration Board of
              Nigeria (ESVARBON).
            </p>
          </div>

          <div className={styles.whyList}>
            <div className={`${styles.whyItem} ${styles.whyItemFeatured}`}>
              <h3 className={styles.whyHead}>WHY</h3>
              <span className={styles.whyHeadSub}>choose us</span>
            </div>

            <div className={styles.whyItem}>
              <h4 className={styles.whyTitle}>Customer Satisfaction Focused</h4>
              <p className={styles.whyDetail}>
                Over the past 8 years we have built outstanding relationships with
                our clients. At Emmanuel Sololeke Consulting, our customers&apos;
                feedback is vital, and we are always striving to improve our offerings.
              </p>
            </div>

            <div className={styles.whyItem}>
              <h4 className={styles.whyTitle}>Top-Notch Customer Care</h4>
              <p className={styles.whyDetail}>
                We pride ourselves on the quality of customer care we provide.
                Many of our valued clients commend their satisfying experiences
                partnering with our teams.
              </p>
            </div>

            <div className={styles.whyItem}>
              <h4 className={styles.whyTitle}>Continuous Service Improvement</h4>
              <p className={styles.whyDetail}>
                As part of our continuous improvement and performance management,
                we regularly run client feedback evaluations to consistently raise
                our benchmark standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className={styles.textSection} id="mission">
        <div className="content">
          <h3 className={styles.sectionTopic}>Our Mission</h3>
          <p className={styles.sectionBody}>
            To be the first choice for real estate clients and stakeholders by
            delivering world-class services, abiding by professional and globally
            acceptable standards in practice, and by building a legacy estate
            surveying and valuation firm.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className={styles.textSection} id="vision">
        <div className="content">
          <h3 className={styles.sectionTopic}>Our Vision</h3>
          <p className={styles.sectionBody}>
            To be the leading and astounding estate surveying and valuation firm
            in Nigeria and across Africa.
          </p>
        </div>
      </section>

      {/* Profile Section */}
      <section className={styles.textSection} id="profile">
        <div className="content">
          <h3 className={styles.sectionTopic}>Our Profile</h3>
          <p className={styles.sectionBody}>
            Emmanuel Sololeke Consulting is a reputable firm of Estate Surveyors
            &amp; Valuers, registered in Nigeria in accordance with the laws of the
            Federal Republic of Nigeria and in conformity to the rules and regulations
            of the Nigerian Institution of Estate Surveyors and Valuers (NIESV) and
            the Estate Surveyors and Valuers Registration Board of Nigeria (ESVARBON).
            Founded in 2017, our services include Valuations, Estate Agency, Investment
            Advice, Project Management, Property Management, Feasibility and Viability
            Studies, Building Surveying, Real Estate Audit, and Real Estate Research
            and Data Services.
          </p>
          <p className={styles.sectionBody} style={{ marginTop: '1rem' }}>
            With nearly a decade of experience and practice, we have undertaken asset
            valuation and real estate consultancy transactions for practically all
            purposes for federal and state governments, financial institutions,
            government parastatals, private organizations, industrial concerns, and
            private individuals. Even as we invite you to lean on our tested
            professionalism, we continue to develop our practice with our resourceful
            team committed to excellence, integrity, and rewarding customer partnerships.
          </p>
        </div>
      </section>

      {/* Key Personnel Section */}
      <section className={styles.personnels} id="personnels">
        <div className="content">
          <div className={styles.personnelHead}>
            <h3 className={styles.sectionTopic}>Key Personnel</h3>
            <p className={styles.personnelIntro}>
              Our success over the past 8 years is attributable to the knowledge base,
              experience, and work ethics of our dedicated and qualified personnel.
              Our key staff are complemented by fifty-five other qualified surveyors
              and technical and administrative personnel. Below is a profile of our
              key personnel:
            </p>
          </div>

          <div className={styles.personnelList}>
            {personnelData.map((person, idx) => (
              <div key={idx} className={`card ${styles.personnelItem}`}>
                <div className={styles.personnelImgWrapper}>
                  <img
                    src={person.img}
                    alt={person.name}
                    className={styles.personnelImg}
                  />
                </div>
                <div className={styles.personnelContent}>
                  <div className={styles.personnelInfo}>
                    {person.info}
                  </div>
                  <h4 className={styles.personnelName}>{person.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className={styles.joinus} id="joinus">
        <div className="content">
          <h3 className={styles.sectionTopic}>Want to be a part of our team?</h3>
          <p className={styles.joinusText}>
            Our success is driven by passion, integrity, and expertise. If you share
            our vision for excellence in estate surveying and valuation, we would love
            to hear from you.
          </p>
          <a href="#contactus">
            <button className="action-btn">join us</button>
          </a>
        </div>
      </section>
    </div>
  )
}

export default About