import { Link } from 'react-router-dom'
import SectionHero from '../../components/ui/SectionHero.jsx'
import styles from './Services.module.css'
import servicesBgd from '../../assets/img/bgd/services_bgd.avif'

const servicesList = [
  {
    id: '01',
    title: 'Estate Agency (Sales & Lettings)',
    subtitle: 'Commercial & Residential Real Estate Brokerage',
    description:
      'The Estate Agency division operates through two specialized desks: Lettings and Sales. The Lettings desk assists corporate and private tenants in sourcing vetted properties while safeguarding landlord returns through rigorous tenant screening. The Sales desk manages high-value property acquisitions and disposals across major Nigerian metropolitan centers.',
    deliverables: [
      'Commercial office leasing & retail space sourcing',
      'Residential tenant verification & lease agreement administration',
      'High-value property acquisition & investor representation',
      'Title verification, regulatory documentation & deed processing',
    ],
    actionText: 'Browse Property Listings',
    actionLink: '/properties',
  },
  {
    id: '02',
    title: 'Asset Valuation & Strategic Advisory',
    subtitle: 'NIESV & ESVARBON Certified Appraisals',
    description:
      'Our valuation practice prepares authoritative appraisal reports conforming to the Nigerian Institution of Estate Surveyors and Valuers and International Valuation Standards (IVSC). We appraise land, buildings, plant, machinery, furniture, and ongoing business assets for corporate, financial, and statutory purposes.',
    deliverables: [
      'Mortgage security appraisals for commercial banks & lenders',
      'Financial reporting, balance sheet & IFRS compliance valuations',
      'Insurance replacement cost assessments',
      'Compulsory acquisition & statutory compensation claims',
    ],
    actionText: 'Request Valuation Consultation',
    actionLink: '#contactus',
  },
  {
    id: '03',
    title: 'Property & Facilities Management',
    subtitle: 'Capital Preservation & Asset Life-Cycle Optimization',
    description:
      'We provide proactive management for multi-tenant commercial complexes, residential estates, and industrial facilities. Our integrated management approach ensures high occupancy rates, prompt service charge administration, energy efficiency, and preventive physical maintenance.',
    deliverables: [
      'Tenant relations, rent collection & lease renewal tracking',
      'Preventive infrastructure, MEP & building maintenance oversight',
      'Service charge budgeting, accounting & transparent reconciliation',
      'Vendor management, security & health/safety protocols',
    ],
    actionText: 'Discuss Facility Management',
    actionLink: '#contactus',
  },
  {
    id: '04',
    title: 'Financial & Physical Asset Audit',
    subtitle: 'Enterprise Fixed Asset Verification & Reconciliation',
    description:
      'Information is paramount in corporate asset management. Our audit team conducts rigorous physical inspection, asset barcoding, condition rating, and financial register reconciliation for corporate organizations, government parastatals, and institutional clients.',
    deliverables: [
      'Comprehensive fixed asset register compilation & barcoding',
      'Physical verification, location tagging & discrepancy auditing',
      'Condition rating, useful life review & depreciation scheduling',
      'Boardroom audit reports for risk management & statutory compliance',
    ],
    actionText: 'Request Asset Audit Proposal',
    actionLink: '#contactus',
  },
  {
    id: '05',
    title: 'Feasibility & Viability Studies',
    subtitle: 'Development Appraisal & Capital Allocation Analysis',
    description:
      'Prior to capital deployment on greenfield or brownfield developments, developers and financial backers require unbiased viability assessments. We model projected cash flows, land residual values, planning permissions, construction cost risks, and market absorption rates.',
    deliverables: [
      'Highest and Best Use (HBU) market research analysis',
      'Development cash flow projections & internal rate of return (IRR)',
      'Sensitivity analysis & market demand absorption studies',
      'Bankable project appraisal documents for debt/equity syndication',
    ],
    actionText: 'Schedule Feasibility Review',
    actionLink: '#contactus',
  },
]

function Services() {
  return (
    <div className={styles.servicesPage}>
      <SectionHero
        backgroundImage={servicesBgd}
        title="Our Professional Services"
        id="services-hero"
      />

      <section className={styles.introSection}>
        <div className="content">
          <div className={styles.introContent}>
            <span className={styles.kicker}>What We Do</span>
            <h2 className={styles.sectionHeading}>
              Specialized Real Estate Services Tailored to High-Impact Decisions
            </h2>
            <p className={styles.introText}>
              Every service we offer is anchored in regulatory compliance, empirical
              market research, and deep local knowledge across our offices in Jos, Abuja,
              Lagos, and Gombe.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className={styles.servicesListSection}>
        <div className="content">
          <div className={styles.servicesStack}>
            {servicesList.map((service, index) => (
              <div
                key={service.id}
                className={`card ${styles.serviceCard}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.cardHeader}>
                  <span className={styles.serviceNumber}>{service.id}</span>
                  <div className={styles.cardHeaderInfo}>
                    <span className={styles.serviceSubtitle}>{service.subtitle}</span>
                    <h3 className={styles.serviceTitle}>{service.title}</h3>
                  </div>
                </div>

                <p className={styles.serviceDesc}>{service.description}</p>

                <div className={styles.deliverablesBox}>
                  <h4 className={styles.deliverablesHeading}>Key Scope &amp; Deliverables</h4>
                  <ul className={styles.deliverablesList}>
                    {service.deliverables.map((item, dIdx) => (
                      <li key={dIdx}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className={styles.cardAction}>
                  {service.actionLink.startsWith('#') ? (
                    <a href={service.actionLink} className="action-btn">
                      {service.actionText} &rarr;
                    </a>
                  ) : (
                    <Link to={service.actionLink} className="action-btn">
                      {service.actionText} &rarr;
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className={styles.bottomCtaSection}>
        <div className="content">
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>Need a Custom Technical Appraisal?</h2>
            <p className={styles.ctaText}>
              Our chartered surveyors are available across Nigeria for property
              inspections, corporate asset valuations, and investment advisory.
            </p>
            <a href="#contactus">
              <button className="action-btn">Contact Our Advisory Desk</button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services