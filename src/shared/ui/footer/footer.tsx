export const Footer = () => {
    return (
        <footer className="w-full border-t-0 bg-slate-50 dark:bg-slate-950">
            <div className="mx-auto flex w-full max-w-screen-2xl flex-col items-center justify-between gap-8 px-8 py-16 md:flex-row">
                <div className="flex flex-col items-center gap-4 md:items-start">
                    <span className="text-lg font-bold text-slate-900 dark:text-slate-100">
                        Propify
                    </span>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        © 2024 Propify. Editorial Real Estate Excellence.
                    </p>
                </div>
                <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
                    <a
                        className="text-slate-500 transition-colors duration-150 hover:text-blue-500 hover:opacity-80 dark:text-slate-400"
                        href="#"
                    >
                        Privacy Policy
                    </a>
                    <a
                        className="text-slate-500 transition-colors duration-150 hover:text-blue-500 hover:opacity-80 dark:text-slate-400"
                        href="#"
                    >
                        Terms of Service
                    </a>
                    <a
                        className="text-slate-500 transition-colors duration-150 hover:text-blue-500 hover:opacity-80 dark:text-slate-400"
                        href="#"
                    >
                        Cookie Settings
                    </a>
                    <a
                        className="text-slate-500 transition-colors duration-150 hover:text-blue-500 hover:opacity-80 dark:text-slate-400"
                        href="#"
                    >
                        Contact Support
                    </a>
                    <a
                        className="text-slate-500 transition-colors duration-150 hover:text-blue-500 hover:opacity-80 dark:text-slate-400"
                        href="#"
                    >
                        Careers
                    </a>
                    <a
                        className="text-slate-500 transition-colors duration-150 hover:text-blue-500 hover:opacity-80 dark:text-slate-400"
                        href="#"
                    >
                        Press Kit
                    </a>
                </div>
            </div>
        </footer>
    )
}
