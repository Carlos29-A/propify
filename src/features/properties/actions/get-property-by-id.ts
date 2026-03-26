import type { PropertyListRow } from "../types/properie.type";
import { PropertyService } from "../services/propertice.service";

export type GetPropertyByIdResult =
    | { ok: true; data: PropertyListRow }
    | { ok: false; errors: string[] };

export const getPropertyById = async (id: string): Promise<GetPropertyByIdResult> => {
    if (!id) {
        return {
            ok: false,
            errors: ["ID de propiedad requerido"],
        };
    }

    const property = await PropertyService.getPropertyById(id);

    if (!property) {
        return {
            ok: false,
            errors: ["Propiedad no encontrada"],
        };
    }

    return {
        ok: true,
        data: property,
    };
};