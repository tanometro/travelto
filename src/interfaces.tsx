export interface AdminAttractionFormInterface {
    name: string,
    country:string,
    city: string,
    latitude: string,
    longitude: string,
    price: string,
    ranking: number,
    hours: string,
    duration: string,
    image: string,
    isActive: boolean,
}

export interface AttractionInterface {
    name: string,
    country:string,
    city: string,
    latitude: string,
    longitude: string,
    price: string,
    ranking: number,
    hours: string,
    duration: string,
    image: string,
    isActive: boolean,
}

export interface ButtonProps {
    text: string,
    size: string,
  };