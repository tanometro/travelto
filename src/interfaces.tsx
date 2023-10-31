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
    description: string,
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
    description: string,
    isActive: boolean,
}

export interface AdminLocationFormInterface {
    city: string,
    country: string
}

export interface LocationInterface {
    city: string,
    country: string
}
export interface ButtonProps {
    text: string,
    size: string,
  };