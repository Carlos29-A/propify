export interface PropertyFormData {
    id?: string;
    title: string;
    description: string;
    price: number;
    location: string;
    rooms: number;
    bathrooms: number;
    area: number;
    typeId: number;
    images?: FileList;
}

export interface Property {
    id: string;
    title: string;
    description: string;
    price: string;
    location: string;
    rooms: number;
    bathrooms: number;
    area: string;
    typeId: number;
    userId: string;
}

export interface PropertyType {
    id: number;
    name: string;
}