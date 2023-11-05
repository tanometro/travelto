export interface AdminAttractionFormInterface {
    name: string,
    description: string,
    latitude: string,
    longitude: string,
    price: string,
    ranking: number,
    hours: string,
    duration: string,
    image: string,
    isActive: boolean,
}

export interface AttractionsCartInterface {
    id: number;
    name: string;
    isActive: boolean;
    hours: string;
    city: string;
    country: string;
    latitude: string;
    ranking: number;
    longitude: string;
    price: number;
    duration: string;
    image: string;
    quantity: number;
}

export interface AttractionInterface {
    id: number,
    name: string,
    description: string,
    latitude: string,
    longitude: string,
    price: string,
    ranking: number,
    hours: string,
    duration: string,
    image: string,
    isActive: boolean,
}

export interface LocationInterface {
    id: number,
    city: string,
    country: string,
}

export interface LocationFormInterface {
    city: string,
    country: string,
}

export interface PropCards {
    data: AttractionsCartInterface[];
    flag: boolean;
    setFlag: (newState: boolean) => void;
}

export interface UserPostInterface {
    name: string,
    last: string,
    dni: string,
    image: string,
    email: string,
    password: string,
    isActive: boolean,
    roleID: number
}

export interface UserFormInterface {
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
};

export interface UserInterface {
    name: string,
    lastName: string,
    dni: string,
    image: string,
    email: string,
    password: string,
}