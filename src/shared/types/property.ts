export interface PropertyPublic {
    property: {
        id: string;
        title: string;
        description: string;
        price: string;
        location: string;
        rooms: number;
        bathrooms: number;
        area: string;
        status: "active" | "sold" | "pending";
    };
    property_type: {
        name: string;
    };
    property_image: {
        url: string;
    };
}