import Image from 'next/image';
import styles from './explore.module.css';
import explore_beach from '../../public/images/explore-beach.jpg'
import Data from '@/public/Attactions.json'
import Cards from '@/components/Cards/Cards'

export default function Explore () {
    
    return (
        <div className={styles.explore__container}>
                <div className={`${styles.explore__content} ${styles.contaimer} ${styles.grid}`}>
                    <div className={styles.explore__data}>
                    
                        <h2 className={styles.section__title}>
                    Explore The <br />
                    Best Attractions
                    </h2>
                    
                    <div>
                        <a href="#" className={styles.button}>
                            By Location <i className="ri-arrow-right-line" />
                        </a>
                        <a href="#" className={styles.button}>
                            Best Price <i className="ri-arrow-right-line" />
                        </a>
                        <a href="#" className={styles.button}>
                            Favorites <i className="ri-arrow-right-line" />
                        </a>
                    </div>
                    <div>
                        <Cards data= {Data} />
                    </div>
                    </div>
                </div>
                <div className={styles.explore__image}>
                <Image
                    src={explore_beach}
                    alt="explore image"
                    className={styles.explore__img}
                />
                <div className={styles.explore__shadow} />
                </div>
                
                
            </div> 
    )
}