import style from './Card.module.css'
import Image from 'next/image';
import taverna from '@/public/images/la-trattoria-del-campo.jpg'

const Card = ({id, name,location}) => {
    return (
      <>
          <div className={style.container}>
                {/* <h3 className={style.rating}>Rating: {rating}</h3> */}
                <h2 className={style.titleName}>{name}</h2>
                { <div className= {style.content__img}>
                  <Image className= {style.img} src={taverna} alt='' />
                </div> }
                {/*
                <h3 className={style.genero}><u>Género</u></h3>
                
                <h3 className={style.genero}>{
                    genres?.map(e => e + ", ")
                }</h3> */}
                <h2 className={style.genero}>{location}</h2>
                {/* <Link to={`/videogames/${id}`}>
                  <button className={style.button} >See more...</button>
                </Link> */}
          </div>
          
      </>
    )
  }
  
  export default Card