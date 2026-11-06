import styles from './ActionButton.module.css'

function ActionButton({ children, onClick, className = '', as: Tag = 'button', href, ...rest }) {
  if (Tag === 'a') {
    return (
      <a href={href} className={`${styles.actionBtn} ${className}`} onClick={onClick} {...rest}>
        {children}
      </a>
    )
  }
  return (
    <button className={`${styles.actionBtn} ${className}`} onClick={onClick} {...rest}>
      {children}
    </button>
  )
}

export default ActionButton
