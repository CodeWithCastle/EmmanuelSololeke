import styles from './Card.module.css'

function Card({ children, className = '', ...rest }) {
  return (
    <div className={`card ${styles.card} ${className}`} {...rest}>
      {children}
    </div>
  )
}

export default Card
