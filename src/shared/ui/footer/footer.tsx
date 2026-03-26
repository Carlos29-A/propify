export const Footer = () => {
    return (
        <footer className="w-full border-t-0 bg-slate-50 dark:bg-slate-950">
            <div className="mx-auto flex w-full max-w-screen-2xl flex-col items-center justify-between gap-8 px-8 py-16 md:flex-row">
                <div className="flex flex-col items-center gap-4 md:items-start">
                    <span className="text-lg font-bold text-slate-900 dark:text-slate-100">
                        Propify
                    </span>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        © {new Date().getFullYear()} Propify. Editorial Real Estate Excellence.
                    </p>
                </div>
                <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
                    <a
                        className="text-slate-500 transition-colors duration-150 hover:text-blue-500 hover:opacity-80 dark:text-slate-400"
                        href="#"
                    >
                        Política de privacidad
                    </a>
                    <a
                        className="text-slate-500 transition-colors duration-150 hover:text-blue-500 hover:opacity-80 dark:text-slate-400"
                        href="#"
                    >
                        Términos de servicio
                    </a>
                    <a
                        className="text-slate-500 transition-colors duration-150 hover:text-blue-500 hover:opacity-80 dark:text-slate-400"
                        href="#"
                    >
                        Configuración de cookies
                    </a>
                    <a
                        className="text-slate-500 transition-colors duration-150 hover:text-blue-500 hover:opacity-80 dark:text-slate-400"
                        href="#"
                    >
                        Contactar soporte
                    </a>
                    <a
                        className="text-slate-500 transition-colors duration-150 hover:text-blue-500 hover:opacity-80 dark:text-slate-400"
                        href="#"
                    >
                        Carreras
                    </a>
                    <a
                        className="text-slate-500 transition-colors duration-150 hover:text-blue-500 hover:opacity-80 dark:text-slate-400"
                        href="#"
                    >
                        Kit de prensa
                    </a>
                </div>
            </div>
        </footer>
    )
}
