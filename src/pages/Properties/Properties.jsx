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
    description: 'Contemporary detached duplex featuring premium sanitary fittings, spacious paved parking for 6 cars, and 24/7 security in serene Rayfield.',
    image: propImg1,
    specs: { beds: '4 Beds', baths: '5 Baths', area: '650 sqm' },
  },
  {
    id: 2,
    title: 'Modern Corporate Office Complex',
    location: 'Central Business District, Abuja (FCT)',
    state: 'abuja',
    type: 'lease',
    price: '₦12,000,000 / year',
    description: 'Fully serviced commercial corporate floors, high-speed elevators, backup power generators, and access-controlled underground parking.',
    image: propImg2,
    specs: { beds: null, baths: '6 Washrooms', area: '1,200 sqm' },
  },
  {
    id: 3,
    title: 'Prime Commercial / Residential Development Plot',
    location: 'Oregun, Ikeja, Lagos State',
    state: 'lagos',
    type: 'sale',
    price: '₦140,000,000',
    description: 'High-yield commercial-residential plot with clean Certificate of Occupancy (C of O), dual road access, and excellent drainage.',
    image: propImg3,
    specs: { beds: null, baths: null, area: '980 sqm' },
  },
  {
    id: 4,
    title: '3-Bedroom Executive View Apartment',
    location: 'Lamingo, Jos, Plateau State',
    state: 'plateau',
    type: 'lease',
    price: '₦2,500,000 / year',
    description: 'Scenic hilltop apartment with fitted contemporary kitchen, en-suite bedrooms, private prepaid meter, and dedicated security post.',
    image: propImg1,
    specs: { beds: '3 Beds', baths: '3 Baths', area: '280 sqm' },
  },
  {
    id: 5,
    title: 'Industrial Warehouse & Logistics Hub',
    location: 'Biu Road, Gombe, Gombe State',
    state: 'gombe',
    type: 'lease',
    price: '₦6,000,000 / year',
    description: 'Strategic distribution facility featuring heavy trailer turning radius, high clearance loading bays, and administrative executive offices.',
    image: propImg2,
    specs: { beds: null, baths: '2 Washrooms', area: '2,500 sqm' },
  },
  {
    id: 6,
    title: '5-Bedroom Contemporary Smart Villa',
    location: 'Maitama Extension, Abuja (FCT)',
    state: 'abuja',
    type: 'sale',
    price: '₦220,000,000',
    description: 'Architectural masterpiece equipped with smart home automation, private swimming pool, guest chalet, and lush landscaped garden.',
    image: propImg3,
    specs: { beds: '5 Beds', baths: '6 Baths', area: '1,100 sqm' },
  },
]

function Properties() {
  const [searchParams, setSearchParams] = useSearchParams()

  const currentType = searchParams.get('type')
  const currentIloc = searchParams.get('iloc')
  const currentDenyIloc = searchParams.get('deny_iloc')

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
        title="Vetted Property Listings"
        id="properties-hero"
      />

      <section className={styles.listingsSection}>
        <div className="content">
          {/* Header & Filter Controls */}
          <div className={styles.filterContainer}>
            <div className={styles.filterTabs}>
              <button
                className={`${styles.filterPill} ${isAllActive ? styles.filterPillActive : ''}`}
                onClick={() => setFilter({})}
              >
                All Listings
              </button>
              <button
                className={`${styles.filterPill} ${currentType === 'sale' ? styles.filterPillActive : ''}`}
                onClick={() => setFilter({ type: 'sale' })}
              >
                For Sale
              </button>
              <button
                className={`${styles.filterPill} ${currentType === 'lease' ? styles.filterPillActive : ''}`}
                onClick={() => setFilter({ type: 'lease' })}
              >
                For Lease
              </button>
              <button
                className={`${styles.filterPill} ${currentIloc === 'plateau' ? styles.filterPillActive : ''}`}
                onClick={() => setFilter({ iloc: 'plateau' })}
              >
                Plateau State
              </button>
              <button
                className={`${styles.filterPill} ${currentDenyIloc === 'plateau' ? styles.filterPillActive : ''}`}
                onClick={() => setFilter({ deny_iloc: 'plateau' })}
              >
                Abuja &amp; Lagos Listings
              </button>
            </div>

            <span className={styles.countBadge}>
              Showing <strong>{filteredProperties.length}</strong> available properties
            </span>
          </div>

          {/* Properties Grid */}
          {filteredProperties.length === 0 ? (
            <div className={styles.noResultsBox}>
              <h3>No properties found matching this criteria</h3>
              <p>Try resetting the filter to view all verified properties.</p>
              <button className="action-btn" onClick={() => setFilter({})}>
                Reset Filter
              </button>
            </div>
          ) : (
            <div className={styles.propertyGrid}>
              {filteredProperties.map((property) => (
                <article key={property.id} className={`card ${styles.propertyCard}`}>
                  <div className={styles.cardImageContainer}>
                    <img
                      src={property.image}
                      alt={property.title}
                      className={styles.propertyImage}
                    />
                    <span
                      className={`${styles.typeBadge} ${
                        property.type === 'sale' ? styles.typeSale : styles.typeLease
                      }`}
                    >
                      {property.type === 'sale' ? 'FOR SALE' : 'FOR LEASE'}
                    </span>
                  </div>

                  <div className={styles.cardBody}>
                    <div className={styles.priceRow}>
                      <span className={styles.price}>{property.price}</span>
                    </div>

                    <h3 className={styles.propertyTitle}>{property.title}</h3>

                    <div className={styles.locationRow}>
                      <img src={locationIcon} alt="" className={styles.locIcon} />
                      <span>{property.location}</span>
                    </div>

                    <p className={styles.description}>{property.description}</p>

                    {/* Specs Row */}
                    <div className={styles.specsRow}>
                      {property.specs.beds && (
                        <span className={styles.specItem}>{property.specs.beds}</span>
                      )}
                      {property.specs.baths && (
                        <span className={styles.specItem}>{property.specs.baths}</span>
                      )}
                      {property.specs.area && (
                        <span className={styles.specItem}>{property.specs.area}</span>
                      )}
                    </div>

                    <div className={styles.cardAction}>
                      <a href="#contactus" className="action-btn" style={{ width: '100%' }}>
                        Inquire About Property
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Properties