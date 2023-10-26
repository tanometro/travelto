import styles from './number.module.css' 
import React, { FC } from 'react';

type Props = {
    page: number;
    setPage: Function;
    number: number;
}

 
const NumberPage: FC<Props> = ({page, number, setPage}) => {
   const handlePage = (number: number) => {
       setPage(number)
   }
   return (
       <div>
           <button onClick = {()=> handlePage(number)}  
               className ={page === number ? styles.isactive : styles.button} >
               {number}
           </button>
       </div>
   ) 
   
} 

export default NumberPage