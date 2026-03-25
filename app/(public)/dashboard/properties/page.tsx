
import { getPropertiesByUser } from "@/src/features/dashboard/actions/get-properties-by-user";
import { Button } from "@/src/features/dashboard/components";
import { PropertieGrid } from "@/src/features/properties/components";
import { Title } from "@/src/shared/ui";

export default async function PropertiesPage() {
    const result = await getPropertiesByUser();

    if (!Array.isArray(result)) {
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
                <div className="bg-white p-6 rounded-2xl shadow-sm flex flex-col justify-between border-l-4 border-blue-600">
                    <span className="text-sm font-semibold text-gray-400">Total Portfolio</span>
                    <div className="mt-4">
                        <span className="text-3xl font-black">12</span>
                        <span className="text-sm text-blue-600 font-bold ml-2">+2 this month</span>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm flex flex-col justify-between border-l-4 border-orange-400">
                    <span className="text-sm font-semibold text-gray-400">Active Views</span>
                    <div className="mt-4">
                        <span className="text-3xl font-black">1,482</span>
                        <span className="text-sm text-orange-500 font-bold ml-2">85% engagement</span>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm flex flex-col justify-between border-l-4 border-red-500">
                    <span className="text-sm font-semibold text-gray-400">Pending Offers</span>
                    <div className="mt-4">
                        <span className="text-3xl font-black">04</span>
                        <span className="text-sm text-red-500 font-bold ml-2">Awaiting review</span>
                    </div>
                </div>
            </div>

            <PropertieGrid properties={result} />
        </>
    )
}

