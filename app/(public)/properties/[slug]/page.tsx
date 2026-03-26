import { Footer } from "@/src/shared/ui";

export default function PropertyPageBySlug() {
    return (
        <section className="bg-slate-50 min-h-screen">
            <main className="max-w-screen-2xl mx-auto px-6 py-10 space-y-10">
                <section className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-[360px] md:h-[560px]">
                    <div className="md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=1400&auto=format&fit=crop"
                            alt="Principal"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="hidden md:block rounded-2xl overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop"
                            alt="Interior"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="hidden md:block rounded-2xl overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1493666438817-866a91353ca9?q=80&w=1200&auto=format&fit=crop"
                            alt="Cocina"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="hidden md:block md:col-span-2 rounded-2xl overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1400&auto=format&fit=crop"
                            alt="Sala"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </section>

                <section className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    <article className="lg:col-span-8 space-y-8">
                        <header className="bg-white rounded-2xl p-8 shadow-sm">
                            <p className="text-sm text-slate-500 mb-2">Propiedades / Lima / Miraflores</p>
                            <h1 className="text-4xl font-black text-slate-900 mb-3">
                                The Obsidian Horizon Villa
                            </h1>
                            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                                <p className="text-slate-600">Av. Jose Pardo 1234, Miraflores, Lima</p>
                                <p className="text-4xl font-black text-blue-700">$12,450,000</p>
                            </div>
                        </header>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white rounded-2xl p-6 shadow-sm">
                            <Stat label="Habitaciones" value="5" />
                            <Stat label="Banos" value="6" />
                            <Stat label="Area" value="7200 m²" />
                            <Stat label="Cocheras" value="3" />
                        </div>

                        <section className="bg-white rounded-2xl p-8 shadow-sm space-y-5">
                            <h2 className="text-2xl font-bold text-slate-900">Descripcion</h2>
                            <p className="text-slate-600 leading-relaxed">
                                Arquitectura contemporanea con acabados premium, iluminacion natural
                                y distribucion pensada para comodidad total. Espacios amplios para
                                reuniones, zona social y una terraza privada con gran vista.
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                Ideal para familias o inversionistas que buscan una propiedad unica
                                en una zona de alta demanda.
                            </p>
                        </section>
                    </article>

                    <aside className="lg:col-span-4 space-y-6">
                        <div className="bg-white rounded-2xl p-8 shadow-sm space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-full bg-blue-100 text-blue-700 grid place-items-center font-black">
                                    MS
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900">Marcus Sterling</p>
                                    <p className="text-sm text-slate-500">Agente inmobiliario</p>
                                </div>
                            </div>
                            <button className="w-full rounded-xl bg-blue-700 text-white py-3 font-semibold hover:bg-blue-800 transition-colors">
                                Contactar agente
                            </button>
                            <button className="w-full rounded-xl bg-orange-100 text-orange-700 py-3 font-semibold hover:bg-orange-200 transition-colors">
                                Agendar visita
                            </button>
                        </div>

                        <div className="bg-white rounded-2xl p-8 shadow-sm">
                            <p className="text-sm text-slate-500 mb-1">Pago estimado</p>
                            <p className="text-3xl font-black text-slate-900 mb-2">$58,240 / mes</p>
                            <p className="text-sm text-slate-600">
                                Estimado referencial para credito a 30 anos.
                            </p>
                        </div>
                    </aside>
                </section>
            </main>

            <Footer />
        </section>
    );
}

function Stat({ label, value }: { label: string; value: string }) {
    return (
        <div className="rounded-xl bg-slate-50 p-4">
            <p className="text-xs uppercase tracking-wide text-slate-500">{label}</p>
            <p className="text-2xl font-black text-slate-900">{value}</p>
        </div>
    );
}
