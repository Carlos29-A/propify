export interface PropertyFormData {
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

export interface PropertyType {
    id: number;
    name: string;
}