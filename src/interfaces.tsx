export interface AdminAttractionFormInterface {
    name: string,
    description: string,
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
    description: string,
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

export interface UserInterface {
    name: string,
    lastName: string,
    dni: string,
    image: string,
    email: string,
    password: string,
}