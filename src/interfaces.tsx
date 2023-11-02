export interface AdminAttractionFormInterface {
    name: string,
    location: number,
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

export interface PostAttractionFormInterface {
    name: string,
    location: number,
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
    id: number,
    name: string,
    Location: {city: string, country: string},
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

export interface LocationInterface {
    id: number,
    city: string,
    country: string
}

export interface UserInterface {
    id: number,
    name: [string, string],
    dni: string,
    image: string,
    email: string,
    password: string,
    isActive: boolean,
    roleID: number
}

export interface UserPostInterface {
    name: string,
    lastname: string,
    dni: string,
    image: string,
    email: string,
    password: string,
    isActive: boolean,
    roleID: number
}
export interface ButtonProps {
    text: string,
    size: string,
  };