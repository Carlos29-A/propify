import { auth } from "@/src/lib/auth";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";
import { Title } from "@/src/shared/ui";
import Image from "next/image";
import { getPropertiesByUser } from "@/src/features/dashboard/actions/get-properties-by-user";

export default async function ProfilePage() {


    // Obtener el usuario autenticado
    const data = await auth.api.getSession({
        headers: await headers(),
    });

    if (!data?.user) {
        redirect("/")
    }

    // Propiedad publicadas por el
    const properties = await getPropertiesByUser();

    return (
        <section className="space-y-8">
            <header className="space-y-2">
                <Title
                    title="Mi Perfil"
                    subtitle="Gestiona tu informacion personal y manten tu perfil actualizado."
                />
            </header>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <article className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-surface-variant/40">
                    <div className="flex items-start justify-between gap-4 mb-6">
                        <div className="flex items-center gap-4">
                            {
                                data.user.image ? (
                                    <Image src={data.user.image} alt={data.user.name} width={100} height={100} />
                                ) : (
                                    <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-700 grid place-items-center text-xl font-black">
                                        U
                                    </div>
                                )
                            }
                            <div>
                                <h2 className="text-xl font-bold text-on-surface">{data.user.name}</h2>
                                <p className="text-sm text-outline"></p>
                            </div>
                        </div>
                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-100 text-emerald-700">
                            Activo
                        </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center gap-3 p-3 rounded-xl bg-surface-container-low">
                            <FaEnvelope className="text-blue-600" />
                            <span className="text-on-surface-variant">{data.user.email}</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 rounded-xl bg-surface-container-low">
                            <FaPhone className="text-blue-600" />
                            <span className="text-on-surface-variant">+51 999 123 456</span>
                        </div>
                        <div className="md:col-span-2 flex items-center gap-3 p-3 rounded-xl bg-surface-container-low">
                            <FaLocationDot className="text-blue-600" />
                            <span className="text-on-surface-variant">Lima, Peru</span>
                        </div>
                    </div>
                </article>

                <aside className="bg-white rounded-2xl p-6 shadow-sm border border-surface-variant/40 space-y-4">
                    <h3 className="text-lg font-bold text-on-surface">Resumen rapido</h3>

                    <div className="p-4 rounded-xl bg-surface-container-low">
                        <p className="text-xs uppercase tracking-wider text-outline mb-1">
                            Propiedades publicadas
                        </p>
                        <p className="text-2xl font-black text-blue-600">{properties.data.length}</p>
                    </div>

                    <div className="p-4 rounded-xl bg-surface-container-low">
                        <p className="text-xs uppercase tracking-wider text-outline mb-1">
                            Perfil completado
                        </p>
                        <p className="text-2xl font-black text-emerald-600">88%</p>
                    </div>

                    <button
                        type="button"
                        className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors"
                    >
                        Editar perfil
                    </button>
                </aside>
            </div>
        </section>
    );
}
