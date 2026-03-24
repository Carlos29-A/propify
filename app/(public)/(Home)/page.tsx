import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Propify | Editorial Real Estate Excellence",
};

export default function HomePage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-surface text-on-surface antialiased">
      <header className="fixed top-0 z-50 w-full bg-white/80 shadow-sm backdrop-blur-xl dark:bg-slate-900/80 dark:shadow-none">
        <div className="mx-auto flex w-full max-w-screen-2xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-8">
            <a
              className="text-2xl font-black tracking-tight text-blue-800 dark:text-blue-200"
              href="/"
            >
              Propify
            </a>
            <nav className="hidden items-center gap-6 md:flex">
              <a
                className="relative text-sm font-bold text-blue-700 after:absolute after:-bottom-1 after:left-1/2 after:h-1 after:w-1 after:-translate-x-1/2 after:rounded-full after:bg-blue-600 after:content-[''] dark:text-blue-400"
                href="/properties"
              >
                Buy
              </a>
              <a
                className="text-sm font-semibold text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-300"
                href="/properties"
              >
                Rent
              </a>
              <a
                className="text-sm font-semibold text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-300"
                href="#"
              >
                Sell
              </a>
              <a
                className="text-sm font-semibold text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-300"
                href="#"
              >
                Agents
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <a
              className="rounded-full px-5 py-2 text-sm font-semibold text-slate-600 transition-all hover:bg-slate-100/50"
              href="/auth/login"
            >
              Login
            </a>
            <a
              className="scale-95 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-on-primary shadow-lg shadow-primary/20 duration-200 active:scale-90"
              href="/auth/register"
            >
              Register
            </a>
          </div>
        </div>
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
              Curating Spaces for <br />
              <span className="text-primary italic">Extraordinary</span> Living
            </h1>
            <div className="mx-auto mt-12 flex max-w-4xl flex-col items-center gap-2 rounded-full bg-surface-container-lowest p-2 shadow-2xl md:flex-row">
              <div className="group flex w-full items-center gap-3 px-6 py-3">
                <span className="material-symbols-outlined text-primary">
                  location_on
                </span>
                <div className="w-full text-left">
                  <label className="block text-[10px] font-bold tracking-widest text-outline uppercase">
                    Location
                  </label>
                  <input
                    className="w-full border-none bg-transparent p-0 font-medium text-on-surface placeholder:text-slate-400 focus:ring-0"
                    placeholder="Where are you looking?"
                    type="text"
                  />
                </div>
              </div>
              <div className="hidden h-10 w-px bg-surface-container md:block" />
              <div className="flex w-full items-center gap-3 px-6 py-3">
                <span className="material-symbols-outlined text-primary">
                  payments
                </span>
                <div className="w-full text-left">
                  <label className="block text-[10px] font-bold tracking-widest text-outline uppercase">
                    Price Range
                  </label>
                  <input
                    className="w-full border-none bg-transparent p-0 font-medium text-on-surface placeholder:text-slate-400 focus:ring-0"
                    placeholder="$500k - $2M"
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
                    Property Type
                  </label>
                  <select className="w-full cursor-pointer border-none bg-transparent p-0 font-medium text-on-surface focus:ring-0">
                    <option>Villa</option>
                    <option>Penthouse</option>
                    <option>Estate</option>
                  </select>
                </div>
              </div>
              <button
                type="button"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 font-bold text-on-primary transition-all hover:bg-primary/90 active:scale-95 md:w-auto"
              >
                <span className="material-symbols-outlined">search</span>
                Search
              </button>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <span className="rounded-full bg-surface-container-high px-4 py-2 text-sm font-medium text-on-surface-variant">
                Top Destinations:
              </span>
              <a
                className="rounded-full px-4 py-2 text-sm font-semibold transition-colors hover:bg-surface-container"
                href="#"
              >
                Aspen
              </a>
              <a
                className="rounded-full px-4 py-2 text-sm font-semibold transition-colors hover:bg-surface-container"
                href="#"
              >
                Miami
              </a>
              <a
                className="rounded-full px-4 py-2 text-sm font-semibold transition-colors hover:bg-surface-container"
                href="#"
              >
                London
              </a>
              <a
                className="rounded-full px-4 py-2 text-sm font-semibold transition-colors hover:bg-surface-container"
                href="#"
              >
                Dubai
              </a>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low py-24">
          <div className="mx-auto max-w-screen-2xl px-8">
            <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-on-surface">
                  Editorial Selections
                </h2>
                <p className="max-w-xl text-lg text-on-surface-variant">
                  Each residence in our collection is hand-vetted for its
                  architectural merit and exceptional craftsmanship.
                </p>
              </div>
              <a
                className="group flex items-center gap-2 font-bold text-primary underline-offset-4 hover:underline"
                href="/properties"
              >
                View All Listings
                <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </a>
            </div>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
              <div className="group overflow-hidden rounded-xl bg-surface-container-lowest shadow-sm transition-all duration-500 hover:shadow-2xl">
                <div className="relative aspect-4/3 overflow-hidden">
                  <img
                    alt="Mansión brutalista moderna con hormigón y cristal sobre un cañón al atardecer"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB20ohp3uvjAC3I2WnVGlAbfF-L6Wbk5-_kjOHVL288NsBuIl2H4BsRVylsZdVp6IR6KvQZqx65MbjvpIf6VPefB7XzfACe4hOUZR32vAwIyY4Neferj8YE1rHT8WCh_kNqoj8NxnwaOfYTzpC0vbG2StUdNZfvnA0zvSACsT4stGOj7-LzSsgCISo9xBYmcmakGnc8z4wBHXXUoddYp4Iw9F5w-wBXDhjWQjcSm8FaBkM6fhRj5DD2fj3brtB7Hk-DueqkeYXJ5vTE"
                  />
                  <button
                    type="button"
                    className="absolute top-4 right-4 flex size-10 items-center justify-center rounded-full bg-white/30 text-white backdrop-blur-md transition-all hover:bg-white hover:text-error"
                  >
                    <span className="material-symbols-outlined">favorite</span>
                  </button>
                  <div className="absolute bottom-4 left-4 rounded-full bg-primary px-3 py-1 text-[10px] font-bold tracking-widest text-white uppercase">
                    New Listing
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-3 flex items-start justify-between">
                    <h3 className="text-xl font-bold text-on-surface">
                      The Obsidian House
                    </h3>
                    <span className="text-xl font-black text-primary">
                      $4,250,000
                    </span>
                  </div>
                  <p className="mb-6 flex items-center gap-1 text-on-surface-variant">
                    <span className="material-symbols-outlined text-sm">
                      location_on
                    </span>
                    Beverly Hills, California
                  </p>
                  <div className="flex justify-between border-t border-surface-container pt-6">
                    <div className="flex items-center gap-4 text-sm font-semibold text-on-surface-variant">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-primary">
                          bed
                        </span>{" "}
                        5
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-primary">
                          bathtub
                        </span>{" "}
                        6
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-primary">
                          square_foot
                        </span>{" "}
                        5,400
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group overflow-hidden rounded-xl bg-surface-container-lowest shadow-sm transition-all duration-500 hover:shadow-2xl">
                <div className="relative aspect-4/3 overflow-hidden">
                  <img
                    alt="Salón luminoso con techos altos, suelos de roble y ventanales con bosque otoñal"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAr-mFFBualyABVfDHS-8lVVbUNoHkRb3m-u8DaI6LqlFCCNaQ5QAZCOoR7I4dRUI3NVIyNm-f3YVLtjqs5--xD3syTZb_lFxFW3InvczcW9WwlGCX48pcCUsxUH-XgbOR5-DGyxYNkuq0f1j3SjRqv-LFHk_3zionzJgYkmthMnuTvQ0o_y9iFHIkqPkYdCm876h4Ju9RuNiOTDgSGgrEP2_jTynQWnEpi4utN04QzXDDFtdrJw7wq0jO6tsGOUECcDiVjUMWBl8UK"
                  />
                  <button
                    type="button"
                    className="absolute top-4 right-4 flex size-10 items-center justify-center rounded-full bg-white/30 text-white backdrop-blur-md transition-all hover:bg-white hover:text-error"
                  >
                    <span className="material-symbols-outlined">favorite</span>
                  </button>
                </div>
                <div className="p-6">
                  <div className="mb-3 flex items-start justify-between">
                    <h3 className="text-xl font-bold text-on-surface">
                      The Light Atrium
                    </h3>
                    <span className="text-xl font-black text-primary">
                      $2,800,000
                    </span>
                  </div>
                  <p className="mb-6 flex items-center gap-1 text-on-surface-variant">
                    <span className="material-symbols-outlined text-sm">
                      location_on
                    </span>
                    Aspen, Colorado
                  </p>
                  <div className="flex justify-between border-t border-surface-container pt-6">
                    <div className="flex items-center gap-4 text-sm font-semibold text-on-surface-variant">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-primary">
                          bed
                        </span>{" "}
                        4
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-primary">
                          bathtub
                        </span>{" "}
                        4
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-primary">
                          square_foot
                        </span>{" "}
                        3,200
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group overflow-hidden rounded-xl bg-surface-container-lowest shadow-sm transition-all duration-500 hover:shadow-2xl">
                <div className="relative aspect-4/3 overflow-hidden">
                  <img
                    alt="Finca mediterránea amplia con muros blancos, tejas y jardines de cipreses"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnBXPEKHcLDQvFcb_4piaCjhl0lTBVbapw_YdMzpCak3laz3ySzvfB6xQUZPPxfqR3rSPUy7MRNHfnrGeCaceY62VRb3jK1lgwijt6FfkgE39V2phr6aknFyH8GN_66MRutdu4PWckigWEhE6rNqUFlmkZHMkXHyAOgnn9MqUOw3YWMJm6jyDo3rLywt9W8NxmpXMkyTkbyE_oNnBf7zyO2algf_HkRq-nDjHJvF0b7qo2b7UUGa2j3Sr3NK-dsHCZ0D4o0bRRtfe9"
                  />
                  <button
                    type="button"
                    className="absolute top-4 right-4 flex size-10 items-center justify-center rounded-full bg-white/30 text-white backdrop-blur-md transition-all hover:bg-white hover:text-error"
                  >
                    <span className="material-symbols-outlined">favorite</span>
                  </button>
                </div>
                <div className="p-6">
                  <div className="mb-3 flex items-start justify-between">
                    <h3 className="text-xl font-bold text-on-surface">
                      Marbella Estate
                    </h3>
                    <span className="text-xl font-black text-primary">
                      $6,100,000
                    </span>
                  </div>
                  <p className="mb-6 flex items-center gap-1 text-on-surface-variant">
                    <span className="material-symbols-outlined text-sm">
                      location_on
                    </span>
                    Costa del Sol, Spain
                  </p>
                  <div className="flex justify-between border-t border-surface-container pt-6">
                    <div className="flex items-center gap-4 text-sm font-semibold text-on-surface-variant">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-primary">
                          bed
                        </span>{" "}
                        7
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-primary">
                          bathtub
                        </span>{" "}
                        8
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-primary">
                          square_foot
                        </span>{" "}
                        8,900
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-surface py-32">
          <div className="relative z-10 mx-auto max-w-7xl px-8">
            <div className="relative flex flex-col items-center justify-between gap-12 overflow-hidden rounded-[3rem] bg-primary-container p-12 text-on-primary-container shadow-2xl md:flex-row md:p-20">
              <div className="pointer-events-none absolute top-0 right-0 h-full w-1/2 bg-linear-to-l from-white/10 to-transparent" />
              <div className="max-w-lg">
                <h2 className="mb-6 text-4xl leading-tight font-black md:text-5xl">
                  Ready to showcase your legacy property?
                </h2>
                <p className="mb-10 text-lg font-medium text-primary-fixed-dim opacity-90">
                  Join our exclusive network of sellers and reach a global
                  audience of high-net-worth curators.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <button
                    type="button"
                    className="rounded-full bg-secondary-container px-10 py-5 text-lg font-black text-on-secondary-container shadow-xl shadow-secondary-container/30 transition-transform hover:scale-105"
                  >
                    List your property
                  </button>
                  <button
                    type="button"
                    className="rounded-full border border-white/20 bg-white/10 px-10 py-5 font-bold text-white backdrop-blur-md transition-all hover:bg-white/20"
                  >
                    Talk to an Agent
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

      <footer className="w-full border-t-0 bg-slate-50 dark:bg-slate-950">
        <div className="mx-auto flex w-full max-w-screen-2xl flex-col items-center justify-between gap-8 px-8 py-16 md:flex-row">
          <div className="flex flex-col items-center gap-4 md:items-start">
            <span className="text-lg font-bold text-slate-900 dark:text-slate-100">
              Propify
            </span>
            <p className="text-center text-sm text-slate-500 md:text-left dark:text-slate-400">
              © 2024 Propify. Editorial Real Estate Excellence.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              className="text-sm text-slate-500 transition-colors hover:text-blue-500 dark:text-slate-400"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="text-sm text-slate-500 transition-colors hover:text-blue-500 dark:text-slate-400"
              href="#"
            >
              Terms of Service
            </a>
            <a
              className="text-sm text-slate-500 transition-colors hover:text-blue-500 dark:text-slate-400"
              href="#"
            >
              Cookie Settings
            </a>
            <a
              className="text-sm text-slate-500 transition-colors hover:text-blue-500 dark:text-slate-400"
              href="#"
            >
              Contact Support
            </a>
            <a
              className="text-sm text-slate-500 transition-colors hover:text-blue-500 dark:text-slate-400"
              href="#"
            >
              Careers
            </a>
            <a
              className="text-sm text-slate-500 transition-colors hover:text-blue-500 dark:text-slate-400"
              href="#"
            >
              Press Kit
            </a>
          </div>
          <div className="flex gap-4">
            <a
              className="flex size-10 items-center justify-center rounded-full bg-slate-200 text-slate-600 transition-all hover:bg-primary hover:text-white dark:bg-slate-800 dark:text-slate-400"
              href="#"
            >
              <span className="material-symbols-outlined text-sm">share</span>
            </a>
            <a
              className="flex size-10 items-center justify-center rounded-full bg-slate-200 text-slate-600 transition-all hover:bg-primary hover:text-white dark:bg-slate-800 dark:text-slate-400"
              href="#"
            >
              <span className="material-symbols-outlined text-sm">public</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
