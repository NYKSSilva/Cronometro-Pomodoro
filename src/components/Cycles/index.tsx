import styles from './style.module.css'

export function Cycles(){
    return(
        <> 
        <div className={styles.cycles}>
            <span>Ciclos</span>
            <div className={styles.cycleDots}>
                <span className={`${styles.cycleDots} ${styles.workTime}`}></span>
                <span className={`${styles.cycleDots} ${styles.workTime}`}></span>
                <span className={`${styles.cycleDots} ${styles.workTime}`}></span>
                <span className={`${styles.cycleDots} ${styles.workTime}`}></span>
                <span className={`${styles.cycleDots} ${styles.workTime}`}></span>
                <span className={`${styles.cycleDots} ${styles.workTime}`}></span>
                <span className={`${styles.cycleDots} ${styles.workTime}`}></span>

            </div>
        </div>
        </>
    )
}