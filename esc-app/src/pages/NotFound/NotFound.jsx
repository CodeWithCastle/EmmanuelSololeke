import { Link } from 'react-router-dom'
import styles from './NotFound.module.css'

function NotFound() {
  return (
    <div className={styles.notFound}>
      <div className={`content ${styles.inner}`}>
        <h1 className={styles.code}>404</h1>
        <h2 className={styles.title}>Page Not Found</h2>
        <p className={styles.detail}>
          The page you are looking for does not exist or has been moved.
        </p>
        <Link to="/">
          <button className="action-btn">Return Home</button>
        </Link>
      </div>
    </div>
  )
}

export default NotFound