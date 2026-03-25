import { z } from "zod";



export const propertySchema = z.object({
    // `FormData` no manda `null`, así que evitamos `nullable()` para que el tipo
    // coincida con `PropertyFormData` (id?: string).
    id: z.string().uuid().optional(),
    title: z.string().min(1, "El título es requerido"),
    description: z.string().min(1, "La descripción es requerida"),
    price: z.coerce.number().min(1, "El precio es requerido"),
    location: z.string().min(1, "La ubicación es requerida"),
    rooms: z.coerce.number().min(1, "El número de habitaciones es requerido"),
    bathrooms: z.coerce.number().min(1, "El número de baños es requerido"),
    area: z.coerce.number().min(1, "El área es requerida"),
    typeId: z.coerce.number().int().positive("El tipo de propiedad es requerido"),
});