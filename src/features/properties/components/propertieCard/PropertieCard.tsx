import type { PropertyListRow } from "../../types/properie.type";

interface PropertieCardProps {
    row: PropertyListRow;
}

export const PropertieCard = ({ row }: PropertieCardProps) => {
    const { property, property_type, property_image } = row;

    return (
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col lg:flex-row group">
            <div className="w-full lg:w-72 h-48 lg:h-auto overflow-hidden">
                <img
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    alt={property.title}
                    src={property_image.url}
                />
            </div>
            <div className="flex-1 p-6 flex flex-col justify-between gap-4">
                <div className="flex justify-between items-start">
                    <div>
                        <span className="bg-blue-100 text-blue-800 text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded">
                            {property_type.name}
                        </span>
                        <span className="text-gray-400 text-xs font-medium ml-2">
                            Ref: {property.id.slice(0, 8)}
                        </span>
                        <h3 className="text-xl font-bold mt-2">{property.title}</h3>
                        <p className="text-gray-500 text-sm mt-1">{property.location}</p>
                    </div>
                    <div className="text-right">
                        <p className="text-2xl font-black text-blue-600">
                            ${property.price}
                        </p>
                    </div>
                </div>
                <div className="flex flex-wrap gap-4">
                    <span className="bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1.5 rounded-full">
                        {property.rooms} Hab.
                    </span>
                    <span className="bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1.5 rounded-full">
                        {property.bathrooms} Baños
                    </span>
                    <span className="bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1.5 rounded-full">
                        {property.area} m²
                    </span>
                </div>
                <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
                    <button
                        type="button"
                        className="text-sm font-bold text-gray-500 hover:text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-100"
                    >
                        Ver
                    </button>
                    <button
                        type="button"
                        className="text-sm font-bold text-gray-500 hover:text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-100"
                    >
                        Editar
                    </button>
                    <button
                        type="button"
                        className="text-sm font-bold text-red-500 hover:bg-red-50 px-4 py-2 rounded-lg"
                    >
                        Eliminar
                    </button>
                </div>
            </div>
        </div>
    );
};
