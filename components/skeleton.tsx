import styles from './skeleton.module.css'

export const Skeleton = () => {
  return (
    <div className={styles.skeleton}><span className={styles.image}></span><span className={styles.line}></span><span className={styles.line}></span><span className={styles.line}></span><span className={styles.line}></span></div>
  )
}