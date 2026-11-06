import styles from './SectionHero.module.css'

function SectionHero({ backgroundImage, title, id }) {
  return (
    <section
      className={styles.sectionHero}
      id={id}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined}
    >
      <div className={styles.overlay}></div>
      <div className={`content ${styles.inner}`}>
        {title && <h2 className={styles.title}>{title}</h2>}
      </div>
    </section>
  )
}

export default SectionHero
