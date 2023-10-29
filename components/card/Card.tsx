import style from './Card.module.css'
import Image from 'next/image';
import taverna from '@/public/images/la-trattoria-del-campo.jpg'

const Card = ({id, name,city,country,ranking, price, image}) => {
    return (
      <>
          <div className={style.container}>
                {/* <h3 className={style.rating}>Rating: {rating}</h3> */}
                <h2 className={style.titleName}>{name}</h2>
                <h3 className={style.genero}>{city} - {country}</h3>
                { <div className= {style.content__img}>
                  <Image className= {style.img} src={image} alt='' 
                  width={200}
                  height={300}
                  />
                </div> }
                
                <h3 className={style.genero}>Precio: {price} $</h3> 
                <h3 className={style.genero}>Ranking: {ranking}</h3>
                {/* <Link to={`/videogames/${id}`}>
                  <button className={style.button} >See more...</button>
                </Link> */}
          </div>
          
      </>
    )
  }
  
  export default Card