import styles from "./paginacion.module.css"
import  NumberPage from '../numberPage/NumberPage'
import React, { FC } from 'react';

type Props = {
    page: number;
    setPage: Function;
    pageAmount: number;
}
 const Paginacion: FC<Props> = ({ page, setPage, pageAmount}) => {
    
    const nextPage = () => {
        setPage(page + 1)
    }
    const previusPage = () => {
        setPage(page - 1)
    }
    const numeracion:number[] = [];
    let i = 1
    while (i <= pageAmount ) {
        numeracion.push(i)
        i++
    }
    
    return  pageAmount !== 1 && (
    
        <div className={styles.container}>
            <button 
                disabled={page === 1 || page < 1}
                onClick={previusPage}
                className={styles.button}>
                <i className="ri-arrow-left-circle-fill"></i>
            </button>
            {/* {numeracion.map((e) => {
                return <NumberPage 
                    key = {e}    
                    number= {e}
                    page = {page}
                    setPage = {setPage}
                />})} */}
                <div className=" block text-2xl bg-blue color-white">
                    {page} de {pageAmount}
                </div>
            <button 
                disabled={page === Math.ceil (pageAmount) || page > Math.ceil (pageAmount)}
                onClick={nextPage}
                className={styles.button}><i className="ri-arrow-right-circle-fill"></i>
            </button>
        </div>
    )
    
}
export default Paginacion
