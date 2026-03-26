import { getProperties, getPropertyType } from "@/src/features/properties/actions";
import { PropertyGridPublic } from "@/src/features/properties/components/public";
import { auth } from "@/src/lib/auth";
import { Footer, TopMenu } from "@/src/shared/ui";
import type { Metadata } from "next";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Propify | Editorial Real Estate Excellence",
};

export default async function HomePage() {


  // Obtener el usuario autenticado
  const data = await auth.api.getSession({
    headers: await headers(),
  });

  if (!data?.user) {
    redirect("/")
  }

  const propertyTypes = await getPropertyType();

  const { data: properties, success, errors } = await getProperties();


  if (!success) {
    return (
      <>
        <p className="text-red-600">
          {errors?.join(", ") ?? "No se pudieron obtener las propiedades"}
        </p>
      </>
    )
  }

  return (
    <div className="flex min-h-screen w-full flex-col bg-surface text-on-surface antialiased">
      <header className="fixed top-0 z-50 w-full bg-white/80 shadow-sm backdrop-blur-xl dark:bg-slate-900/80 dark:shadow-none">
        <TopMenu user={data.user} />
      </header>

      <main className="flex-1">
        <section className="relative flex min-h-[870px] items-center justify-center overflow-hidden bg-surface pt-20">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-linear-to-b from-surface via-surface/60 to-surface" />
            <img
              alt="Villa moderna de lujo con grandes ventanales y piscina al atardecer"
              className="size-full object-cover opacity-20 grayscale"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaxxiVfX1upoK0VsVjZ4LanoTfrsAg6iPRBuIKig8mRt3aHjKKPAnC_fDe7iFEOE7sdFJGTs2VPmGEV5x33ADHavMdT2PVyVrJcZ8eawtlZeTKgGEK_cEXtMIZkmriSDRqo6R9XKCpU5zLS8l6z-gigiQcuaByBOOyoofbpn3PkjQ24a7_VQEXPK-5ybu7DmYFHRxGO5KzxUnlU11i38fdXYM6rtr24FG0Gy38YQYeFV51331n370k4OJK3jD4kzUaqi5apWVEOFVH"
            />
          </div>
          <div className="relative z-10 w-full max-w-6xl px-6 text-center">
            <h1 className="mb-8 text-5xl leading-[1.1] font-extrabold tracking-tight text-on-surface md:text-7xl">
              Propiedades en venta en todo <br />
              <span className="text-primary italic">El Perú</span>
            </h1>
            <div className="mx-auto mt-12 flex max-w-4xl flex-col items-center gap-2 rounded-full bg-surface-container-lowest p-2 shadow-2xl md:flex-row">
              <div className="group flex w-full items-center gap-3 px-6 py-3">
                <span className="material-symbols-outlined text-primary">
                  location_on
                </span>
                <div className="w-full text-left">
                  <label className="block text-[10px] font-bold tracking-widest text-outline uppercase">
                    Ubicación
                  </label>
                  <input
                    className="w-full border-none bg-transparent p-0 font-medium text-on-surface placeholder:text-slate-400 focus:ring-0"
                    placeholder="¿En qué ciudad estás buscando?"
                    type="text"
                  />
                </div>
              </div>
              <div className="hidden h-10 w-px bg-surface-container md:block" />
              <div className="flex w-full items-center gap-3 px-6 py-3">
                <span className="material-symbols-outlined text-primary">
                  price_change
                </span>
                <div className="w-full text-left">
                  <label className="block text-[10px] font-bold tracking-widest text-outline uppercase">
                    Rango de precios
                  </label>
                  <input
                    className="w-full border-none bg-transparent p-0 font-medium text-on-surface placeholder:text-slate-400 focus:ring-0"
                    placeholder="S/. 500,000 - S/. 2,000,000"
                    type="text"
                  />
                </div>
              </div>
              <div className="hidden h-10 w-px bg-surface-container md:block" />
              <div className="flex w-full items-center gap-3 px-6 py-3">
                <span className="material-symbols-outlined text-primary">
                  home_work
                </span>
                <div className="w-full text-left">
                  <label className="block text-[10px] font-bold tracking-widest text-outline uppercase">
                    Tipo de propiedad
                  </label>
                  <select className="w-full cursor-pointer border-none bg-transparent p-0 font-medium text-on-surface focus:ring-0 text-sm">
                    {propertyTypes?.data?.map((type) => (
                      <option key={type.id} value={type.id} className="text-on-surface">
                        {type.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <button
                type="button"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 font-bold text-on-primary transition-all hover:bg-primary/90 active:scale-95 md:w-auto"
              >
                <span className="material-symbols-outlined text-white">search</span>
                Buscar
              </button>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <span className="rounded-full bg-surface-container-high px-4 py-2 text-sm font-medium text-on-surface-variant">
                Destinos populares:
              </span>
              <a
                className="rounded-full px-4 py-2 text-sm font-semibold transition-colors hover:bg-surface-container"
                href="#"
              >
                Lima
              </a>
              <a
                className="rounded-full px-4 py-2 text-sm font-semibold transition-colors hover:bg-surface-container"
                href="#"
              >
                Cusco
              </a>
              <a
                className="rounded-full px-4 py-2 text-sm font-semibold transition-colors hover:bg-surface-container"
                href="#"
              >
                Arequipa
              </a>
              <a
                className="rounded-full px-4 py-2 text-sm font-semibold transition-colors hover:bg-surface-container"
                href="#"
              >
                Ica
              </a>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low py-24">
          <div className="mx-auto max-w-screen-2xl px-8">
            <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-on-surface">
                  Propiedades destacadas
                </h2>
                <p className="max-w-xl text-lg text-on-surface-variant">
                  Cada propiedad en nuestra colección es revisada manualmente para garantizar su calidad y excelencia.
                </p>
              </div>
              <a
                className="group flex items-center gap-2 font-bold text-primary underline-offset-4 underline-offset-4 hover:underline"
                href="/properties"
              >
                Ver todas las propiedades
                <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </a>
            </div>

          </div>
          <PropertyGridPublic properties={properties} />
        </section>

        <section className="relative overflow-hidden bg-surface py-32">
          <div className="relative z-10 mx-auto max-w-7xl px-8">
            <div className="relative flex flex-col items-center justify-between gap-12 overflow-hidden rounded-[3rem] bg-primary-container p-12 text-on-primary-container shadow-2xl md:flex-row md:p-20">
              <div className="pointer-events-none absolute top-0 right-0 h-full w-1/2 bg-linear-to-l from-white/10 to-transparent" />
              <div className="max-w-lg">
                <h2 className="mb-6 text-4xl leading-tight font-black md:text-5xl">
                  Listá tu propiedad
                </h2>
                <p className="mb-10 text-lg font-medium text-primary-fixed-dim opacity-90">
                  Únete a nuestra red exclusiva de vendedores y alcánzate a un público global de curadores de alto neto.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <button
                    type="button"
                    className="rounded-full bg-secondary-container px-10 py-5 text-lg font-black text-on-secondary-container shadow-xl shadow-secondary-container/30 transition-transform hover:scale-105"
                  >
                    Listá tu propiedad
                  </button>
                  <button
                    type="button"
                    className="rounded-full border border-white/20 bg-white/10 px-10 py-5 font-bold text-white backdrop-blur-md transition-all hover:bg-white/20"
                  >
                    Hablar con un agente
                  </button>
                </div>
              </div>
              <div className="aspect-square w-full rotate-3 overflow-hidden rounded-3xl shadow-2xl md:w-1/3">
                <img
                  alt="Agente inmobiliario mostrando una propiedad de lujo en una tableta"
                  className="size-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCa7RgFLW5Vm5AMf0bbB9xuYVJDuYMomRYAXSFgH6o4Ic4H1z_Qejgz5bkOqFS_RCsngLAWPSyAQ2g27UXmZrP6escq1W3QObDj9LX1GNdCfmHiGZRZIF272uLNnvDUJj1-MivnEXmTorjx8yw04OjyeCbxVwy_kEzWl-3j3_S_vWywqOpX2JhjsODeL-8onigEEs4S9ZPy_VbjwpWH1ktTuwBeG-R5e6Nli-cqfQs8upN2jQRx3IsKhDqzmUp2DjH8dmUNr2ZCusjS"
                />
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute -bottom-10 left-0 select-none text-[200px] font-black whitespace-nowrap text-surface-container opacity-50">
            ESTATES • VILLAS • LOFTS
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
