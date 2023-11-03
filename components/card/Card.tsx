import style from "./Card.module.css";
import Image from "next/image";
import Link from "next/link";
import AddToCart from "../Cart/AddToCart/AddToCart";

const Card = ({
  id,
  hours,
  duration,
  name,
  city,
  country,
  ranking,
  price,
  image,
  latitude,
  longitude,
}) => {
  return (
      <div className={style.container}>
        {/* <h3 className={style.rating}>Rating: {rating}</h3> */}
        <div className="flex justify-between w-48">
          <i className="ri-map-pin-line" />
          <h2 className={style.titleName}>{name}</h2>
          <AddToCart
            attraction={{
              id,
              name,
              city,
              country,
              ranking,
              price,
              hours,
              duration,
              image,
              latitude,
              longitude,
            }}
          />
        </div>
        <h3 className={style.genero}>
          {city} - {country}
        </h3>
        {
          <div className={style.content__img}>
            <Image
              className={style.img}
              src={image}
              alt=""
              width={200}
              height={300}
            />
          </div>
        }

        <h3 className={style.genero}>Precio: {price} $</h3>
        <h3 className={style.genero}>Ranking: {ranking}</h3>
        <Link href={`/Detail/${id}`}>
          <button className={style.button}>Ver más...</button>
        </Link>
      </div>
  );
};

export default Card;
