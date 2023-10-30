export interface AdminAttractionFormInterface {
    name: string,
    description:string,
    latitude: string,
    longitude: string,
    price: string,
    hours: string,
    duration: string,
    imageUrl: string,
    isActive: string,
}

export interface AttractionInterface {
    name: string,
    description:string,
    latitude: string,
    longitude: string,
    price: string,
    hours: string,
    duration: string,
    imageUrl: string,
    isActive: string,
}

export interface ButtonProps {
    text: string,
    size: string,
  };