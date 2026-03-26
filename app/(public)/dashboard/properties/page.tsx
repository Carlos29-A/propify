
import { getPropertiesByUser } from "@/src/features/dashboard/actions/get-properties-by-user";
import { Button } from "@/src/features/dashboard/components";
import { PropertieGrid } from "@/src/features/properties/components";
import { Stats, Title } from "@/src/shared/ui";
import { FaHouse } from "react-icons/fa6";

export default async function PropertiesPage() {
    const result = await getPropertiesByUser();
    console.log(result);
    const { data: activeProperties } = await getPropertiesByUser("active");
    const { data: soldProperties } = await getPropertiesByUser("sold");

    if (!result.success) {
        return (
            <>
                <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 ">
                    <Title
                        title="Mis Propiedades"
                        subtitle="Administra tus propiedades activas, rastrea el rendimiento y actualiza los detalles de la propiedad en tiempo real."
                    />
                </header>
                <p className="text-red-600">
                    {result.errors?.join(", ") ?? "No se pudieron cargar las propiedades."}
                </p>
            </>
        );
    }

    return (
        <>
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 ">
                <Title title="Mis Propiedades" subtitle="Administra tus propiedades activas, rastrea el rendimiento y actualiza los detalles de la propiedad en tiempo real." />
                <Button href="/dashboard/properties/create">
                    Agregar Propiedad
                </Button>
            </header>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <Stats title="Propiedades activas" value={activeProperties.length} icon={<FaHouse className="text-orange-400" size={32} />} className="border-l-4 border-orange-400" />
                <Stats title="Propiedades vendedidas" value={soldProperties.length} icon={<FaHouse className="text-red-500" size={32} />} className="border-l-4 border-red-500" />
                <Stats title="Total Propiedades Publicadas" value={result.data.length} icon={<FaHouse className="text-blue-600" size={32} />} className="border-l-4 border-blue-600" />
            </div>

            <PropertieGrid properties={result.data} />
        </>
    )
}

