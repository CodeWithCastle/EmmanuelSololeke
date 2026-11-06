import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import SectionHero from '../../components/ui/SectionHero.jsx'
import styles from './Insights.module.css'
import servicesBgd from '../../assets/img/bgd/services_bgd.avif'

const insightsData = [
  {
    id: 1,
    title: 'Nigerian Real Estate Market Outlook 2025: Trends & Forecasts',
    category: 'annual_report',
    categoryLabel: 'Annual Real Estate Report',
    date: 'January 15, 2025',
    readTime: '6 min read',
    excerpt: 'Comprehensive analysis of macroeconomic drivers, foreign exchange fluctuations, and construction cost impacts on commercial and residential property in Nigeria.',
  },
  {
    id: 2,
    title: 'Understanding ESVARBON Asset Valuation Standards for Collateral Securities',
    category: 'articles',
    categoryLabel: 'Articles',
    date: 'February 3, 2025',
    readTime: '4 min read',
    excerpt: 'A practitioner guide on ensuring statutory compliance when preparing valuation reports for commercial banks and regulatory compliance.',
  },
  {
    id: 3,
    title: 'Plateau & Northern Nigeria Property Index: Q4 Retrospective',
    category: 'bank',
    categoryLabel: 'Real Estate Data Bank',
    date: 'March 1, 2025',
    readTime: '8 min read',
    excerpt: 'Aggregated yield statistics, vacancy rates, and capital appreciation figures across Jos metropolitan areas and Gombe municipal hubs.',
  },
  {
    id: 4,
    title: 'Emmanuel Sololeke Consulting Expands Advisory Footprint in Abuja CBD',
    category: 'news',
    categoryLabel: 'News & Publications',
    date: 'March 22, 2025',
    readTime: '3 min read',
    excerpt: 'Press release detailing the commissioning of our enhanced corporate advisory suite at Danziya Plaza, Central Business District, Abuja.',
  },
  {
    id: 5,
    title: 'Facilities Management Best Practices for Mixed-Use Developments',
    category: 'articles',
    categoryLabel: 'Articles',
    date: 'April 10, 2025',
    readTime: '5 min read',
    excerpt: 'Strategies for energy conservation, preventive maintenance scheduling, and service charge budgeting in contemporary retail-office structures.',
  },
  {
    id: 6,
    title: 'National Infrastructure Corridors and Real Estate Capital Growth',
    category: 'annual_report',
    categoryLabel: 'Annual Real Estate Report',
    date: 'May 18, 2025',
    readTime: '7 min read',
    excerpt: 'In-depth assessment of interstate transit expansions, highway developments, and their direct correlation with peripheral land valuations.',
  },
]

function Insights() {
  const [searchParams, setSearchParams] = useSearchParams()
  const activeCategory = searchParams.get('cat') // 'news' | 'annual_report' | 'bank' | 'articles'

  const filteredInsights = useMemo(() => {
    if (!activeCategory) return insightsData
    return insightsData.filter((item) => item.category === activeCategory)
  }, [activeCategory])

  const setCategory = (cat) => {
    if (!cat) {
      setSearchParams({})
    } else {
      setSearchParams({ cat })
    }
  }

  return (
    <div className={styles.insightsPage}>
      <SectionHero
        backgroundImage={servicesBgd}
        title="news &amp; insights"
        id="insights-hero"
      />

      <section className={styles.contentSection}>
        <div className="content">
          {/* Category Tabs */}
          <div className={styles.categoryBar}>
            <button
              className={`${styles.catBtn} ${!activeCategory ? styles.catBtnActive : ''}`}
              onClick={() => setCategory(null)}
            >
              All Insights
            </button>
            <button
              className={`${styles.catBtn} ${activeCategory === 'news' ? styles.catBtnActive : ''}`}
              onClick={() => setCategory('news')}
            >
              News &amp; Publications
            </button>
            <button
              className={`${styles.catBtn} ${activeCategory === 'annual_report' ? styles.catBtnActive : ''}`}
              onClick={() => setCategory('annual_report')}
            >
              Annual Report
            </button>
            <button
              className={`${styles.catBtn} ${activeCategory === 'bank' ? styles.catBtnActive : ''}`}
              onClick={() => setCategory('bank')}
            >
              Real Estate Data Bank
            </button>
            <button
              className={`${styles.catBtn} ${activeCategory === 'articles' ? styles.catBtnActive : ''}`}
              onClick={() => setCategory('articles')}
            >
              Articles
            </button>
          </div>

          {/* Cards Grid */}
          <div className={styles.grid}>
            {filteredInsights.map((item) => (
              <article key={item.id} className={`card ${styles.insightCard}`}>
                <div className={styles.cardHeader}>
                  <span className={styles.catBadge}>{item.categoryLabel}</span>
                  <span className={styles.readMeta}>{item.readTime}</span>
                </div>

                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardExcerpt}>{item.excerpt}</p>

                <div className={styles.cardFooter}>
                  <span className={styles.publishDate}>{item.date}</span>
                  <a href="#contactus" className={styles.readMoreLink}>
                    Request publication &rarr;
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Insights