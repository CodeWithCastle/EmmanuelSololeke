import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import SectionHero from '../../components/ui/SectionHero.jsx'
import styles from './Properties.module.css'
import propertiesBgd from '../../assets/img/bgd/properties_bgd.avif'
import propImg1 from '../../assets/img/bgd/premium_photo-1689609950112-d66095626efb.avif'
import propImg2 from '../../assets/img/bgd/premium_photo-1673208585690-fe33159386bd.avif'
import propImg3 from '../../assets/img/bgd/premium_photo-1675842663249-a8b70103dbaa.avif'
import locationIcon from '../../assets/icons/location.png'

const sampleProperties = [
  {
    id: 1,
    title: 'Luxury 4-Bedroom Detached Duplex',
    location: 'Rayfield, Jos, Plateau State',
    state: 'plateau',
    type: 'sale',
    price: '₦85,000,000',
    description: 'Contemporary detached duplex with premium fittings, spacious parking, and 24/7 security in prime Rayfield.',
    image: propImg1,
    specs: { beds: 4, baths: 5, area: '650 sqm' },
  },
  {
    id: 2,
    title: 'Commercial Office Complex',
    location: 'Central Business District, Abuja',
    state: 'abuja',
    type: 'lease',
    price: '₦12,000,000 / year',
    description: 'Fully serviced commercial corporate floors, high-speed elevator, uninterrupted power supply, and basement parking.',
    image: propImg2,
    specs: { beds: null, baths: 6, area: '1,200 sqm' },
  },
  {
    id: 3,
    title: 'Prime Residential Development Land',
    location: 'Oregun, Ikeja, Lagos State',
    state: 'lagos',
    type: 'sale',
    price: '₦140,000,000',
    description: 'High-yield commercial-residential plot with clean title (C of O), excellent road connectivity, and drainage.',
    image: propImg3,
    specs: { beds: null, baths: null, area: '980 sqm' },
  },
  {
    id: 4,
    title: '3-Bedroom Executive Apartment',
    location: 'Lamingo, Jos, Plateau State',
    state: 'plateau',
    type: 'lease',
    price: '₦2,500,000 / year',
    description: 'Scenic hilltop apartment with modern kitchen, en-suite bedrooms, and private security gate.',
    image: propImg1,
    specs: { beds: 3, baths: 3, area: '280 sqm' },
  },
  {
    id: 5,
    title: 'Warehouse & Logistics Facility',
    location: 'Biu Road, Gombe, Gombe State',
    state: 'gombe',
    type: 'lease',
    price: '₦6,000,000 / year',
    description: 'Strategic distribution facility featuring heavy trailer access, loading bays, and administrative offices.',
    image: propImg2,
    specs: { beds: null, baths: 2, area: '2,500 sqm' },
  },
  {
    id: 6,
    title: '5-Bedroom Contemporary Villa',
    location: 'Maitama Extension, Abuja',
    state: 'abuja',
    type: 'sale',
    price: '₦220,000,000',
    description: 'Architectural masterpiece with smart home automation, private swimming pool, and lush landscaped garden.',
    image: propImg3,
    specs: { beds: 5, baths: 6, area: '1,100 sqm' },
  },
]

function Properties() {
  const [searchParams, setSearchParams] = useSearchParams()

  const currentType = searchParams.get('type') // 'sale' | 'lease'
  const currentIloc = searchParams.get('iloc') // 'plateau'
  const currentDenyIloc = searchParams.get('deny_iloc') // 'plateau'

  const filteredProperties = useMemo(() => {
    return sampleProperties.filter((item) => {
      if (currentType && item.type !== currentType) return false
      if (currentIloc && item.state !== currentIloc) return false
      if (currentDenyIloc && item.state === currentDenyIloc) return false
      return true
    })
  }, [currentType, currentIloc, currentDenyIloc])

  const setFilter = (params) => {
    setSearchParams(params)
  }

  const isAllActive = !currentType && !currentIloc && !currentDenyIloc

  return (
    <div className={styles.propertiesPage}>
      <SectionHero
        backgroundImage={propertiesBgd}
        title="property listings"
        id="properties-hero"
      />

      <section className={styles.listingsSection}>
        <div className="content">
          {/* Filter Bar */}
          <div className={styles.filterBar}>
            <button
              className={`${styles.filterBtn} ${isAllActive ? styles.filterBtnActive : ''}`}
              onClick={() => setFilter({})}
            >
              All Properties
            </button>
            <button
              className={`${styles.filterBtn} ${currentType === 'sale' ? styles.filterBtnActive : ''}`}
              onClick={() => setFilter({ type: 'sale' })}
            >
              For Sale
            </button>
            <button
              className={`${styles.filterBtn} ${currentType === 'lease' ? styles.filterBtnActive : ''}`}
              onClick={() => setFilter({ type: 'lease' })}
            >
              For Lease
            </button>
            <button
              className={`${styles.filterBtn} ${currentIloc === 'plateau' ? styles.filterBtnActive : ''}`}
              onClick={() => setFilter({ iloc: 'plateau' })}
            >
              Plateau Properties
            </button>
            <button
              className={`${styles.filterBtn} ${currentDenyIloc === 'plateau' ? styles.filterBtnActive : ''}`}
              onClick={() => setFilter({ deny_iloc: 'plateau' })}
            >
              Other States
            </button>
          </div>

          {/* Properties Count */}
          <div className={styles.countText}>
            Showing {filteredProperties.length} verified listings
          </div>

          {/* Gallery Grid */}
          <div className={styles.gallery}>
            {filteredProperties.length === 0 ? (
              <div className={styles.noResults}>
                <p>No properties found matching your selection.</p>
                <button className="no-button" onClick={() => setFilter({})}>
                  Clear filters
                </button>
              </div>
            ) : (
              filteredProperties.map((property) => (
                <div key={property.id} className={`card ${styles.propertyCard}`}>
                  <div className={styles.imageContainer}>
                    <img
                      src={property.image}
                      alt={property.title}
                      className={styles.propertyImage}
                    />
                    <span className={`${styles.badge} ${property.type === 'sale' ? styles.badgeSale : styles.badgeLease}`}>
                      {property.type === 'sale' ? 'For Sale' : 'For Lease'}
                    </span>
                  </div>

                  <div className={styles.cardDetails}>
                    <div className={styles.priceTag}>{property.price}</div>
                    <h3 className={styles.propertyTitle}>{property.title}</h3>

                    <div className={styles.locationRow}>
                      <img src={locationIcon} alt="" className={styles.locIcon} />
                      <span>{property.location}</span>
                    </div>

                    <p className={styles.propertyDesc}>{property.description}</p>

                    {/* Specs */}
                    <div className={styles.specsRow}>
                      {property.specs.beds && (
                        <span>🛏️ {property.specs.beds} Beds</span>
                      )}
                      {property.specs.baths && (
                        <span>🚿 {property.specs.baths} Baths</span>
                      )}
                      {property.specs.area && (
                        <span>📐 {property.specs.area}</span>
                      )}
                    </div>

                    <a href="#contactus" className={styles.inquireBtn}>
                      <button className="action-btn">Inquire Now</button>
                    </a>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Properties