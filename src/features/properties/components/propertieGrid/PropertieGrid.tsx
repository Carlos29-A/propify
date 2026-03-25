import type { PropertyListRow } from "../../types/properie.type";
import { PropertieCard } from "../propertieCard/PropertieCard";

interface PropertieGridProps {
    properties: PropertyListRow[];
}

export const PropertieGrid = ({ properties }: PropertieGridProps) => {
    if (properties.length === 0) {
        return (
            <p className="text-gray-500 text-center py-12">
                No tienes propiedades publicadas aún.
            </p>
        );
    }

    return (
        <div className="flex flex-col gap-6">
            {properties.map((row) => (
                <PropertieCard
                    key={`${row.property.id}-${row.property_image.id}`}
                    row={row}
                />
            ))}
        </div>
    );
};
