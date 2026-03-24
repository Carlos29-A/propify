export const RegisterForm = () => {
    return (
        <>
            <form className="space-y-4">
                <div className="space-y-1.5">
                    <label
                        className="ml-1 text-[10px] font-bold tracking-wider text-on-surface-variant uppercase"
                        htmlFor="register-email"
                    >
                        Correo electrónico
                    </label>
                    <div className="group relative">
                        <span className="material-symbols-outlined absolute top-1/2 left-4 -translate-y-1/2 text-outline transition-colors group-focus-within:text-primary">
                            mail
                        </span>
                        <input
                            id="register-email"
                            autoComplete="email"
                            className="w-full rounded-xl border-none bg-surface-container-high py-3.5 pr-4 pl-12 text-on-surface transition-all placeholder:text-outline focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary focus:outline-none"
                            placeholder="name@example.com"
                            type="email"
                        />
                    </div>
                </div>

                <div className="space-y-1.5">
                    <label
                        className="ml-1 text-xs font-bold tracking-wider text-on-surface-variant uppercase"
                        htmlFor="register-password"
                    >
                        Password
                    </label>
                    <div className="group relative">
                        <span className="material-symbols-outlined absolute top-1/2 left-4 -translate-y-1/2 text-outline transition-colors group-focus-within:text-primary">
                            lock
                        </span>
                        <input
                            id="register-password"
                            autoComplete="new-password"
                            className="w-full rounded-xl border-none bg-surface-container-high py-3.5 pr-12 pl-12 text-on-surface transition-all placeholder:text-outline focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary focus:outline-none"
                            placeholder="••••••••"
                            type="password"
                        />
                        <button
                            type="button"
                            className="absolute top-1/2 right-4 -translate-y-1/2 text-outline hover:text-on-surface"
                            aria-label="Mostrar contraseña"
                        >
                            <span className="material-symbols-outlined text-lg">
                                visibility
                            </span>
                        </button>
                    </div>
                </div>

                <div className="space-y-1.5">
                    <label
                        className="ml-1 text-xs font-bold tracking-wider text-on-surface-variant uppercase"
                        htmlFor="register-confirm"
                    >
                        Confirm Password
                    </label>
                    <div className="group relative">
                        <span className="material-symbols-outlined absolute top-1/2 left-4 -translate-y-1/2 text-outline transition-colors group-focus-within:text-primary">
                            lock
                        </span>
                        <input
                            id="register-confirm"
                            autoComplete="new-password"
                            className="w-full rounded-xl border-none bg-surface-container-high py-3.5 pr-4 pl-12 text-on-surface transition-all placeholder:text-outline focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary focus:outline-none"
                            placeholder="••••••••"
                            type="password"
                        />
                    </div>
                </div>

                <div className="flex items-center gap-3 py-2">
                    <input
                        className="size-5 rounded border-surface-variant bg-surface-container-high text-primary focus:ring-primary"
                        id="terms"
                        type="checkbox"
                    />
                    <label
                        className="cursor-pointer text-sm font-medium text-on-surface-variant text-[11px]"
                        htmlFor="terms"
                    >
                        Acepto los Términos y Condiciones y la Política de Privacidad
                    </label>
                </div>

                <button
                    className="flex w-full items-center justify-center gap-2 cursor-pointer bg-linear-to-br from-primary to-primary-container py-4 font-bold text-on-primary shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30 active:scale-[0.98]"
                    type="submit"
                >
                    <span>Crear cuenta</span>
                    <span className="material-symbols-outlined text-lg">
                        arrow_forward
                    </span>
                </button>
            </form>
        </>
    )
}
